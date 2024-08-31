import Card from "@/components/Card";
import ProjectsContainer from "@/components/ProjectsContainer";

export const metadata = {
  title: `My Projects`,
  description: ``,
  keywords: [],
};

export default function Projects() {
  return (
    <div className="pad min-h-[60vh]">
      <ProjectsContainer slicing={false} />
    </div>
  );
}
