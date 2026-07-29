# deepprajapati.in - Personal Portfolio

Personal portfolio website built with Next.js, TypeScript, and Tailwind CSS.

Live at [deepprajapati.in](https://deepprajapati.in)

---

## Tech Stack

- **Framework** - Next.js 16 (App Router)
- **Language** - TypeScript
- **Styling** - Tailwind CSS v4
- **Icons** - Lucide React, React Icons
- **Theme** - next-themes (dark/light toggle)
- **View Counter** - Upstash Redis
- **Deployment** - Vercel
- **Fonts** - Geist Sans, JetBrains Mono

---

## Features

- Dark/light mode toggle
- Live GitHub contribution heatmap
- Real-time view counter (deduped via cookie)
- Responsive across mobile, tablet, and desktop
- SEO optimised - Open Graph, Twitter cards, JSON-LD, sitemap
- Dynamically generated OG image via `next/og`

---

## Sections

- **Hero** - name, handle, status, live clock, bio with inline tech icons
- **Skills** - full tech stack with brand icons
- **GitHub Activity** - real contribution heatmap
- **Open to Work** - availability status with pulsing indicator
- **Projects** - featured project cards with screenshots, tech tags, live/GitHub links
- **Achievements** - gold medal, Government of India security acknowledgment
- **Connect** - social links
- **Footer** - quote, view counter

---

## Running Locally

**Prerequisites:** Node.js 20.9+

```bash
# Clone the repo
git clone https://github.com/deepx-sh/portfolio.git
cd portfolio

# Install dependencies
npm install

# Start the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## Environment Variables

Create a `.env.local` file at the project root:

```env
NEXT_PUBLIC_SITE_URL=https://deepprajapati.in
UPSTASH_REDIS_REST_URL=your-upstash-url
UPSTASH_REDIS_REST_TOKEN=your-upstash-token
```

---

---

## Deployment

Deployed on Vercel. Add the three environment variables above in  
**Vercel → Project → Settings → Environment Variables** before deploying.

---

## License

Not open source. Feel free to take inspiration, but please don't copy the design or content directly.

---

Built by [Deep Prajapati](https://deepprajapati.in)
