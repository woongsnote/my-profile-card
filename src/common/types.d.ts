import { IconBaseProps } from "react-icons";

export type UserProps = {
  name: string;
  id: string;
  about: string;
  work: string;
};

export interface LinkProps extends IconBaseProps {
    href: string;
    title: string;
  }