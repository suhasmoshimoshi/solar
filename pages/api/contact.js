// pages/api/contact.js
import nodemailer from 'nodemailer';

// Create an arrow function to handle the POST request
const handleContactFormSubmission = async (req, res) => {
  if (req.method === 'POST') {
    try {
      const { name, email, phoneNumber } = req.body;

      // Validate the input data here if needed

      // Create a transporter for sending email
      const transporter = nodemailer.createTransport({
        service: 'Gmail', // e.g., 'Gmail', 'Yahoo', etc.
        auth: {
          user: 'suhas09.moshimoshi@gmail.com', // your email
          pass: process.env.PASSWORD, // your email password or an app-specific password
        },
      });

      // Email content
      const mailOptions = {
        from: 'suhas09.moshimoshi@gmail.com',
        to: 'suhasweb3@gmail.com', // recipient email
        subject: 'New Contact Form Submission',
        text: `
          Name: ${name}
          Email: ${email}
          Phone Number: ${phoneNumber}
        `,
      };

      // Send the email
      await transporter.sendMail(mailOptions);

      // console.log('Request Body:', req.body);
      // console.log(mailOptions)

      res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
};

export default handleContactFormSubmission;
