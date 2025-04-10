import { Github, Mail, User } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="py-8 text-center text-sm text-muted-foreground space-y-4">
    
      {/* Logo */}
      <div className="flex justify-center items-center gap-2">
        <Image
          src="/CoDevBGs_Logo.png"
          alt="CoDevBGs Logo"
          width={28}
          height={28}
          className="rounded-md"
        />
        <span className="font-bold text-base bg-gradient-to-r bg-clip-text text-transparent from-blue-600 to-cyan-500 dark:from-sky-400 dark:to-teal-400">
          CoDevBGs
        </span>
      </div>

      {/* Text */}
      <p>
        © {new Date().getFullYear()} CoDevBGs | Made with ❤️ by{" "}
        <a
          href="https://github.com/DevFreAkeD"
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium bg-gradient-to-r bg-clip-text text-transparent from-blue-600 to-cyan-500 dark:from-sky-400 dark:to-teal-400"
        >
          FreAkeD
        </a>{" "}
        | Powered by{" "}
        <a
          href="https://codevcompile.com"
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium bg-gradient-to-r bg-clip-text text-transparent from-blue-600 to-cyan-500 dark:from-sky-400 dark:to-teal-400"
        >
          CoDevCompile
        </a>
      </p>

      {/* Icon Row with gradient hover */}
      <div className="mt-4 flex justify-center gap-6">
        {[
          {
            icon: Github,
            href: "https://github.com/DevFreAkeD",
          },
          {
            icon: Mail,
            href: "mailto:tusharnagar146@outlook.com",
          },
          {
            icon: User,
            href: "https://github.com/DevFreAkeD",
          },
        ].map(({ icon: Icon, href }, index) => (
          <a
            key={index}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-full p-2"
          >
            <Icon className="h-5 w-5 transition-all stroke-muted-foreground group-hover:stroke-[url(#gradient-stroke)]" />

            <svg width="0" height="0">
              <defs>
                <linearGradient
                  id="gradient-stroke"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="0%"
                >
                  <stop offset="0%" stopColor="#2563eb" />
                  <stop offset="100%" stopColor="#06b6d4" />
                </linearGradient>
              </defs>
            </svg>
          </a>
        ))}
      </div>
    </footer>
  );
}