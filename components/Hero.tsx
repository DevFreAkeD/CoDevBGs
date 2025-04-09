"use client";

import { useState } from "react";
import BackgroundGrid from "./BGGrid";
import { BackgroundType } from "@/lib/constants";

interface HeroProps {
  backgrounds: BackgroundType[];
}

export default function Hero({ backgrounds }: HeroProps) {
  const [selectedBackground, setSelectedBackground] = useState<BackgroundType>(backgrounds[0]);

  return (
    <div className="relative min-h-screen">
      {/* Background wrapper */}
      <div className="fixed inset-0 -z-10">{selectedBackground.component}</div>

      <div className="relative mx-auto mb-12 max-w-6xl text-center overflow-hidden">
        {/* Content */}
        <div className="my-9 text-center relative z-10 px-4">
          <h1 className="mb-6 p-1 bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-sky-400 dark:to-teal-400 bg-clip-text text-4xl font-bold text-transparent md:text-5xl leading-tight">
            CoDevBGs – Modern Backgrounds
          </h1>
          <p className="mx-auto max-w-4xl text-2xl text-gray-600 dark:text-gray-300">
            Stunning backgrounds made for modern websites and apps. <br />
            Theme-aware, easy to preview, and ready to copy-paste.
          </p>
        </div>

        {/* Grid */}
        <BackgroundGrid
          backgrounds={backgrounds}
          selectedBackground={selectedBackground}
          onSelect={setSelectedBackground}
        />
      </div>
    </div>
  );
}