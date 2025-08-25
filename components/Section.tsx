export function Section({
  id, title, subtitle, children,
}: { id?: string; title: string; subtitle?: string; children: React.ReactNode }) {
  return (
    <section id={id} className="container mt-24">
      <div className="mb-10 max-w-3xl">
        {subtitle ? <div className="badge mb-3">{subtitle}</div> : null}
        <h2 className="text-3xl md:text-4xl font-bold">{title}</h2>
      </div>
      {children}
    </section>
  );
}
