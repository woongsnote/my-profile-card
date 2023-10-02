import { IconBaseProps } from "react-icons";

export type User = {
  name: string;
  id: string;
  about: string;
  work: string;
};

export interface LinkProps extends IconBaseProps {
    href: string;
    title: string;
  }