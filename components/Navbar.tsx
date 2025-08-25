export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 backdrop-blur bg-slate-950/60">
      <div className="container flex h-14 items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-brand-600" />
          <span className="font-semibold">YourBrand</span>
        </div>
        <nav className="hidden md:flex gap-6 text-sm text-white/70">
          <a href="#features" className="hover:text-white">Features</a>
          <a href="#showcase" className="hover:text-white">Showcase</a>
          <a href="#pricing" className="hover:text-white">Pricing</a>
          <a href="#faq" className="hover:text-white">FAQ</a>
        </nav>
        <a href="#cta" className="btn btn-primary">Get started</a>
      </div>
    </header>
  );
}
