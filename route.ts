import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";

export async function POST(request: Request) {
  const form = await request.formData();
  const studio = String(form.get("studio") || "");
  const title = String(form.get("title") || "").trim();
  const prompt = String(form.get("prompt") || "").trim();
  if (!title || !prompt || !["image","video","movie","design","audio"].includes(studio))
    return NextResponse.json({ error: "Please provide a valid project title, studio and brief." }, { status: 400 });
  try {
    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return NextResponse.redirect(new URL("/login", request.url), 303);
    const { error } = await supabase.from("projects").insert({ user_id:user.id, studio, title, prompt });
    if (error) throw error;
    return NextResponse.redirect(new URL("/dashboard?saved=1", request.url), 303);
  } catch (error) {
    const message = error instanceof Error ? error.message : "Project could not be saved.";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}