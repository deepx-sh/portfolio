"use client";

import { useTheme } from "next-themes";
import dynamic from "next/dynamic";
import { SectionLabel } from "../ui/section-label";

const GitHubCalendar = dynamic(
    () =>
        import("react-github-calendar").then((mod) => ({
            default:mod.GitHubCalendar
        })),
    {
        ssr:false
    }
)

const GITHUB_USERNAME = "deepx-sh"

export function GitHubActivity() {
    const { resolvedTheme } = useTheme()
    
    return (
        <section className="flex flex-col gap-4 border-b border-border py-8">
            <SectionLabel>GitHub Activity</SectionLabel>

            <div className="overflow-x-auto">
                <GitHubCalendar
                    username={GITHUB_USERNAME}
                    colorScheme={resolvedTheme === "dark" ? "dark" : "light"}
                    theme={{
                        light: ["#e2e2d5", "#b45309"],
                        dark:["#1c1d20","#f5a623"]
                    }}
                    blockSize={11}
                    blockMargin={3}
                    blockRadius={2}
                    fontSize={12}
                    labels={{
                        totalCount:"This year, I achieved {{count}} contributions"
                    }}
                />
            </div>
        </section>
    )
}