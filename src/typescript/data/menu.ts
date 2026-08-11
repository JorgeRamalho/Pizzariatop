export type PizzaCategory = "classicas" | "especiais" | "doces";

export interface Pizza {
  id: string;
  name: string;
  description: string;
  price: number;
  category: PizzaCategory;
  image: string;
  imageAlt: string;
}

/** Número WhatsApp no formato internacional (somente dígitos). */
export const WHATSAPP_NUMBER = "5511999999999";

export const MENU: Pizza[] = [
  {
    id: "margherita",
    name: "Margherita Top",
    description: "Molho San Marzano, mussarela de bufala, manjericão fresco e azeite.",
    price: 49.9,
    category: "classicas",
    image:
      "https://images.unsplash.com/photo-1600891964092-4316c288032e?w=600&q=80&fit=crop",
    imageAlt: "Pizza Margherita com manjericão e mussarela de bufala",
  },
  {
    id: "calabresa",
    name: "Calabresa Artesanal",
    description: "Calabresa fatiada, cebola roxa, orégano e queijo derretido.",
    price: 52.9,
    category: "classicas",
    image:
      "https://images.unsplash.com/photo-1550547660-d9450f859349?w=600&q=80&fit=crop",
    imageAlt: "Pizza de calabresa com fatias e queijo derretido",
  },
  {
    id: "portuguesa",
    name: "Portuguesa da Casa",
    description: "Presunto, ovos, cebola, azeitona, ervilha e mussarela.",
    price: 54.9,
    category: "classicas",
    image:
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&q=80&fit=crop",
    imageAlt: "Pizza portuguesa com presunto, ovos e azeitonas",
  },
  {
    id: "quatro-queijos",
    name: "Quatro Queijos Premium",
    description: "Mussarela, gorgonzola, parmesão e catupiry na medida certa.",
    price: 58.9,
    category: "especiais",
    image:
      "https://images.unsplash.com/photo-1754799565084-b381bd0b4db7?w=600&q=80&fit=crop",
    imageAlt: "Pizza quatro queijos com cobertura cremosa",
  },
  {
    id: "top-especial",
    name: "Top Especial",
    description: "Pepperoni, bacon crocante, cream cheese e borda de cheddar.",
    price: 62.9,
    category: "especiais",
    image:
      "https://images.unsplash.com/photo-1763647836753-e06fe1f8707b?w=600&q=80&fit=crop",
    imageAlt: "Pizza pepperoni com bacon e borda recheada",
  },
  {
    id: "veggie",
    name: "Veggie Garden",
    description: "Abobrinha, berinjela grelhada, tomate cereja e rúcula.",
    price: 56.9,
    category: "especiais",
    image:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&q=80&fit=crop",
    imageAlt: "Pizza vegetariana com legumes grelhados e rúcula",
  },
  {
    id: "chocolate",
    name: "Chocolate com Morango",
    description: "Chocolate belga, morangos frescos e granulado crocante.",
    price: 44.9,
    category: "doces",
    image:
      "https://images.unsplash.com/photo-1683735833903-38fd514da970?w=600&q=80&fit=crop",
    imageAlt: "Pizza doce de chocolate com morangos frescos",
  },
  {
    id: "romeu-julieta",
    name: "Romeu e Julieta",
    description: "Goiabada cascão com queijo minas derretido. Clássico brasileiro.",
    price: 42.9,
    category: "doces",
    image:
      "https://images.unsplash.com/photo-1713393281034-c7c9b046e1d3?w=600&q=80&fit=crop",
    imageAlt: "Pizza doce Romeu e Julieta com goiabada e queijo minas",
  },
  {
    id: "prestigio",
    name: "Prestígio Top",
    description: "Chocolate ao leite, coco ralado e leite condensado. Irresistível.",
    price: 43.9,
    category: "doces",
    image:
      "https://images.unsplash.com/photo-1671523557643-b80db31443d0?w=600&q=80&fit=crop",
    imageAlt: "Pizza doce Prestígio com chocolate e coco ralado",
  },
];
