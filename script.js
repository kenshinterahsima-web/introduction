const LINKS = {
  portfolio: "https://kenshin-terashima.com/",
  x: "https://x.com/kenshin_design_",
};

const favoriteImageFiles = Array.from({ length: 36 }, (_, i) => `photo_${String(i + 1).padStart(2, "0")}.jpg`);

const favoriteImages = favoriteImageFiles.map((file, i) => ({
  id: i + 1,
  src: `./images/${file}`,
  alt: `Favorite image ${i + 1}`,
}));

const navItems = [
  { index: "01", name: "Portfolio", description: "Web制作の実績", href: LINKS.portfolio, external: true },
  { index: "02", name: "X (Twitter)", description: "日々の思考と発信", href: LINKS.x, external: true },
  { index: "03", name: "Favorites", description: "好きなことを100個", href: "#favorites", external: false },
  { index: "04", name: "Contact", description: "お仕事のご相談", href: "https://forms.gle/dE1gUqtRQKs2yS5z7", external: true },
];

function byId(id) {
  return document.getElementById(id);
}

function renderHome() {
  byId("home-view").innerHTML = `
    <div class="section-head">
      <div class="name-row">
        <h1 class="title-xl title-name">寺嶋 絃真</h1>
        <p class="name-furigana">てらしま けんしん</p>
      </div>
      <p class="role">Web Designer & Corder</p>
    </div>
    <div class="section-label"><p class="eyebrow">Navigation</p></div>
    <div class="nav-grid">
      ${navItems
        .map(
          (item) => `
            <a class="nav-card" href="${item.href}" ${item.external ? 'target="_blank" rel="noopener noreferrer"' : ""}>
              <p class="index">${item.index}</p>
              <span class="arrow">${item.external ? "↗" : "→"}</span>
              <p class="name">${item.name}</p>
              <p class="desc">${item.description}</p>
            </a>
          `
        )
        .join("")}
    </div>
  `;
}

function renderFavorites() {
  byId("favorites-view").innerHTML = `
    <div class="section-head">
      <p class="eyebrow">03 - Favorites</p>
      <h1 class="title-lg">My Favorites</h1>
    </div>
    <div class="favorites-grid">
      ${favoriteImages
        .map(
          (image) => `
            <div class="favorite-image-tile">
              <button class="favorite-image-trigger" type="button" data-src="${image.src}" data-alt="${image.alt}" aria-label="${image.alt}を拡大表示">
                <img src="${image.src}" alt="${image.alt}" loading="lazy" />
              </button>
            </div>
          `
        )
        .join("")}
    </div>
  `;
}

function closeImageModal() {
  const modal = byId("image-modal");
  const modalImg = byId("image-modal-img");
  modal.classList.add("hidden");
  modal.setAttribute("aria-hidden", "true");
  modalImg.setAttribute("src", "");
  modalImg.setAttribute("alt", "");
  document.body.classList.remove("modal-open");
}

function openImageModal(src, alt) {
  const modal = byId("image-modal");
  const modalImg = byId("image-modal-img");
  modalImg.setAttribute("src", src);
  modalImg.setAttribute("alt", alt);
  modal.classList.remove("hidden");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
}

function setupImageModal() {
  const favoritesView = byId("favorites-view");
  const modal = byId("image-modal");
  const closeButton = byId("image-modal-close");

  favoritesView.addEventListener("click", (event) => {
    const trigger = event.target.closest(".favorite-image-trigger");
    if (!trigger) return;
    openImageModal(trigger.dataset.src, trigger.dataset.alt);
  });

  closeButton.addEventListener("click", closeImageModal);

  modal.addEventListener("click", (event) => {
    if (event.target === modal) {
      closeImageModal();
    }
  });

  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !modal.classList.contains("hidden")) {
      closeImageModal();
    }
  });
}

function setView(route) {
  const backLink = byId("back-link");
  const homeView = byId("home-view");
  const favoritesView = byId("favorites-view");

  homeView.classList.add("hidden");
  favoritesView.classList.add("hidden");
  backLink.classList.add("hidden");

  if (route.startsWith("favorites/")) {
    location.hash = "#favorites";
    return;
  }

  if (route === "favorites") {
    favoritesView.classList.remove("hidden");
    backLink.classList.remove("hidden");
    backLink.setAttribute("href", "#home");
    document.title = "Favorites | 寺嶋 絃真";
    return;
  }

  homeView.classList.remove("hidden");
  document.title = "寺嶋 絃真 | Web Designer";
}

function normalizeRoute() {
  const route = location.hash.replace(/^#/, "").trim();
  if (!route || route === "/") return "home";
  return route;
}

function boot() {
  renderHome();
  renderFavorites();
  setupImageModal();
  setView(normalizeRoute());

  window.addEventListener("hashchange", () => {
    setView(normalizeRoute());
  });
}

boot();
