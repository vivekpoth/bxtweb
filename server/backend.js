const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');


const app = express();
app.use(cors());
// Middleware to parse JSON data
app.use(bodyParser.json());
const RECAPTCHA_SECRET_KEY = /*reCAPTCHA key here*/;
// Define an API endpoint for form submission
app.post('/submit-form', async (req, res) => {
  console.log("1.7");
  const { name, company, email, caseStudy, captchaValue } = req.body;

  try {
    const captchaResponse = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `secret=${RECAPTCHA_SECRET_KEY}&response=${captchaValue}`,
    });

    const captchaData = await captchaResponse.json();

    if (!captchaData.success) {
      return res.status(400).json({ error: 'Failed ReCAPTCHA verification' });
    }
  } catch (error) {
    console.error('ReCAPTCHA verification error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }

  // Validate form data (add more validation as needed)
  if (!name || !company || !email || !caseStudy) {
    return res.status(400).json({ error: 'Incomplete form data' });
  }

  // Send the email using Nodemailer
  const transporter = nodemailer.createTransport({
    service: 'gmail', // e.g., Gmail
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
      user: /*Sending Email*/,
      pass: '/*Password*/',
    },
  });

  const mailOptions = {
    from: /*Sending Email*/,
    to: /*info@ Email*/,
    subject: 'BXT Website Form Submission',
    text: `
      Name: ${name}
      Company: ${company}
      Email: ${email}
      Case Study: ${caseStudy}
    `,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Email sending error:', error);
      return res.status(500).json({ error: 'Internal server error' });
    }
    console.log('Email sent:', info.response);

    // Send a success response to the frontend
    res.json({ message: 'Form submitted successfully' });
  });

});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
