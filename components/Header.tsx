"use client";

import Link from "next/link";
import DarkModeToggle from "./DarkModeToggle";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="w-full mx-auto px-4">
        <div className="flex mx-10 h-16 items-center justify-between gap-4">
          {/* Left Side (Logo) */}
          <div className="flex items-center gap-4 flex-1">
            <Link
              href="/"
              prefetch={false}
              className="flex items-center space-x-2 hover:opacity-90 transition-opacity"
            >
              <span className="lg:text-xl md:text-md font-bold bg-gradient-to-r from-primary/90 to-primary bg-clip-text text-transparent dark:text-zinc-100">
                CoDevBGs
              </span>
            </Link>
          </div>

          {/* Right: Dark Mode Toggle */}
          <DarkModeToggle />
        </div>
      </div>
    </header>
  );
}