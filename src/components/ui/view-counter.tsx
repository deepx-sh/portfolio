"use client";

import { useEffect, useState } from "react";

export function ViewCounter() {
    const [count, setCount] = useState<number | null>(null);

    useEffect(() => {
        fetch("/api/views")
            .then((res) => res.json())
            .then((data) => setCount(data.count))
            .catch(()=>setCount(null))
    }, [])
    
    return (
        <span className="font-mono text-xs text-muted-foreground">
            Views #{count!==null ? count.toLocaleString():"-"}
        </span>
    )
}

