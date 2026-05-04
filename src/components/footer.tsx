import Image from "next/image";
import Link from "next/link";

const socialLinks = [
  {
    href: "https://www.linkedin.com/in/rahul-awale/",
    label: "LinkedIn",
    icon: "/linkedin.png",
  },
  {
    href: "https://github.com/RahulAwale1",
    label: "GitHub",
    icon: "/github.png",
  },
];

export default function Footer() {
  return (
    <footer className="pb-8 pt-8">
      <div className="container-width">
        <div className="surface relative overflow-hidden rounded-[2rem] px-6 py-5 md:px-8">
          <div className="noise-layer pointer-events-none absolute inset-0 opacity-[0.035]" />
          <div className="pointer-events-none absolute -right-20 -top-24 h-44 w-44 rounded-full bg-[var(--glow)] blur-3xl" />

          <div className="relative flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <Link href="/" className="inline-block" aria-label="Go to homepage">
              <p className="font-mono text-lg font-semibold tracking-tight">
                Rahul Awale
              </p>
              <p className="mt-1 font-mono text-xs uppercase tracking-[0.18em] text-muted">
                Applied AI / ML Engineer
              </p>
            </Link>

            <div className="flex flex-col gap-4 md:items-end">
              <div className="flex items-center gap-3">
                {socialLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-2xl border border-[var(--border)] bg-white/35 transition duration-300 ease-out hover:-translate-y-0.5 hover:bg-white/55 active:scale-[0.98] dark:bg-white/[0.035] dark:hover:bg-white/[0.06]"
                    aria-label={`Open Rahul Awale on ${link.label}`}
                  >
                    <Image
                      src={link.icon}
                      alt=""
                      width={20}
                      height={20}
                      className="h-5 w-5 object-contain"
                    />
                  </a>
                ))}
              </div>

              <p className="text-xs text-muted">
                © 2026 Rahul Awale. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
