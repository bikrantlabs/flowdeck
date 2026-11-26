import { SiteConfig } from "@/types"

import { env } from "@/env.mjs"

export const siteConfig: SiteConfig = {
  name: "Flowdeck",
  author: "bikrantlabs",
  description:
    "Bring your projects, tasks, and teammates into one clear workspace with Flowdeck.",
  keywords: [
    "Next.js",
    "React",
    "Tailwind CSS",
    "Radix UI",
    "shadcn/ui",
    "prisma",
    "@hello-pangea/dnd",
    "unsplash",
  ],
  url: {
    base: env.NEXT_PUBLIC_APP_URL,
    author: "https://github.com/bikrantlabs",
  },
  links: {
    github: "https://github.com/BikrantJung/trello-clone",
  },
  ogImage: `${env.NEXT_PUBLIC_APP_URL}/og.jpg`,
  icons: [
    {
      url: "/logo.svg",
      href: "/logo.svg",
    },
  ],
}
