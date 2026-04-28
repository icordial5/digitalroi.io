import express from 'express';
import cors from 'cors';
import axios from 'axios';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';

dotenv.config();

const app = express();

// Security Middleware
app.use(helmet({
  contentSecurityPolicy: false, // Disabled for local Vite dev server inline scripts
  crossOriginEmbedderPolicy: false, // Allow cross-origin images
}));

app.use(cors({
  origin: process.env.CORS_ORIGIN ? process.env.CORS_ORIGIN.split(',') : "*",
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'x-api-key']
}));
app.use(express.json());

// API Rate Limiting
const apiLimiter = rateLimit({
  windowMs: 60 * 1000, // 1 minute
  max: 20, // Limit each IP to 20 requests per windowMs
  message: { success: false, message: 'Too many requests, please try again later.' },
  standardHeaders: true,
  legacyHeaders: false,
});

app.use('/api', apiLimiter, (req, res, next) => {
  // Check API Key
  const apiKey = req.headers['x-api-key'];
  const validApiKey = process.env.API_KEY;

  if (validApiKey && apiKey !== validApiKey) {
    return res.status(401).json({ success: false, message: 'Unauthorized API Key' });
  }

  // Proper Cache-Control headers for Vercel to optimize edge responses
  if (req.method === 'GET') {
    res.setHeader('Cache-Control', 's-maxage=60, stale-while-revalidate=300');
  } else {
    // For POST/PUT, prevent caching
    res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
    res.setHeader('Pragma', 'no-cache');
    res.setHeader('Expires', '0');
  }
  
  next();
});

// Zoho CRM Integration Logic
const ZOHO_CLIENT_ID = process.env.ZOHO_CLIENT_ID;
const ZOHO_CLIENT_SECRET = process.env.ZOHO_CLIENT_SECRET;
const ZOHO_REFRESH_TOKEN = process.env.ZOHO_REFRESH_TOKEN;
const ZOHO_DATACENTER = process.env.ZOHO_DATACENTER || 'in';

let zohoAccessToken = '';
let zohoTokenExpiry = 0;

async function getZohoAccessToken() {
  if (!ZOHO_CLIENT_ID || !ZOHO_CLIENT_SECRET || !ZOHO_REFRESH_TOKEN) {
    console.error('Zoho CRM credentials missing in environment variables');
    return null;
  }
  if (zohoAccessToken && Date.now() < zohoTokenExpiry) {
    return zohoAccessToken;
  }
  try {
    const response = await axios.post(`https://accounts.zoho.${ZOHO_DATACENTER}/oauth/v2/token`, null, {
      params: {
        refresh_token: ZOHO_REFRESH_TOKEN,
        client_id: ZOHO_CLIENT_ID,
        client_secret: ZOHO_CLIENT_SECRET,
        grant_type: 'refresh_token'
      }
    });
    if (response.data && response.data.access_token) {
      zohoAccessToken = response.data.access_token;
      const expiresIn = response.data.expires_in ? response.data.expires_in * 1000 : 3500000;
      zohoTokenExpiry = Date.now() + expiresIn - 60000; // Buffer of 1 minute
      return zohoAccessToken;
    } else {
      console.error('Failed to get access token, response:', response.data);
      return null;
    }
  } catch (error: any) {
    console.error('Error fetching Zoho access token:', error.response?.data || error.message);
    return null;
  }
}

// Background operations dispatcher for CRM Quiz
const verifyRecaptcha = async (token: string) => {
  if (!token) return false;
  try {
    const secretKey = process.env.RECAPTCHA_SECRET_KEY || '6LenaM4sAAAAAJ1y0sKsUtDG9ahZekDOnbuvGWQ5';
    const response = await axios.post(
      `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${token}`
    );
    return response.data.success && response.data.score >= 0.5;
  } catch (error) {
    console.error('reCAPTCHA verification error:', error);
    return false;
  }
};

