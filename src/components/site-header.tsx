import { ThemeToggle } from "./theme-toggle";


export function SiteHeader() {
    return (
        <div className="flex justify-end pt-6">
            <ThemeToggle/>
        </div>
    )
}