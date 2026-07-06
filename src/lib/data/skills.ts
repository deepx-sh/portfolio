import type { IconType } from "react-icons";
import { SiMongodb, SiExpress, SiReact, SiNodedotjs, SiJavascript, SiTypescript, SiMysql, SiRedux, SiMongoose, SiTailwindcss, SiPostman, SiCss, SiHtml5, SiGithub, SiGit, SiLinux, SiNextdotjs, } from "react-icons/si";
import { DiJava } from "react-icons/di";
import { GoDatabase } from "react-icons/go";


export type Skill = {
    name: string,
    icon: IconType,
    color?: string;
}

export const skills: Skill[] = [
    { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
    { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
    { name: "React", icon: SiReact, color: "#61DAFB" },
    { name: "Next.js", icon: SiNextdotjs },
    { name: "Node.js", icon: SiNodedotjs, color: "#3C873A" },
    { name: "Express", icon: SiExpress },
    { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
    { name: "MySQL", icon: SiMysql, color: "#4479A1" },
    {name:"SQL",icon:GoDatabase},
    { name: "Java", icon: DiJava,color:"#ED8B00" },
    { name: "Mongoose", icon: SiMongoose,color:"#800000" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38BDF8" },
    { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
    { name: "CSS3", icon: SiCss, color: "#1572B6" },
    { name: "GitHub", icon: SiGithub },
     { name: "Git", icon: SiGit, color: "#F05032" },
    { name: "Linux", icon: SiLinux },
    { name: "Redux", icon: SiRedux, color: "#764ABC" },
    { name: "Postman", icon: SiPostman, color: "#EF5B25" },   
]