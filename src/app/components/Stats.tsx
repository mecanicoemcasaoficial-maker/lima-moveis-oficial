import { Star, Truck, Package, ThumbsUp } from "lucide-react";

const F  = "'Outfit', sans-serif";
const FR = "'Fraunces', serif";

const stats = [
  { icon: Star,     value: "5.0", unit: "★", label: "Avaliação Google",     sub: "4 avaliações verificadas", color: "#C8781A" },
  { icon: Truck,    value: "100", unit: "%", label: "Entrega na região",     sub: "A loja que vai até você",  color: "#2D6A4F" },
  { icon: Package,  value: "10",  unit: "+", label: "Anos no mercado",       sub: "Tradição e confiança",     color: "#C8781A" },
  { icon: ThumbsUp, value: "1ª",  unit: "",  label: "Qualidade garantida",   sub: "Produtos selecionados",    color: "#2D6A4F" },
];

export function Stats() {
  return (
    <section id="stats" className="bg-[#FAF7F0]">
      {/* Divider bar */}
      <div className="h-1" style={{ background: "linear-gradient(90deg, #0B1F14, #C8781A 40%, #2D6A4F 60%, #0B1F14)" }} />

      <div className="max-w-7xl mx-auto px-6 py-14 md:py-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-[#E2D9CA] rounded-2xl overflow-hidden shadow-sm">
          {stats.map((s, i) => (
            <div key={s.label}
              className={`flex flex-col items-center text-center gap-3 py-10 px-6 bg-white hover:bg-[#FAF7F0] transition-colors duration-300 group
                ${i === 0 ? "rounded-tl-2xl md:rounded-bl-2xl" : ""}
                ${i === stats.length - 1 ? "rounded-br-2xl md:rounded-tr-2xl" : ""}
                ${i === 1 ? "rounded-tr-2xl md:rounded-none" : ""}
                ${i === 2 ? "rounded-bl-2xl md:rounded-none" : ""}
              `}>
              <div className="w-11 h-11 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                style={{ background: `${s.color}18` }}>
                <s.icon size={20} style={{ color: s.color }} />
              </div>
              <div>
                <div className="flex items-end justify-center gap-0.5">
                  <span style={{ fontFamily: FR, color: "#1A140A" }} className="text-4xl md:text-5xl font-bold leading-none">{s.value}</span>
                  {s.unit && <span style={{ fontFamily: FR, color: s.color }} className="text-2xl font-bold leading-none mb-1">{s.unit}</span>}
                </div>
                <p style={{ fontFamily: F }} className="text-[#1A140A] text-sm font-semibold mt-2">{s.label}</p>
                <p style={{ fontFamily: F }} className="text-[#7A6B52] text-xs mt-0.5">{s.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
