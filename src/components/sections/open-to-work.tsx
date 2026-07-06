import { profile } from "@/lib/data/profile";
import { Mail,FileText } from "lucide-react";
import Link from "next/link";
import { SectionLabel } from "../ui/section-label";


export function OpenToWork() {
    return (
        <section className="flex flex-col gap-4 border-b border-border py-8">
            <SectionLabel>Open to Work</SectionLabel>
            <div className="flex flex-col gap-3 rounded-lg border border-border bg-surface p-5">
                <div className="flex items-center gap-2 font-mono text-sm text-foreground">
                    <span className="relative flex size-2.5">
                        <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75 animate-ping" />
                        <span className="relative inline-flex size-2.5 rounded-full bg-emerald-500"></span>
                    </span>
                    {profile.availability.headline}
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">
                    {profile.availability.description}
                </p>

                <div className="flex flex-wrap gap-2 pt-1 text-sm font-mono">
                    <Link
                        href={`mailto:${profile.social.email}`}
                        className="inline-flex items-center gap-1.5 rounded-md border border-border px-3 py-1.5 hover:bg-background transition-colors"
                    >
                        <Mail className="size-4"/> Email Me
                    </Link>

                    <Link
                        href={profile.resumeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-md border border-border px-3 py-1.5 hover:bg-background transition-colors"
                    >
                        <FileText className="size-4"/> View Resume
                    </Link>
                </div>
            </div>
        </section>
    )
}