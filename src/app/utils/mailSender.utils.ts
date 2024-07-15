import nodemailer from "nodemailer";
import SMTPConnection from "nodemailer/lib/smtp-connection";

export const transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
        user: process.env.NEXT_PUBLIC_AUTH_MAIL,
        pass: process.env.NEXT_PUBLIC_AUTH_PASSWORD
    }

});