const LINKS = {
  portfolio: "https://kenshin-terashima.com/",
  x: "https://x.com/kenshin_design_",
};

const favoriteImages = Array.from({ length: 20 }, (_, i) => ({
  id: i + 1,
  src: `https://picsum.photos/seed/terashima-fav-${i + 1}/600/600`,
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
              <img src="${image.src}" alt="${image.alt}" loading="lazy" />
            </div>
          `
        )
        .join("")}
    </div>
  `;
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
  setView(normalizeRoute());
  window.addEventListener("hashchange", () => {
    setView(normalizeRoute());
  });
}

boot();
