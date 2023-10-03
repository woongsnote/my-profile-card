import Link from "next/link";
import { links } from "@/common/constants";
import { Button } from "./ui/button";

const SocialLinks = () => {
  return (
    <div className="flex flex-row items-center justify-between gap-8 pt-4">
      {links.map((link) => (
        <Button key={link.title} asChild size="icon" variant="outline">
          <Link
            href={link.href}
            className="p-2 shadow-lg rounded-full dark:border-2"
          >
            {link.children}
          </Link>
        </Button>
      ))}
    </div>
  );
};
export default SocialLinks;
