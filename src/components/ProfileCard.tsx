import Image from "next/image";
import Link from "next/link";

import { user, links } from "@/common/constants";
import ThemeSwitcher from "./ThemeSwitcher";

const ProfileCard = () => {
  return (
    <div className="w-full max-w-lg flex flex-col rounded-lg p-4 border-8 shadow-lg items-center gap-4">
      <div className="w-32 h-32 p-2 rounded-full border-2">
        <Image
          src={"/profile.png"}
          alt="profile image"
          width={100}
          height={100}
          className="rounded-full w-auto h-auto"
        />
      </div>
      <div className="text-center">
        <h2 className="text-3xl font-bold">{user.name}</h2>
        <span className="w-full">{`@${user.id}`}</span>
        <br />
        <span className="">{user.work}</span>
      </div>

      <div className="mt-4">
        <h2 className="font-bold">About</h2>
        <p className="text-sm">{user.about}</p>
      </div>
      <div className="flex flex-row space-x-7 mt-4 items-center justify-center">
        {links.map((link) => (
          <Link href={link.href} key={link.title} className="p-2 shadow-lg rounded-full">
            {link.children}
          </Link>
        ))}
      </div>
      <div className="flex justify-end w-full">
        <ThemeSwitcher />
      </div>
    </div>
  );
};

export default ProfileCard;
