import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { company, email, role, partnerType } = body;

    if (!company || !email) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

    if (!supabaseUrl || !supabaseKey || supabaseUrl === "your_supabase_project_url") {
      // Supabase not configured yet — log and return success so form still works
      console.log("[AXIS Waitlist - no Supabase] Would save:", { company, email, role, partnerType });
      return NextResponse.json({ success: true }, { status: 200 });
    }

    const supabase = createClient(supabaseUrl, supabaseKey);

    const { error } = await supabase.from("waitlist").insert([
      {
        company,
        email,
        role: role || null,
      },
    ]);

    if (error) {
      console.error("[AXIS Waitlist Supabase Error]", error);
      return NextResponse.json({ error: "Failed to save entry" }, { status: 500 });
    }

    console.log("[AXIS Waitlist] Saved to Supabase:", email, company);
    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error("[AXIS Waitlist Error]", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
