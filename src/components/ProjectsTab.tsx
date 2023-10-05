import { ContactInfo, GitHub, ProjectsInfo } from "@/common/constants";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import Link from "next/link";
import ProjectItem from "./ProjectItem";
import { Button } from "./ui/button";

const ProjectsTab = () => {
  return (
    <Card className="w-96 h-full">
      <CardHeader className="flex items-center flex-row gap-4">
        <Avatar>
          <AvatarImage src="/profile.png" />
          <AvatarFallback>JW</AvatarFallback>
        </Avatar>
        <div>
          <CardTitle>{ContactInfo.name}</CardTitle>
          <CardDescription>{ContactInfo.career}</CardDescription>
        </div>
      </CardHeader>
      <CardContent className="flex flex-col gap-2">
        <h2 className="text-xl font-bold">Featured Projects</h2>

        <ul className="list-inside space-y-2">
          {ProjectsInfo.map((project) => (
            <li key={project.title}>
              <ProjectItem {...project} />
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter className="flex items-center justify-center w-full mx-auto">
        <Button asChild variant="default">
          <Link href={`${GitHub}`}>View More</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProjectsTab;
