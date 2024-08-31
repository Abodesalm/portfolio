import Link from "next/link";
import { FaFacebook, FaTelegram } from "react-icons/fa6";

import { BsInstagram, BsWhatsapp, BsGithub, BsLinkedin } from "react-icons/bs";
import { api } from "@/public/data";

export default async function Footer() {
  const links = await fetch(`${api}/links`, {
    cache: "no-store",
  })
    .then((links) => links.json())
    .then((links) => links.data);
  const linkClass =
    "hover:text-lightAccent dark:hover:text-darkAccent transition-colors w-[fit-content]";
  const socialClass =
    "text-[20px] hover:text-lightAccent dark:hover:text-darkAccent transition-colors";
  return (
    <footer className="pad min-h-[200px] bg-bglight dark:bg-darker flex flex-row md:flex-col md:gap-4 justify-between items-center">
      <div className=" w-[20%] h-[100px] md:w-[60%] flex flex-col justify-start gap-2 md:gap-4 items-center">
        <div className="flex flex-row items-center justify-around w-full">
          <Link
            href={links.accounts.whatsapp}
            className={socialClass}
            target="_blanc"
          >
            <BsWhatsapp />
          </Link>
          <Link
            href={links.accounts.instagram}
            className={socialClass}
            target="_blanc"
          >
            <BsInstagram />
          </Link>
          <Link
            href={links.accounts.telegram}
            className={socialClass}
            target="_blanc"
          >
            <FaTelegram />
          </Link>
          <Link
            href={links.accounts.facebook}
            className={socialClass}
            target="_blanc"
          >
            <FaFacebook />
          </Link>
          <Link
            href={links.accounts.github}
            className={socialClass}
            target="_blanc"
          >
            <BsGithub />
          </Link>
          <Link
            href={links.accounts.linkedin}
            className={socialClass}
            target="_blanc"
          >
            <BsLinkedin />
          </Link>
        </div>
      </div>

      <div className="w-[40%] md:w-[50%] md:self-start md:ml-8 md:mb-8 h-[100px]">
        <ul className=" list-disc">
          <p className="-ml-5 text-size-4 capitalize font-medium">links</p>
          <li className={linkClass}>
            <Link href={`/`}>Home</Link>
          </li>
          <li className={linkClass}>
            <Link href={`/about`}>About</Link>
          </li>
          <li className={linkClass}>
            <Link href={`/projects`}>Projects</Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}
