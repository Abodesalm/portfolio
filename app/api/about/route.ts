import { NextResponse } from "next/server";

export function GET() {
  return NextResponse.json({
    status: "success",
    data: {
      text: `I'm Abdurrahman Assalim, web developer and graphic designer with more than ${
        new Date().getFullYear() - 2022
      } years of experience, I'm from Syria specificlly from Deir-Ezzor, also I'm ${
        new Date().getFullYear() - 2007
      } years old`,
      hobbies: ["learning languages", "pixel art", "football"],
      address: "Deir-Ezzor , Syria",
    },
  });
}
