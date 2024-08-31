import Image from "next/image";
import Link from "next/link";

export default function Card({
  title,
  summary,
  link,
  photo,
  history,
  skills,
  features,
}) {
  return (
    <div className="w-[360px] min-h-[fit-content] bg-bglight dark:bg-darker rounded-[10px] overflow-hidden">
      <div className="w-full h-[202.5px] bg-lightAccent dark:bg-darkAccent">
        <Image src={photo} alt={`${title} photo`} width={360} height={202.5} />
      </div>
      <div className="px-3 py-2 flex flex-col items-start justify-between gap-4">
        <div>
          <h5 className="text-size-4 capitalize">{title}</h5>
          <p className="text-size-5">{summary}</p>
        </div>
        <ul className="px-6 text-size-6">
          {features.map((el) => {
            return <li key={el}>{el}</li>;
          })}
        </ul>
        <div className="w-full flex flex-row items-center justify-around">
          {skills.map((el) => {
            return (
              <div className="badge" key={el}>
                {el}
              </div>
            );
          })}
        </div>
        <div className="w-full flex flex-row items-center justify-evenly">
          <Link
            href={link}
            className="btn py-[0.2rem_!important]"
            target="_blanc"
          >
            Visit
          </Link>
          <p className="flex items-center bg-white dark:bg-dark p-1 rounded-[5px]">
            {history}
          </p>
        </div>
      </div>
    </div>
  );
}
