import { NextResponse } from "next/server";

const SURVEYS = [
  { id: "s1", title: "Household Amenities - Kumbakonam", village: "Kumbakonam", date: "2025-09-12", status: "completed" },
  { id: "s2", title: "Agriculture Practices - Periyakulam", village: "Periyakulam", date: "2025-10-01", status: "in-progress" },
  { id: "s3", title: "Sanitation Audit - Nagercoil", village: "Nagercoil", date: "2025-08-20", status: "draft" },
];

export async function GET() {
  return NextResponse.json({ data: SURVEYS });
}
