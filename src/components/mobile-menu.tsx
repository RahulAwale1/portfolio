"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navItems = [
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/resume", label: "Resume" },
  { href: "/contact", label: "Contact" },
];

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative md:hidden">
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="surface rounded-2xl p-2.5"
        aria-label="Toggle navigation menu"
        aria-expanded={open}
      >
        {open ? <X size={18} /> : <Menu size={18} />}
      </button>

      {open && (
        <div
          className="
            absolute right-0 top-[calc(100%+0.75rem)]
            z-[120] w-64
            overflow-hidden rounded-[1.5rem]
            border border-[var(--border)]
            bg-[color:var(--card-solid)]/96
            p-3 backdrop-blur-xl
            shadow-[0_20px_50px_rgba(0,0,0,0.14)]
            dark:bg-[color:var(--card-solid)]/90
          "
        >
          <nav className="flex flex-col gap-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-2xl px-4 py-3 text-sm font-medium text-muted transition hover:bg-black/5 hover:text-[var(--foreground)] dark:hover:bg-white/5"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </div>
  );
}