"use client";

import Link from "next/link";
import DarkModeToggle from "./DarkModeToggle";
import Image from "next/image";

export default function Header() {
    return (
        <header className="bg-background/30 backdrop-blur-xl border-b border-border">
            <div className="container mx-auto px-4">
            <div className="flex lg:mx-10 md:mx-5 h-16 items-center justify-between gap-4">
                    {/* Left Side (Logo) */}
                    <div className="flex items-center gap-4 flex-1">
                        <Link
                            href="/"
                            prefetch={false}
                            className="flex items-center space-x-2 hover:opacity-90 transition-opacity"
                        >
                            {/* Logo Image */}
                            <Image
                            src="/CoDevBGs_Logo.png"
                            alt="CoDevBGs Logo"
                            width={32}
                            height={32}
                            className="rounded-md"
                            />
                            <span className="lg:text-xl md:text-md font-bold bg-gradient-to-r bg-clip-text text-transparent from-blue-600 to-cyan-500 dark:from-sky-400 dark:to-teal-400">
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