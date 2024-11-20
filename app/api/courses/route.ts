import { NextResponse } from "next/server";

export function GET() {
  return NextResponse.json({
    status: "success",
    data: [
      { title: "", url: "", thumbnail: "", platform: "", contents: ["", ""] },
      { title: "", url: "", thumbnail: "", platform: "", contents: ["", ""] },
    ],
  });
}
