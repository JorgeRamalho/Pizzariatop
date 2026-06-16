/**
 * Pizzaria Top — lógica principal (TypeScript)
 * Compilar: npm run build
 */
export const WHATSAPP_NUMBER = "5511999999999";
export const MENU = [
    {
        id: "margherita",
        name: "Margherita Top",
        description: "Molho San Marzano, mussarela de bufala, manjericão fresco e azeite.",
        price: 49.9,
        category: "classicas",
        image: "https://images.unsplash.com/photo-1600891964092-4316c288032e?w=600&q=80&fit=crop",
        imageAlt: "Pizza Margherita com manjericão e mussarela de bufala",
    },
    {
        id: "calabresa",
        name: "Calabresa Artesanal",
        description: "Calabresa fatiada, cebola roxa, orégano e queijo derretido.",
        price: 52.9,
        category: "classicas",
        image: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=600&q=80&fit=crop",
        imageAlt: "Pizza de calabresa com fatias e queijo derretido",
    },
    {
        id: "portuguesa",
        name: "Portuguesa da Casa",
        description: "Presunto, ovos, cebola, azeitona, ervilha e mussarela.",
        price: 54.9,
        category: "classicas",
        image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&q=80&fit=crop",
        imageAlt: "Pizza portuguesa com presunto, ovos e azeitonas",
    },
    {
        id: "quatro-queijos",
        name: "Quatro Queijos Premium",
        description: "Mussarela, gorgonzola, parmesão e catupiry na medida certa.",
        price: 58.9,
        category: "especiais",
        image: "https://images.unsplash.com/photo-1754799565084-b381bd0b4db7?w=600&q=80&fit=crop",
        imageAlt: "Pizza quatro queijos com cobertura cremosa",
    },
    {
        id: "top-especial",
        name: "Top Especial",
        description: "Pepperoni, bacon crocante, cream cheese e borda de cheddar.",
        price: 62.9,
        category: "especiais",
        image: "https://images.unsplash.com/photo-1763647836753-e06fe1f8707b?w=600&q=80&fit=crop",
        imageAlt: "Pizza pepperoni com bacon e borda recheada",
    },
    {
        id: "veggie",
        name: "Veggie Garden",
        description: "Abobrinha, berinjela grelhada, tomate cereja e rúcula.",
        price: 56.9,
        category: "especiais",
        image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&q=80&fit=crop",
        imageAlt: "Pizza vegetariana com legumes grelhados e rúcula",
    },
    {
        id: "chocolate",
        name: "Chocolate com Morango",
        description: "Chocolate belga, morangos frescos e granulado crocante.",
        price: 44.9,
        category: "doces",
        image: "https://images.unsplash.com/photo-1683735833903-38fd514da970?w=600&q=80&fit=crop",
        imageAlt: "Pizza doce de chocolate com morangos frescos",
    },
    {
        id: "romeu-julieta",
        name: "Romeu e Julieta",
        description: "Goiabada cascão com queijo minas derretido. Clássico brasileiro.",
        price: 42.9,
        category: "doces",
        image: "https://images.unsplash.com/photo-1713393281034-c7c9b046e1d3?w=600&q=80&fit=crop",
        imageAlt: "Pizza doce Romeu e Julieta com goiabada e queijo minas",
    },
    {
        id: "prestigio",
        name: "Prestígio Top",
        description: "Chocolate ao leite, coco ralado e leite condensado. Irresistível.",
        price: 43.9,
        category: "doces",
        image: "https://images.unsplash.com/photo-1671523557643-b80db31443d0?w=600&q=80&fit=crop",
        imageAlt: "Pizza doce Prestígio com chocolate e coco ralado",
    },
];
export function formatCurrency(value) {
    return value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}
