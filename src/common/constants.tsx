import { UserProps, LinkProps, ProjectProps, ContactProps } from "./types";
import {
  RiInstagramLine as InstagramIcon,
  RiKakaoTalkFill as KakaoTalkIcon,
  RiGithubFill as GithubIcon,
  RiLinkedinBoxFill as LinkdeinIcon,
} from "react-icons/ri";

export const User: UserProps = {
  name: "Moon Jiwoong",
  nickname: "woongsnote",
  career: "Front-End Developer",
  about:
    "I enjoy learning new technologies and have experience collaborating with other developers.",
};

export const MyLinks: LinkProps[] = [
  {
    href: `https://github.com/${User.nickname}`,
    title: "GitHub",
    children: <GithubIcon size={32} />,
  },
  {
    href: `https://linkedin.com/in/${User.nickname}`,
    title: "Linkedin",
    children: <LinkdeinIcon size={32} />,
  },
  {
    href: `https://instagram.com/${User.nickname}`,
    title: "Instagram",
    children: <InstagramIcon size={32} />,
  },
  {
    href: `https://open.kakao.com/me/${User.nickname}`,
    title: "KakaoTalk",
    children: <KakaoTalkIcon size={32} />,
  },
];

export const GitHub = `https://github.com/${User.nickname}`;

export const ProjectsInfo: ProjectProps[] = [
  {
    title: "Blog",
    description: "A technical blog to document what i learned",
    tags: ["Next.js", "TypeScript"],
    github: `${GitHub}/${User.nickname}-dev`,
    link: `https://${User.nickname}.dev`,
  },
  {
    title: "Portfolio",
    description: "A potrfolio to introduce about me",
    github: `${GitHub}/my-portfolio`,
    tags: ["Next.js", "TypeScript"],
    link: `https://${User.nickname}-portfolio.vercel.app`,
  },
];

export const ContactInfo: ContactProps = {
  name: `${User.name}`,
  career: `${User.career}`,
  mail: `${User.nickname}@gmail.com`,
  call: "",
};
