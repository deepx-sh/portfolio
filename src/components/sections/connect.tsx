import { profile } from "@/lib/data/profile";
import { FileText } from "lucide-react";
import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";
import { SiGithub ,SiX} from "react-icons/si";


export function Connect() {
    return (
        <section className="py-8 border-b border-border">
            <div className="flex flex-col items-center gap-3 rounded-lg border border-border bg-surface px-6 py-10 text-center">
                <h2 className="font-mono text-lg font-semibold text-foreground">
                    Let&apos;s Connect
                </h2>
                <p className="text-sm text-muted-foreground">
                    Feel free to reach out through any of these platforms
                </p>

                <div className="flex flex-wrap justify-center gap-2 pt-2 text-sm font-mono">
                    <Link
                        href={profile.social.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-md border border-border px-3 py-1.5 hover:bg-background transition-colors"
                    >
                        <SiX className="size-3.5"/> X
                    </Link>

                    <Link
                        href={profile.social.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-md border border-border px-3 py-1.5 hover:bg-background transition-colors"
                    >
                        <SiGithub className="size-3.5"/> GitHub
                    </Link>

                     <Link
                        href={profile.resumeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-md border border-border px-3 py-1.5 hover:bg-background transition-colors"
                    >
                        <FileText className="size-3.5"/> Resume
                    </Link>

                     <Link
                        href={profile.social.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-md border border-border px-3 py-1.5 hover:bg-background transition-colors"
                    >
                        <FaLinkedin className="size-3.5"/> LinkedIn
                    </Link>
                </div>
            </div>
        </section>
    )
}