export default function Footer() {
  return (
    <footer className="border-t border-white/10 mt-24">
      <div className="container py-10 text-sm text-white/60 flex flex-col md:flex-row items-center justify-between gap-4">
        <p>© {new Date().getFullYear()} YourBrand. All rights reserved.</p>
        <div className="flex gap-4">
          <a href="#">Privacy</a>
          <a href="#">Imprint</a>
          <a href="#">Contact</a>
        </div>
      </div>
    </footer>
  );
}
