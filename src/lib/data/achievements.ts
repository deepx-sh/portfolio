import { Award, ShieldCheck, type LucideIcon } from "lucide-react";

export type Achievement = {
    title: string;
    issuer: string;
    year: string;
    icon: LucideIcon;
    image:string;
}


export const achievements: Achievement[] = [
    {
        title: "Gold Medalist - Diploma in Information Technology (Academic Excellence)",
        issuer: "B.S. Patel Polytechnic, Ganpat University",
        year: "2021",
        icon: Award,
        image:"/achievements/GoldMedal.jpg"
    },
    {
        title: "Security Acknowledged - Government of India",
        issuer: "NCIIPC (National Critical Information Infrastructure Protection Centre)",
        year: "2025",
        icon: ShieldCheck,
        image:"/achievements/security.jpg"
    }
]