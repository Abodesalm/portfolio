import Heading from "@/components/Heading";
import { api } from "@/public/data";
import {
  SiJavascript,
  SiTailwindcss,
  SiExpress,
  SiRedux,
  SiNextdotjs,
  SiTypescript,
  SiPug,
  SiMongodb,
  SiSass,
  SiNodedotjs,
  SiReact,
  SiAdobephotoshop,
} from "react-icons/si";
import { BsEye, BsFilm } from "react-icons/bs";
import { GiEarthAfricaEurope } from "react-icons/gi";

export default async function Skills() {
  const clas = "text-[40px] text-lightAccent dark:text-darkAccent font-bold";

  const skills = await fetch(`${api}/skills`, {
    cache: "no-store",
  })
    .then((skills) => skills.json())
    .then((skills) => skills.data);

  const Icon = ({ name }) => {
    if (name === "Javascript") return <SiJavascript className={clas} />;
    else if (name === "React Js") return <SiReact className={clas} />;
    else if (name === "Redux") return <SiRedux className={clas} />;
    else if (name === "Next Js") return <SiNextdotjs className={clas} />;
    else if (name === "Tailwind CSS") return <SiTailwindcss className={clas} />;
    else if (name === "SASS") return <SiSass className={clas} />;
    else if (name === "Node Js") return <SiNodedotjs className={clas} />;
    else if (name === "Express Js") return <SiExpress className={clas} />;
    else if (name === "MongoDB") return <SiMongodb className={clas} />;
    else if (name === "Typescript") return <SiTypescript className={clas} />;
    else if (name === "Pug") return <SiPug className={clas} />;
    else if (name === "adobe") return <SiAdobephotoshop className={clas} />;
    else if (name === "visual") return <BsEye className={clas} />;
    else if (name === "video") return <BsFilm className={clas} />;
    else if (name === "Arabic")
      return <p className={`${clas} text-size-2`}>Ar</p>;
    else if (name === "English")
      return <p className={`${clas} text-size-2`}>En</p>;
    else if (name === "French")
      return <p className={`${clas} text-size-2`}>Fr</p>;
    else if (name === "German")
      return <p className={`${clas} text-size-2`}>Ge</p>;
  };

  return (
    <div className="pad min-h-[550px] flex flex-col gap-4 sm:mt-4">
      <Heading
        className={`heading`}
        content={
          <>
            <span className="text-lightAccent dark:text-darkAccent">my </span>
            <span>skills</span>
          </>
        }
      />
      <div className="flex flex-col gap-4 px-4">
        <div className="container flex-col">
          <h4 className="text-size-4">Web Development :</h4>
          <div className="flex flex-row flex-wrap w-full items-center justify-between md:justify-around gap-4">
            {skills.web.map((skill) => {
              return (
                <div
                  key={skill}
                  className="flex flex-col gap-1 items-center justify-center"
                >
                  <Icon name={skill} />
                  <p className="text-size-5">{skill}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="container flex-col w-[fit-content]">
          <h4 className="text-size-4">Graphic Design :</h4>
          <div className="flex flex-row flex-wrap w-full items-center justify-between md:justify-around gap-8">
            {skills.design.map((skill) => {
              return (
                <div
                  key={skill.name}
                  className="flex flex-col gap-1 items-center justify-center"
                >
                  <Icon name={skill.icon} />
                  <p className="text-size-5">{skill.name}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="container flex-col w-[fit-content] sm:mx-auto">
          <h4 className="text-size-4">Languages :</h4>
          <div className="flex flex-row flex-wrap w-full items-center justify-between md:justify-around gap-8">
            {skills.lang.map((lang) => {
              return (
                <div
                  key={lang.name}
                  className="flex flex-col items-center justify-center"
                >
                  <Icon name={lang.name} />
                  <p className="text-size-5">{lang.name}</p>
                  <p className="font-light text-size-5">{lang.progress}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
