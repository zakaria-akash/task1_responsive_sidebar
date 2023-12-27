// pages/api/sendEmail.js

import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).end(); // Method Not Allowed
  }

  const { name, email, phoneNumber, company, subject, message } = req.body;

  // Create a nodemailer transporter
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'zakaria.tani25@gmail.com',
      pass: 'hmcv qhil lbfz bxil',
    },
  });

  // Email content
  const mailOptions = {
    from: 'zakaria.ibrahim.cse@ulab.edu.bd',
    to: 'zakariabion25@gmail.com',
    subject: `New Contact Form Submission - ${subject}`,
    text: `
      Name: ${name}
      Email: ${email}
      Phone Number: ${phoneNumber}
      Company: ${company}
      Message: ${message}
    `,
  };

  try {
    // Send email
    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
}
