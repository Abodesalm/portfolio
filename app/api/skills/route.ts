import { NextResponse } from "next/server";

export function GET() {
  return NextResponse.json({
    status: "success",
    data: {
      web: [
        { name: "Javascript", progress: "" },
        { name: "React Js", progress: "" },
        { name: "Redux", progress: "" },
        { name: "Next Js", progress: "" },
        { name: "Tailwind CSS", progress: "" },
        { name: "SASS", progress: "" },
        { name: "Node Js", progress: "" },
        { name: "Express Js", progress: "" },
        { name: "MongoDB", progress: "" },
        { name: "Typescript", progress: "" },
        { name: "Pug", progress: "" },
      ],
      design: [
        { name: "", progress: "", icon: "" },
        { name: "", progress: "", icon: "" },
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
