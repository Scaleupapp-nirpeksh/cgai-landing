import { NextRequest, NextResponse } from "next/server";
import { connect } from "@/src/lib/db";
import WaitlistEntry from "@/src/models/WaitlistEntry"; // Ensure this is a Mongoose model

export async function POST(req: NextRequest) {
  const { email } = await req.json();

  if (!email || !/^[\w-.]+@([\w-]+\.)+[\w-]{2,}$/.test(email)) {
    return NextResponse.json({ error: "Invalid email" }, { status: 400 });
  }

  await connect();

  await WaitlistEntry.updateOne(
    { email },
    { $setOnInsert: { email } },
    { upsert: true },
  );

  return NextResponse.json({ ok: true });
}
