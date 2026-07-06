import { achievements } from "@/lib/data/achievements";
import { AchievementCard } from "../ui/achievement-card";
import { SectionLabel } from "../ui/section-label";


export function Achievements() {
    return (
        <section className="flex flex-col gap-4 border-b border-border py-8">
            <SectionLabel>Achievements</SectionLabel>
            <div className="flex flex-col gap-3">
                {achievements.map((achievement) => (
                    <AchievementCard key={achievement.title} achievement={achievement}/>
                ))}
            </div>
        </section>
    )
}