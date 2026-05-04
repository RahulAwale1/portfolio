"use client";

import { ArrowUpRight, Copy, Check } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

type ContactMethodCardProps = {
  label: string;
  value: string;
  href: string;
};

function getIcon(label: string) {
  switch (label.toLowerCase()) {
    case "email":
      return "/gmail.png";
    case "linkedin":
      return "/linkedin.png";
    case "github":
      return "/github.png";
    default:
      return null;
  }
}

export default function ContactMethodCard({
  label,
  value,
  href,
}: ContactMethodCardProps) {
  const [copied, setCopied] = useState(false);
  const isExternal = href.startsWith("http");
  const isEmail = href.startsWith("mailto:");
  const icon = getIcon(label);

  const handleCopy = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();

    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {}
  };

  const cardProps = isExternal
    ? {
        target: "_blank",
        rel: "noopener noreferrer",
      }
    : {};

  return (
    <a
      href={href}
      {...cardProps}
      className="surface group block rounded-[2rem] p-6 transition duration-300 hover:-translate-y-1 hover:shadow-xl"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex min-w-0 flex-1 items-center gap-3">
          <div className="surface-solid flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl">
            {icon ? (
              <Image
                src={icon}
                alt=""
                width={24}
                height={24}
                className="h-6 w-6 object-contain"
              />
            ) : (
              <ArrowUpRight size={22} className="text-[var(--accent)]" />
            )}
          </div>

          <div className="min-w-0">
            <p className="text-xs uppercase tracking-[0.22em] text-muted">
              {label}
            </p>
            <p
              title={value}
              className="mt-3 max-w-full truncate text-sm font-semibold tracking-tight md:text-base"
            >
              {value}
            </p>

          </div>
        </div>

        <div className="flex shrink-0 items-center gap-2">
          {isEmail && (
            <button
              type="button"
              onClick={handleCopy}
              className="surface-solid flex h-10 w-10 items-center justify-center rounded-xl text-[var(--accent)] transition duration-300 hover:-translate-y-0.5"
              aria-label="Copy email"
            >
              {copied ? <Check size={16} /> : <Copy size={16} />}
            </button>
          )}

          <div className="flex items-center gap-2 text-[var(--accent)]">
            <ArrowUpRight
              size={18}
              className="transition duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </div>
        </div>
      </div>
    </a>
  );
}
