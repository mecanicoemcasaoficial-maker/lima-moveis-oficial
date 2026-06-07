import { useEffect, useState } from "react";
import { Menu, MessageCircle, ShieldCheck, Truck, X } from "lucide-react";

const WA =
  "https://wa.me/5582996581028?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20os%20produtos%20da%20Lima%20M%C3%B3veis%20%26%20Eletros!";

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
    const handleScroll = () => setScrolled(window.scrollY > 42);

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <nav
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "shadow-[0_18px_60px_rgba(0,0,0,0.28)]" : ""
      }`}
      style={{
        background: scrolled ? "rgba(6,18,15,0.94)" : "transparent",
        backdropFilter: scrolled ? "blur(22px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.08)" : "none",
      }}
    >
      <div
        className="hidden items-center justify-center gap-3 border-b border-white/10 px-6 py-2 text-xs md:flex"
        style={{
          background:
            "linear-gradient(90deg, #A65E12 0%, #C8781A 50%, #A65E12 100%)",
          fontFamily: F,
        }}
      >
        <Truck size={13} className="shrink-0 text-white" />
        <span className="font-bold tracking-[0.16em] text-white">
          ENTREGA EM LAGOA DA CANOA E REGIÃO
        </span>
        <ShieldCheck size={13} className="shrink-0 text-white" />
        <span className="font-semibold tracking-wide text-white/90">
          atendimento direto pelo WhatsApp
        </span>
      </div>

      <div className="mx-auto flex h-[66px] max-w-7xl items-center justify-between px-5 sm:px-6 md:h-[72px]">
        <a
          href="#"
          onClick={() => setOpen(false)}
          className="group flex items-center gap-3"
          aria-label="Ir para o início"
        >
          <div
            className="relative flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-2xl shadow-[0_12px_32px_rgba(200,120,26,0.28)] transition-transform duration-300 group-hover:scale-105 md:h-11 md:w-11"
            style={{
              background: "linear-gradient(135deg, #D18424 0%, #A65E12 100%)",
            }}
          >
            <div className="absolute inset-0 bg-white/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <span
              style={{ fontFamily: FR, lineHeight: 1 }}
              className="relative text-sm font-black italic text-white md:text-[15px]"
            >
              LM
            </span>
          </div>

          <div className="flex flex-col justify-center gap-[2px]">
            <span
              style={{ fontFamily: FR, lineHeight: 1 }}
              className="block text-[1rem] font-black tracking-[-0.02em] text-white md:text-[1.08rem]"
            >
              Lima Móveis
            </span>

            <span
              style={{ fontFamily: F, lineHeight: 1 }}
              className="block text-[10px] font-bold uppercase tracking-[0.14em] text-[#E6A255] md:text-[10.5px] md:tracking-[0.18em]"
            >
              &amp; Eletros
            </span>
          </div>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                style={{ fontFamily: F }}
                className="rounded-full px-4 py-2 text-sm font-semibold text-white/62 transition-all duration-300 hover:bg-white/[0.06] hover:text-white"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href="#categorias"
            style={{ fontFamily: F }}
            className="rounded-full border border-white/12 bg-white/[0.03] px-5 py-2.5 text-sm font-semibold text-white/70 transition-all duration-300 hover:border-[#C8781A]/45 hover:bg-white/[0.06] hover:text-white"
          >
            Ver catálogo
          </a>

          <a
            href={WA}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-bold text-white shadow-[0_10px_30px_rgba(200,120,26,0.30)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_42px_rgba(200,120,26,0.46)] active:scale-95"
            style={{
              background: "linear-gradient(135deg, #D18424 0%, #A65E12 100%)",
              fontFamily: F,
            }}
          >
            <MessageCircle
              size={16}
              className="transition-transform group-hover:scale-110"
            />
            WhatsApp
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-white backdrop-blur-md transition-all duration-300 active:scale-95 md:hidden"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div
          className="fixed inset-x-0 top-[66px] z-50 border-t border-white/10 px-5 pb-7 pt-5 shadow-[0_28px_70px_rgba(0,0,0,0.42)] md:top-[104px] md:hidden"
          style={{
            background: "rgba(6,18,15,0.98)",
            backdropFilter: "blur(24px)",
          }}
        >
          <div className="mb-5 rounded-3xl border border-[#C8781A]/20 bg-[#C8781A]/10 px-4 py-3">
            <div className="flex items-center gap-2.5">
              <Truck size={16} className="shrink-0 text-[#E6A255]" />
              <p
                style={{ fontFamily: F }}
                className="text-sm font-semibold leading-relaxed text-white/78"
              >
                Entrega combinada em Lagoa da Canoa e região.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                style={{ fontFamily: F }}
                className="flex items-center justify-between rounded-2xl border border-white/8 bg-white/[0.035] px-4 py-4 text-base font-semibold text-white/82 transition-all duration-300 active:scale-[0.99]"
              >
                {link.label}
                <span className="h-1.5 w-1.5 rounded-full bg-[#C8781A]" />
              </a>
            ))}
          </div>

          <a
            href={WA}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="mt-5 flex items-center justify-center gap-2.5 rounded-full px-5 py-4 text-base font-bold text-white shadow-[0_14px_38px_rgba(200,120,26,0.36)] active:scale-95"
            style={{
              background: "linear-gradient(135deg, #D18424 0%, #A65E12 100%)",
              fontFamily: F,
            }}
          >
            <MessageCircle size={18} />
            Falar pelo WhatsApp
          </a>

          <p
            style={{ fontFamily: F }}
            className="mt-4 text-center text-xs leading-relaxed text-white/38"
          >
            Lima Móveis & Eletros • atendimento local e entrega facilitada.
          </p>
        </div>
      )}
    </nav>
  );
}