import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const { name, email, subject, message } = await request.json();

    if (!name || !email || !subject || !message) {
      return Response.json({ error: "Faltan campos" }, { status: 400 });
    }

    await resend.emails.send({
      from: "Formulario Web <onboarding@resend.dev>",
      to: "estudiojuridicofv1@gmail.com",
      replyTo: email,
      subject: `Nueva consulta: ${subject}`,
      html: `
        <h2>Nueva consulta desde la web</h2>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Asunto:</strong> ${subject}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${message}</p>
      `,
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error(error);
    return Response.json({ error: "Error al enviar" }, { status: 500 });
  }
}