export function filterPizzas(menu, filter) {
    if (filter === "todas")
        return menu;
    return menu.filter((p) => p.category === filter);
}
export function buildWhatsAppMessage(items) {
    const lines = items.map((item) => `• ${item.quantity}x ${item.pizza.name} — ${formatCurrency(item.pizza.price * item.quantity)}`);
    const total = items.reduce((sum, item) => sum + item.pizza.price * item.quantity, 0);
    return encodeURIComponent(`Olá, Pizzaria Top! 🍕\n\nGostaria de pedir:\n\n${lines.join("\n")}\n\n*Total: ${formatCurrency(total)}*\n\nEndereço: `);
}
export class Cart {
    constructor() {
        this.items = new Map();
    }
    add(pizza) {
        const existing = this.items.get(pizza.id);
        if (existing) {
            existing.quantity += 1;
        }
        else {
            this.items.set(pizza.id, { pizza, quantity: 1 });
        }
    }
    removeOne(pizzaId) {
        const item = this.items.get(pizzaId);
        if (!item)
            return;
        if (item.quantity <= 1) {
            this.items.delete(pizzaId);
        }
        else {
            item.quantity -= 1;
        }
    }
    getItems() {
        return Array.from(this.items.values());
    }
    getCount() {
        return this.getItems().reduce((sum, i) => sum + i.quantity, 0);
    }
    getTotal() {
        return this.getItems().reduce((sum, i) => sum + i.pizza.price * i.quantity, 0);
    }
    isEmpty() {
        return this.items.size === 0;
    }
}
export function initApp() {
    const cart = new Cart();
    let activeFilter = "todas";
    const menuGrid = document.getElementById("menuGrid");
    const filters = document.getElementById("filters");
    const cartCount = document.getElementById("cartCount");
    const cartItems = document.getElementById("cartItems");
    const cartTotal = document.getElementById("cartTotal");
    const cartDrawer = document.getElementById("cartDrawer");
    const cartBackdrop = document.getElementById("cartBackdrop");
    const btnCart = document.getElementById("btnCart");
    const cartClose = document.getElementById("cartClose");
    const btnWhatsApp = document.getElementById("btnWhatsApp");
    const menuToggle = document.getElementById("menuToggle");
    const navLinks = document.getElementById("navLinks");
    const toast = document.getElementById("toast");
    if (!menuGrid || !filters)
        return;
    function showToast(message) {
        if (!toast)
            return;
        toast.textContent = message;
        toast.classList.add("show");
        setTimeout(() => toast.classList.remove("show"), 2800);
    }
    function renderMenu() {
        const pizzas = filterPizzas(MENU, activeFilter);
        menuGrid.innerHTML = pizzas
            .map((p) => `
      <article class="menu-card" data-id="${p.id}">
        <div class="menu-card__img">
          <img src="${p.image}" alt="${p.imageAlt}" width="600" height="400" loading="lazy" decoding="async" />
        </div>
        <div class="menu-card__body">
          <span class="menu-card__category">${p.category}</span>
          <h3 class="menu-card__title">${p.name}</h3>
          <p class="menu-card__desc">${p.description}</p>
          <div class="menu-card__footer">
            <p class="menu-card__price">${formatCurrency(p.price)} <small>/ média</small></p>
            <button class="btn btn--primary" data-add="${p.id}">Adicionar</button>
          </div>
        </div>
      </article>`)
            .join("");
    }
    function updateCartUI() {
        const count = cart.getCount();
        if (cartCount)
            cartCount.textContent = String(count);
        if (cartTotal)
            cartTotal.textContent = formatCurrency(cart.getTotal());
        if (btnWhatsApp)
            btnWhatsApp.disabled = cart.isEmpty();
        if (!cartItems)
            return;
        const items = cart.getItems();
        if (items.length === 0) {
            cartItems.innerHTML = '<li class="cart-drawer__empty">Seu carrinho está vazio</li>';
            return;
        }
        cartItems.innerHTML = items
            .map((item) => `
      <li class="cart-item">
        <div>
          <p class="cart-item__name">${item.pizza.name}</p>
          <p class="cart-item__qty">${formatCurrency(item.pizza.price)} · Qtd: ${item.quantity}</p>
        </div>
        <div class="cart-item__actions">
          <button type="button" data-remove="${item.pizza.id}" aria-label="Remover um">−</button>
          <button type="button" data-add-cart="${item.pizza.id}" aria-label="Adicionar um">+</button>
        </div>
      </li>`)
            .join("");
    }
    function openCart() {
        cartDrawer?.classList.add("open");
        cartDrawer?.setAttribute("aria-hidden", "false");
    }
    function closeCart() {
        cartDrawer?.classList.remove("open");
        cartDrawer?.setAttribute("aria-hidden", "true");
    }
    renderMenu();
    updateCartUI();
    filters.addEventListener("click", (e) => {
        const target = e.target.closest(".filter");
        if (!target)
            return;
        activeFilter = target.dataset.filter ?? "todas";
        filters.querySelectorAll(".filter").forEach((btn) => {
            btn.classList.remove("active");
            btn.setAttribute("aria-selected", "false");
        });
        target.classList.add("active");
        target.setAttribute("aria-selected", "true");
        renderMenu();
    });
    menuGrid.addEventListener("click", (e) => {
        const btn = e.target.closest("[data-add]");
        if (!btn)
            return;
        const pizza = MENU.find((p) => p.id === btn.dataset.add);
        if (!pizza)
            return;
        cart.add(pizza);
        updateCartUI();
        showToast(`${pizza.name} adicionada!`);
    });
    cartItems?.addEventListener("click", (e) => {
        const target = e.target;
        const addId = target.closest("[data-add-cart]")?.getAttribute("data-add-cart");
        const removeId = target.closest("[data-remove]")?.getAttribute("data-remove");
        if (addId) {
            const pizza = MENU.find((p) => p.id === addId);
            if (pizza)
                cart.add(pizza);
        }
        if (removeId)
            cart.removeOne(removeId);
        updateCartUI();
    });
    btnCart?.addEventListener("click", openCart);
    cartClose?.addEventListener("click", closeCart);
    cartBackdrop?.addEventListener("click", closeCart);
    btnWhatsApp?.addEventListener("click", () => {
        const message = buildWhatsAppMessage(cart.getItems());
        window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank");
    });
    menuToggle?.addEventListener("click", () => {
        const expanded = menuToggle.getAttribute("aria-expanded") === "true";
        menuToggle.setAttribute("aria-expanded", String(!expanded));
        navLinks?.classList.toggle("open");
    });
    navLinks?.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("open");
            menuToggle?.setAttribute("aria-expanded", "false");
        });
    });
}
document.addEventListener("DOMContentLoaded", initApp);
