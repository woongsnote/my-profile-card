import { ContactInfo } from "@/common/constants";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { MailIcon, Phone } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";

const ConatctTab = () => {
  return (
    <Card className="w-96 h-full">
      <CardHeader className="flex items-center flex-row gap-4">
        <Avatar>
          <AvatarImage src="/profile.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div>
          <CardTitle>{ContactInfo.name}</CardTitle>
          <CardDescription>{ContactInfo.career}</CardDescription>
        </div>
      </CardHeader>

      <CardContent className="flex flex-col justify-center">
        <p className="flex flex-row gap-4 mt-4 text-xl items-center">
          <MailIcon /> | <span className="font-bold">{ContactInfo.mail}</span>
        </p>
      </CardContent>

      <CardFooter className="flex items-center justify-center w-full mx-auto">
        <Button asChild variant="default">
          <Link href={`mailto:${ContactInfo.mail}`}>Work Together</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ConatctTab;
