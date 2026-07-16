import Link from "next/link";
import { SiTypescript, SiReact, SiExpress, SiMongodb, SiMysql ,SiGithub,SiX,SiLeetcode} from "react-icons/si";
import { profile } from "@/lib/data/profile";
import { LiveClock } from "../ui/live-clock";
import Image from "next/image";
import {  MapPin,Mail } from "lucide-react";
import { VscVscode } from "react-icons/vsc";


export function Hero() {
    return (
        <section className="flex flex-col gap-4 border-b border-border pb-8">
            <div className="flex items-center gap-4">
                <div
                    aria-hidden
                    className="size-18 shrink-0 relative overflow-hidden"
                >
                    <Image src={profile.avatar || "/profilepic.jpg"} fill sizes="72px" className="object-cover" priority alt="Profile Picture" />
                </div>

                <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-2 font-mono">
                        <h1 className="text-lg font-semibold text-foreground">{profile.name}</h1>
                        <span className="text-sm text-muted-foreground">{profile.handle}</span>
                    </div>
                    <span className="text-sm font-mono text-foreground">
                        {profile.status} <span className="text-accent animate-pulse">⬤</span>
                    </span>
                    <div className="flex items-center gap-1.5 text-xs font-mono text-muted-foreground">
                        <MapPin className="size-3.5" />
                        <span>{profile.location}</span>
                        <span aria-hidden></span>
                        <LiveClock/>
                    </div>
                </div>
            </div>

            <p className="text-sm leading-relaxed text-foreground/90 max-w-2xl tracking-tight sm:tracking-normal">
                I&apos;m a Full Stack Developer. I love building solutions and solving problems. I enjoy crafting websites with{" "}
                <span className="inline-flex items-center gap-1 text-foreground align-middle">
                    <SiReact className="size-4 shrink-0 text-[#61DAFB]"/> React
                </span>,{" "}
                <span className="inline-flex items-center gap-1 text-foreground align-middle">
                    <SiTypescript className="size-4 shrink-0 text-[#3178C6]"/> TypeScript
                </span>,{" "}
                <span className="inline-flex items-center gap-1 text-foreground align-middle">
                    <SiExpress className="size-4 shrink-0"/> Express
                </span>,{" "}
                using{" "}
                <span className="inline-flex items-center gap-1 text-foreground align-middle">
                    <SiMongodb className="size-4 shrink-0 text-[#47A248]"/> MongoDB
                </span>,{" "}
                <span className="inline-flex items-center gap-1 text-foreground align-middle">
                    <SiMysql className="size-4 shrink-0 text-[#4479A1]"/> MySQL
                </span>,{" "}
                databases and I live on <span className="inline-flex items-center gap-1 text-foreground align-middle"><VscVscode className="size-4 shrink-0 text-[#3B82F6]"/> VS Code</span>{" "} mostly.
            </p>


            <div className="flex flex-wrap gap-2 text-sm font-mono">
                <Link
                    href={profile.social.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Twitter"
                    className="inline-flex items-center gap-1.5 rounded-md border border-border px-3 py-1.5 hover:bg-surface transition-colors"
                >
                    <SiX className="size-3"/>Twitter DM
                </Link>

                <Link
                    href={`mailto:${profile.social.email}`}
                    className="inline-flex items-center gap-1.5 rounded-md border border-border px-3 py-1.5 hover:bg-surface transition-colors"
                >
                    <Mail className="size-4"/> Email Me
                </Link>

                <Link
                    href={profile.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub profile"
                    className="inline-flex items-center justify-center rounded-md border border-border size-9 hover:bg-surface transition-colors"
                >
                    <SiGithub className="size-4"/>
                </Link>

                <Link
                    href={profile.social.leetcode}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LeetCode"
                    className="inline-flex items-center justify-center rounded-md border border-border size-9 hover:bg-surface transition-colors"
                >
                    <SiLeetcode className="size-4"/>
                </Link>
            </div>
        </section>
    )
}