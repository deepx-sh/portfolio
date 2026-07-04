export function SectionLabel({ children }: { children: React.ReactNode }) {
    return (
        <div className="inline-flex items-center gap-1 font-mono text-xs text-muted-foreground">
            <span aria-hidden>[</span>
            <span>{children}</span>
            <span aria-hidden>]</span>
        </div>
    )
}