import ProfileImage from "./ProfileImage";
import SocialLinks from "./SocialLinks";
import UserInfo from "./UserInfo";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { Separator } from "./ui/separator";

const ProjectsTab = () => {
  return (
    <Card className="max-w-md">
      <CardHeader className="flex items-center justify-center">
        <ProfileImage />
      </CardHeader>
      <CardContent>
        <UserInfo />
      </CardContent>
      <Separator />
      <CardFooter className="flex items-center justify-center w-full mx-auto">
        <SocialLinks />
      </CardFooter>
    </Card>
  );
};

export default ProjectsTab;
