import storeFront from "../../imports/image-2.png";
import { MapPin, Phone, Clock, CheckCircle2, MessageCircle } from "lucide-react";

const WA = "https://wa.me/5582996581028?text=Ol%C3%A1%2C%20quero%20conhecer%20mais%20sobre%20a%20Lima%20M%C3%B3veis!";
const F  = "'Outfit', sans-serif";
const FR = "'Fraunces', serif";

const points = [
  "Produtos de primeira qualidade selecionados",
  "Entrega em Lagoa da Canoa e região",
  "Atendimento honesto e personalizado",
  "Preços justos para o interior de AL",
  "Anos de tradição e confiança local",
  "Abrimos às 7h — antes de todos",
];

export function Sobre() {
  return (
    <section id="sobre" className="py-20 md:py-28 bg-[#FAF7F0]">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-14 md:gap-20 items-center">
        {/* LEFT — Store photo */}
        <div className="relative">
          {/* Gold accent line */}
          <div className="absolute -left-4 top-10 bottom-10 w-px"
            style={{ background: "linear-gradient(180deg, transparent, #C8781A 30%, #C8781A 70%, transparent)" }} />
          {/* Corner accents */}
          <div className="absolute -top-3 -left-3 w-16 h-16 rounded-tl-[20px] border-t-2 border-l-2 border-[#C8781A]/50" />
          <div className="absolute -bottom-3 -right-3 w-16 h-16 rounded-br-[20px] border-b-2 border-r-2 border-[#2D6A4F]/50" />

          <div className="relative rounded-2xl overflow-hidden shadow-xl bg-[#EDE7DA]">
            <img src={storeFront}
              alt="Fachada da Lima Móveis & Eletros em Lagoa da Canoa – AL"
              className="w-full object-cover"
              style={{ aspectRatio: "4/3" }} />
            {/* Overlay */}
            <div className="absolute inset-0 pointer-events-none"
              style={{ background: "linear-gradient(to top, rgba(7,20,16,0.55) 0%, transparent 55%)" }} />

            {/* Bottom info */}
            <div className="absolute bottom-0 left-0 right-0 p-5">
              <p style={{ fontFamily: FR }} className="text-white text-xl font-bold leading-tight">Lima Móveis &amp; Eletros</p>
              <p style={{ fontFamily: F }} className="text-white/65 text-sm mt-0.5">A loja que vai até você</p>
            </div>
          </div>

          {/* Info card */}
          <div className="absolute -bottom-7 right-4 rounded-2xl px-5 py-4 shadow-xl border border-[#E2D9CA]"
            style={{ background: "#FFFFFF" }}>
            <div className="flex flex-col gap-2.5">
              {[
                { icon: MapPin, text: "R. Valdomero Melo, 88 · Lagoa da Canoa – AL" },
                { icon: Phone, text: "(82) 99658-1028" },
                { icon: Clock, text: "Abre às 07:00 · Seg–Sáb" },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-start gap-2">
                  <Icon size={13} className="text-[#C8781A] mt-0.5 shrink-0" />
                  <span style={{ fontFamily: F }} className="text-[#7A6B52] text-xs leading-tight">{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT — Copy */}
        <div className="flex flex-col gap-7 md:pt-0 pt-10">
          <div>
            <p style={{ fontFamily: F }} className="text-[#C8781A] text-sm font-semibold tracking-[0.2em] uppercase mb-3">
              Nossa história
            </p>
            <h2 style={{ fontFamily: FR }} className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1A140A] leading-tight">
              Tradição e qualidade{" "}
              <span className="italic" style={{ color: "#C8781A" }}>para o seu lar</span>
            </h2>
          </div>

          <p style={{ fontFamily: F }} className="text-[#7A6B52] text-base leading-relaxed">
            A Lima Móveis &amp; Eletros nasceu com um propósito claro: levar qualidade, variedade e preço justo para as famílias de Lagoa da Canoa e toda a região.
          </p>
          <p style={{ fontFamily: F }} className="text-[#7A6B52] text-base leading-relaxed">
            Nosso diferencial está no atendimento humano e na entrega comprometida. Quando você compra na Lima, não é só um produto — é a certeza de que a gente aparece na sua porta.
          </p>

          {/* Points */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {points.map(p => (
              <div key={p} className="flex items-start gap-2.5 group">
                <CheckCircle2 size={15} className="text-[#C8781A] mt-0.5 shrink-0 group-hover:scale-110 transition-transform" />
                <span style={{ fontFamily: F }} className="text-[#1A140A] text-sm">{p}</span>
              </div>
            ))}
          </div>

          <a href={WA} target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-3 w-fit text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 active:scale-95 group"
            style={{ background: "linear-gradient(135deg, #C8781A, #A85F10)", fontFamily: F,
              boxShadow: "0 8px 24px rgba(200,120,26,0.3)" }}>
            <MessageCircle size={18} className="group-hover:scale-110 transition-transform" />
            Falar com a Lima Móveis
          </a>
        </div>
      </div>
    </section>
  );
}
