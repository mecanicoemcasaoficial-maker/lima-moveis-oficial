import { MessageCircle, Phone, Clock, MapPin, Truck, Star } from "lucide-react";

const WA = "https://wa.me/5582996581028?text=Ol%C3%A1%2C%20quero%20fazer%20um%20pedido%20na%20Lima%20M%C3%B3veis!";
const F  = "'Outfit', sans-serif";
const FR = "'Fraunces', serif";

export function CallToAction() {
  return (
    <section className="py-20 md:py-28"
      style={{ background: "linear-gradient(180deg, #0B1F14 0%, #071410 100%)" }}>
      <div className="max-w-5xl mx-auto px-6">
        <div className="relative rounded-3xl overflow-hidden"
          style={{ background: "linear-gradient(135deg, #163825 0%, #0B1F14 50%, #071410 100%)" }}>
          {/* Glows */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full opacity-25"
              style={{ background: "radial-gradient(circle, #C8781A, transparent)", filter: "blur(60px)" }} />
            <div className="absolute -bottom-16 -left-16 w-64 h-64 rounded-full opacity-15"
              style={{ background: "radial-gradient(circle, #2D6A4F, transparent)", filter: "blur(50px)" }} />
          </div>

          {/* Top hairline */}
          <div className="absolute top-0 left-0 right-0 h-px"
            style={{ background: "linear-gradient(90deg, transparent, #C8781A 40%, #E09848 60%, transparent)" }} />

          <div className="relative px-8 md:px-14 py-14 md:py-18 flex flex-col items-center text-center gap-8">
            {/* Delivery badge */}
            <div className="flex items-center gap-2.5 bg-[#C8781A]/20 border border-[#C8781A]/40 rounded-full px-5 py-2.5">
              <Truck size={16} className="text-[#E09848]" />
              <span style={{ fontFamily: F }} className="text-[#E09848] text-sm font-bold tracking-wide">A loja que vai até você</span>
            </div>

            {/* Stars */}
            <div className="flex gap-1.5">
              {[1,2,3,4,5].map(i => <Star key={i} size={18} className="fill-[#C8781A] text-[#C8781A]" />)}
            </div>

            {/* Headline */}
            <div>
              <h2 style={{ fontFamily: FR }} className="text-3xl md:text-5xl font-bold text-white leading-tight">
                Pronto para montar{" "}
                <span className="italic" style={{ color: "#E09848" }}>seu lar?</span>
              </h2>
              <p style={{ fontFamily: F }} className="text-white/55 mt-4 text-base md:text-lg max-w-lg mx-auto leading-relaxed">
                Uma mensagem no WhatsApp é tudo que você precisa. A Lima Móveis cuida do resto — do pedido à entrega na sua porta.
              </p>
            </div>

            {/* Main button */}
            <a href={WA} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-3 text-white px-12 py-5 rounded-full font-bold text-lg transition-all duration-300 active:scale-95 group"
              style={{ background: "linear-gradient(135deg, #C8781A, #A85F10)", fontFamily: F,
                boxShadow: "0 12px 40px rgba(200,120,26,0.5)" }}
              onMouseEnter={e => (e.currentTarget.style.boxShadow = "0 16px 50px rgba(200,120,26,0.7)")}
              onMouseLeave={e => (e.currentTarget.style.boxShadow = "0 12px 40px rgba(200,120,26,0.5)")}>
              <MessageCircle size={22} className="group-hover:scale-110 transition-transform" />
              Peça pelo WhatsApp agora
            </a>

            {/* Info strip */}
            <div className="flex flex-col sm:flex-row gap-5 sm:gap-10 pt-2 border-t border-white/10 w-full justify-center">
              {[
                { icon: Phone, text: "(82) 99658-1028" },
                { icon: Clock, text: "Seg–Sáb · das 7h" },
                { icon: MapPin, text: "Lagoa da Canoa – AL" },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center justify-center gap-2 text-white/45">
                  <Icon size={14} className="text-[#C8781A]" />
                  <span style={{ fontFamily: F }} className="text-sm">{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
