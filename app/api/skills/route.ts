import { NextResponse } from "next/server";

export function GET() {
  return NextResponse.json({
    status: "success",
    data: {
      web: [
        "Javascript",
        "React Js",
        "Redux",
        "Next Js",
        "Tailwind CSS",
        "SASS",
        "Node Js",
        "Express Js",
        "MongoDB",
        "Typescript",
        "Pug",
      ],
      design: [
        { name: "Adobe Programs", icon: "adobe" },
        { name: "Visual Identity Design", icon: "visual" },
        { name: "Video Editing", icon: "video" },
      ],
      lang: [
        { name: "Arabic", progress: "native" },
        { name: "English", progress: "fluent" },
        { name: "French", progress: "good" },
        { name: "German", progress: "limited" },
      ],
    },
  });
}
