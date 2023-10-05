import { ProjectProps } from "@/common/types";
import Link from "next/link";
import {
  RiGithubFill as GithubIcon,
  RiExternalLinkLine as LinkIcon,
} from "react-icons/ri";
import { Badge } from "./ui/badge";

const ProjectItem = ({
  title,
  tags,
  github,
  description,
  link,
}: ProjectProps) => {
  return (
    <div className="border px-2 flex flex-col gap-2 shadow-lg rounded-lg p-2">
      <h2 className="text-md font-bold">{title}</h2>
      <p className="text-sm">{description}</p>
      <div className="flex flex-row justify-between">
        <p>
          {tags.map((tag) => (
            <Badge variant="outline" key={tag} className="mx-1">
              #{tag}
            </Badge>
          ))}
        </p>
        <p className="flex flex-row gap-1">
          <Link href={link}>
            <LinkIcon size={28} />
          </Link>
          <Link href={github}>
            <GithubIcon size={28} />
          </Link>
        </p>
      </div>
    </div>
  );
};

export default ProjectItem;
