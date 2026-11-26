import Link from "next/link"
import {
  ArrowUpRight,
  Atom,
  Blocks,
  Braces,
  Check,
  Database,
  MoreHorizontal,
  Paintbrush,
  PanelsTopLeft,
  Plus,
  Server,
  ShieldCheck,
} from "lucide-react"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"

type PreviewCard = {
  title: string
  label: string
  color: string
  done?: boolean
}

const boardLists: { title: string; tone: string; cards: PreviewCard[] }[] = [
  {
    title: "Up next",
    tone: "bg-[#e8e3ff] text-[#5744b8]",
    cards: [
      {
        title: "Map out the launch plan",
        label: "Planning",
        color: "bg-[#8068e8]",
      },
      {
        title: "Gather the first ideas",
        label: "Research",
        color: "bg-[#e9a84a]",
      },
    ],
  },
  {
    title: "In motion",
    tone: "bg-[#ffead7] text-[#a45b19]",
    cards: [
      {
        title: "Shape the new experience",
        label: "Design",
        color: "bg-[#ed8d55]",
      },
      {
        title: "Review the open questions",
        label: "Team sync",
        color: "bg-[#55a89b]",
      },
    ],
  },
  {
    title: "Completed",
    tone: "bg-[#e1f2db] text-[#477a3f]",
    cards: [
      {
        title: "Bring everyone together",
        label: "People",
        color: "bg-[#78ad62]",
        done: true,
      },
      {
        title: "Set up the workspace",
        label: "Getting started",
        color: "bg-[#8068e8]",
        done: true,
      },
    ],
  },
]

const technologyStack = [
  { name: "Next.js", category: "Framework", detail: "App Router and server actions", href: "https://nextjs.org/", icon: PanelsTopLeft, tone: "bg-[#eeeaff] text-[#684fd4]" },
  { name: "React", category: "Interface", detail: "Composable, interactive UI", href: "https://react.dev/", icon: Atom, tone: "bg-[#e2f6fa] text-[#27869d]" },
  { name: "TypeScript", category: "Language", detail: "Typed application code", href: "https://www.typescriptlang.org/", icon: Braces, tone: "bg-[#e4efff] text-[#3978c5]" },
  { name: "Tailwind CSS", category: "Styling", detail: "Utility-first design system", href: "https://tailwindcss.com/", icon: Paintbrush, tone: "bg-[#e2f5f0] text-[#398c7f]" },
  { name: "shadcn/ui + Radix", category: "Components", detail: "Accessible interface primitives", href: "https://ui.shadcn.com/", icon: Blocks, tone: "bg-[#eeeaff] text-[#684fd4]" },
  { name: "Clerk", category: "Authentication", detail: "Sign-in and organization management", href: "https://clerk.com/", icon: ShieldCheck, tone: "bg-[#f1e9ff] text-[#7357d8]" },
  { name: "Prisma", category: "Data", detail: "Database access and schema", href: "https://www.prisma.io/", icon: Database, tone: "bg-[#e6f1e8] text-[#426b5a]" },
  { name: "PostgreSQL", category: "Database", detail: "Relational project data", href: "https://www.postgresql.org/", icon: Server, tone: "bg-[#e7eff8] text-[#4778a6]" },
]

