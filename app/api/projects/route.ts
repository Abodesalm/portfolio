import { NextResponse } from "next/server";
import restoImage from "@/public/img/websites/restaurant.png";
import coffeeImage from "@/public/img/websites/coffee.png";
import zedImage from "@/public/img/websites/zed-games.png";

export function GET() {
  return NextResponse.json({
    status: "success",
    data: [
      {
        title: "gericht restaurant",
        summary: "a restaurant website with a very good figma design",
        link: "https://abodesalm.github.io/restaurant",
        photo: restoImage,
        history: "2023/6",
        skills: ["react js"],
        features: [
          "amazing and responsive design",
          "high level dynamic functionalities",
        ],
      },
      {
        title: "coffee shop",
        summary: "dynamic coffee website with amazing design",
        link: "https://abod-coffee.netlify.app",
        photo: coffeeImage,
        history: "2024/6",
        skills: ["next js", "tailwind CSS", "SASS"],
        features: [
          "high performance",
          "very good responsive design",
          "some dynamic features",
        ],
      },
      {
        title: "zed games",
        summary: "a website where you can find details about any video game",
        link: "https://zed-games.netlify.app",
        photo: zedImage,
        history: "2024/7",
        skills: ["next js", "express js", "mongoDB", "tailwind CSS", "SASS"],
        features: [
          "complete REST API",
          "Front-End and Back-End connection",
          "real information about the games",
        ],
      },
      /*   {
      title: "",
      summary: "",
      link: "",
      photo: "",
      history: "",
      skills: [],
      features: [],
    }, */
    ],
  });
}
