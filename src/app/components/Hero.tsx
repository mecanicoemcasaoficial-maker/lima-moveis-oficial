import { MessageCircle, Truck, Star, ArrowRight, ShieldCheck } from "lucide-react";

const WA = "https://wa.me/5582996581028?text=Ol%C3%A1%2C%20gostaria%20de%20conhecer%20os%20produtos%20da%20Lima%20M%C3%B3veis!";
const F  = "'Outfit', sans-serif";
const FR = "'Fraunces', serif";

const HERO_IMG = "https://images.unsplash.com/photo-1724582586529-62622e50c0b3?w=1200&h=900&fit=crop&auto=format";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: "linear-gradient(135deg, #071410 0%, #0B1F14 50%, #071410 100%)" }}>

      {/* Texture grain overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E\")", backgroundRepeat: "repeat", backgroundSize: "128px" }} />

      {/* Ambient glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full opacity-[0.12]"
          style={{ background: "radial-gradient(circle, #C8781A, transparent)", filter: "blur(100px)", transform: "translate(30%, -30%)" }} />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full opacity-[0.08]"
          style={{ background: "radial-gradient(circle, #2D6A4F, transparent)", filter: "blur(80px)", transform: "translate(-30%, 30%)" }} />
      </div>

      {/* Top hairline */}
      <div className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, #C8781A 40%, #E09848 60%, transparent)" }} />

      <div className="relative max-w-7xl mx-auto px-6 pt-32 pb-20 grid lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-16 items-center w-full">

        {/* LEFT — Copy */}
        <div className="flex flex-col gap-7">
          {/* Delivery badge */}
          <div className="flex items-center gap-2.5 w-fit bg-[#C8781A]/15 border border-[#C8781A]/40 rounded-full px-4 py-2">
            <Truck size={15} className="text-[#E09848] shrink-0" />
            <span style={{ fontFamily: F }} className="text-[#E09848] text-sm font-semibold">Entregamos na sua porta</span>
          </div>

          {/* Headline */}
          <div>
            <h1 style={{ fontFamily: FR }} className="text-white leading-[1.04]">
              <span className="block text-[clamp(2.6rem,5.5vw,4.4rem)] font-bold">Móveis &amp; Eletros</span>
              <span className="block text-[clamp(2.6rem,5.5vw,4.4rem)] font-bold italic" style={{ color: "#E09848" }}>com qualidade</span>
              <span className="block text-[clamp(2.6rem,5.5vw,4.4rem)] font-bold">que você merece</span>
            </h1>
          </div>

          <p style={{ fontFamily: F }} className="text-white/60 text-lg leading-relaxed max-w-lg">
            Sala, quarto, cozinha e muito mais — produtos de primeira com atendimento personalizado.
            <span className="text-white/80 font-medium"> Lagoa da Canoa – AL.</span>
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 pt-1">
            <a href={WA} target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 text-white px-8 py-4 rounded-full font-semibold text-base transition-all duration-300 active:scale-95 group shadow-[0_8px_32px_rgba(200,120,26,0.4)] hover:shadow-[0_12px_40px_rgba(200,120,26,0.65)]"
              style={{ background: "linear-gradient(135deg, #C8781A 0%, #A85F10 100%)", fontFamily: F }}>
              <MessageCircle size={20} className="group-hover:scale-110 transition-transform" />
              Peça pelo WhatsApp
            </a>
            <a href="#categorias"
              className="flex items-center justify-center gap-2 border border-white/20 hover:border-[#C8781A]/60 text-white/70 hover:text-white px-8 py-4 rounded-full transition-all duration-300 group"
              style={{ fontFamily: F }}>
              Ver produtos
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Trust signals */}
          <div className="flex flex-wrap gap-5 pt-3 border-t border-white/10">
            <div className="flex items-center gap-2">
              <div className="flex gap-0.5">
                {[1,2,3,4,5].map(i => <Star key={i} size={12} className="fill-[#C8781A] text-[#C8781A]" />)}
              </div>
              <span style={{ fontFamily: F }} className="text-white/55 text-xs">5.0 no Google</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck size={13} className="text-[#2D6A4F]" />
              <span style={{ fontFamily: F }} className="text-white/55 text-xs">Produtos de 1ª qualidade</span>
            </div>
            <div className="flex items-center gap-2">
              <Truck size={13} className="text-[#C8781A]" />
              <span style={{ fontFamily: F }} className="text-white/55 text-xs">Entrega garantida</span>
            </div>
          </div>
        </div>

        {/* RIGHT — Room photo */}
        <div className="relative flex justify-center lg:justify-end">
          {/* Outer glow */}
          <div className="absolute -inset-8 rounded-[40px] opacity-20 pointer-events-none"
            style={{ background: "radial-gradient(ellipse, #C8781A, transparent)", filter: "blur(40px)" }} />

          {/* Gold corner accents */}
          <div className="absolute -top-3 -right-3 w-20 h-20 rounded-tr-[28px] border-t-2 border-r-2 border-[#C8781A]/50 pointer-events-none" />
          <div className="absolute -bottom-3 -left-3 w-20 h-20 rounded-bl-[28px] border-b-2 border-l-2 border-[#C8781A]/50 pointer-events-none" />

          <div className="relative w-full max-w-[540px]">
            <img src={HERO_IMG}
              alt="Sala de estar moderna com móveis elegantes — Lima Móveis & Eletros"
              className="w-full rounded-[28px] object-cover shadow-2xl"
              style={{ aspectRatio: "4/3" }} />

            {/* Dark gradient on bottom */}
            <div className="absolute inset-0 rounded-[28px] pointer-events-none"
              style={{ background: "linear-gradient(to top, rgba(7,20,16,0.6) 0%, transparent 50%)" }} />

            {/* Floating badge — delivery */}
            <div className="absolute -bottom-5 left-6 flex items-center gap-3 rounded-2xl px-5 py-3.5 shadow-2xl border border-white/10"
              style={{ background: "rgba(7,20,16,0.88)", backdropFilter: "blur(16px)" }}>
              <div className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
                style={{ background: "linear-gradient(135deg, #C8781A, #E09848)" }}>
                <Truck size={16} className="text-white" />
              </div>
              <div>
                <p style={{ fontFamily: FR }} className="text-white text-sm font-semibold leading-tight">A loja que vai até você</p>
                <p style={{ fontFamily: F }} className="text-white/45 text-xs leading-tight">Entrega em Lagoa da Canoa e região</p>
              </div>
            </div>

            {/* Floating Google rating */}
            <div className="absolute -top-5 -right-5 rounded-2xl px-4 py-3 shadow-xl border border-[#C8781A]/30"
              style={{ background: "rgba(7,20,16,0.92)", backdropFilter: "blur(16px)" }}>
              <div className="flex items-center gap-2">
                <Star size={14} className="fill-[#C8781A] text-[#C8781A]" />
                <span style={{ fontFamily: FR }} className="text-white font-bold text-sm">5.0</span>
                <span style={{ fontFamily: F }} className="text-white/40 text-xs">Google</span>
              </div>
              <p style={{ fontFamily: F }} className="text-white/35 text-[10px] mt-0.5 text-center">4 avaliações</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <a href="#stats" className="absolute bottom-7 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 group">
        <span style={{ fontFamily: F }} className="text-white/25 text-[10px] tracking-[0.2em] uppercase group-hover:text-white/50 transition-colors">Explorar</span>
        <div className="w-5 h-8 rounded-full border border-white/15 flex items-start justify-center pt-1.5 group-hover:border-white/35 transition-colors">
          <div className="w-0.5 h-2 bg-white/30 rounded-full animate-bounce" />
        </div>
      </a>
    </section>
  );
}
