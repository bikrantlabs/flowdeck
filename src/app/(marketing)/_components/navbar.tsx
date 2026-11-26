import Link from "next/link"
import { ArrowUpRight, Github, Layers3, LogIn } from "lucide-react"

import { siteConfig } from "@/config/site"
import { ModeToggle } from "@/components/mode-toggle"

const navPill =
  "inline-flex h-9 items-center justify-center gap-2 rounded-full border border-white/45 bg-white/20 px-3 text-xs font-medium text-[#514c66] transition-colors hover:border-white/70 hover:bg-white/45 hover:text-[#342b5e] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8068e8] dark:border-white/10 dark:bg-white/[0.06] dark:text-[#dfdbea] dark:hover:bg-white/[0.12]"

function FlowdeckWordmark() {
  return (
    <Link href="/" aria-label="Flowdeck home" className="group flex shrink-0 items-center gap-2.5">
      <span className="grid h-9 w-9 place-items-center rounded-[13px] bg-[#6c56d9] text-white transition-transform group-hover:rotate-[-4deg]">
        <svg viewBox="0 0 36 36" className="h-6 w-6" fill="none" aria-hidden="true">
          <rect x="6" y="7" width="10" height="9" rx="2.5" fill="currentColor" />
          <rect x="20" y="7" width="10" height="9" rx="2.5" fill="currentColor" opacity=".72" />
          <rect x="6" y="20" width="10" height="9" rx="2.5" fill="currentColor" opacity=".72" />
          <path d="M21 24.5h8" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
        </svg>
      </span>
      <span className="text-[15px] font-semibold tracking-[-0.035em] text-[#2b273d] dark:text-white">Flowdeck</span>
    </Link>
  )
}

export const MarketingNavbar = () => {
  return (
    <nav
      aria-label="Primary navigation"
      className="fixed left-1/2 top-4 z-[100] flex h-14 w-[calc(100%-1rem)] max-w-[960px] -translate-x-1/2 items-center justify-between rounded-full border border-white/55 bg-white/25 px-2 backdrop-blur-2xl dark:border-white/10 dark:bg-[#242131]/35 sm:w-[calc(100%-2rem)] sm:px-4"
    >
      <FlowdeckWordmark />
      <div className="ml-auto flex items-center gap-1 sm:gap-1.5">
        <Link href="/#stack" className={navPill}>
          <Layers3 className="h-3.5 w-3.5 text-[#735ee0]" aria-hidden="true" />
          <span className="hidden sm:inline">Tech stack</span>
          <span className="sr-only sm:hidden">Tech stack</span>
        </Link>
        <Link
          href={siteConfig.links.github}
          target="_blank"
          rel="noreferrer"
          aria-label="Flowdeck on GitHub"
          className={`${navPill} hidden w-9 px-0 md:inline-flex`}
        >
          <Github className="h-4 w-4" aria-hidden="true" />
        </Link>
        <div className="grid h-9 w-9 place-items-center rounded-full border border-white/45 bg-white/20 dark:border-white/10 dark:bg-white/[0.06] [&_button]:h-8 [&_button]:w-8 [&_button]:rounded-full">
          <ModeToggle />
        </div>
        <Link href="/sign-in" className={`${navPill} hidden sm:inline-flex`}>
          <LogIn className="h-3.5 w-3.5" aria-hidden="true" />
          Login
        </Link>
        <Link
          href="/sign-up"
          className="inline-flex h-9 items-center gap-1.5 rounded-full bg-[#6c56d9] px-4 text-xs font-semibold text-white transition-colors hover:bg-[#5943c4] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8068e8] focus-visible:ring-offset-2 dark:ring-offset-[#242131]"
        >
          Register
          <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
        </Link>
      </div>
    </nav>
  )
}
