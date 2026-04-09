type TagRowProps = {
  tags: string[];
};

export default function TagRow({ tags }: TagRowProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <span
          key={tag}
          className="rounded-full border border-[var(--border)] px-3 py-1 text-xs text-muted"
        >
          {tag}
        </span>
      ))}
    </div>
  );
}