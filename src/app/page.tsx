import { Achievements } from "@/components/sections/achievements";
import { GitHubActivity } from "@/components/sections/github-activity";
import { Hero } from "@/components/sections/hero";
import { OpenToWork } from "@/components/sections/open-to-work";
import { Projects } from "@/components/sections/projects";
import { Skills } from "@/components/sections/skills";
import { SiteHeader } from "@/components/site-header";
import { Connect } from "@/components/sections/connect";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <Hero />
      <OpenToWork/>
      <Skills />
      <GitHubActivity />
      <Projects />
      <Achievements />
      <Connect/>
    </>
  )
}