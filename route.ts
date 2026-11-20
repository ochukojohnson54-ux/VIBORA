import { NextResponse } from "next/server";

// Provider adapters belong here. Keep secret keys server-side.
// Configure and test a provider before enabling paid generation for users.
export async function POST() {
  return NextResponse.json({
    error: "AI generation is not connected yet. Add and configure an approved image or video provider before enabling this feature."
  }, { status: 503 });
}