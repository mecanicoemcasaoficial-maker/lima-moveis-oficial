import "../styles/fonts.css";
import "../styles/theme.css";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Stats } from "./components/Stats";
import { Categorias } from "./components/Categorias";
import { Diferenciais } from "./components/Diferenciais";
import { Sobre } from "./components/Sobre";
import { Testimonials } from "./components/Testimonials";
import { CallToAction } from "./components/CallToAction";
import { Footer } from "./components/Footer";
import { MessageCircle } from "lucide-react";

const WA = "https://wa.me/5582996581028?text=Ol%C3%A1%2C%20quero%20fazer%20um%20pedido!";

export default function App() {
  return (
    <div className="bg-background text-foreground min-h-screen" style={{ fontFamily: "'Outfit', sans-serif" }}>
      <Navbar />
      <Hero />
      <Stats />
      <Categorias />
      <Diferenciais />
      <Sobre />
      <Testimonials />
      <CallToAction />
      <Footer />

      {/* Floating WhatsApp button */}
      <a
        href={WA}
        target="_blank"
        rel="noopener noreferrer"
        style={{ background: "linear-gradient(135deg, #25D366, #1DA851)" }}
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 text-white px-5 py-3.5 rounded-full shadow-[0_8px_32px_rgba(37,211,102,0.45)] hover:shadow-[0_12px_40px_rgba(37,211,102,0.65)] transition-all duration-300 active:scale-95 group"
        aria-label="Pedir pelo WhatsApp"
      >
        <MessageCircle size={21} className="group-hover:scale-110 transition-transform shrink-0" />
        <span style={{ fontFamily: "'Outfit', sans-serif" }} className="font-semibold text-sm hidden sm:inline">
          Pedir agora
        </span>
        <span className="absolute inset-0 rounded-full animate-ping opacity-20" style={{ background: "#25D366" }} />
      </a>
    </div>
  );
}
