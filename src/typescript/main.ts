/**
 * Pizzaria Top — lógica principal (TypeScript)
 * Fonte: src/typescript/ → compilado em site/js/ via `npm run build`
 */

import { MENU, WHATSAPP_NUMBER, type Pizza, type PizzaCategory } from "./data/menu.js";

interface CartItem {
  pizza: Pizza;
  quantity: number;
}

function formatCurrency(value: number): string {
  return value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

function categoryLabel(category: PizzaCategory): string {
  switch (category) {
    case "classicas":
      return "Clássicas";
    case "especiais":
      return "Especiais";
    case "doces":
      return "Doces";
    default: {
      const _exhaustive: never = category;
      return _exhaustive;
    }
  }
}

function filterPizzas(menu: Pizza[], filter: string): Pizza[] {
  if (filter === "todas") return menu;
  return menu.filter((p) => p.category === filter);
}

function buildWhatsAppMessage(items: CartItem[]): string {
  const lines = items.map(
    (item) =>
      `• ${item.quantity}x ${item.pizza.name} — ${formatCurrency(item.pizza.price * item.quantity)}`
  );
  const total = items.reduce((sum, item) => sum + item.pizza.price * item.quantity, 0);
  return encodeURIComponent(
    `Olá, Pizzaria Top! 🍕\n\nGostaria de pedir:\n\n${lines.join("\n")}\n\n*Total: ${formatCurrency(total)}*\n\nEndereço: `
  );
}

class Cart {
  private items: Map<string, CartItem> = new Map();

  add(pizza: Pizza): void {
    const existing = this.items.get(pizza.id);
    if (existing) {
      existing.quantity += 1;
    } else {
      this.items.set(pizza.id, { pizza, quantity: 1 });
    }
  }

  removeOne(pizzaId: string): void {
    const item = this.items.get(pizzaId);
    if (!item) return;
    if (item.quantity <= 1) {
      this.items.delete(pizzaId);
    } else {
      item.quantity -= 1;
    }
  }

  getItems(): CartItem[] {
    return Array.from(this.items.values());
  }

  getCount(): number {
    return this.getItems().reduce((sum, i) => sum + i.quantity, 0);
  }

  getTotal(): number {
    return this.getItems().reduce((sum, i) => sum + i.pizza.price * i.quantity, 0);
  }

  isEmpty(): boolean {
    return this.items.size === 0;
  }
}

function initApp(): void {
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
  const btnWhatsApp = document.getElementById("btnWhatsApp") as HTMLButtonElement | null;
  const menuToggle = document.getElementById("menuToggle");
  const navLinks = document.getElementById("navLinks");
  const toast = document.getElementById("toast");

  if (!menuGrid || !filters) return;

  function showToast(message: string): void {
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add("show");
    setTimeout(() => toast.classList.remove("show"), 2800);
  }

  function renderMenu(): void {
    const pizzas = filterPizzas(MENU, activeFilter);
    menuGrid!.innerHTML = pizzas
      .map(
        (p) => `
      <article class="menu-card" data-id="${p.id}">
        <div class="menu-card__img">
          <img src="${p.image}" alt="${p.imageAlt}" width="600" height="400" loading="lazy" decoding="async" />
        </div>
        <div class="menu-card__body">
          <span class="menu-card__category">${categoryLabel(p.category)}</span>
          <h3 class="menu-card__title">${p.name}</h3>
          <p class="menu-card__desc">${p.description}</p>
          <div class="menu-card__footer">
            <p class="menu-card__price">${formatCurrency(p.price)} <small>/ média</small></p>
            <button class="btn btn--primary" data-add="${p.id}">Adicionar</button>
          </div>
        </div>
      </article>`
      )
      .join("");
  }

  function updateCartUI(): void {
    const count = cart.getCount();
    if (cartCount) cartCount.textContent = String(count);
    if (cartTotal) cartTotal.textContent = formatCurrency(cart.getTotal());
    if (btnWhatsApp) btnWhatsApp.disabled = cart.isEmpty();

    if (!cartItems) return;
    const items = cart.getItems();
    if (items.length === 0) {
      cartItems.innerHTML = '<li class="cart-drawer__empty">Seu carrinho está vazio</li>';
      return;
    }

    cartItems.innerHTML = items
      .map(
        (item) => `
      <li class="cart-item">
        <div>
          <p class="cart-item__name">${item.pizza.name}</p>
          <p class="cart-item__qty">${formatCurrency(item.pizza.price)} · Qtd: ${item.quantity}</p>
        </div>
        <div class="cart-item__actions">
          <button type="button" data-remove="${item.pizza.id}" aria-label="Remover um">−</button>
          <button type="button" data-add-cart="${item.pizza.id}" aria-label="Adicionar um">+</button>
        </div>
      </li>`
      )
      .join("");
  }

  function openCart(): void {
    cartDrawer?.classList.add("open");
    cartDrawer?.setAttribute("aria-hidden", "false");
  }

  function closeCart(): void {
    cartDrawer?.classList.remove("open");
    cartDrawer?.setAttribute("aria-hidden", "true");
  }

  renderMenu();
  updateCartUI();

  filters.addEventListener("click", (e) => {
    const target = (e.target as HTMLElement).closest(
      ".filter"
    ) as HTMLButtonElement | null;
    if (!target) return;
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
    const btn = (e.target as HTMLElement).closest(
      "[data-add]"
    ) as HTMLButtonElement | null;
    if (!btn) return;
    const pizza = MENU.find((p) => p.id === btn.dataset.add);
    if (!pizza) return;
    cart.add(pizza);
    updateCartUI();
    showToast(`${pizza.name} adicionada!`);
  });

  cartItems?.addEventListener("click", (e) => {
    const target = e.target as HTMLElement;
    const addId = target.closest("[data-add-cart]")?.getAttribute("data-add-cart");
    const removeId = target.closest("[data-remove]")?.getAttribute("data-remove");
    if (addId) {
      const pizza = MENU.find((p) => p.id === addId);
      if (pizza) cart.add(pizza);
    }
    if (removeId) cart.removeOne(removeId);
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

function boot(): void {
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initApp);
  } else {
    initApp();
  }
}

boot();
