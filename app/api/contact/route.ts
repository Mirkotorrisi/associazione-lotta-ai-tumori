import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const data = await request.json()
    // Basic validation
    if (!data.name || !data.email || !data.message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }
    // In production, send to your email provider or store in a DB here.
    // For now, just simulate success:
    return NextResponse.json({ ok: true })
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 })
  }
}
