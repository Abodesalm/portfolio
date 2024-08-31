import Link from "next/link";
import Image from "next/image";
import potatoImage from "@/app/icon.png";

export default function Header() {
  return (
    <div className="pad min-h-[550px] flex flex-row md:flex-col items-center">
      <div className="w-1/2 md:w-full h-[400px] flex flex-col items-start justify-around">
        <div>
          <h1 className="text-size-1">Abdurrahman</h1>
          <h2 className="text-size-2">
            web developer and graphic designer
            <br />
            with more than 2 years of experience
            <br />
          </h2>
        </div>
        <Link className="btn" href={"/about"}>
          show more
        </Link>
      </div>
      <div className="w-1/2 md:w-full h-[400px] rounded-full flex items-center justify-center">
        <Image src={potatoImage} alt="potato image" width={400} height={400} />
      </div>
    </div>
  );
}
