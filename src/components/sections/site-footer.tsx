import { profile } from "@/lib/data/profile";
import { ViewCounter } from "../ui/view-counter";


export function SiteFooter() {
    return (
        <footer className="flex flex-col items-center gap-4 pt-8 pb-6 text-center">
            <p className="font-mono text-sm italic text-muted-foreground">
                &ldquo;{profile.quote}&rdquo;
            </p>

            <p className="text-sm text-foreground">
                Designed &amp; Made with <span className="text-red-500">❤️</span>
            </p>

            <div className="flex w-full items-center justify-between border-t border-border pt-4 font-mono text-xs text-muted-foreground">
                <span>{new Date().getFullYear()}. All rights reserved</span>
                <ViewCounter/>
            </div>
        </footer>
    )
}