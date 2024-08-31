import Heading from "@/components/Heading";

export default function Skills() {
  return (
    <div className="pad min-h-[550px] bg-yellow-900">
      <Heading
        className={`heading`}
        content={
          <>
            <span className="text-lightAccent dark:text-darkAccent">my </span>
            <span>skills</span>
          </>
        }
      />
    </div>
  );
}
