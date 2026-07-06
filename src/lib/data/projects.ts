export type Project = {
    name: string;
    description: string;
    tech: string[];
    github: string;
    live?: string;
    image: string;
}

export const projects: Project[] = [
    {
        name: "Speakwell",
        description: "A full-stack SaaS tool that converts client survey responses into AI-generated testimonials using the Gemini API shareable form links, MongoDB storage, and a one-line embeddable JS widget.",
        tech: ["TypeScript", "React", "Node.js", "Express", "MongoDB", "Gemini API", "Tailwind CSS"],
        github: "https://github.com/deepx-sh/speakwell",
        live: "https://speakwell-psi.vercel.app/",
        image:"/projects/speakwell.png"
    },

     {
        name: "VistaView",
        description: "A full-stack tourism review platform where travelers discover authentic places, read verified reviews, and connect with verified place owners.",
        tech: ["JavaScript", "React", "Node.js", "Express", "MongoDB", "Redux", "Tailwind CSS","Cloudinary"],
        github: "https://github.com/deepx-sh/vistaview",
        live: "https://vistaview-kappa.vercel.app/",
        image:"/projects/vistaview.png"
    },
     
      {
        name: "SecureNation",
        description: "A production grade security first authentication system built with the MERN stack JWT sessions, email OTP verifications, secure password reset, multi-device session management, and rate limiting",
        tech: ["TypeScript", "React", "Node.js", "Express", "MongoDB","Tailwind CSS","bcrypt.js","JWT"],
        github: "https://github.com/deepx-sh/mern-auth-system",
        live: "https://securenation.vercel.app/",
        image:"/projects/securenation.png"
    },
]