import Link from "next/link";
import { BsGlobe, BsPalette } from "react-icons/bs";

export const metadata = {
  title: `My Projects`,
  description: ``,
  keywords: [],
};

export default function Projects() {
  return (
    <div className="pad min-h-[60vh]">
      <Sec url={"/projects/web"} Icon={BsGlobe} title={"web projects"} />
      <Sec
        url={"/projects/design"}
        Icon={BsPalette}
        title={"design projects"}
      />
    </div>
  );
}

const Sec = ({ url, Icon, title }) => {
  return (
    <Link
      className="container mt-4 hover:bg-bglight dark:hover:bg-dark transition"
      href={`${url}`}
    >
      <Icon className={`text-size-3`} />
      <p className="capitalize">{title}</p>
    </Link>
  );
};
