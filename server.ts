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

  // API Routes
  app.post('/api/crm-quiz/submit', async (req, res) => {
    const { name, email, mobile, company, quizScore, quizAnswers, leadVolume, crmName } = req.body;

    if (!name || !email || !company) {
      return res.status(400).json({ success: false, message: 'Missing required fields' });
    }

    // 1. Determine Category
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

    // 2. Send Email
    const teamEmails = process.env.TEAM_EMAILS || 'jogdand.ravi@gmail.com, growth@digitalroi.io, anosh.jadhav@digitalroi.io, anish.motwani@digitalroi.io, vikas.kumar@digitalroi.io';
    
    // For demo purposes, we'll use a mock transporter if no SMTP config is provided
    // In a real app, you'd use process.env.SMTP_HOST, etc.
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

    let emailSent = false;
    if (process.env.SMTP_USER && process.env.SMTP_PASS) {
      try {
        await transporter.sendMail(mailOptions);
        emailSent = true;
      } catch (error) {
        console.error('Error sending email:', error);
      }
    } else {
      console.log('Skipping email send - SMTP credentials not configured');
      console.log('Mail Options:', mailOptions);
    }

    // 3. Create Zoho Lead
    let zohoResult = { success: false, message: 'Not attempted' };
    const token = await getZohoAccessToken();
    if (token) {
      try {
        const zohoResponse = await axios.post(`https://www.zohoapis.${ZOHO_DATACENTER}/crm/v2/Leads/upsert`, {
          data: [{
            Last_Name: name,
            Email: email,
            Mobile: mobile,
            Company: company,
            Description: `CRM Quiz Lead - Score: ${scoreNum}/20\nCategory: ${category}\nAnswers: ${JSON.stringify(quizAnswers)}`,
            Lead_Source: 'Website - CRM Quiz',
            Lead_Status: 'Not Contacted',
            Lead_Volume: leadVolume,
            Current_CRM: crmName
          }],
          duplicate_check_fields: ['Email'],
          trigger: ['workflow', 'approval', 'blueprint']
        }, {
          headers: {
            Authorization: `Zoho-oauthtoken ${token}`,
            'Content-Type': 'application/json'
          }
        });

        if (zohoResponse.data.data && zohoResponse.data.data[0].code === 'SUCCESS') {
          zohoResult = { success: true, message: 'Lead created in Zoho CRM' };
        } else {
          zohoResult = { success: false, message: zohoResponse.data.data[0].message };
        }
      } catch (error: any) {
        console.error('Error creating Zoho lead:', error.response?.data || error.message);
        zohoResult = { success: false, message: error.message };
      }
    }

    res.json({
      success: true,
      emailSent,
      zohoResult
    });
  });

  app.post('/api/leads/submit', async (req, res) => {
    const { name, email, phone, budget, form_type, brand, company, institute, facility, lead_volume, current_crm, target_sector } = req.body;

    if (!name || !email || !phone) {
      return res.status(400).json({ success: false, message: 'Missing required fields' });
    }

    const leadSource = `Website - ${form_type || 'General'}`;
    const companyName = company || brand || institute || facility || 'Individual';

    // 1. Send Email Notification
    const teamEmails = process.env.TEAM_EMAILS || 'jogdand.ravi@gmail.com, growth@digitalroi.io';
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
      transporter.sendMail(mailOptions).catch(err => console.error('Email error:', err));
    }

    // 2. Zoho CRM Integration
    const token = await getZohoAccessToken();
    if (token) {
      try {
        await axios.post(`https://www.zohoapis.${ZOHO_DATACENTER}/crm/v2/Leads/upsert`, {
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
        });

        // 3. Zoho Sheet Integration
        const sheetId = process.env.ZOHO_SHEET_ID;
        const sheetName = process.env.ZOHO_SHEET_NAME || 'Sheet1';
        if (sheetId) {
          await axios.post(`https://sheet.zoho.com/api/v2/${sheetId}/${sheetName}/rows`, {
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
          });
        }
      } catch (error: any) {
        console.error('Zoho Error:', error.response?.data || error.message);
      }
    }

    // 4. Gallabox Webhook Integration
    const gallaboxClient = process.env.GALLABOX_CLIENT_WEBHOOK;
    const gallaboxOwner = process.env.GALLABOX_OWNER_WEBHOOK;
    const payload = {
      name, email, mobile: phone, budget, company: companyName,
      form_type, source: 'Growth Consultation Form',
      submitted_at: new Date().toISOString()
    };

    if (gallaboxClient) axios.post(gallaboxClient, payload).catch(e => console.error('Gallabox Client Error:', e.message));
    if (gallaboxOwner) axios.post(gallaboxOwner, payload).catch(e => console.error('Gallabox Owner Error:', e.message));

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
