import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
    try {
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.GOOGLE_USER,
                pass: process.env.GOOGL_PASS
            }
        });
        const { email, name , msg } = await req.json();
        const mailOption = {
            from: '"AnimeQuiz Support" <21012003rs@gmail.com>',
            to: "rahulbhaino01@gmail.com",
            subject: email,
            html: `
                <p>Hello,</p>
                <p>from ${name} </p>
                <h3>${msg}</h3>
            `,
        };
        await transporter.sendMail(mailOption);
        return NextResponse.json({ ok: true });
    } catch (error) {
        return NextResponse.json({ ok: false });
    }
}
