import Link from "next/link";
import Image from "next/image";
import potatoImage from "@/app/icon.png";

export default function Header() {
  return (
    <div className="pad h-[600px] md:h-[fit-content] flex flex-row md:flex-col items-center">
      <div className="w-[70%] md:w-full h-[400px]  flex flex-col items-start justify-around">
        <div>
          <h1 className="text-size-1">Abdurrahman</h1>
          <h2 className="text-size-2">
            web developer and graphic designer
            <br />
            with more than {new Date().getFullYear() - 2022} years of experience
            <br />
          </h2>
        </div>
        <Link className="btn" href={"/about"}>
          show more
        </Link>
      </div>
    </div>
  );
}
