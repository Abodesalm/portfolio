import { NextResponse } from "next/server";

export function GET() {
  return NextResponse.json({
    status: "success",
    data: {
      accounts: {
        whatsapp: "https://wa.me/963997203291",
        instagram: "https://www.instagram.com/3bod.sa__",
        telegram: "https://te.me/aboud_zed",
        facebook: "https://www.facebook.com/3abod.sa/",
        github: "https://github.com/abodesalm",
        linkedin: "https://linkedin.com/in/3bod-sa  ",
      },
    },
  });
}
