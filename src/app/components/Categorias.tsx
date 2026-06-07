import { useState } from "react";
import { MessageCircle, ArrowRight } from "lucide-react";

const WA = "https://wa.me/5582996581028?text=Ol%C3%A1%2C%20tenho%20interesse%20em%20um%20produto!";
const F  = "'Outfit', sans-serif";
const FR = "'Fraunces', serif";

const categories = [
  {
    id: "sala",
    label: "Sala de Estar",
    desc: "Sofás, poltronas, racks, estantes, mesas de centro e muito mais para deixar sua sala perfeita.",
    img: "https://images.unsplash.com/photo-1646987916641-1f3c8992daa2?w=700&h=500&fit=crop&auto=format",
    alt: "Sala de estar elegante com sofá e móveis modernos",
    items: ["Sofás & Poltronas", "Racks & Painéis", "Mesas de Centro", "Estantes"],
    color: "#C8781A",
  },
  {
    id: "quarto",
    label: "Quarto",
    desc: "Camas, guarda-roupas, cômodas e criados-mudos. Durma com conforto e estilo.",
    img: "https://images.unsplash.com/photo-1562438668-bcf0ca6578f0?w=700&h=500&fit=crop&auto=format",
    alt: "Quarto moderno com cama king e decoração aconchegante",
    items: ["Camas & Colchões", "Guarda-roupas", "Cômodas", "Criados-mudos"],
    color: "#2D6A4F",
  },
  {
    id: "cozinha",
    label: "Cozinha & Jantar",
    desc: "Mesas, cadeiras, armários e conjuntos de jantar para reunir a família com estilo.",
    img: "https://images.unsplash.com/photo-1583845112239-97ef1341b271?w=700&h=500&fit=crop&auto=format",
    alt: "Mesa de jantar em madeira com cadeiras elegantes",
    items: ["Mesas & Cadeiras", "Armários", "Balcões", "Conjuntos completos"],
    color: "#C8781A",
  },
  {
    id: "eletros",
    label: "Eletrodomésticos",
    desc: "Geladeiras, fogões, máquinas de lavar, TVs e eletrônicos com os melhores preços da região.",
    img: "https://images.unsplash.com/photo-1636138390625-80afec896b28?w=700&h=500&fit=crop&auto=format",
    alt: "Cozinha moderna com eletrodomésticos de qualidade",
    items: ["Geladeiras & Freezers", "Fogões & Fornos", "Máquinas de Lavar", "TVs & Eletrônicos"],
    color: "#2D6A4F",
  },
];

export function Categorias() {
  const [active, setActive] = useState("sala");
  const cat = categories.find(c => c.id === active)!;

  return (
    <section id="categorias" className="py-20 md:py-28 bg-[#FAF7F0]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <p style={{ fontFamily: F }} className="text-[#C8781A] text-sm font-semibold tracking-[0.2em] uppercase mb-3">
              Nossos produtos
            </p>
            <h2 style={{ fontFamily: FR }} className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1A140A] leading-tight">
              Tudo para a sua{" "}
              <span className="italic" style={{ color: "#C8781A" }}>casa nova</span>
            </h2>
          </div>
          <p style={{ fontFamily: F }} className="text-[#7A6B52] text-base max-w-xs">
            Móveis e eletrodomésticos entregues direto na sua porta.
          </p>
        </div>

        {/* Tab buttons */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map(c => (
            <button key={c.id} onClick={() => setActive(c.id)}
              style={{ fontFamily: F,
                background: active === c.id ? c.color : "transparent",
                borderColor: active === c.id ? c.color : "#E2D9CA",
                color: active === c.id ? "#fff" : "#7A6B52",
              }}
              className="px-5 py-2 rounded-full text-sm font-semibold border transition-all duration-200 hover:border-[#C8781A]/60">
              {c.label}
            </button>
          ))}
        </div>

        {/* Active category panel */}
        <div className="grid md:grid-cols-2 gap-0 rounded-2xl overflow-hidden shadow-md border border-[#E2D9CA]">
          {/* Photo */}
          <div className="relative bg-[#EDE7DA] aspect-[4/3] md:aspect-auto md:min-h-[400px] group overflow-hidden">
            <img src={cat.img} alt={cat.alt}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 pointer-events-none"
              style={{ background: "linear-gradient(to right, rgba(7,20,16,0.3), transparent)" }} />
            {/* Category label on image */}
            <div className="absolute top-5 left-5">
              <span style={{ fontFamily: F, background: cat.color }}
                className="text-white text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full">
                {cat.label}
              </span>
            </div>
          </div>

          {/* Info */}
          <div className="bg-white p-8 md:p-10 flex flex-col justify-between gap-8">
            <div className="flex flex-col gap-5">
              <h3 style={{ fontFamily: FR }} className="text-2xl md:text-3xl font-bold text-[#1A140A]">{cat.label}</h3>
              <p style={{ fontFamily: F }} className="text-[#7A6B52] text-base leading-relaxed">{cat.desc}</p>

              {/* Sub-items */}
              <div className="grid grid-cols-2 gap-2">
                {cat.items.map(item => (
                  <div key={item} className="flex items-center gap-2 group">
                    <div className="w-1.5 h-1.5 rounded-full shrink-0 transition-transform group-hover:scale-150"
                      style={{ background: cat.color }} />
                    <span style={{ fontFamily: F }} className="text-[#1A140A] text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <a href={`${WA}&text=Ol%C3%A1%2C%20tenho%20interesse%20em%20${encodeURIComponent(cat.label)}!`}
              target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-3 w-fit text-white px-7 py-3.5 rounded-full font-semibold text-sm transition-all duration-300 active:scale-95 group"
              style={{ background: `linear-gradient(135deg, ${cat.color}, ${cat.color}CC)`, fontFamily: F,
                boxShadow: `0 8px 24px ${cat.color}35` }}>
              <MessageCircle size={16} className="group-hover:scale-110 transition-transform" />
              Consultar {cat.label}
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
