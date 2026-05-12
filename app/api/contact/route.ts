import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { name, email, phone, message } = await req.json();

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Nedostaju obavezna polja." }, { status: 400 });
  }

  const credentials = Buffer.from(
    `${process.env.MAILJET_API_KEY}:${process.env.MAILJET_SECRET_KEY}`
  ).toString("base64");

  const res = await fetch("https://api.mailjet.com/v3.1/send", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Basic ${credentials}`,
    },
    body: JSON.stringify({
      Messages: [
        {
          From: {
            Email: process.env.SITE_MAIL_SENDER,
            Name: "Studio Revive — Kontakt forma",
          },
          To: [{ Email: process.env.SITE_MAIL_RECEIVER }],
          ReplyTo: { Email: email, Name: name },
          Subject: `Upit od ${name} — Studio Revive`,
          TextPart: `Ime: ${name}\nEmail: ${email}\nTelefon: ${phone || "—"}\n\nPoruka:\n${message}`,
        },
      ],
    }),
  });

  if (!res.ok) {
    const err = await res.text();
    console.error("Mailjet error:", err);
    return NextResponse.json({ error: "Slanje nije uspelo." }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
