import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react"
import { SiGithub } from "react-icons/si";
import type { Project } from "@/lib/data/projects";

export function ProjectCard({ project }: { project: Project }) {
    return (
        <div className="flex flex-col sm:flex-row gap-4 rounded-lg border border-border bg-surface p-4">
            <div className="relative aspect-video w-full sm:w-56 shrink-0 overflow-hidden rounded-md border border-border">
                <Image
                    src={project.image}
                    alt={`${project.name} screenshot`}
                    fill
                    priority
                    sizes="(min-width:640px) 224px, 100vw"
                    className="object-cover"
                />

                <span
                    className={`absolute top-2 left-2 rounded-md px-2 py-0.5 text-xs font-mono ${
                        project.live ? "bg-emerald-500/90 text-emerald-950"
                            :"bg-amber-500/90 text-amber-950"
                    }`}
                >
                    {project.live ? "Live":"Deploying soon"}
                </span>
            </div>

            <div className="flex flex-col gap-2 flex-1">
                <div className="flex items-center justify-between gap-2">
                    <h3 className="font-mono text-base font-semibold text-foreground">
                        {project.name}
                    </h3>

                    <div className="flex gap-2 text-sm font-mono">
                        {project.live && (
                            <Link
                                href={project.live}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1 rounded-md border border-border px-2 py-1 hover:bg-background transition-colors"
                            >
                                <ExternalLink className="size-3.5"/> Live
                            </Link>
                        )}

                        <Link
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 rounded-md border border-border px-2 py-1 hover:bg-background transition-colors"
                        >
                            <SiGithub className="size-3.5"/> GitHub
                        </Link>
                    </div>
                </div>

                <p className="text-sm leading-relaxed text-muted-foreground">
                    {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mt-auto pt-1">
                    {project.tech.map((tech) => (
                        <span key={tech}
                            className="rounded-md border border-border bg-background px-2 py-0.5 text-xs font-mono text-muted-foreground"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    )
}