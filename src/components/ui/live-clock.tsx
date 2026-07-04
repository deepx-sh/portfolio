"use client";

import { useEffect, useState } from "react";

export function LiveClock() {
    const [time, setTime] = useState<string | null>(null)
    
    useEffect(() => {
        const tick = () =>
            setTime(
                new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit",second:"2-digit"})
            )
        tick()
        const id = setInterval(tick, 1000);
        return () => clearInterval(id);
    }, [])
    
    if (!time) return null
    return <span aria-label="Current local time">{time}</span>
}