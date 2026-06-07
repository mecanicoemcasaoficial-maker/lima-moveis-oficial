import {
  ArrowRight,
  BadgeCheck,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  Star,
  Truck,
} from "lucide-react";

const WA =
  "https://wa.me/5582996581028?text=Ol%C3%A1%2C%20gostaria%20de%20conhecer%20os%20produtos%20da%20Lima%20M%C3%B3veis%20%26%20Eletros!";

const F = "'Outfit', sans-serif";
const FR = "'Fraunces', serif";

const HERO_IMG =
  "https://images.unsplash.com/photo-1724582586529-62622e50c0b3?w=1400&h=1000&fit=crop&auto=format&q=90";

export function Hero() {
  return (
    <section
      className="relative min-h-screen overflow-hidden"
      style={{
        background:
          "radial-gradient(circle at 80% 20%, rgba(200,120,26,0.16), transparent 32%), linear-gradient(135deg, #06120F 0%, #0A1B13 50%, #06120F 100%)",
      }}
    >
      {/* textura premium */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E\")",
          backgroundRepeat: "repeat",
          backgroundSize: "140px",
        }}
      />

      {/* brilhos de fundo */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full opacity-20 blur-[100px]"
          style={{ background: "#C8781A" }}
        />
        <div
          className="absolute -bottom-40 -left-40 h-[460px] w-[460px] rounded-full opacity-15 blur-[90px]"
          style={{ background: "#2D6A4F" }}
        />
      </div>

      {/* linha superior */}
      <div
        className="absolute left-0 right-0 top-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(200,120,26,0.65), rgba(224,152,72,0.85), transparent)",
        }}
      />

      <div className="relative mx-auto grid min-h-screen w-full max-w-7xl grid-cols-1 items-center gap-12 px-5 pb-20 pt-32 sm:px-6 lg:grid-cols-[0.92fr_1.08fr] lg:gap-16 lg:pb-24 lg:pt-36">
        {/* ESQUERDA */}
        <div className="relative z-10 flex flex-col items-start">
          <div className="mb-6 flex w-fit items-center gap-2.5 rounded-full border border-[#C8781A]/35 bg-[#C8781A]/10 px-4 py-2 shadow-[0_0_35px_rgba(200,120,26,0.12)]">
            <Truck size={15} className="shrink-0 text-[#E09848]" />
            <span
              style={{ fontFamily: F }}
              className="text-xs font-semibold tracking-wide text-[#E7A45E] sm:text-sm"
            >
              Entrega em Lagoa da Canoa e região
            </span>
          </div>

          <div className="mb-6">
            <p
              style={{ fontFamily: F }}
              className="mb-3 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-white/45"
            >
              <Sparkles size={14} className="text-[#C8781A]" />
              Lima Móveis & Eletros
            </p>

            <h1
              style={{ fontFamily: FR }}
              className="max-w-[780px] text-white"
            >
              <span className="block text-[clamp(3rem,6.4vw,5.45rem)] font-black leading-[0.95] tracking-[-0.045em]">
                Sua casa
              </span>

              <span
                className="mt-2 block text-[clamp(3rem,6.4vw,5.45rem)] font-black italic leading-[0.95] tracking-[-0.045em]"
                style={{
                  color: "#E6A255",
                  textShadow: "0 10px 45px rgba(200,120,26,0.18)",
                }}
              >
                mais bonita
              </span>

              <span className="mt-2 block text-[clamp(2.75rem,6vw,5.1rem)] font-black leading-[0.98] tracking-[-0.045em]">
                começa aqui.
              </span>
            </h1>
          </div>

          <p
            style={{ fontFamily: F }}
            className="max-w-xl text-[1.03rem] leading-[1.8] text-white/62 sm:text-lg"
          >
            Móveis, eletros e produtos para sala, quarto e cozinha com
            atendimento próximo, entrega facilitada e aquela escolha certa para
            transformar seu lar.
          </p>

          <div className="mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:items-center">
            <a
              href={WA}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-3 rounded-full px-8 py-4 text-base font-bold text-white shadow-[0_12px_38px_rgba(200,120,26,0.38)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_50px_rgba(200,120,26,0.56)] active:scale-95"
              style={{
                background: "linear-gradient(135deg, #D18424 0%, #A65E12 100%)",
                fontFamily: F,
              }}
            >
              <MessageCircle
                size={20}
                className="transition-transform group-hover:scale-110"
              />
              Falar no WhatsApp
            </a>

            <a
              href="#categorias"
              className="group flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-8 py-4 text-base font-semibold text-white/72 backdrop-blur-sm transition-all duration-300 hover:border-[#C8781A]/55 hover:bg-white/[0.06] hover:text-white"
              style={{ fontFamily: F }}
            >
              Ver produtos
              <ArrowRight
                size={17}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>
          </div>

          <div className="mt-8 grid w-full max-w-xl grid-cols-1 gap-3 border-t border-white/10 pt-6 sm:grid-cols-3">
            <div className="flex items-center gap-2.5">
              <div className="flex gap-0.5">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star
                    key={i}
                    size={13}
                    className="fill-[#C8781A] text-[#C8781A]"
                  />
                ))}
              </div>
              <span
                style={{ fontFamily: F }}
                className="text-xs font-medium text-white/55"
              >
                5.0 no Google
              </span>
            </div>

            <div className="flex items-center gap-2.5">
              <ShieldCheck size={15} className="text-[#4AA578]" />
              <span
                style={{ fontFamily: F }}
                className="text-xs font-medium text-white/55"
              >
                Compra segura
              </span>
            </div>

            <div className="flex items-center gap-2.5">
              <BadgeCheck size={15} className="text-[#E09848]" />
              <span
                style={{ fontFamily: F }}
                className="text-xs font-medium text-white/55"
              >
                Atendimento local
              </span>
            </div>
          </div>
        </div>

        {/* DIREITA */}
        <div className="relative z-10 mx-auto w-full max-w-[640px] lg:mr-0">
          <div
            className="absolute -inset-6 rounded-[42px] opacity-20 blur-[45px]"
            style={{
              background:
                "radial-gradient(ellipse at center, rgba(200,120,26,0.9), transparent 62%)",
            }}
          />

          <div className="absolute -left-4 bottom-10 hidden h-28 w-px bg-gradient-to-b from-transparent via-[#C8781A]/80 to-transparent lg:block" />
          <div className="absolute -bottom-4 left-10 hidden h-px w-28 bg-gradient-to-r from-transparent via-[#C8781A]/80 to-transparent lg:block" />

          <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.04] p-2 shadow-[0_30px_90px_rgba(0,0,0,0.42)] backdrop-blur-sm sm:rounded-[36px] sm:p-3">
            <div className="relative overflow-hidden rounded-[22px] sm:rounded-[28px]">
              <img
                src={HERO_IMG}
                alt="Sala moderna com móveis elegantes — Lima Móveis & Eletros"
                className="h-[360px] w-full object-cover sm:h-[460px] lg:h-[500px]"
              />

              <div
                className="pointer-events-none absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to top, rgba(6,18,15,0.78) 0%, rgba(6,18,15,0.16) 46%, rgba(6,18,15,0) 100%)",
                }}
              />

              <div className="absolute left-4 top-4 rounded-full border border-white/12 bg-black/25 px-3.5 py-2 backdrop-blur-md sm:left-5 sm:top-5">
                <p
                  style={{ fontFamily: F }}
                  className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/75"
                >
                  Ambientes completos
                </p>
              </div>

              <div className="absolute bottom-4 left-4 right-4 rounded-2xl border border-white/10 bg-[#06120F]/85 p-4 shadow-2xl backdrop-blur-xl sm:bottom-5 sm:left-5 sm:right-auto sm:min-w-[340px] sm:p-5">
                <div className="flex items-center gap-3">
                  <div
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl shadow-[0_12px_30px_rgba(200,120,26,0.28)]"
                    style={{
                      background:
                        "linear-gradient(135deg, #D18424 0%, #A65E12 100%)",
                    }}
                  >
                    <Truck size={18} className="text-white" />
                  </div>

                  <div>
                    <p
                      style={{ fontFamily: FR }}
                      className="text-base font-bold leading-tight text-white"
                    >
                      A loja que vai até você
                    </p>
                    <p
                      style={{ fontFamily: F }}
                      className="mt-1 text-xs leading-relaxed text-white/48"
                    >
                      Atendimento pelo WhatsApp e entrega combinada.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -right-2 top-12 rounded-2xl border border-[#C8781A]/30 bg-[#06120F]/90 px-4 py-3 shadow-2xl backdrop-blur-xl sm:-right-5 sm:top-16">
              <div className="flex items-center gap-2">
                <Star size={14} className="fill-[#C8781A] text-[#C8781A]" />
                <span
                  style={{ fontFamily: FR }}
                  className="text-sm font-black text-white"
                >
                  5.0
                </span>
                <span
                  style={{ fontFamily: F }}
                  className="text-xs font-medium text-white/38"
                >
                  Google
                </span>
              </div>
              <p
                style={{ fontFamily: F }}
                className="mt-1 text-center text-[10px] text-white/35"
              >
                Clientes satisfeitos
              </p>
            </div>
          </div>
        </div>
      </div>

      <a
        href="#stats"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-1.5 opacity-70 transition-opacity hover:opacity-100 lg:flex"
      >
        <span
          style={{ fontFamily: F }}
          className="text-[10px] uppercase tracking-[0.28em] text-white/28"
        >
          Explorar
        </span>
        <div className="flex h-8 w-5 items-start justify-center rounded-full border border-white/15 pt-1.5">
          <div className="h-2 w-0.5 animate-bounce rounded-full bg-white/35" />
        </div>
      </a>
    </section>
  );
}