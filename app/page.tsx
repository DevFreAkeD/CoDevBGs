"use client";

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import { backgrounds } from "@/lib/constants";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <Header />

      <main className="pt-20 container mx-auto max-w-7xl px-4 py-8">
        <Hero backgrounds={backgrounds} />
      </main>
    </div>
  );
}