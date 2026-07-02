"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Moon,Sun } from "lucide-react";

export function ThemeToggle() {
    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = useState(false);
    
    useEffect(() => {
        setMounted(true)
    }, []);

    if (!mounted) return <div className="size-9" aria-hidden />
    
    return (
        <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            aria-label="Toggle theme"
            className="inline-flex items-center justify-center rounded-md border border-border size-9 hover:bg-surface transition-colors"
        >
            {theme==="dark" ? <Sun className="size-4"/>:<Moon className="size-4"/>}
        </button>
    )
}