function BoardPreview() {
  return (
    <div className="relative mx-auto w-full min-w-0 max-w-[660px]">
      <div
        className="absolute -inset-4 rounded-[2rem] bg-[#7967e8] sm:-inset-6"
        aria-hidden="true"
      />
      <section
        aria-label="Illustrative Flowdeck board showing tasks moving through a project"
        className="relative overflow-hidden rounded-2xl border border-[#e6e2f2] bg-[#fbfaff] shadow-[0_24px_70px_-28px_rgba(38,25,91,0.48)]"
      >
        <div className="flex items-center justify-between border-b border-[#e9e6f0] px-4 py-3 sm:px-5">
          <div className="flex min-w-0 items-center gap-3">
            <div className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-[#eeeaff] text-[#674fd1]">
              <span className="text-sm font-bold">F</span>
            </div>
            <div className="min-w-0">
              <p className="truncate text-sm font-semibold tracking-[-0.02em] text-[#28243a]">
                First things first
              </p>
              <p className="text-xs text-[#777288]">A sample workspace</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="hidden -space-x-2 sm:flex" aria-hidden="true">
              <span className="grid h-7 w-7 place-items-center rounded-full border-2 border-[#fbfaff] bg-[#f3c5ae] text-[9px] font-semibold text-[#68463b]">
                AL
              </span>
              <span className="grid h-7 w-7 place-items-center rounded-full border-2 border-[#fbfaff] bg-[#c6d9c1] text-[9px] font-semibold text-[#425c3e]">
                MK
              </span>
              <span className="grid h-7 w-7 place-items-center rounded-full border-2 border-[#fbfaff] bg-[#c9c2ed] text-[9px] font-semibold text-[#514583]">
                +2
              </span>
            </div>
            <span
              aria-hidden="true"
              className="grid h-8 w-8 place-items-center rounded-lg bg-[#6c56d9] text-white"
            >
              <Plus className="h-4 w-4" aria-hidden="true" />
            </span>
            <span
              aria-hidden="true"
              className="grid h-8 w-8 place-items-center rounded-lg text-[#777288]"
            >
              <MoreHorizontal className="h-4 w-4" aria-hidden="true" />
            </span>
          </div>
        </div>

        <div className="overflow-x-auto px-3 py-4 sm:px-5 sm:py-5">
          <div className="grid min-w-[360px] grid-cols-3 gap-2.5 sm:min-w-0 sm:gap-4">
            {boardLists.map((list) => (
              <div key={list.title}>
                <div className="mb-3 flex items-center justify-between gap-2">
                  <div className="flex min-w-0 items-center gap-2">
                    <span
                      className={cn(
                        "h-2 w-2 shrink-0 rounded-full",
                        list.tone.split(" ")[0]
                      )}
                    />
                    <h2 className="truncate text-xs font-semibold text-[#39354a] sm:text-sm">
                      {list.title}
                    </h2>
                    <span className="text-[11px] tabular-nums text-[#8a8699]">
                      {list.cards.length}
                    </span>
                  </div>
                  <span
                    aria-hidden="true"
                    className="grid h-6 w-6 shrink-0 place-items-center rounded-md text-[#8a8699]"
                  >
                    <Plus className="h-3.5 w-3.5" aria-hidden="true" />
                  </span>
                </div>
                <ul className="space-y-2.5">
                  {list.cards.map((card, index) => (
                    <li
                      key={card.title}
                      className={cn(
                        "rounded-xl border border-[#eeebf4] bg-white p-2.5 shadow-[0_2px_8px_rgba(40,32,72,0.04)] sm:p-3.5",
                        index > 0 && "hidden sm:block"
                      )}
                    >
                      <div className="mb-2.5 flex items-start justify-between gap-2">
                        <p className="text-[11px] font-medium leading-[1.45] text-[#373348] sm:text-xs">
                          {card.title}
                        </p>
                        {card.done ? (
                          <Check
                            className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#5b9650]"
                            aria-label="Complete"
                          />
                        ) : null}
                      </div>
                      <span className="inline-flex items-center gap-1.5 rounded-md bg-[#f5f3f8] px-2 py-1 text-[9px] font-medium text-[#706b7e] sm:text-[10px]">
                        <span
                          className={cn("h-1.5 w-1.5 rounded-full", card.color)}
                        />
                        {card.label}
                      </span>
                    </li>
                  ))}
                </ul>
                <div
                  aria-hidden="true"
                  className="mt-2 flex w-full items-center gap-1.5 rounded-lg px-2 py-2 text-left text-[11px] font-medium text-[#777288]"
                >
                  <Plus className="h-3.5 w-3.5" aria-hidden="true" /> Add a card
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-2 border-t border-[#e9e6f0] bg-[#f7f5fb] px-4 py-2.5 text-[10px] font-medium text-[#706b7e] sm:px-5">
          <span className="h-1.5 w-1.5 rounded-full bg-[#77ad68]" /> Your work,
          all in one place
        </div>
      </section>
      <div className="absolute -bottom-5 -left-5 hidden items-center gap-2 rounded-xl border border-[#e7e3f0] bg-white px-3 py-2 shadow-[0_12px_28px_-16px_rgba(32,24,66,0.4)] sm:flex">
        <span className="grid h-6 w-6 place-items-center rounded-lg bg-[#e4f2df] text-[#53844a]">
          <Check className="h-3.5 w-3.5" aria-hidden="true" />
        </span>
        <span className="text-[11px] font-medium text-[#403c50]">
          A little progress, every day
        </span>
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <main>
      <section className="relative flex h-[100svh] min-h-0 items-center overflow-hidden bg-[#f8f7f3] px-5 pb-20 pt-16 text-[#242137] dark:bg-[#1d1b29] dark:text-[#f1eefb] sm:px-8 sm:pb-28 sm:pt-24 lg:px-12">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -right-36 top-24 h-[34rem] w-[34rem] rounded-full bg-[#eeeaff] dark:bg-[#302a49] sm:-right-24" />
          <div className="absolute -bottom-64 left-[18%] h-[28rem] w-[28rem] rounded-full bg-[#fff0df] dark:bg-[#392b31]" />
        </div>

        <div className="relative mx-auto grid w-full max-w-[1320px] grid-cols-1 items-center gap-8 py-2 sm:gap-14 sm:py-8 lg:grid-cols-[0.88fr_1.12fr] lg:gap-12 xl:gap-20">
          <div className="mx-auto w-full min-w-0 max-w-[540px] text-center lg:mx-0 lg:text-left">
            <h1 className="text-[clamp(2.625rem,6.2vw,5.8rem)] font-semibold leading-[0.98] tracking-[-0.045em] text-[#25213a] dark:text-[#f1eefb]">
              Make work feel
              <span className="mt-1 block text-[#6c56d9]">more in motion.</span>
            </h1>
            <p className="mx-auto mt-4 max-w-[34rem] text-base leading-7 text-[#696579] dark:text-[#c5c1d0] sm:mt-6 sm:text-lg sm:leading-8 lg:mx-0">
              Bring your projects, tasks, and teammates into one clear workspace.
              Make the next step easy to see—and easier to take.
            </p>
            <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:mt-8 sm:flex-row lg:justify-start">
              <Link
                href="/sign-up"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "h-12 rounded-xl bg-[#6c56d9] px-6 text-sm font-semibold text-white shadow-[0_10px_24px_-12px_rgba(91,67,196,0.75)] hover:bg-[#5943c4]"
                )}
              >
                Register
                <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden="true" />
              </Link>
              <p className="text-xs font-medium text-[#777288] dark:text-[#b9b3c9]">
                Boards, lists, and cards—together.
              </p>
            </div>
            <p className="mt-5 text-xs font-medium tracking-[0.01em] text-[#8b8799] sm:mt-8">
              <span className="text-[#8b8799] dark:text-[#b9b3c9]">
                A little more clarity for the work you do every day.
              </span>
            </p>
          </div>

          <div className="mx-auto w-full min-w-0 max-w-[700px] px-1 py-0 sm:px-4 sm:py-5 lg:px-0">
            <BoardPreview />
          </div>
        </div>
      </section>

      <section
        id="stack"
        className="scroll-mt-24 border-t border-[#e5e1d8] bg-[#f2f0ea] px-5 py-20 text-[#242137] dark:border-white/10 dark:bg-[#191724] dark:text-[#f1eefb] sm:px-8 sm:py-24 lg:px-12"
      >
        <div className="mx-auto grid w-full max-w-[1320px] gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
          <div className="max-w-[420px]">
            <h2 className="text-3xl font-semibold leading-tight tracking-[-0.035em] sm:text-4xl">
              Thoughtful tools. One clear workspace.
            </h2>
            <p className="mt-5 text-base leading-7 text-[#696579] dark:text-[#c5c1d0]">
              Flowdeck brings together dependable tools for planning, collaboration, and the details behind every board.
            </p>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
            {technologyStack.map((technology) => (
              <li key={technology.name}>
                <Link
                  href={technology.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex min-h-[168px] flex-col justify-between rounded-2xl border border-[#e5e1d8] bg-white/65 p-5 transition duration-200 hover:-translate-y-0.5 hover:border-[#c9bee9] hover:bg-white hover:shadow-[0_16px_32px_-24px_rgba(49,37,96,0.42)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6c56d9] dark:border-white/10 dark:bg-white/[0.035] dark:hover:border-white/20 dark:hover:bg-white/[0.07]"
                >
                  <span className="flex items-start justify-between">
                    <span className={cn("grid h-10 w-10 place-items-center rounded-xl", technology.tone)}>
                      <technology.icon className="h-[18px] w-[18px]" aria-hidden="true" />
                    </span>
                    <ArrowUpRight className="h-4 w-4 text-[#aaa6b4] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#6c56d9]" aria-hidden="true" />
                  </span>
                  <span>
                    <span className="mb-1 block text-[10px] font-semibold uppercase tracking-[0.12em] text-[#898497] dark:text-[#aaa5b8]">{technology.category}</span>
                    <span className="block text-base font-semibold tracking-[-0.02em] text-[#302c40] dark:text-[#f1eefb]">{technology.name}</span>
                    <span className="mt-1 block text-xs leading-5 text-[#777288] dark:text-[#b9b3c9]">{technology.detail}</span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  )
}