const processCrmQuizBackground = async (data: any) => {
  const { name, email, mobile, company, quizScore, quizAnswers, leadVolume, crmName, scoreNum, category, priority } = data;
  const promises: Promise<any>[] = [];

  // 1. Send Email Notification
  const teamEmails = process.env.TEAM_EMAILS || 'growth@digitalroi.io, anosh.jadhav@digitalroi.io, anish.motwani@digitalroi.io, vikas.kumar@digitalroi.io';
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || 'smtp.gmail.com',
    port: parseInt(process.env.SMTP_PORT || '587'),
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  const mailOptions = {
    from: '"CRM Quiz" <noreply@digitalroi.io>',
    to: teamEmails,
    subject: `New CRM Quiz Lead - ${company} (Score: ${quizScore})`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #eee; padding: 20px;">
        <h2 style="color: #000; border-bottom: 2px solid #000; padding-bottom: 10px;">NEW CRM QUIZ LEAD</h2>
        <p><strong>Priority:</strong> ${priority}</p>
        <div style="background: #f9f9f9; padding: 20px; text-align: center; margin: 20px 0;">
          <div style="font-size: 48px; font-weight: bold;">${scoreNum}/20</div>
          <div style="background: #000; color: #fff; display: inline-block; padding: 5px 15px; margin-top: 10px;">${category}</div>
        </div>
        <h3>LEAD DETAILS</h3>
        <table style="width: 100%; border-collapse: collapse;">
          <tr><td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>Name:</strong></td><td style="padding: 8px; border-bottom: 1px solid #eee;">${name}</td></tr>
          <tr><td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>Company:</strong></td><td style="padding: 8px; border-bottom: 1px solid #eee;">${company}</td></tr>
          <tr><td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>Email:</strong></td><td style="padding: 8px; border-bottom: 1px solid #eee;">${email}</td></tr>
          <tr><td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>Phone:</strong></td><td style="padding: 8px; border-bottom: 1px solid #eee;">${mobile}</td></tr>
        </table>
        <h3>QUIZ DETAILS</h3>
        <table style="width: 100%; border-collapse: collapse;">
          <tr><td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>Lead Volume:</strong></td><td style="padding: 8px; border-bottom: 1px solid #eee;">${leadVolume}</td></tr>
          <tr><td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>Current CRM:</strong></td><td style="padding: 8px; border-bottom: 1px solid #eee;">${crmName}</td></tr>
        </table>
      </div>
    `
  };

  if (process.env.SMTP_USER && process.env.SMTP_PASS) {
    promises.push(transporter.sendMail(mailOptions).catch((err) => console.error('Error sending email:', err)));
  }

  // 2. Create Zoho Lead
  promises.push(
    getZohoAccessToken()
      .then(async (token) => {
        if (token) {
          await axios.post(`https://www.zohoapis.${ZOHO_DATACENTER}/crm/v2/Leads/upsert`, {
            data: [{
              Last_Name: name,
              Email: email,
              Phone: mobile,
              Company: company,
              Description: `CRM Quiz Lead - Score: ${scoreNum}/20`,
              Lead_Source: 'Website Form',
              Lead_Status: 'Not Contacted',
              Quiz_Score: scoreNum,
              Quiz_Answers: JSON.stringify(quizAnswers),
              Lead_Volume: leadVolume,
              CRM_Name: crmName,
              Quiz_Category: category
            }],
            duplicate_check_fields: ['Email'],
            trigger: ['workflow', 'approval', 'blueprint']
          }, {
            headers: {
              Authorization: `Zoho-oauthtoken ${token}`,
              'Content-Type': 'application/json'
            }
          }).catch((error) => console.error('Error creating Zoho lead:', error?.message || error));
        }
      })
      .catch((error) => console.error('Error with Zoho auth:', error?.message || error))
  );

  // 3. Gallabox Webhook Integration
  const gallaboxClient = process.env.GALLABOX_CLIENT_WEBHOOK;
  const gallaboxOwner = process.env.GALLABOX_OWNER_WEBHOOK;
  const payload = {
    name, email, mobile, company,
    form_type: 'CRM Quiz', source: 'CRM Quiz Form',
    quiz_score: scoreNum,
    quiz_category: category,
    lead_volume: leadVolume,
    current_crm: crmName,
    submitted_at: new Date().toISOString()
  };

  if (gallaboxClient) promises.push(axios.post(gallaboxClient, payload).catch(e => console.error('Gallabox Client Error:', e.message)));
  if (gallaboxOwner) promises.push(axios.post(gallaboxOwner, payload).catch(e => console.error('Gallabox Owner Error:', e.message)));

  // Wait for all background operations to complete concurrently
  await Promise.allSettled(promises);
};

