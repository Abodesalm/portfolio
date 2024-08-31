import Heading from "@/components/Heading";

export default function Contact() {
  return (
    <div className="pad min-h-[550px]">
      <Heading
        className={`heading`}
        content={
          <>
            contact{" "}
            <span className="text-lightAccent dark:text-darkAccent">me</span>
          </>
        }
      />
    </div>
  );
}
