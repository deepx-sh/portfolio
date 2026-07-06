import Image from "next/image";
import type { Achievement } from "@/lib/data/achievements";

export function AchievementCard({ achievement }: { achievement: Achievement }) {
    const Icon = achievement.icon;

    return (
        <div className="flex items-center gap-4 rounded-lg border border-border bg-surface p-4">
            <div className="relative size-14 shrink-0 overflow-hidden rounded-md border border-border bg-background flex items-center justify-center">
                <Image
                    src={achievement.image}
                    alt={achievement.title}
                    fill
                    priority
                    sizes="56px"
                    className="object-cover"
                />
            </div>

            <div className="flex flex-col gap-0.5">
                <h3 className="font-mono text-sm font-semibold leading-snug text-foreground">
                    {achievement.title}
                </h3>

                <p className="text-sm text-muted-foreground">{achievement.issuer}</p>
                <span className="font-mono text-xs text-muted-foreground">{achievement.year}</span>
            </div>
        </div>
    )
}