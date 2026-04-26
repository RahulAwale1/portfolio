export default function ScrollBulb() {
  return (
    <div className="pointer-events-none absolute left-[58%] top-0 hidden -translate-x-1/2 opacity-75 md:block lg:left-[54%] dark:opacity-90">
      <div className="mx-auto h-56 w-px bg-[var(--accent)]/22 dark:bg-[var(--border)]" />

      <div className="relative mx-auto flex h-20 w-20 items-start justify-center">
        <div className="absolute top-3 h-32 w-32 rounded-full bg-[#f2d274] opacity-25 blur-3xl dark:h-36 dark:w-36 dark:bg-[rgb(255,235,156)] dark:opacity-50" />

        <div className="relative mt-1 flex h-14 w-14 items-center justify-center rounded-full border border-[#d9bd76]/55 bg-[#fff0b8]/70 shadow-[inset_0_1px_0_rgba(255,255,255,0.72),0_18px_44px_-30px_rgba(47,65,86,0.48)] dark:border-white/50 dark:bg-[#fff5bc]/75 dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.7),0_18px_48px_-24px_rgba(47,65,86,0.75)]">
          <div className="absolute -top-2 h-4 w-7 rounded-t-lg border border-[var(--border)] bg-[var(--card-solid)]" />
          <div className="absolute top-3 h-4 w-5 rounded-full bg-white/55 blur-sm" />
          <div className="absolute bottom-2 h-2 w-6 rounded-full bg-[var(--foreground)]/10" />
        </div>
      </div>
    </div>
  );
}
