import { useEffect, useMemo, useRef, useState } from "react";
import {
  ArrowRight,
  BadgeCheck,
  Check,
  MessageCircle,
  Minus,
  Plus,
  ShoppingCart,
  Star,
  Trash2,
  Truck,
  X,
} from "lucide-react";

const WA =
  "https://wa.me/5582996581028?text=Ol%C3%A1%2C%20tenho%20interesse%20nos%20produtos%20da%20Lima%20M%C3%B3veis%20%26%20Eletros!";

const F = "'Outfit', sans-serif";
const FR = "'Fraunces', serif";

type Product = {
  id: string;
  category: string;
  name: string;
  desc: string;
  price: number;
  oldPrice?: number;
  image: string;
  badge?: string;
  featured?: boolean;
};

type CartItem = Product & {
  quantity: number;
};

const categories = [
  { id: "todos", label: "Todos" },
  { id: "sala", label: "Sala" },
  { id: "quarto", label: "Quarto" },
  { id: "cozinha", label: "Cozinha" },
  { id: "eletros", label: "Eletros" },
];

const products: Product[] = [
  {
    id: "sofa-3-lugares",
    category: "sala",
    name: "Sofá 3 Lugares Confort",
    desc: "Sofá espaçoso, confortável e ideal para deixar sua sala mais bonita e aconchegante.",
    price: 1199,
    oldPrice: 1399,
    image:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=900&h=700&fit=crop&auto=format",
    badge: "Mais procurado",
    featured: true,
  },
  {
    id: "rack-tv",
    category: "sala",
    name: "Rack para TV Moderno",
    desc: "Rack elegante para TV, decoração e organização da sala com acabamento moderno.",
    price: 499,
    oldPrice: 599,
    image:
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=900&h=700&fit=crop&auto=format",
    badge: "Oferta",
  },
  {
    id: "painel-tv",
    category: "sala",
    name: "Painel para TV",
    desc: "Painel resistente, bonito e perfeito para valorizar o ambiente da sua casa.",
    price: 389,
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=900&h=700&fit=crop&auto=format",
  },
  {
    id: "cama-casal",
    category: "quarto",
    name: "Cama Casal Premium",
    desc: "Cama confortável, resistente e com visual elegante para renovar o quarto.",
    price: 799,
    oldPrice: 899,
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=900&h=700&fit=crop&auto=format",
    badge: "Conforto",
    featured: true,
  },
  {
    id: "guarda-roupa",
    category: "quarto",
    name: "Guarda-Roupa 6 Portas",
    desc: "Muito espaço interno, ótimo acabamento e organização para o dia a dia.",
    price: 1499,
    oldPrice: 1699,
    image:
      "https://images.unsplash.com/photo-1615873968403-89e068629265?w=900&h=700&fit=crop&auto=format",
    badge: "Grande espaço",
  },
  {
    id: "comoda",
    category: "quarto",
    name: "Cômoda Multiuso",
    desc: "Ideal para organizar roupas, acessórios e deixar o quarto mais prático.",
    price: 349,
    image:
      "https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?w=900&h=700&fit=crop&auto=format",
  },
  {
    id: "mesa-jantar",
    category: "cozinha",
    name: "Mesa de Jantar 4 Cadeiras",
    desc: "Conjunto perfeito para reunir a família com conforto, beleza e praticidade.",
    price: 899,
    oldPrice: 999,
    image:
      "https://images.unsplash.com/photo-1617806118233-18e1de247200?w=900&h=700&fit=crop&auto=format",
    badge: "Família",
    featured: true,
  },
  {
    id: "armario-cozinha",
    category: "cozinha",
    name: "Armário de Cozinha",
    desc: "Mais organização para sua cozinha com design bonito e acabamento resistente.",
    price: 749,
    image:
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=900&h=700&fit=crop&auto=format",
  },
  {
    id: "fogao",
    category: "eletros",
    name: "Fogão 4 Bocas",
    desc: "Fogão prático, econômico e ideal para o uso diário da família.",
    price: 699,
    oldPrice: 799,
    image:
      "https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?w=900&h=700&fit=crop&auto=format",
    badge: "Preço bom",
  },
  {
    id: "geladeira",
    category: "eletros",
    name: "Geladeira Duplex",
    desc: "Espaço, economia e praticidade para manter seus alimentos sempre bem conservados.",
    price: 2299,
    oldPrice: 2499,
    image:
      "https://images.unsplash.com/photo-1584568518279-d781778d60f2?w=900&h=700&fit=crop&auto=format",
    badge: "Destaque",
    featured: true,
  },
  {
    id: "maquina-lavar",
    category: "eletros",
    name: "Máquina de Lavar",
    desc: "Mais praticidade para sua rotina com lavagem eficiente e economia de tempo.",
    price: 1599,
    image:
      "https://images.unsplash.com/photo-1626806819282-2c1dc01a5e0c?w=900&h=700&fit=crop&auto=format",
  },
  {
    id: "tv-smart",
    category: "eletros",
    name: "Smart TV LED",
    desc: "Imagem de qualidade para filmes, novelas, jogos e momentos em família.",
    price: 1399,
    oldPrice: 1599,
    image:
      "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=900&h=700&fit=crop&auto=format",
    badge: "Smart",
  },
];

