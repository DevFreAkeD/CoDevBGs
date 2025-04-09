"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check, CheckCircle, Copy, X } from "lucide-react";
import { toast } from "sonner";

interface CodePreviewProps {
  isOpen: boolean;
  onClose: () => void;
  code: string;
}

export default function CodePreview({ isOpen, onClose, code }: CodePreviewProps) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    toast("Snippet copied to clipboard!", {
      className:
        "!bg-white dark:!bg-neutral-900 !text-neutral-900 dark:!text-neutral-200 !border !border-neutral-500 dark:!border-neutral-800 shadow",
      icon: <CheckCircle className="h-4 w-4 text-green-500" />,
    });
    setTimeout(() => setCopied(false), 2000);
  };

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          />

          {/* Modal */}
          <motion.div
            className="relative mx-4 w-full max-w-5xl overflow-hidden rounded-lg bg-background shadow-lg"
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            role="dialog"
            aria-modal="true"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b px-6 py-4 text-sm font-medium bg-muted/50">
              <span className="text-base font-semibold">Background Code (HTML/JSX)</span>

              <div className="flex items-center gap-2">
                <button
                  onClick={copyToClipboard}
                  className="flex items-center gap-1 rounded px-2 py-1 transition-colors hover:bg-muted"
                >
                  {copied ? (
                    <>
                      <Check className="h-4 w-4" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-4 w-4" />
                      <span>Copy</span>
                    </>
                  )}
                </button>

                <button
                  onClick={onClose}
                  className="rounded-full p-1 transition-colors hover:bg-muted"
                  aria-label="Close dialog"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* Code content */}
            <div className="max-h-[70vh] overflow-auto">
              <pre className="whitespace-pre-wrap break-words bg-muted/20 p-6 text-sm">
                <code className="font-mono">{code}</code>
              </pre>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}