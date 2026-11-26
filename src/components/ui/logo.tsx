import Link from "next/link"

export const AppLogo = ({ compact = false }: { compact?: boolean }) => {
  return (
    <Link
      href="/"
      aria-label="Flowdeck home"
      className="group flex shrink-0 items-center gap-2.5 transition-opacity hover:opacity-85 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8068e8] focus-visible:ring-offset-2"
    >
      <span className="grid h-9 w-9 place-items-center rounded-[13px] bg-[#6c56d9] text-white transition-transform group-hover:rotate-[-4deg]">
        <svg viewBox="0 0 36 36" className="h-6 w-6" fill="none" aria-hidden="true">
          <rect x="6" y="7" width="10" height="9" rx="2.5" fill="currentColor" />
          <rect x="20" y="7" width="10" height="9" rx="2.5" fill="currentColor" opacity=".72" />
          <rect x="6" y="20" width="10" height="9" rx="2.5" fill="currentColor" opacity=".72" />
          <path d="M21 24.5h8" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
        </svg>
      </span>
      <span
        className={`text-[15px] font-semibold tracking-[-0.035em] text-[#2b273d] dark:text-white ${compact ? "hidden md:inline" : ""}`}
      >
        Flowdeck
      </span>
    </Link>
  )
}
