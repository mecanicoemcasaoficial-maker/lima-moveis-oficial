import { Truck, BadgeCheck, Headphones, Tag, Clock, MapPin } from "lucide-react";

const F  = "'Outfit', sans-serif";
const FR = "'Fraunces', serif";

const items = [
  {
    icon: Truck,
    title: "A loja vai até você",
    desc: "Entregamos seus produtos diretamente na sua casa, com segurança e rapidez. Você não precisa sair de onde está.",
    highlight: true,
  },
  {
    icon: BadgeCheck,
    title: "Produtos de 1ª qualidade",
    desc: "Selecionamos cada produto com critério. Só vendemos o que garantimos — móveis e eletros que duram.",
    highlight: false,
  },
  {
    icon: Tag,
    title: "Preço justo sempre",
    desc: "Preço honesto para o interior de Alagoas. Sem surpresas, sem letra miúda. O que combinamos é o que você paga.",
    highlight: false,
  },
  {
    icon: Headphones,
    title: "Atendimento no WhatsApp",
    desc: "Tire dúvidas, faça seu pedido e acompanhe tudo pelo WhatsApp. Rápido, simples e sem burocracia.",
    highlight: false,
  },
  {
    icon: Clock,
    title: "Abre às 7h da manhã",
    desc: "Atendemos cedo porque sabemos que o seu tempo é valioso. Segunda a sábado, das 7h ao fim do dia.",
    highlight: false,
  },
  {
    icon: MapPin,
    title: "Raiz em Lagoa da Canoa",
    desc: "Somos daqui. Conhecemos nossa cidade e nossos clientes pelo nome. Confiança construída ao longo dos anos.",
    highlight: false,
  },
];

export function Diferenciais() {
  return (
    <section id="diferenciais" className="py-20 md:py-28"
      style={{ background: "linear-gradient(180deg, #0B1F14 0%, #071410 100%)" }}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14 max-w-2xl mx-auto">
          <p style={{ fontFamily: F }} className="text-[#C8781A] text-sm font-semibold tracking-[0.2em] uppercase mb-3">
            Por que escolher a Lima Móveis?
          </p>
          <h2 style={{ fontFamily: FR }} className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
            O que nos torna{" "}
            <span className="italic" style={{ color: "#E09848" }}>diferentes</span>
          </h2>
          <p style={{ fontFamily: F }} className="text-white/50 mt-4 text-base leading-relaxed">
            Mais do que uma loja — somos parceiros na montagem do seu lar.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((item, i) => (
            <div key={item.title}
              className={`relative group rounded-2xl p-7 border transition-all duration-300 overflow-hidden
                ${item.highlight ? "border-[#C8781A]/50" : "border-white/[0.08] hover:border-white/20"}`}
              style={{ background: item.highlight ? "linear-gradient(135deg, rgba(200,120,26,0.15), rgba(200,120,26,0.05))" : "rgba(255,255,255,0.03)" }}>

              {!item.highlight && (
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
                  style={{ background: "radial-gradient(ellipse at top left, rgba(200,120,26,0.06), transparent 60%)" }} />
              )}

              <span style={{ fontFamily: FR, color: item.highlight ? "rgba(200,120,26,0.12)" : "rgba(255,255,255,0.04)" }}
                className="absolute bottom-4 right-5 text-6xl font-bold select-none leading-none pointer-events-none">
                {String(i + 1).padStart(2, "0")}
              </span>

              <div className="relative flex flex-col gap-4">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                  style={{ background: item.highlight ? "rgba(200,120,26,0.25)" : "rgba(255,255,255,0.06)" }}>
                  <item.icon size={22} className={item.highlight ? "text-[#E09848]" : "text-white/60"} />
                </div>
                <div>
                  <h3 style={{ fontFamily: FR }} className="text-white font-bold text-lg mb-2 leading-snug">{item.title}</h3>
                  <p style={{ fontFamily: F }} className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
