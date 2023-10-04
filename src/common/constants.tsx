import { UserProps, LinkProps } from "./types";
import {
  RiInstagramLine as InstagramIcon,
  RiKakaoTalkFill as KakaoTalkIcon,
  RiGithubFill as GithubIcon,
  RiMailLine as MailIcon,
} from "react-icons/ri";

export const user: UserProps = {
  name: "문 지 웅",
  id: "woongsnote",
  work: "Front-End Developer",
  about: "새로운 기술을 학습하는 것을 좋아합니다",
};
export const links: LinkProps[] = [
  {
    href: `https://github.com/${user.id}`,
    title: "GitHub",
    children: <GithubIcon size={32} />,
  },
  {
    href: `mailto:${user.id}@gmail.com`,
    title: "Email",
    children: <MailIcon size={32} />,
  },
  {
    href: `https://instagram.com/${user.id}`,
    title: "Instagram",
    children: <InstagramIcon size={32} />,
  },
  {
    href: `https://open.kakao.com/me/${user.id}`,
    title: "KakaoTalk",
    children: <KakaoTalkIcon size={32} />,
  },
];
