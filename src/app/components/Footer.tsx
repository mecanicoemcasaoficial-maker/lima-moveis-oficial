import { MessageCircle, MapPin, Phone, Clock, Instagram, Facebook, Star, Truck } from "lucide-react";

const WA = "https://wa.me/5582996581028?text=Ol%C3%A1%2C%20gostaria%20de%20fazer%20um%20pedido!";
const F  = "'Outfit', sans-serif";
const FR = "'Fraunces', serif";

const navLinks = [
  { label: "Produtos", href: "#categorias" },
  { label: "Diferenciais", href: "#diferenciais" },
  { label: "Sobre", href: "#sobre" },
  { label: "Avaliações", href: "#avaliacoes" },
];

const products = ["Sala de Estar", "Quartos", "Cozinha & Jantar", "Eletrodomésticos", "Entrega na região"];

export function Footer() {
  return (
    <footer style={{ background: "#040E09" }} className="border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        {/* Delivery banner */}
        <div className="border-b border-white/5 py-4 flex items-center justify-center gap-3">
          <Truck size={14} className="text-[#C8781A]" />
          <span style={{ fontFamily: F }} className="text-white/40 text-sm text-center">
            Entregamos em Lagoa da Canoa e toda a região · <span className="text-[#C8781A] font-medium">(82) 99658-1028</span>
          </span>
          <Truck size={14} className="text-[#C8781A]" />
        </div>

        {/* Main grid */}
        <div className="py-14 md:py-16 grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-12">
          {/* Brand */}
          <div className="md:col-span-1 flex flex-col gap-5">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
                style={{ background: "linear-gradient(135deg, #C8781A, #E09848)" }}>
                <span style={{ fontFamily: FR }} className="text-white font-bold text-sm italic">LM</span>
              </div>
              <div>
                <p style={{ fontFamily: FR }} className="text-white font-bold leading-tight">Lima Móveis &amp; Eletros</p>
                <p style={{ fontFamily: F }} className="text-[#E09848] text-[10px] tracking-[0.15em] uppercase">A loja que vai até você</p>
              </div>
            </div>

            <p style={{ fontFamily: F }} className="text-white/35 text-sm leading-relaxed">
              Móveis e eletrodomésticos de qualidade com entrega em Lagoa da Canoa – AL.
            </p>

            {/* Google rating */}
            <div className="flex items-center gap-2">
              <div className="flex gap-0.5">
                {[1,2,3,4,5].map(i => <Star key={i} size={11} className="fill-[#C8781A] text-[#C8781A]" />)}
              </div>
              <span style={{ fontFamily: F }} className="text-white/30 text-xs">5.0 · 4 avaliações no Google</span>
            </div>

            {/* Social */}
            <div className="flex gap-2.5">
              {[
                { Icon: Instagram, href: "https://instagram.com", label: "Instagram" },
                { Icon: Facebook, href: "https://facebook.com", label: "Facebook" },
                { Icon: MessageCircle, href: WA, label: "WhatsApp" },
              ].map(({ Icon, href, label }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                  className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-white/35 hover:text-white hover:border-[#C8781A]/50 hover:bg-[#C8781A]/10 transition-all duration-200">
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p style={{ fontFamily: F }} className="text-white/25 text-[10px] uppercase tracking-[0.2em] mb-5">Navegação</p>
            <ul className="flex flex-col gap-3">
              {navLinks.map(l => (
                <li key={l.href}>
                  <a href={l.href} style={{ fontFamily: F }}
                    className="text-white/45 hover:text-white text-sm transition-colors group flex items-center gap-2">
                    <span className="w-0 h-px bg-[#C8781A] group-hover:w-3 transition-all duration-200" />
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <p style={{ fontFamily: F }} className="text-white/25 text-[10px] uppercase tracking-[0.2em] mb-5">Produtos</p>
            <ul className="flex flex-col gap-3">
              {products.map(p => (
                <li key={p}>
                  <a href="#categorias" style={{ fontFamily: F }}
                    className="text-white/45 hover:text-white text-sm transition-colors group flex items-center gap-2">
                    <span className="w-0 h-px bg-[#2D6A4F] group-hover:w-3 transition-all duration-200" />
                    {p}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p style={{ fontFamily: F }} className="text-white/25 text-[10px] uppercase tracking-[0.2em] mb-5">Contato</p>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3">
                <MapPin size={14} className="text-[#C8781A] mt-0.5 shrink-0" />
                <span style={{ fontFamily: F }} className="text-white/45 text-sm leading-relaxed">
                  R. Valdomero Melo, 88<br />Lagoa da Canoa – AL<br />CEP 57330-000
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={14} className="text-[#C8781A] shrink-0" />
                <a href="tel:+5582996581028" style={{ fontFamily: F }}
                  className="text-white/45 hover:text-white text-sm transition-colors">(82) 99658-1028</a>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={14} className="text-[#C8781A] mt-0.5 shrink-0" />
                <div style={{ fontFamily: F }} className="text-white/45 text-sm">
                  <p>Seg–Sex: a partir das 7h</p>
                  <p>Sábado: a partir das 7h</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p style={{ fontFamily: F }} className="text-white/20 text-xs text-center">
            © 2024 Lima Móveis &amp; Eletros · Todos os direitos reservados · Lagoa da Canoa – Alagoas
          </p>
          <a href={WA} target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-2 text-white px-4 py-2 rounded-full text-xs font-semibold transition-all hover:shadow-[0_4px_16px_rgba(200,120,26,0.4)] active:scale-95"
            style={{ background: "linear-gradient(135deg, #C8781A, #A85F10)", fontFamily: F }}>
            <MessageCircle size={13} />
            Pedir agora
          </a>
        </div>
      </div>
    </footer>
  );
}
