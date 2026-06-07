import {
  ArrowRight,
  BadgeCheck,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  Star,
  Truck,
} from "lucide-react";
import heroLoja from "../../imports/image-2.jpg";

const WA =
  "https://wa.me/5582996581028?text=Ol%C3%A1%2C%20gostaria%20de%20conhecer%20os%20produtos%20da%20Lima%20M%C3%B3veis%20%26%20Eletros!";

const F = "'Outfit', sans-serif";
const FR = "'Fraunces', serif";

export function Hero() {
  return (
    <section
      className="relative isolate overflow-hidden"
      style={{
        background:
          "radial-gradient(circle at 85% 10%, rgba(200,120,26,0.18), transparent 28%), linear-gradient(135deg, #06120F 0%, #0A1B13 52%, #06120F 100%)",
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
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute -right-44 -top-44 h-[480px] w-[480px] rounded-full opacity-20 blur-[110px]"
          style={{ background: "#C8781A" }}
        />
        <div
          className="absolute -bottom-44 -left-44 h-[420px] w-[420px] rounded-full opacity-14 blur-[95px]"
          style={{ background: "#2D6A4F" }}
        />
      </div>

      {/* linha superior elegante */}
      <div
        className="absolute left-0 right-0 top-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(200,120,26,0.65), rgba(224,152,72,0.85), transparent)",
        }}
      />

      <div className="relative mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-8 px-5 pb-12 pt-28 sm:px-6 sm:pb-16 sm:pt-32 lg:min-h-screen lg:grid-cols-[0.92fr_1.08fr] lg:gap-16 lg:pb-24 lg:pt-36">
        {/* CONTEÚDO */}
        <div className="relative z-10 flex flex-col items-start">
          <div className="mb-5 flex w-fit items-center gap-2 rounded-full border border-[#C8781A]/35 bg-[#C8781A]/10 px-3.5 py-2 shadow-[0_0_35px_rgba(200,120,26,0.12)] sm:mb-6 sm:px-4">
            <Truck size={14} className="shrink-0 text-[#E09848]" />
            <span
              style={{ fontFamily: F }}
              className="text-[11px] font-semibold tracking-wide text-[#E7A45E] sm:text-sm"
            >
              Entrega em Lagoa da Canoa e região
            </span>
          </div>

          <div className="mb-5 sm:mb-6">
            <p
              style={{ fontFamily: F }}
              className="mb-3 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-white/45 sm:text-[11px] sm:tracking-[0.24em]"
            >
              <Sparkles size={13} className="text-[#C8781A]" />
              Lima Móveis & Eletros
            </p>

            <h1 style={{ fontFamily: FR }} className="max-w-[780px] text-white">
              <span className="block text-[clamp(2.55rem,12vw,4rem)] font-black leading-[0.95] tracking-[-0.045em] sm:text-[clamp(3rem,6.4vw,5.45rem)]">
                Sua casa
              </span>

              <span
                className="mt-1.5 block text-[clamp(2.55rem,12vw,4rem)] font-black italic leading-[0.95] tracking-[-0.045em] sm:mt-2 sm:text-[clamp(3rem,6.4vw,5.45rem)]"
                style={{
                  color: "#E6A255",
                  textShadow: "0 10px 45px rgba(200,120,26,0.18)",
                }}
              >
                mais bonita
              </span>

              <span className="mt-1.5 block text-[clamp(2.35rem,11vw,3.75rem)] font-black leading-[0.98] tracking-[-0.045em] sm:mt-2 sm:text-[clamp(2.75rem,6vw,5.1rem)]">
                começa aqui.
              </span>
            </h1>
          </div>

          <p
            style={{ fontFamily: F }}
            className="max-w-xl text-[0.98rem] leading-[1.72] text-white/66 sm:text-lg sm:leading-[1.8]"
          >
            Móveis, eletros e produtos para sala, quarto e cozinha com
            atendimento próximo, entrega facilitada e aquela escolha certa para
            transformar seu lar.
          </p>

          <div className="mt-7 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:items-center">
            <a
              href={WA}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex min-h-[56px] items-center justify-center gap-3 rounded-full px-7 py-3.5 text-[0.95rem] font-bold text-white shadow-[0_12px_38px_rgba(200,120,26,0.38)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_50px_rgba(200,120,26,0.56)] active:scale-95"
              style={{
                background:
                  "linear-gradient(135deg, #D18424 0%, #A65E12 100%)",
                fontFamily: F,
              }}
            >
              <MessageCircle
                size={19}
                className="transition-transform group-hover:scale-110"
              />
              Falar no WhatsApp
            </a>

            <a
              href="#categorias"
              className="group flex min-h-[54px] items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.035] px-7 py-3.5 text-[0.95rem] font-semibold text-white/72 backdrop-blur-sm transition-all duration-300 hover:border-[#C8781A]/55 hover:bg-white/[0.06] hover:text-white"
              style={{ fontFamily: F }}
            >
              Ver produtos
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>
          </div>

          {/* selos desktop */}
          <div className="mt-7 hidden w-full max-w-xl grid-cols-3 gap-3 border-t border-white/10 pt-5 sm:grid">
            <div className="flex items-center gap-2.5 rounded-2xl border border-white/8 bg-white/[0.025] px-3 py-3">
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
                className="text-xs font-medium text-white/60"
              >
                5.0 no Google
              </span>
            </div>

            <div className="flex items-center gap-2.5 rounded-2xl border border-white/8 bg-white/[0.025] px-3 py-3">
              <ShieldCheck size={15} className="text-[#4AA578]" />
              <span
                style={{ fontFamily: F }}
                className="text-xs font-medium text-white/60"
              >
                Compra segura
              </span>
            </div>

            <div className="flex items-center gap-2.5 rounded-2xl border border-white/8 bg-white/[0.025] px-3 py-3">
              <BadgeCheck size={15} className="text-[#E09848]" />
              <span
                style={{ fontFamily: F }}
                className="text-xs font-medium text-white/60"
              >
                Atendimento local
              </span>
            </div>
          </div>

          {/* selos mobile - agora ficam no fluxo normal, sem sobrepor a foto */}
          <div className="mt-6 grid w-full grid-cols-2 gap-2 border-t border-white/10 pt-5 sm:hidden">
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] px-3.5 py-3 shadow-[0_10px_25px_rgba(0,0,0,0.14)] backdrop-blur-sm">
              <div className="mb-1 flex gap-0.5">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star
                    key={i}
                    size={12}
                    className="fill-[#C8781A] text-[#C8781A]"
                  />
                ))}
              </div>
              <p
                style={{ fontFamily: F }}
                className="text-[11px] font-semibold text-white/60"
              >
                5.0 no Google
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.04] px-3.5 py-3 shadow-[0_10px_25px_rgba(0,0,0,0.14)] backdrop-blur-sm">
              <div className="mb-1 flex items-center gap-1.5">
                <ShieldCheck size={14} className="text-[#4AA578]" />
                <BadgeCheck size={14} className="text-[#E09848]" />
              </div>
              <p
                style={{ fontFamily: F }}
                className="text-[11px] font-semibold text-white/60"
              >
                Atendimento local
              </p>
            </div>
          </div>
        </div>

        {/* IMAGEM DA LOJA */}
        <div className="relative z-10 mx-auto mt-1 w-full max-w-[560px] sm:mt-2 lg:mr-0 lg:mt-0">
          {/* brilho externo apenas em telas maiores para não causar sujeira no mobile */}
          <div
            className="pointer-events-none absolute -inset-6 hidden rounded-[42px] opacity-25 blur-[45px] sm:block"
            style={{
              background:
                "radial-gradient(ellipse at center, rgba(200,120,26,0.95), transparent 62%)",
            }}
          />

          <div className="absolute -left-3 top-10 hidden h-24 w-px bg-gradient-to-b from-transparent via-[#C8781A]/80 to-transparent lg:block" />
          <div className="absolute -bottom-3 left-10 hidden h-px w-24 bg-gradient-to-r from-transparent via-[#C8781A]/80 to-transparent lg:block" />

          <div className="group relative overflow-hidden rounded-[26px] border border-white/10 bg-white/[0.04] p-2 shadow-[0_26px_70px_rgba(0,0,0,0.42)] backdrop-blur-sm sm:rounded-[32px] sm:p-3 lg:shadow-[0_30px_90px_rgba(0,0,0,0.42)]">
            <div className="pointer-events-none absolute inset-0 rounded-[26px] border border-[#E6A255]/20 sm:rounded-[32px]" />

            <div
              className="pointer-events-none absolute -left-20 top-0 hidden h-full w-24 rotate-12 opacity-20 blur-xl transition-all duration-700 group-hover:left-[110%] sm:block"
              style={{
                background:
                  "linear-gradient(180deg, transparent 0%, rgba(255,255,255,0.35) 50%, transparent 100%)",
              }}
            />

            <div className="relative overflow-hidden rounded-[20px] sm:rounded-[26px]">
              <img
                src={heroLoja}
                alt="Fachada da loja Lima Móveis & Eletros"
                className="aspect-[4/3] w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.03] sm:aspect-square"
              />

              <div
                className="pointer-events-none absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to top, rgba(6,18,15,0.16) 0%, rgba(6,18,15,0.04) 42%, rgba(6,18,15,0) 72%)",
                }}
              />

              <div className="absolute right-3 top-3 rounded-2xl border border-[#C8781A]/35 bg-[#06120F]/92 px-3 py-2 shadow-[0_10px_24px_rgba(0,0,0,0.25)] backdrop-blur-xl sm:right-5 sm:top-5 sm:px-3.5 sm:py-2.5">
                <div className="flex items-center gap-1.5">
                  <Star size={13} className="fill-[#C8781A] text-[#C8781A]" />
                  <span
                    style={{ fontFamily: FR }}
                    className="text-sm font-black text-white"
                  >
                    5.0
                  </span>
                </div>
              </div>

              <div className="absolute bottom-3 left-3 max-w-[78%] rounded-2xl border border-white/10 bg-[#06120F]/86 px-3.5 py-3 shadow-[0_18px_40px_rgba(0,0,0,0.28)] backdrop-blur-xl sm:bottom-5 sm:left-5 sm:max-w-[285px] sm:px-4 sm:py-3">
                <div className="flex items-start gap-3">
                  <div
                    className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl shadow-[0_12px_30px_rgba(200,120,26,0.28)]"
                    style={{
                      background:
                        "linear-gradient(135deg, #D18424 0%, #A65E12 100%)",
                    }}
                  >
                    <Truck size={16} className="text-white" />
                  </div>

                  <div>
                    <p
                      style={{ fontFamily: FR }}
                      className="text-sm font-bold leading-tight text-white"
                    >
                      A loja que vai até você
                    </p>
                    <p
                      style={{ fontFamily: F }}
                      className="mt-1 text-[11px] leading-relaxed text-white/60 sm:text-xs"
                    >
                      Atendimento pelo WhatsApp e entrega combinada.
                    </p>
                  </div>
                </div>
              </div>

              <div
                className="pointer-events-none absolute -bottom-10 left-1/2 h-24 w-[70%] -translate-x-1/2 rounded-full opacity-30 blur-2xl"
                style={{
                  background:
                    "radial-gradient(circle, rgba(200,120,26,0.55) 0%, transparent 68%)",
                }}
              />
            </div>
          </div>
        </div>
      </div>

      <a
        href="#stats"
        aria-label="Explorar próxima seção"
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