export function Feature({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="card p-6">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-white/70 text-sm leading-relaxed">{desc}</p>
    </div>
  );
}
