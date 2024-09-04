import Heading from "@/components/Heading";
import Link from "next/link";
import { FaFacebook, FaTelegram } from "react-icons/fa6";

import { BsInstagram, BsWhatsapp, BsGithub, BsLinkedin } from "react-icons/bs";
import { api } from "@/public/data";

export default async function Contact() {
  const links = await fetch(`${api}/links`, {
    cache: "no-store",
  })
    .then((links) => links.json())
    .then((links) => links.data.accounts);

  const address = await fetch(`${api}/about`, {
    cache: "no-store",
  })
    .then((address) => address.json())
    .then((address) => address.data.address);

  const linksClass = `text-[24px]`;

  return (
    <div className="pad my-8">
      <div className="container pb-8 flex-row md:flex-col justify-between">
        <div className="flex flex-col gap-4 w-[30%] md:w-full">
          <Heading
            className={`capitalize font-semibold text-size-2`}
            content={
              <>
                contact{" "}
                <span className="text-lightAccent dark:text-darkAccent">
                  me
                </span>
              </>
            }
          />
          <div className="flex flex-col gap-4 ml-4">
            <div>
              <p className="text-size-4">Email :</p>
              <p>{links.email}</p>
            </div>
            <div>
              <p className="text-size-4">Phone :</p>
              <p>{links.phone}</p>
            </div>
            <div>
              <p className="text-size-4">Address :</p>
              <p>{address}</p>
            </div>
          </div>
        </div>

        <div className="w-[70%] md:w-full flex flex-row flex-wrap p-4 items-center justify-evenly gap-4">
          <AccountsLink href={links.instagram}>
            <BsInstagram className={linksClass} />
          </AccountsLink>
          <AccountsLink href={links.linkedin}>
            <BsLinkedin className={linksClass} />
          </AccountsLink>
          <AccountsLink href={links.whatsapp}>
            <BsWhatsapp className={linksClass} />
          </AccountsLink>
          <AccountsLink href={links.github}>
            <BsGithub className={linksClass} />
          </AccountsLink>
          <AccountsLink href={links.telegram}>
            <FaTelegram className={linksClass} />
          </AccountsLink>
          <AccountsLink href={links.facebook}>
            <FaFacebook className={linksClass} />
          </AccountsLink>
        </div>
      </div>
    </div>
  );
}

const AccountsLink = ({ children, href }) => {
  return (
    <Link
      href={href}
      className="p-2 rounded-full w-[50px] h-[50px] border-2 border-dark dark:border-white flex items-center justify-center hover:text-lightAccent hover:border-lightAccent dark:hover:text-darkAccent dark:hover:border-darkAccent transition-colors"
    >
      {children}
    </Link>
  );
};
