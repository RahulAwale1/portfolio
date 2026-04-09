"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "./theme-toggle";
import MobileMenu from "./mobile-menu";

const navItems = [
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/resume", label: "Resume" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-3 z-[100]">
      <div className="container-width">
        <div
          className="
            relative rounded-[1.75rem]
            border border-[var(--border)]
            bg-[color:var(--card-solid)]/92
            backdrop-blur-xl
            shadow-[0_12px_40px_rgba(0,0,0,0.08)]
            dark:bg-[color:var(--card-solid)]/85
          "
        >

          <div className="relative flex items-center justify-between px-5 py-4 md:px-7">
            <Link
              href="/"
              className="group flex items-center gap-3"
              aria-label="Go to homepage"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[var(--accent)]/12 text-[var(--accent)] ring-1 ring-[var(--accent)]/10 transition duration-300 group-hover:scale-[1.03] group-hover:bg-[var(--accent)]/16">
                <span className="text-sm font-bold tracking-wide">RA</span>
              </div>

              <div className="leading-tight">
                <p className="text-base font-semibold tracking-tight md:text-lg">
                  Rahul Awale
                </p>
                <p className="hidden text-xs text-muted md:block">
                  Applied AI / ML Engineer
                </p>
              </div>
            </Link>

            <nav className="hidden items-center gap-2 md:flex">
              {navItems.map((item) => {
                const isActive =
                  pathname === item.href ||
                  (item.href !== "/" && pathname.startsWith(item.href));

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`rounded-2xl px-4 py-2.5 text-sm font-medium transition duration-300 ${
                      isActive
                        ? "bg-[var(--accent)] text-white shadow-sm"
                        : "text-muted hover:bg-black/5 hover:text-[var(--foreground)] dark:hover:bg-white/5"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            <div className="flex items-center gap-2">
              <div className="hidden md:block">
                <ThemeToggle />
              </div>

              <MobileMenu />

              <div className="md:hidden">
                <ThemeToggle />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}