import Heading from "@/components/Heading";
import Link from "next/link";
import Card from "@/components/Card";
import ProjectsContainer from "@/components/ProjectsContainer";

export default function Projects() {
  return (
    <div className="pad min-h-[550px] md:mt-4 bg-white dark:bg-dark flex flex-col items-start justify-between gap-8">
      <Heading
        className={`heading`}
        content={
          <>
            <span className="text-lightAccent dark:text-darkAccent">my </span>
            <span>projects</span>
          </>
        }
      />
      <ProjectsContainer slicing={true} />
      <Link className="btn" href={"/projects"}>
        show more
      </Link>
    </div>
  );
}
