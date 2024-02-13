import {
  SiNextdotjs,
  SiTailwindcss,
  SiMysql,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiHtml5,
  SiCss3,
  SiBootstrap,
  SiGit,
} from "react-icons/si";

interface iconsProps {
  name: string;
  icon: React.ReactNode;
}

export const iconItems: iconsProps[] = [
  {
    name: "React",
    icon: (
      <SiReact
        size={120}
        className="fill-blue-700 hover:fill-blue-800 hover:scale-125 duration-500"
      />
    ),
  },
  {
    name: "Next.js",
    icon: (
      <SiNextdotjs
        size={120}
        className="hover:fill-gray-800 hover:scale-125 duration-500"
      />
    ),
  },
  {
    name: "Javascript",
    icon: (
      <SiJavascript
        size={120}
        className="fill-yellow-500 hover:fill-yellow-600 hover:scale-125 duration-500"
      />
    ),
  },
  {
    name: "Typescript",
    icon: (
      <SiTypescript
        size={120}
        className="fill-blue-600 hover:fill-blue-700 hover:scale-125 duration-500"
      />
    ),
  },
  {
    name: "Tailwind",
    icon: (
      <SiTailwindcss
        size={120}
        className="fill-sky-500 hover:fill-sky-700 hover:scale-125 duration-500"
      />
    ),
  },
  {
    name: "Bootstrap",
    icon: (
      <SiBootstrap
        size={120}
        className="fill-purple-700 hover:fill-purple-900 hover:scale-125 duration-500"
      />
    ),
  },
  {
    name: "HTML",
    icon: (
      <SiHtml5
        size={120}
        className="fill-orange-600 hover:fill-orange-700 hover:scale-125 duration-500"
      />
    ),
  },
  {
    name: "CSS",
    icon: (
      <SiCss3
        size={120}
        className="fill-blue-500 hover:fill-blue-600 hover:scale-125 duration-500"
      />
    ),
  },
  {
    name: "GIT",
    icon: (
      <SiGit
        size={120}
        className="fill-gray-500 hover:fill-gray-600 hover:scale-125 duration-500"
      />
    ),
  },
  {
    name: "MySQL",
    icon: (
      <SiMysql
        size={120}
        className="fill-orange-500 hover:fill-orange-700 hover:scale-125 duration-500"
      />
    ),
  },
];
