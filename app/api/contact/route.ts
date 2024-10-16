import { NextResponse } from 'next/server';
import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY as string);

export async function POST(request: Request) {
  const { name, email, message } = await request.json();

  const content = {
    to: 'albertomtferreira@gmail.com',
    from: 'albertomtferreira@gmail.com', // This needs to be the sender email you've verified with SendGrid
    subject: `New message from ${name}`,
    text: message,
    html: `<p><strong>From:</strong> ${name}</p>
           <p><strong>Email:</strong> ${email}</p>
           <p><strong>Message:</strong> ${message}</p>`,
  };

  try {
    await sgMail.send(content);
    return NextResponse.json({ status: 'Ok' });
  } catch (error) {
    console.error('ERROR', error);
    return NextResponse.json({ error: 'Error sending email' }, { status: 400 });
  }
}