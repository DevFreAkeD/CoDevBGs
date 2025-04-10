"use client";

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import { backgrounds } from "@/lib/constants";
import { useState } from "react";
import CodePreview from "@/components/CodePreview";
import Footer from "@/components/Footer";

export default function Home() {
  const [codePreviewOpen, setCodePreviewOpen] = useState(false);
  const [previewCode, setPreviewCode] = useState("");

  return (
    <div className="relative min-h-screen">
      <Header />

      <main className="pt-4 container mx-auto max-w-7xl px-4 py-8">
        <Hero
          backgrounds={backgrounds}
          onPreviewCode={(code) => {
            setPreviewCode(code);
            setCodePreviewOpen(true);
          }}
        />
      </main>

      {/* Footer */}
      <Footer />
      
      {/*Code Preview*/}
      <CodePreview
        isOpen={codePreviewOpen}
        onClose={() => setCodePreviewOpen(false)}
        code={previewCode}
      />
    </div>
  );
}