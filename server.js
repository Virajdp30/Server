const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
app.use(express.json());
app.use(cors());

// Email Configurations
const transporter = nodemailer.createTransport({
    service: "gmail", // or your email provider
    auth: {
        user: "your-email@gmail.com", // Change to your email
        pass: "your-email-password", // Use an App Password (if using Gmail)
    },
});

// Handle Form Submission
app.post("/send-inquiry", (req, res) => {
    const { name, email, phone, message } = req.body;

    if (!name || !email || !phone || !message) {
        return res.status(400).json({ error: "All fields are required!" });
    }

    const mailOptions = {
        from: email,
        to: "Sarkarexim95@icloud.com", // Your Business Email
        subject: "New Client Inquiry - SARKAR Exim",
        text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.status(500).json({ error: "Failed to send inquiry!" });
        }
        res.json({ success: "Inquiry sent successfully!" });
    });
});

// Start Server
app.listen(5000, () => console.log("Server running on port 5000"));