import { NextResponse } from "next/server";

type LeadPayload = {
  name: string;
  email: string;
};

function isLeadPayload(value: unknown): value is LeadPayload {
  if (!value || typeof value !== "object") {
    return false;
  }

  const payload = value as Record<string, unknown>;

  return (
    typeof payload.name === "string" &&
    payload.name.trim().length > 0 &&
    typeof payload.email === "string" &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email)
  );
}

export async function POST(request: Request) {
  try {
    const body: unknown = await request.json();

    if (!isLeadPayload(body)) {
      return NextResponse.json(
        { message: "Please submit a valid name and email." },
        { status: 400 },
      );
    }

    const submission = {
      ...body,
      source: "lead-magnet",
      submittedAt: new Date().toISOString(),
    };

    const webhookUrl = process.env.LEAD_WEBHOOK_URL;

    if (webhookUrl) {
      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(submission),
        cache: "no-store",
      });

      if (!response.ok) {
        return NextResponse.json(
          { message: "Lead capture could not be delivered." },
          { status: 502 },
        );
      }
    } else {
      console.info("Lead magnet submission received", submission);
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Lead submission failed", error);
    return NextResponse.json(
      { message: "Something went wrong while submitting the form." },
      { status: 500 },
    );
  }
}