function formatPrice(value: number) {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value);
}

export function Categorias() {
  const sectionRef = useRef<HTMLElement | null>(null);

  const [active, setActive] = useState("todos");
  const [cart, setCart] = useState<CartItem[]>([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [showFloatingCart, setShowFloatingCart] = useState(false);

  const filteredProducts = useMemo(() => {
    if (active === "todos") return products;
    return products.filter((product) => product.category === active);
  }, [active]);

  const cartCount = useMemo(() => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  }, [cart]);

  const cartTotal = useMemo(() => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  }, [cart]);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowFloatingCart(entry.isIntersecting);
      },
      {
        threshold: 0.08,
        rootMargin: "-80px 0px -120px 0px",
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  function addToCart(product: Product) {
    setCart((current) => {
      const alreadyInCart = current.find((item) => item.id === product.id);

      if (alreadyInCart) {
        return current.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...current, { ...product, quantity: 1 }];
    });

    setCartOpen(true);
  }

  function decreaseItem(productId: string) {
    setCart((current) =>
      current
        .map((item) =>
          item.id === productId
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  }

  function removeItem(productId: string) {
    setCart((current) => current.filter((item) => item.id !== productId));
  }

  function clearCart() {
    setCart([]);
    setCartOpen(false);
  }

  function buildWhatsAppMessage() {
    if (cart.length === 0) {
      return WA;
    }

    const itemsText = cart
      .map(
        (item) =>
          `• ${item.quantity}x ${item.name} - ${formatPrice(
            item.price * item.quantity
          )}`
      )
      .join("%0A");

    const message = `Ol%C3%A1%2C%20tenho%20interesse%20nestes%20produtos%20da%20Lima%20M%C3%B3veis%20%26%20Eletros%3A%0A%0A${itemsText}%0A%0ATotal%20aproximado%3A%20${encodeURIComponent(
      formatPrice(cartTotal)
    )}%0A%0APode%20me%20passar%20mais%20informa%C3%A7%C3%B5es%3F`;

    return `https://wa.me/5582996581028?text=${message}`;
  }

  return (
    <section
      ref={sectionRef}
      id="categorias"
      className="relative overflow-hidden bg-[#FAF7F0] py-16 sm:py-20 md:py-28"
    >
      {/* fundo elegante */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-40 top-10 h-[380px] w-[380px] rounded-full bg-[#C8781A]/10 blur-[95px]" />
        <div className="absolute -left-44 bottom-10 h-[360px] w-[360px] rounded-full bg-[#2D6A4F]/10 blur-[90px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6">
        {/* header */}
        <div className="mb-10 flex flex-col gap-6 md:mb-12 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="mb-4 flex w-fit items-center gap-2 rounded-full border border-[#C8781A]/25 bg-[#C8781A]/10 px-3.5 py-2">
              <ShoppingCart size={15} className="text-[#C8781A]" />
              <span
                style={{ fontFamily: F }}
                className="text-xs font-bold uppercase tracking-[0.18em] text-[#C8781A]"
              >
                Produtos selecionados
              </span>
            </div>

            <h2
              style={{ fontFamily: FR }}
              className="max-w-3xl text-3xl font-black leading-tight tracking-[-0.03em] text-[#1A140A] sm:text-4xl lg:text-5xl"
            >
              Escolha seus produtos e peça direto pelo{" "}
              <span className="italic text-[#C8781A]">WhatsApp</span>
            </h2>
          </div>

          <p
            style={{ fontFamily: F }}
            className="max-w-md text-base leading-relaxed text-[#7A6B52]"
          >
            Móveis, eletros e itens para sua casa com atendimento próximo,
            entrega combinada e orçamento rápido.
          </p>
        </div>

        {/* benefícios */}
        <div className="mb-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
          <div className="flex items-center gap-3 rounded-2xl border border-[#E2D9CA] bg-white/75 px-4 py-3 shadow-sm backdrop-blur-sm">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-[#C8781A]/10">
              <Truck size={18} className="text-[#C8781A]" />
            </div>
            <div>
              <p
                style={{ fontFamily: F }}
                className="text-sm font-bold text-[#1A140A]"
              >
                Entrega facilitada
              </p>
              <p
                style={{ fontFamily: F }}
                className="text-xs text-[#7A6B52]"
              >
                Combine direto com a loja.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 rounded-2xl border border-[#E2D9CA] bg-white/75 px-4 py-3 shadow-sm backdrop-blur-sm">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-[#2D6A4F]/10">
              <BadgeCheck size={18} className="text-[#2D6A4F]" />
            </div>
            <div>
              <p
                style={{ fontFamily: F }}
                className="text-sm font-bold text-[#1A140A]"
              >
                Atendimento local
              </p>
              <p
                style={{ fontFamily: F }}
                className="text-xs text-[#7A6B52]"
              >
                Fale com quem está perto.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 rounded-2xl border border-[#E2D9CA] bg-white/75 px-4 py-3 shadow-sm backdrop-blur-sm">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-[#C8781A]/10">
              <Star size={18} className="fill-[#C8781A] text-[#C8781A]" />
            </div>
            <div>
              <p
                style={{ fontFamily: F }}
                className="text-sm font-bold text-[#1A140A]"
              >
                Produtos para o lar
              </p>
              <p
                style={{ fontFamily: F }}
                className="text-xs text-[#7A6B52]"
              >
                Sala, quarto, cozinha e eletros.
              </p>
            </div>
          </div>
        </div>

        {/* filtros */}
        <div className="sticky top-[72px] z-20 -mx-5 mb-8 overflow-x-auto border-y border-[#E2D9CA]/80 bg-[#FAF7F0]/92 px-5 py-3 backdrop-blur-xl sm:static sm:mx-0 sm:overflow-visible sm:border-0 sm:bg-transparent sm:px-0 sm:py-0">
          <div className="flex min-w-max gap-2 sm:flex-wrap">
            {categories.map((category) => {
              const isActive = active === category.id;

              return (
                <button
                  key={category.id}
                  onClick={() => setActive(category.id)}
                  style={{
                    fontFamily: F,
                    background: isActive
                      ? "linear-gradient(135deg, #C8781A 0%, #A65E12 100%)"
                      : "#FFFFFF",
                    borderColor: isActive ? "#C8781A" : "#E2D9CA",
                    color: isActive ? "#FFFFFF" : "#7A6B52",
                    boxShadow: isActive
                      ? "0 14px 34px rgba(200,120,26,0.24)"
                      : "0 8px 20px rgba(26,20,10,0.04)",
                  }}
                  className="rounded-full border px-5 py-2.5 text-sm font-bold transition-all duration-300 hover:-translate-y-0.5 hover:border-[#C8781A]/70 active:scale-95"
                >
                  {category.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* produtos */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredProducts.map((product) => {
            const itemInCart = cart.find((item) => item.id === product.id);

            return (
              <article
                key={product.id}
                className="group overflow-hidden rounded-[26px] border border-[#E2D9CA] bg-white shadow-[0_18px_45px_rgba(26,20,10,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_28px_65px_rgba(26,20,10,0.14)]"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-[#EDE7DA]">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />

                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#06120F]/45 via-transparent to-transparent" />

                  {product.badge && (
                    <div className="absolute left-3 top-3 rounded-full border border-white/25 bg-[#06120F]/82 px-3 py-1.5 text-[11px] font-bold uppercase tracking-wide text-white shadow-lg backdrop-blur-xl">
                      {product.badge}
                    </div>
                  )}

                  {product.featured && (
                    <div className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-[#C8781A] shadow-[0_10px_25px_rgba(200,120,26,0.35)]">
                      <Star size={15} className="fill-white text-white" />
                    </div>
                  )}
                </div>

                <div className="flex min-h-[250px] flex-col justify-between p-5">
                  <div>
                    <h3
                      style={{ fontFamily: FR }}
                      className="text-xl font-black leading-tight text-[#1A140A]"
                    >
                      {product.name}
                    </h3>

                    <p
                      style={{ fontFamily: F }}
                      className="mt-2 line-clamp-3 text-sm leading-relaxed text-[#7A6B52]"
                    >
                      {product.desc}
                    </p>

                    <div className="mt-4 flex items-end gap-2">
                      <strong
                        style={{ fontFamily: FR }}
                        className="text-2xl font-black text-[#2D6A4F]"
                      >
                        {formatPrice(product.price)}
                      </strong>

                      {product.oldPrice && (
                        <span
                          style={{ fontFamily: F }}
                          className="pb-1 text-sm font-semibold text-[#9D8E76] line-through"
                        >
                          {formatPrice(product.oldPrice)}
                        </span>
                      )}
                    </div>

                    <p
                      style={{ fontFamily: F }}
                      className="mt-1 text-xs font-semibold text-[#C8781A]"
                    >
                      Consulte condições e entrega pelo WhatsApp
                    </p>
                  </div>

                  <button
                    onClick={() => addToCart(product)}
                    style={{ fontFamily: F }}
                    className="mt-5 flex min-h-[48px] w-full items-center justify-center gap-2 rounded-full bg-[#06120F] px-5 py-3 text-sm font-bold text-white shadow-[0_12px_28px_rgba(6,18,15,0.22)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#C8781A] hover:shadow-[0_16px_34px_rgba(200,120,26,0.30)] active:scale-95"
                  >
                    {itemInCart ? (
                      <>
                        <Check size={17} />
                        Adicionado
                      </>
                    ) : (
                      <>
                        <Plus size={17} />
                        Adicionar ao carrinho
                      </>
                    )}
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      {/* carrinho flutuante: aparece somente dentro da seção de produtos */}
      {showFloatingCart && cart.length > 0 && (
        <div className="fixed bottom-4 left-0 right-0 z-50 px-4 sm:bottom-6">
          <div className="mx-auto max-w-7xl">
            <div className="ml-auto w-full max-w-[420px] overflow-hidden rounded-[28px] border border-white/20 bg-[#06120F]/94 shadow-[0_24px_75px_rgba(0,0,0,0.38)] backdrop-blur-2xl">
              <button
                onClick={() => setCartOpen((current) => !current)}
                className="flex w-full items-center justify-between gap-4 px-4 py-4 text-left sm:px-5"
              >
                <div className="flex items-center gap-3">
                  <div className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#C8781A] shadow-[0_14px_35px_rgba(200,120,26,0.34)]">
                    <ShoppingCart size={21} className="text-white" />
                    <span className="absolute -right-1.5 -top-1.5 flex h-6 min-w-6 items-center justify-center rounded-full border-2 border-[#06120F] bg-white px-1.5 text-xs font-black text-[#06120F]">
                      {cartCount}
                    </span>
                  </div>

                  <div>
                    <p
                      style={{ fontFamily: F }}
                      className="text-sm font-bold text-white"
                    >
                      Carrinho de produtos
                    </p>
                    <p
                      style={{ fontFamily: F }}
                      className="text-xs font-medium text-white/55"
                    >
                      {cartCount} {cartCount === 1 ? "item" : "itens"} •{" "}
                      {formatPrice(cartTotal)}
                    </p>
                  </div>
                </div>

                <div
                  style={{ fontFamily: F }}
                  className="hidden rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-xs font-bold text-white/75 sm:block"
                >
                  {cartOpen ? "Fechar" : "Ver carrinho"}
                </div>
              </button>

              {cartOpen && (
                <div className="border-t border-white/10 px-4 pb-4 sm:px-5">
                  <div className="max-h-[260px] space-y-3 overflow-y-auto py-4 pr-1">
                    {cart.map((item) => (
                      <div
                        key={item.id}
                        className="flex gap-3 rounded-2xl border border-white/10 bg-white/[0.045] p-3"
                      >
                        <img
                          src={item.image}
                          alt={item.name}
                          className="h-16 w-16 shrink-0 rounded-xl object-cover"
                        />

                        <div className="min-w-0 flex-1">
                          <div className="flex items-start justify-between gap-2">
                            <div>
                              <p
                                style={{ fontFamily: F }}
                                className="line-clamp-1 text-sm font-bold text-white"
                              >
                                {item.name}
                              </p>
                              <p
                                style={{ fontFamily: F }}
                                className="mt-0.5 text-xs font-semibold text-[#E6A255]"
                              >
                                {formatPrice(item.price)}
                              </p>
                            </div>

                            <button
                              onClick={() => removeItem(item.id)}
                              className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/[0.06] text-white/55 transition hover:bg-red-500/15 hover:text-red-200"
                              aria-label={`Remover ${item.name}`}
                            >
                              <Trash2 size={14} />
                            </button>
                          </div>

                          <div className="mt-3 flex items-center justify-between gap-3">
                            <div className="flex items-center rounded-full border border-white/10 bg-black/15 p-1">
                              <button
                                onClick={() => decreaseItem(item.id)}
                                className="flex h-8 w-8 items-center justify-center rounded-full text-white/70 transition hover:bg-white/10 hover:text-white"
                                aria-label={`Diminuir quantidade de ${item.name}`}
                              >
                                <Minus size={14} />
                              </button>

                              <span
                                style={{ fontFamily: F }}
                                className="min-w-8 text-center text-sm font-black text-white"
                              >
                                {item.quantity}
                              </span>

                              <button
                                onClick={() => addToCart(item)}
                                className="flex h-8 w-8 items-center justify-center rounded-full text-white/70 transition hover:bg-white/10 hover:text-white"
                                aria-label={`Aumentar quantidade de ${item.name}`}
                              >
                                <Plus size={14} />
                              </button>
                            </div>

                            <strong
                              style={{ fontFamily: F }}
                              className="text-sm font-black text-white"
                            >
                              {formatPrice(item.price * item.quantity)}
                            </strong>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="border-t border-white/10 pt-4">
                    <div className="mb-4 flex items-center justify-between">
                      <span
                        style={{ fontFamily: F }}
                        className="text-sm font-semibold text-white/60"
                      >
                        Total aproximado
                      </span>
                      <strong
                        style={{ fontFamily: FR }}
                        className="text-2xl font-black text-white"
                      >
                        {formatPrice(cartTotal)}
                      </strong>
                    </div>

                    <div className="grid grid-cols-[1fr_auto] gap-2">
                      <a
                        href={buildWhatsAppMessage()}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ fontFamily: F }}
                        className="flex min-h-[48px] items-center justify-center gap-2 rounded-full bg-[#25D366] px-5 py-3 text-sm font-black text-white shadow-[0_14px_32px_rgba(37,211,102,0.28)] transition hover:-translate-y-0.5 active:scale-95"
                      >
                        <MessageCircle size={18} />
                        Pedir no WhatsApp
                        <ArrowRight size={15} />
                      </a>

                      <button
                        onClick={clearCart}
                        className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/[0.06] text-white/65 transition hover:bg-white/[0.1] hover:text-white"
                        aria-label="Limpar carrinho"
                      >
                        <X size={18} />
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}