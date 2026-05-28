"use client"

import { useState } from "react"
import TitleBar from "@/components/TitleBar"
import StatusBar from "@/components/StatusBar"
import Sidebar from "@/components/Sidebar"
import TabBar from "@/components/TabBar"
import PageTransition from "@/components/PageTransition"

export default function IDEShell({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="flex flex-col h-screen overflow-hidden bg-bg">
      <TitleBar onMenuToggle={() => setSidebarOpen(v => !v)} />
      <div className="flex flex-1 overflow-hidden relative">
        <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
        <div className="flex flex-col flex-1 overflow-hidden">
          <TabBar />
          <main className="flex-1 overflow-auto">
            <PageTransition>{children}</PageTransition>
          </main>
        </div>
      </div>
      <StatusBar />
    </div>
  )
}
