import { IconBaseProps } from "react-icons";

export type UserProps = {
  name: string;
  nickname: string;
  about: string;
  career: string;
};

export interface LinkProps extends IconBaseProps {
  href: string;
  title: string;
}

export type ProjectProps = {
  github: string;
  title: string;
  description: string;
  tags: string[];
  link: string;
};

export type ContactProps = {
  name: string;
  career: string;
  mail: string;
  call: string;
};
