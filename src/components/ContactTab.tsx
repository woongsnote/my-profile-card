import SocialLinks from "./SocialLinks";
import UserInfo from "./UserInfo";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Separator } from "./ui/separator";

const ConatctTab = () => {
  return (
    <Card className="max-w-md">
      <CardHeader className="flex items-center flex-row gap-4">
        <Avatar>
          <AvatarImage src="/profile.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <CardTitle>Woongsnote</CardTitle>
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

export default ConatctTab;
