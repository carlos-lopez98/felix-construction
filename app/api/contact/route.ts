// app/api/contact/route.ts
import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
    const body = await req.json();

    const { firstName, lastName, email, phone, message } = body;

    try {
        await resend.emails.send({
            from: process.env.COMPANY_EMAIL as string,
            to: process.env.CLIENT_EMAIL as string,
            subject: 'New Lead - Submitted through felix-construction.com',
            replyTo: email,
            html: `
        <h3>Se ha enviado un nuevo mensaje de un lead a través de su pagina web.</h3>
        <p><strong>Nombre del Cliente:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email para responder:</strong> ${email}</p>
        <p><strong>Phone Number:</strong> ${phone}</p>
        <p><strong>Mensaje o Pregunta Del Cliente:</strong><br/>${message}</p>
      `,
        });

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('Resend error:', error);
        return NextResponse.json({ success: false, error }, { status: 500 });
    }
}
