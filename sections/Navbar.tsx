import ThemeSwitch from "@/components/ThemeSwitch";
import Link from "next/link";
import { AiFillHome, AiFillInfoCircle } from "react-icons/ai";
import { BsFillInfoCircleFill } from "react-icons/bs";

export default function Navbar() {
  return (
    <div className="pad py-[20px_!important] bg-bglight dark:bg-darker border-b border-dark dark:border-transparent text-lightAccent dark:text-darkAccent flex justify-between items-center select-none">
      <div className="text-size-4 font-medium">3bod Sa</div>
      <div className="flex gap-10 sm:gap-6 items-center">
        <ThemeSwitch />
        <Link href="/" className="md:hidden flex font-semibold">
          Home
        </Link>
        <Link href="/" className="md:flex hidden">
          <AiFillHome className="text-[22px]" />
        </Link>

        <Link href="/about" className="md:hidden flex font-semibold">
          About
        </Link>
        <Link href="/about" className="md:flex hidden">
          <BsFillInfoCircleFill className="text-[19px]" />
        </Link>
      </div>
    </div>
  );
}
