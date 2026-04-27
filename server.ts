import express from 'express';
import { createServer as createViteServer } from 'vite';
import path from 'path';
import { fileURLToPath } from 'url';
import axios from 'axios';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import { createServer } from 'http';
import { Server } from 'socket.io';
import cors from 'cors';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;
  const httpServer = createServer(app);
  const io = new Server(httpServer, {
    cors: {
      origin: "*",
      methods: ["GET", "POST"]
    }
  });

  app.use(cors());
  app.use(express.json());

  // Live Visitor Counter Logic
  const activeUsers = new Map<string, { lastActive: number, socketId: string }>();

  io.on('connection', (socket) => {
    const userAgent = socket.handshake.headers['user-agent'] || '';
    
    // Simple bot detection
    const isBot = /bot|crawler|spider|crawling|googlebot|bingbot|yandexbot|duckduckbot/i.test(userAgent);
    
    if (isBot) {
      socket.disconnect();
      return;
    }

    socket.on('register', (sessionId: string) => {
      if (!sessionId) return;
      
      activeUsers.set(sessionId, {
        lastActive: Date.now(),
        socketId: socket.id
      });
      
      io.emit('visitorCount', activeUsers.size);
    });

    socket.on('heartbeat', (sessionId: string) => {
      if (activeUsers.has(sessionId)) {
        activeUsers.set(sessionId, {
          lastActive: Date.now(),
          socketId: socket.id
        });
      }
    });

    socket.on('disconnect', () => {
      for (const [sessionId, data] of activeUsers.entries()) {
        if (data.socketId === socket.id) {
          activeUsers.delete(sessionId);
          io.emit('visitorCount', activeUsers.size);
          break;
        }
      }
    });
  });

  // Cleanup inactive users every 10 seconds
  setInterval(() => {
    const now = Date.now();
    let changed = false;
    for (const [sessionId, data] of activeUsers.entries()) {
      if (now - data.lastActive > 30000) { // 30 seconds timeout
        activeUsers.delete(sessionId);
        changed = true;
      }
    }
    if (changed) {
      io.emit('visitorCount', activeUsers.size);
    }
  }, 10000);

  // Zoho CRM Integration Logic
  const ZOHO_CLIENT_ID = process.env.ZOHO_CLIENT_ID || '1000.7KHA0M8KQI3BWRALU6YVDTFCC13W9N';
  const ZOHO_CLIENT_SECRET = process.env.ZOHO_CLIENT_SECRET || 'cb1d90b7c025bb3dda68bc14bd6bc2b81433292354';
  const ZOHO_REFRESH_TOKEN = process.env.ZOHO_REFRESH_TOKEN || '1000.a5c1b08e949c766cfa621a32cf5e83c7.a104b8264680ccb90d20bde0e4714132';
  const ZOHO_DATACENTER = process.env.ZOHO_DATACENTER || 'in';

  let zohoAccessToken = '';
  let zohoTokenExpiry = 0;

  async function getZohoAccessToken() {
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

  // Rate Limiting & Cache-Control Middleware
  const rateLimitMap = new Map<string, { count: number, resetTime: number }>();
  const RATE_LIMIT_WINDOW_MS = 60000; // 1 minute
  const MAX_REQUESTS_PER_WINDOW = 10;

  app.use('/api', (req, res, next) => {
    const ip = req.ip || req.headers['x-forwarded-for'] || 'unknown';
    const now = Date.now();
    
    if (typeof ip === 'string' && ip !== 'unknown') {
      const record = rateLimitMap.get(ip) || { count: 0, resetTime: now + RATE_LIMIT_WINDOW_MS };
      if (now > record.resetTime) {
        record.count = 1;
        record.resetTime = now + RATE_LIMIT_WINDOW_MS;
      } else {
        record.count++;
      }
      rateLimitMap.set(ip, record);
      
      if (record.count > MAX_REQUESTS_PER_WINDOW) {
        return res.status(429).json({ success: false, message: 'Too many requests, please try again later.' });
      }
    }

    if (req.method === 'GET') {
      res.setHeader('Cache-Control', 's-maxage=60, stale-while-revalidate=300');
    } else {
      res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
      res.setHeader('Pragma', 'no-cache');
      res.setHeader('Expires', '0');
    }
    
    next();
  });

  setInterval(() => {
    const now = Date.now();
    rateLimitMap.forEach((value, key) => {
      if (now > value.resetTime) {
        rateLimitMap.delete(key);
      }
    });
  }, 60000);

  // Background operations dispatcher for CRM Quiz
  const processCrmQuizBackground = async (data: any) => {
    const { name, email, mobile, company, quizScore, quizAnswers, leadVolume, crmName, scoreNum, category, priority } = data;
    const promises: Promise<any>[] = [];

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
              headers: { Authorization: `Zoho-oauthtoken ${token}`, 'Content-Type': 'application/json' }
            }).catch(err => console.error('Error creating Zoho lead:', err?.message || err));
          }
        })
        .catch(err => console.error('Error with Zoho auth:', err?.message || err))
    );

    const gallaboxClient = process.env.GALLABOX_CLIENT_WEBHOOK;
    const gallaboxOwner = process.env.GALLABOX_OWNER_WEBHOOK;
    const payload = {
      name, email, mobile, company,
      form_type: 'CRM Quiz', source: 'CRM Quiz Form',
      quiz_score: scoreNum, quiz_category: category, lead_volume: leadVolume, current_crm: crmName,
      submitted_at: new Date().toISOString()
    };

    if (gallaboxClient) promises.push(axios.post(gallaboxClient, payload).catch(e => console.error('Gallabox Client Error:', e.message)));
    if (gallaboxOwner) promises.push(axios.post(gallaboxOwner, payload).catch(e => console.error('Gallabox Owner Error:', e.message)));

    await Promise.allSettled(promises);
  };

  const processLeadBackground = async (data: any) => {
    const { name, email, phone, budget, form_type, companyName, lead_volume, current_crm, target_sector } = data;
    const leadSource = 'Website Form';
    const promises: Promise<any>[] = [];

    const teamEmails = process.env.TEAM_EMAILS || 'growth@digitalroi.io';
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: false,
      auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
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

    promises.push(
      getZohoAccessToken()
        .then(async (token) => {
          if (token) {
            const zohoPromises = [];
            zohoPromises.push(
              axios.post(`https://www.zohoapis.${ZOHO_DATACENTER}/crm/v2/Leads/upsert`, {
                data: [{
                  Last_Name: name, Email: email, Mobile: phone, Company: companyName,
                  Lead_Source: leadSource, Lead_Status: 'Not Contacted', Monthly_Ads_Budget_N: budget,
                  Target_Sector: target_sector, Lead_Volume: lead_volume, Current_CRM: current_crm
                }],
                duplicate_check_fields: ['Email'],
                trigger: ['workflow', 'approval', 'blueprint']
              }, { headers: { Authorization: `Zoho-oauthtoken ${token}` } })
              .catch(err => console.error('Zoho CRM Upsert Error:', err?.message || err))
            );

            const sheetId = process.env.ZOHO_SHEET_ID;
            const sheetName = process.env.ZOHO_SHEET_NAME || 'Sheet1';
            if (sheetId) {
              zohoPromises.push(
                axios.post(`https://sheet.zoho.com/api/v2/${sheetId}/${sheetName}/rows`, {
                  rows: [{ Name: name, Email: email, Mobile: phone, Company: companyName, Budget: budget, Form_Type: form_type, Date: new Date().toISOString() }]
                }, { headers: { Authorization: `Zoho-oauthtoken ${token}` } })
                .catch(err => console.error('Zoho Sheet Insert Error:', err?.message || err))
              );
            }
            await Promise.allSettled(zohoPromises);
          }
        })
        .catch(err => console.error('Error fetching token for Zoho:', err?.message || err))
    );

    const gallaboxClient = process.env.GALLABOX_CLIENT_WEBHOOK;
    const gallaboxOwner = process.env.GALLABOX_OWNER_WEBHOOK;
    const payload = {
      name, email, mobile: phone, budget, company: companyName,
      form_type, source: 'Growth Consultation Form', submitted_at: new Date().toISOString()
    };
    if (gallaboxClient) promises.push(axios.post(gallaboxClient, payload).catch(e => console.error('Gallabox Client Error:', e.message)));
    if (gallaboxOwner) promises.push(axios.post(gallaboxOwner, payload).catch(e => console.error('Gallabox Owner Error:', e.message)));

    await Promise.allSettled(promises);
  };

  // API Routes
  app.post('/api/crm-quiz/submit', async (req, res) => {
    const { name, email, mobile, company, quizScore, quizAnswers, leadVolume, crmName } = req.body;

    if (!name || !email || !company) {
      return res.status(400).json({ success: false, message: 'Missing required fields' });
    }

    const scoreNum = parseInt(quizScore);
    let category = '';
    let priority = '';
    if (scoreNum >= 0 && scoreNum <= 6) { category = 'CRITICAL LEAKAGE'; priority = 'HIGH PRIORITY'; }
    else if (scoreNum >= 7 && scoreNum <= 12) { category = 'HIGH LEAKAGE'; priority = 'HIGH PRIORITY'; }
    else if (scoreNum >= 13 && scoreNum <= 16) { category = 'MODERATE LEAKAGE'; priority = 'MEDIUM PRIORITY'; }
    else { category = 'HEALTHY SYSTEM'; priority = 'MEDIUM PRIORITY'; }

    try {
      await processCrmQuizBackground({ name, email, mobile, company, quizScore, quizAnswers, leadVolume, crmName, scoreNum, category, priority });
    } catch (err) {
      console.error('Background processing error:', err);
    }

    res.json({ success: true, message: 'Submitted successfully' });
  });

  app.post('/api/leads/submit', async (req, res) => {
    const { name, email, phone, budget, form_type, brand, company, institute, facility, lead_volume, current_crm, target_sector } = req.body;

    if (!name || !email || !phone) {
      return res.status(400).json({ success: false, message: 'Missing required fields' });
    }

    const companyName = company || brand || institute || facility || 'Individual';
    try {
      await processLeadBackground({ name, email, phone, budget, form_type, companyName, lead_volume, current_crm, target_sector });
    } catch (err) {
      console.error('Background processing error:', err);
    }

    res.json({ success: true, message: 'Lead submitted successfully' });
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  httpServer.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
