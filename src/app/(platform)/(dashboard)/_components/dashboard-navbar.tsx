import Link from "next/link"
import { OrganizationSwitcher, UserButton } from "@clerk/nextjs"

import { Button } from "@/components/ui/button"
import { AppLogo } from "@/components/ui/logo"
import { CreateBoardButton } from "@/components/boards/create-board.button"
import { Icons } from "@/components/icons"
import { ModeToggle } from "@/components/mode-toggle"
import { organizationSwitcherAppearance } from "@/styles/organization-switcher-appearance"
import { userButtonAppearance } from "@/styles/user-button-appearance"
import { siteConfig } from "@/config/site"

import MobileSidebar from "./mobile-sidebar"

export const DashboardNavbar = () => {
  return (
    <>
      <nav className="fixed top-0 z-50 flex h-14 w-full items-center border-b border-[#e5e1f0] bg-background/90 px-3 backdrop-blur-xl dark:border-white/10 sm:px-4">
        <div className="mx-auto flex w-full min-w-0 items-center gap-2 md:max-w-screen-2xl md:gap-4">
          <MobileSidebar />
          <AppLogo compact />

          <div className="ml-auto flex shrink-0 items-center gap-1.5 sm:gap-2">
            <Button
              variant="ghost"
              asChild
              size="icon"
              className="hidden h-9 w-9 rounded-full border border-border/70 bg-background/60 text-muted-foreground hover:border-[#cfc6ee] hover:bg-[#f1effa] hover:text-[#5943c4] dark:hover:bg-white/10 sm:inline-flex"
            >
              <Link
                href={siteConfig.links.github}
                target="_blank"
                rel="noreferrer"
                aria-label="Flowdeck on GitHub"
              >
                <Icons.github className="h-4 w-4 stroke-[1.8px]" />
              </Link>
            </Button>
            <div className="grid h-9 w-9 place-items-center rounded-full border border-border/70 bg-background/60 [&_button]:h-8 [&_button]:w-8 [&_button]:rounded-full">
              <ModeToggle />
            </div>
            <div className="flex h-9 items-center rounded-full border border-border/70 bg-background/60 px-1">
              <OrganizationSwitcher
                hidePersonal
                afterSelectOrganizationUrl="/organization/:id"
                afterCreateOrganizationUrl="/organization/:id"
                appearance={organizationSwitcherAppearance}
              />
            </div>
            <UserButton afterSignOutUrl="/" appearance={userButtonAppearance} />
          </div>
        </div>
      </nav>
      {/* A div with height equals to nav to push other components downwards. */}
      <div className="h-14" />
    </>
  )
}
