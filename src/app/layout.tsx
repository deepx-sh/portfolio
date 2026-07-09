import type { Metadata } from "next";
import { Geist, JetBrains_Mono } from "next/font/google";
import ThemeProvider from "@/components/theme-provider";
import "./globals.css";
import { SiteFooter } from "@/components/sections/site-footer";
import { profile } from "@/lib/data/profile";

const siteUrl=process.env.NEXT_PUBLIC_SITE_URL ?? "https://deepprajapati.in"
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets:["latin"]
})

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${profile.name} - Full Stack Developer`,
    template: `%s | ${profile.name}`
  },
  description: "Full Stack Developer specializing React, TypeScript, JavaScript, Express, MongoDB, MySQL and Java. Open to full-stack roles",
  keywords: [
    profile.name,
    "Full Stack Developer",
    "React Developer",
    "MERN Stack Developer",
    "Full Stack MERN Developer",
    "TypeScript Developer",
    "Java",
    "deepcreates",
    "deep prajapati",
    "Deep Prajapati",
    "Deep Prajapati Software Engineer"
  ],
  openGraph: {
    title: `${profile.name} - Full Stack Developer`,
    description: "Full Stack Developer specializing in React, TypeScript, Express, MongoDB, MySQL and Java",
    url: siteUrl,
    siteName: profile.name,
    locale: "en_US",
    type: "website"
  },

  twitter: {
    card: "summary_large_image",
    title: `${profile.name} - Full Stack Developer`,
        description: "Full Stack Developer specializing in React, TypeScript, Express, MongoDB, MySQL and Java",
    creator:profile.social.twitter.replace("https://x.com/","@")
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
    >
      <body className={`${geistSans.variable} ${jetbrainsMono.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <div className="max-w-2xl mx-auto px-4">
            <script type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                  "@context": "https://schema.org",
                  "@type": "Person",
                  name: profile.name,
                  url: siteUrl,
                  jobTitle: "Full Stack Developer",
                  sameAs: [
                    profile.social.github,
                    profile.social.linkedin,
                    profile.social.twitter
                  ],
                  knowsAbout: [
                    "React",
                    "TypeScript",
                    "JavaScript",
                    "Node.js",
                    "Express",
                    "MongoDB",
                    "MySQL",
                    "Next.js",
                    "Tailwind CSS",
                    "Java"
                  ]
                })
              }}
            ></script>
            {children}
            <SiteFooter/>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
