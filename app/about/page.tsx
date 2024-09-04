import Heading from "@/components/Heading";
import { api } from "@/public/data";
import { BiFootball, BiGlobe, BiBrush } from "react-icons/bi";

export const metadata = {
  title: `About Me`,
  description: ``,
  keywords: [],
};

export default async function About() {
  const about = await fetch(`${api}/about`, {
    cache: "no-store",
  })
    .then((about) => about.json())
    .then((about) => about.data);

  const links = await fetch(`${api}/links`, {
    cache: "no-store",
  })
    .then((links) => links.json())
    .then((links) => links.data.accounts);

  return (
    <div className="pad min-h-[60vh] flex flex-col gap-8">
      <div>
        {about.text.split(",").map((text, index) => {
          return (
            <p className={`${index === 0 && "text-size-2"}`} key={index}>
              {text}
            </p>
          );
        })}
      </div>
      <div className="flex flex-col gap-2">
        <Heading
          className={`heading`}
          content={
            <>
              <span className="text-lightAccent dark:text-darkAccent">my </span>
              <span>hobbies</span>
            </>
          }
        />
        <div className="container flex-row w-[fit-content] ml-4 gap-[4rem_!important] text-center">
          {about.hobbies.map((el) => {
            return (
              <div
                key={el}
                className="flex flex-col items-center justify-center gap-1"
              >
                <Icon name={el} />
                <p className="capitalize text-size-6">{el}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex flex-col gap-4 w-[30%] md:w-full mb-8">
        <div>
          <p className="text-size-4">Email :</p>
          <p className="ml-2">{links.email}</p>
        </div>
        <div>
          <p className="text-size-4">Phone :</p>
          <p className="ml-2">{links.phone}</p>
        </div>
        <div>
          <p className="text-size-4">Address :</p>
          <p className="ml-2">{about.address}</p>
        </div>
      </div>
    </div>
  );
}

const Icon = ({ name }) => {
  const clas = `text-[40px] text-lightAccent dark:text-darkAccent`;
  if (name === "football") return <BiFootball className={clas} />;
  else if (name === "learning languages") return <BiGlobe className={clas} />;
  else if (name === "pixel art") return <BiBrush className={clas} />;
};
