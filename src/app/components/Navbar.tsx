import { useState, useEffect } from "react";
import { Menu, X, MessageCircle, Truck } from "lucide-react";

const WA = "https://wa.me/5582996581028?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20os%20produtos!";
const F = "'Outfit', sans-serif";
const FR = "'Fraunces', serif";

const links = [
  { label: "Produtos", href: "#categorias" },
  { label: "Diferenciais", href: "#diferenciais" },
  { label: "Sobre", href: "#sobre" },
  { label: "Avaliações", href: "#avaliacoes" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 48);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled ? "shadow-xl" : ""
    }`}
      style={{ background: scrolled ? "rgba(7,20,16,0.97)" : "transparent", backdropFilter: scrolled ? "blur(16px)" : "none" }}
    >
      {/* Delivery ticker */}
      {!scrolled && (
        <div className="hidden md:flex items-center justify-center gap-3 py-2 text-xs border-b border-white/10"
          style={{ background: "#C8781A", fontFamily: F }}>
          <Truck size={13} className="text-white" />
          <span className="text-white font-semibold tracking-wide">🚚 ENTREGAMOS NA SUA PORTA — A loja que vai até você!</span>
          <Truck size={13} className="text-white" />
        </div>
      )}

      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16 md:h-[68px]">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0 transition-transform group-hover:scale-105"
            style={{ background: "linear-gradient(135deg, #C8781A, #E09848)" }}>
            <span style={{ fontFamily: FR }} className="text-white font-bold text-sm italic">LM</span>
          </div>
          <div className="leading-none">
            <p style={{ fontFamily: FR }} className="text-white font-bold text-base leading-tight">Lima Móveis</p>
            <p style={{ fontFamily: F }} className="text-[#E09848] text-[10px] tracking-[0.18em] uppercase leading-tight">&amp; Eletros</p>
          </div>
        </a>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <li key={l.href}>
              <a href={l.href} style={{ fontFamily: F }}
                className="text-white/70 hover:text-white text-sm font-medium tracking-wide transition-colors duration-200">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a href={WA} target="_blank" rel="noopener noreferrer"
          className="hidden md:flex items-center gap-2 px-5 py-2.5 rounded-full text-white text-sm font-semibold transition-all duration-300 active:scale-95 hover:shadow-[0_4px_20px_rgba(200,120,26,0.5)]"
          style={{ background: "linear-gradient(135deg, #C8781A, #A85F10)", fontFamily: F }}>
          <MessageCircle size={15} />
          Fale pelo WhatsApp
        </a>

        {/* Mobile toggle */}
        <button className="md:hidden text-white p-2" onClick={() => setOpen(!open)}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-white/10 px-6 py-6 flex flex-col gap-5"
          style={{ background: "rgba(7,20,16,0.98)", backdropFilter: "blur(20px)" }}>
          {links.map(l => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}
              style={{ fontFamily: F }} className="text-white/80 text-base font-medium">
              {l.label}
            </a>
          ))}
          <a href={WA} target="_blank" rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 text-white px-5 py-3.5 rounded-full font-semibold mt-1"
            style={{ background: "linear-gradient(135deg, #C8781A, #A85F10)", fontFamily: F }}>
            <MessageCircle size={16} />
            Fale pelo WhatsApp
          </a>
        </div>
      )}
    </nav>
  );
}
