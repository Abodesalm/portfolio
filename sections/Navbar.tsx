import ThemeSwitch from "@/components/ThemeSwitch";
import Link from "next/link";
import { AiFillHome, AiFillInfoCircle } from "react-icons/ai";
import { BsFillInfoCircleFill } from "react-icons/bs";

export default function Navbar() {
  return (
    <nav className="pad bg-bglight/80 dark:bg-dark/5 py-[20px_!important] text-lightAccent dark:text-darkAccent flex justify-between items-center select-none">
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
    </nav>
  );
}
