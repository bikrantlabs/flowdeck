import React from "react"

import { MarketingNavbar } from "./_components/navbar"

const MarketingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen">
      <MarketingNavbar />
      <main className="">{children}</main>
    </div>
  )
}

export default MarketingLayout
