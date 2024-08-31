import { NextResponse } from "next/server";

export function GET() {
  return NextResponse.json({
    status: "success",
    data: { about: "" },
  });
}
