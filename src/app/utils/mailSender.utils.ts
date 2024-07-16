import nodemailer from 'nodemailer';

export const transporter = nodemailer.createTransport({
    service: "gmail",
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: false,
    auth: {
        user: process.env.NEXT_PUBLIC_AUTH_MAIL,
        pass: process.env.NEXT_PUBLIC_AUTH_PASSWORD
    }
});
