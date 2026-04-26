"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

const navItems = [
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/resume", label: "Resume" },
  { href: "/contact", label: "Contact" },
];

export default function MobileMenu() {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) {
      return;
    }

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [open]);

  const navigateTo = (href: string) => {
    setOpen(false);
    router.push(href);
  };

  const closeMenu = () => {
    setOpen(false);
  };

  const overlay =
    open && typeof document !== "undefined"
      ? createPortal(
          <AnimatePresence>
            <motion.div
              className="fixed inset-0 z-[220] bg-[var(--background)] px-7 pb-8 pt-7 md:hidden"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -24, scale: 0.985 }}
              transition={{ type: "spring", stiffness: 120, damping: 22 }}
            >
              <motion.div
                className="grid-pattern pointer-events-none absolute inset-0 opacity-35"
                animate={{ opacity: 0.35 }}
                transition={{ duration: 0.25 }}
              />

              <motion.div
                className="relative flex items-center justify-between"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05, duration: 0.28 }}
              >
                <div>
                  <p className="text-base font-semibold tracking-tight">
                    Rahul Awale
                  </p>
                  <p className="mt-1 text-xs text-muted">
                    Applied AI / ML Engineer
                  </p>
                </div>

                <button
                  onClick={closeMenu}
                  className="surface rounded-2xl p-3 transition duration-300 ease-out active:scale-[0.98]"
                  aria-label="Close navigation menu"
                >
                  <X size={22} />
                </button>
              </motion.div>

              <motion.nav
                className="relative mt-20 flex flex-col"
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: {},
                  visible: {
                    transition: { staggerChildren: 0.07, delayChildren: 0.08 },
                  },
                }}
              >
                {navItems.map((item) => (
                  <motion.div
                    key={item.href}
                    variants={{
                      hidden: { opacity: 0, x: -18 },
                      visible: { opacity: 1, x: 0 },
                    }}
                    transition={{ type: "spring", stiffness: 140, damping: 20 }}
                  >
                    <Link
                      href={item.href}
                      onClick={(event) => {
                        event.preventDefault();
                        navigateTo(item.href);
                      }}
                      className="block border-b border-[var(--border)] py-6 text-4xl font-semibold tracking-tight text-[var(--foreground)] transition duration-300 active:scale-[0.98]"
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
              </motion.nav>
            </motion.div>
          </AnimatePresence>,
          document.body,
        )
      : null;

  return (
    <div className="relative md:hidden">
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="surface rounded-2xl p-2.5 transition duration-300 ease-out active:scale-[0.98]"
        aria-label="Toggle navigation menu"
        aria-expanded={open}
      >
        <Menu size={18} />
      </button>

      {overlay}
    </div>
  );
}
