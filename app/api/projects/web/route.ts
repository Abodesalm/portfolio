import { NextResponse } from "next/server";
import restoImage from "@/public/img/websites/restaurant.png";
import coffeeImage from "@/public/img/websites/coffee.png";
import zedImage from "@/public/img/websites/zed-games.png";
import HRImage from "@/public/img/websites/hr.png";
import MyteImage from "@/public/img/websites/myte.png";

export function GET() {
  return NextResponse.json({
    status: "success",
    data: [
      {
        title: "zed games",
        summary: "a website where you can find details about any video game",
        link: "https://zed-games.netlify.app",
        photo: zedImage,
        history: "2024/7",
        skills: [
          "next js",
          "express js",
          "mongoDB",
          "tailwind CSS",
          "TypeScript",
        ],
        features: [
          "complex RESTful API",
          "powerfull search mechanics",
          "real information about the games",
        ],
      },
      {
        title: "HR System",
        summary: "a system for human resources to manage their work",
        link: "https://abod-hr.netlify.app",
        photo: HRImage,
        history: "2024/10",
        skills: [
          "next js",
          "typescript",
          "express js",
          "mongoDB",
          "tailwind CSS",
        ],
        features: [
          "completed RESTful API",
          "high level dynamic interface",
          "very useful functionalities to help the HR",
        ],
      },
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
        title: "Myte Team",
        summary:
          "a website for an IT team, however they have cancelled the website before it has completed",
        link: "https://myteteam.netlify.app",
        photo: MyteImage,
        history: "2024/2",
        skills: ["next js", "tailwind CSS", "SASS"],
        features: ["high performance", "very good responsive design"],
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
