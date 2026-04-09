type InfoCardProps = {
  label: string;
  value: string;
};

export default function InfoCard({ label, value }: InfoCardProps) {
  return (
    <div className="surface-solid rounded-2xl p-4">
      <p className="text-xs uppercase tracking-[0.18em] text-muted">{label}</p>
      <p className="mt-2 text-sm font-medium leading-6">{value}</p>
    </div>
  );
}