import { useState } from "react";
import { Star, Quote, ChevronLeft, ChevronRight, MessageCircle } from "lucide-react";

const WA = "https://wa.me/5582996581028?text=Ol%C3%A1%2C%20gostaria%20de%20fazer%20um%20pedido!";
const F  = "'Outfit', sans-serif";
const FR = "'Fraunces', serif";

/* Real reviews from the Google screenshot */
const reviews = [
  {
    name: "JHONY de Lima Silva",
    initials: "JL",
    role: "Guia Local · 3 críticas · 114 fotos",
    text: "Muito bem atendido e produtos de primeira qualidade.",
    stars: 5,
    time: "há 5 anos",
    color: "#C8781A",
  },
  {
    name: "Mercado Preço Bom",
    initials: "MP",
    role: "2 críticas · 4 fotos",
    text: "Ótimo atendimento 😊",
    stars: 5,
    time: "há 3 anos",
    color: "#2D6A4F",
  },
  {
    name: "Carlos Magno Magno",
    initials: "CM",
    role: "Guia Local · 22 críticas",
    text: "Loja top.",
    stars: 5,
    time: "há 4 anos",
    color: "#C8781A",
  },
  {
    name: "Cliente Satisfeito",
    initials: "CS",
    role: "Avaliação Google",
    text: "Excelente atendimento, entrega rápida e produto de qualidade. Recomendo a todos da região!",
    stars: 5,
    time: "há 2 anos",
    color: "#2D6A4F",
  },
];

function Stars({ n }: { n: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: n }).map((_, i) => (
        <Star key={i} size={13} className="fill-[#C8781A] text-[#C8781A]" />
      ))}
    </div>
  );
}

export function Testimonials() {
  const [cur, setCur] = useState(0);
  const prev = () => setCur(c => (c === 0 ? reviews.length - 1 : c - 1));
  const next = () => setCur(c => (c === reviews.length - 1 ? 0 : c + 1));
  const r = reviews[cur];

  return (
    <section id="avaliacoes" className="py-20 md:py-28 bg-[#FAF7F0]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <p style={{ fontFamily: F }} className="text-[#C8781A] text-sm font-semibold tracking-[0.2em] uppercase mb-3">
              O que dizem os clientes
            </p>
            <h2 style={{ fontFamily: FR }} className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1A140A] leading-tight">
              Avaliações{" "}
              <span className="italic" style={{ color: "#C8781A" }}>reais</span>{" "}
              no Google
            </h2>
          </div>

          {/* Google badge */}
          <div className="flex items-center gap-4 border border-[#E2D9CA] rounded-2xl px-5 py-4 w-fit bg-white shadow-sm">
            <div className="flex flex-col gap-1">
              <div className="flex gap-0.5">
                {[1,2,3,4,5].map(i => <Star key={i} size={14} className="fill-[#C8781A] text-[#C8781A]" />)}
              </div>
              <p style={{ fontFamily: F }} className="text-[#7A6B52] text-xs">Lima Móveis &amp; Eletros</p>
              <p style={{ fontFamily: F }} className="text-[#7A6B52]/60 text-xs">4 avaliações · Google Maps</p>
            </div>
            <div className="h-12 w-px bg-[#E2D9CA]" />
            <div className="text-center">
              <p style={{ fontFamily: FR }} className="text-[#1A140A] text-4xl font-bold leading-none">5.0</p>
              <p style={{ fontFamily: F }} className="text-[#C8781A] text-xs mt-1">Nota máxima</p>
            </div>
          </div>
        </div>

        {/* Main card */}
        <div className="rounded-3xl overflow-hidden shadow-md border border-[#E2D9CA] grid md:grid-cols-[1fr_auto]">
          {/* Review */}
          <div className="bg-white p-8 md:p-10 flex flex-col gap-6">
            {/* Reviewer header */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full flex items-center justify-center shrink-0 shadow"
                style={{ background: `linear-gradient(135deg, ${r.color}, ${r.color}99)` }}>
                <span style={{ fontFamily: F }} className="text-white font-bold text-sm">{r.initials}</span>
              </div>
              <div>
                <p style={{ fontFamily: F }} className="text-[#1A140A] font-semibold">{r.name}</p>
                <div className="flex items-center gap-2 mt-0.5">
                  <Stars n={r.stars} />
                  <span style={{ fontFamily: F }} className="text-[#7A6B52] text-xs">· {r.time}</span>
                </div>
                <p style={{ fontFamily: F }} className="text-[#7A6B52]/60 text-xs mt-0.5">{r.role}</p>
              </div>
            </div>

            {/* Quote */}
            <div className="relative pl-5 border-l-2" style={{ borderColor: r.color }}>
              <Quote size={22} className="mb-2" style={{ color: `${r.color}50` }} />
              <p style={{ fontFamily: FR, fontSize: "1.2rem" }} className="text-[#1A140A] italic leading-relaxed font-medium">
                {r.text}
              </p>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between pt-4 border-t border-[#E2D9CA]">
              <div className="flex gap-1.5">
                {reviews.map((_, i) => (
                  <button key={i} onClick={() => setCur(i)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${i === cur ? "w-7 bg-[#C8781A]" : "w-1.5 bg-[#E2D9CA] hover:bg-[#C8781A]/40"}`} />
                ))}
              </div>
              <div className="flex gap-2">
                <button onClick={prev} className="w-9 h-9 rounded-full border border-[#E2D9CA] hover:border-[#C8781A]/50 flex items-center justify-center text-[#7A6B52] hover:text-[#C8781A] transition-all">
                  <ChevronLeft size={16} />
                </button>
                <button onClick={next} className="w-9 h-9 rounded-full border border-[#E2D9CA] hover:border-[#C8781A]/50 flex items-center justify-center text-[#7A6B52] hover:text-[#C8781A] transition-all">
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>
          </div>

          {/* Sidebar list — desktop only */}
          <div className="hidden md:flex flex-col bg-[#FAF7F0] border-l border-[#E2D9CA] w-52 p-4 gap-2">
            <p style={{ fontFamily: F }} className="text-[#7A6B52] text-[10px] uppercase tracking-wider mb-1">Todas as avaliações</p>
            {reviews.map((rv, i) => (
              <button key={rv.name} onClick={() => setCur(i)}
                className={`text-left rounded-xl px-3 py-2.5 border transition-all duration-200 ${i === cur ? "border-[#C8781A]/40 bg-white shadow-sm" : "border-transparent hover:border-[#E2D9CA] hover:bg-white"}`}>
                <p style={{ fontFamily: F }} className={`text-xs font-semibold leading-tight ${i === cur ? "text-[#1A140A]" : "text-[#7A6B52]"}`}>{rv.name}</p>
                <div className="flex gap-0.5 mt-1">
                  {Array.from({length: 5}).map((_,si) => <Star key={si} size={9} className="fill-[#C8781A] text-[#C8781A]" />)}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href={WA} target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-2 text-white px-7 py-3.5 rounded-full text-sm font-semibold transition-all active:scale-95 group"
            style={{ background: "linear-gradient(135deg, #C8781A, #A85F10)", fontFamily: F,
              boxShadow: "0 8px 24px rgba(200,120,26,0.3)" }}>
            <MessageCircle size={16} className="group-hover:scale-110 transition-transform" />
            Seja o próximo cliente satisfeito
          </a>
          <p style={{ fontFamily: F }} className="text-[#7A6B52] text-sm">Junte-se aos clientes que confiam na Lima Móveis</p>
        </div>
      </div>
    </section>
  );
}
