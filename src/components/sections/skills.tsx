import { skills } from "@/lib/data/skills";
import { SectionLabel } from "../ui/section-label";

export function Skills() {
    return (
        <section className="flex flex-col gap-4 border-b border-border py-8">
            <SectionLabel>My Skills</SectionLabel>
            <div className="flex flex-wrap gap-x-5 gap-y-3">
                {skills.map((skill) => {
                    const Icon = skill.icon;
                    return (
                        <div
                            key={skill.name}
                            className="flex items-center gap-1.5 text-sm text-foreground"
                        >
                            <Icon
                                className={skill.color ? "size-4" : "size-4 text-foreground"}
                                style={skill.color ? {color:skill.color}:undefined}
                            />

                            <span>{skill.name}</span>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}