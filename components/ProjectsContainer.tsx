import { api } from "@/public/data";
import Card from "./Card";

export default async function ProjectsContainer({ slicing }) {
  const projects = await fetch(`${api}/projects`, {
    cache: "no-store",
  }).then((projects) => projects.json());
  return (
    <div className="w-full flex flex-row flex-wrap gap-8 items-start justify-evenly">
      {slicing
        ? projects.data.slice(0, 3).map((el) => {
            return (
              <Card
                title={el.title}
                summary={el.summary}
                link={el.link}
                photo={el.photo}
                history={el.history}
                skills={el.skills}
                features={el.features}
                key={el.link}
              />
            );
          })
        : projects.data.map((el) => {
            return (
              <Card
                title={el.title}
                summary={el.summary}
                link={el.link}
                photo={el.photo}
                history={el.history}
                skills={el.skills}
                features={el.features}
                key={el.link}
              />
            );
          })}
    </div>
  );
}
