"use client";

import { Search } from "lucide-react";

export default function Hero() {
  return (
    <div className="mx-auto mb-12 max-w-6xl text-center">
        <div className="my-12 text-center">
            <h1 className="mb-6 p-1 bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-sky-400 dark:to-teal-400 bg-clip-text text-4xl font-bold text-transparent md:text-5xl leading-tight">
                CoDevBGs – Modern Backgrounds
            </h1>
            <p className="mx-auto max-w-4xl text-2xl text-gray-600 dark:text-gray-300">
                Stunning backgrounds made for modern websites and apps. <br />
                Theme-aware, easy to preview, and ready to copy-paste.
            </p>
        </div>
    </div>
  );
}