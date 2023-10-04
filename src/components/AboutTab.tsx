import AboutInfo from "./AboutInfo";
import ProfileImage from "./ProfileImage";
import SocialLinks from "./SocialLinks";
import UserInfo from "./UserInfo";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";

const AboutTab = () => {
  return (
    <Card className="max-w-sm">
      <CardHeader className="flex items-center justify-center">
        <ProfileImage />
      </CardHeader>
      <CardContent>
        <UserInfo />
        <AboutInfo />
      </CardContent>
      <CardFooter className="flex items-center justify-center w-full mx-auto">
        <SocialLinks />
      </CardFooter>
    </Card>
  );
};

export default AboutTab;
