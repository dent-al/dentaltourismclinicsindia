const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Configure your email transport
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'your-email@gmail.com',
    pass: 'your-app-password'
  }
});

// Endpoint to send email
app.post('/send-notification', async (req, res) => {
  const { to, subject, text } = req.body;
  try {
    await transporter.sendMail({
      from: 'info@dentaltourismclinicsindia.com',
      to,
      subject,
      text
    });
    res.status(200).send('Email sent');
  } catch (error) {
    res.status(500).send('Error sending email');
  }
});

app.listen(5000, () => console.log('Server running on port 5000'));