// Background operations dispatcher for Leads
const processLeadBackground = async (data: any) => {
  const { name, email, phone, budget, form_type, companyName, lead_volume, current_crm, target_sector } = data;
  const leadSource = 'Website Form';
  const promises: Promise<any>[] = [];

  // 1. Send Email Notification
  const teamEmails = process.env.TEAM_EMAILS || 'growth@digitalroi.io';
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || 'smtp.gmail.com',
    port: parseInt(process.env.SMTP_PORT || '587'),
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  const mailOptions = {
    from: '"Digital ROI Leads" <noreply@digitalroi.io>',
    to: teamEmails,
    subject: `New Lead: ${companyName} (${form_type})`,
    text: `
      New lead submitted:
      Name: ${name}
      Email: ${email}
      Phone: ${phone}
      Company/Brand: ${companyName}
      Budget: ${budget || 'N/A'}
      Form Type: ${form_type}
      ${lead_volume ? `Lead Volume: ${lead_volume}` : ''}
      ${current_crm ? `Current CRM: ${current_crm}` : ''}
      ${target_sector ? `Target Sector: ${target_sector}` : ''}
    `
  };

  if (process.env.SMTP_USER && process.env.SMTP_PASS) {
    promises.push(transporter.sendMail(mailOptions).catch(err => console.error('Email error:', err)));
  }

  // 2. Zoho CRM & Sheet Integration
  promises.push(
    getZohoAccessToken()
      .then(async (token) => {
        if (token) {
          const zohoPromises = [];
          // Upsert to CRM
          zohoPromises.push(
            axios.post(`https://www.zohoapis.${ZOHO_DATACENTER}/crm/v2/Leads/upsert`, {
              data: [{
                Last_Name: name,
                Email: email,
                Mobile: phone,
                Company: companyName,
                Lead_Source: leadSource,
                Lead_Status: 'Not Contacted',
                Monthly_Ads_Budget_N: budget,
                Target_Sector: target_sector,
                Lead_Volume: lead_volume,
                Current_CRM: current_crm
              }],
              duplicate_check_fields: ['Email'],
              trigger: ['workflow', 'approval', 'blueprint']
            }, {
              headers: { Authorization: `Zoho-oauthtoken ${token}` }
            }).catch((err) => console.error('Zoho CRM Upsert Error:', err?.message || err))
          );

          // Insert into Sheet
          const sheetId = process.env.ZOHO_SHEET_ID;
          const sheetName = process.env.ZOHO_SHEET_NAME || 'Sheet1';
          if (sheetId) {
            zohoPromises.push(
              axios.post(`https://sheet.zoho.com/api/v2/${sheetId}/${sheetName}/rows`, {
                rows: [{
                  Name: name,
                  Email: email,
                  Mobile: phone,
                  Company: companyName,
                  Budget: budget,
                  Form_Type: form_type,
                  Date: new Date().toISOString()
                }]
              }, {
                headers: { Authorization: `Zoho-oauthtoken ${token}` }
              }).catch((err) => console.error('Zoho Sheet Insert Error:', err?.message || err))
            );
          }
          await Promise.allSettled(zohoPromises);
        }
      })
      .catch((error) => console.error('Error fetching token for Zoho Background:', error?.message || error))
  );

  // 3. Gallabox Webhook Integration
  const gallaboxClient = process.env.GALLABOX_CLIENT_WEBHOOK;
  const gallaboxOwner = process.env.GALLABOX_OWNER_WEBHOOK;
  const payload = {
    name, email, mobile: phone, budget, company: companyName,
    form_type, source: 'Growth Consultation Form',
    submitted_at: new Date().toISOString()
  };

  if (gallaboxClient) promises.push(axios.post(gallaboxClient, payload).catch(e => console.error('Gallabox Client Error:', e.message)));
  if (gallaboxOwner) promises.push(axios.post(gallaboxOwner, payload).catch(e => console.error('Gallabox Owner Error:', e.message)));

  await Promise.allSettled(promises);
};

// API Routes
app.post('/api/crm-quiz/submit', async (req, res) => {
  const { name, email, mobile, company, quizScore, quizAnswers, leadVolume, crmName, recaptchaToken } = req.body;

  if (!name || !email || !company) {
    return res.status(400).json({ success: false, message: 'Missing required fields' });
  }

  const isHuman = await verifyRecaptcha(recaptchaToken);
  if (!isHuman) {
    return res.status(403).json({ success: false, message: 'Bot verification failed.' });
  }

  // Determine Category (synchronous)
  const scoreNum = parseInt(quizScore);
  let category = '';
  let priority = '';
  if (scoreNum >= 0 && scoreNum <= 6) {
    category = 'CRITICAL LEAKAGE';
    priority = 'HIGH PRIORITY';
  } else if (scoreNum >= 7 && scoreNum <= 12) {
    category = 'HIGH LEAKAGE';
    priority = 'HIGH PRIORITY';
  } else if (scoreNum >= 13 && scoreNum <= 16) {
    category = 'MODERATE LEAKAGE';
    priority = 'MEDIUM PRIORITY';
  } else {
    category = 'HEALTHY SYSTEM';
    priority = 'MEDIUM PRIORITY';
  }

  try {
    // Process heavy tasks concurrently, MUST await them so Vercel doesn't kill the function early
    await processCrmQuizBackground({
      name, email, mobile, company, quizScore, quizAnswers, leadVolume, crmName, scoreNum, category, priority
    });
  } catch (error) {
    console.error('Background processing error:', error);
  }

  // Respond directly after concurrently processing background promises
  res.json({
    success: true,
    message: 'Submitted successfully',
  });
});

app.post('/api/leads/submit', async (req, res) => {
  const { name, email, phone, budget, form_type, brand, company, institute, facility, lead_volume, current_crm, target_sector, recaptchaToken } = req.body;

  if (!name || !email || !phone) {
    return res.status(400).json({ success: false, message: 'Missing required fields' });
  }

  const isHuman = await verifyRecaptcha(recaptchaToken);
  if (!isHuman) {
    return res.status(403).json({ success: false, message: 'Bot verification failed.' });
  }

  const companyName = company || brand || institute || facility || 'Individual';

  try {
    // Process heavy tasks concurrently, MUST await them so Vercel doesn't kill the function early
    await processLeadBackground({
      name, email, phone, budget, form_type, companyName, lead_volume, current_crm, target_sector
    });
  } catch (error) {
    console.error('Background processing error:', error);
  }

  // Respond directly after concurrently processing background promises
  res.json({ success: true, message: 'Lead submitted successfully' });
});

export default app;

