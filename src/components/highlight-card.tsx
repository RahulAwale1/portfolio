type HighlightCardProps = {
  title: string;
  text: string;
};

export default function HighlightCard({ title, text }: HighlightCardProps) {
  return (
    <div className="surface rounded-2xl p-5">
      <h3 className="text-lg font-semibold tracking-tight">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-muted">{text}</p>
    </div>
  );
}