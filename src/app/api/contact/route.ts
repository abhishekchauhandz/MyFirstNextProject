//app/api/contact/route.js
import { NextResponse } from "next/server";
import { db } from "@/app/firebaseConfig";
import { collection, addDoc } from "firebase/firestore";
import { transporter } from "@/app/utils/mailSender.utils";


export async function POST(req: { json: () => PromiseLike<{ name: any; email: any; subject: any; message: any; }> | { name: any; email: any; subject: any; message: any; }; }) {
    const { name, email, subject, message } = await req.json();

    try {
        const docRef = await addDoc(collection(db, 'contacts'), {
            name,
            email,
            subject,
            message,
            timestamp: new Date()
        });

        await transporter.sendMail({
            from: process.env.NEXT_PUBLIC_AUTH_MAIL,
            to: email,
            subject: "Thank you for contacting FlairCast",
            text: `Hello ${name},

Thank you so much for getting in touch! We want to confirm that we received your request for information regarding our services, and we will contact you within 7 hours with a comprehensive response.

However, if you require immediate assistance, do not hesitate to email us @ kumarabhishek11124@gmial.com.

Sincerely,

The Flaircast team`
        });
        return NextResponse.json({
            id: docRef.id,
            message: "Message sent successfully!!!"
        });
    } catch (error) {
        console.log("Error adding document: ",error);
        return NextResponse.json({error: "Failed to send message"},
        {status: 500});
    }
}