import { projects } from "@/lib/data/projects";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { ProjectCard } from "../ui/project-card";
import { SectionLabel } from "../ui/section-label";


export function Projects() {
    return (
        <section className="flex flex-col gap-4 border-b border-border py-8">
            <SectionLabel>My Projects</SectionLabel>
            <div className="flex flex-col gap-4">
                {projects.map((project) => (
                    <ProjectCard key={project.name} project={project}/>
                ))}
            </div>

            <Link
                href="https://github.com/deepx-sh"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 self-start font-mono text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
                More Projects <ArrowRight className="size-3.5"/>
            </Link>
        </section>
    )
}