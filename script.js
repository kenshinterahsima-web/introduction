const LINKS = {
  portfolio: "https://kenshin-terashima.com/",
  x: "https://x.com/kenshin_design_",
};

const navItems = [
  { index: "01", name: "Portfolio", description: "Web制作の実績", href: LINKS.portfolio, external: true },
  { index: "02", name: "X (Twitter)", description: "日々の思考と発信", href: LINKS.x, external: true },
  { index: "03", name: "Favorites", description: "好きなことを100個", href: "#favorites", external: false },
  { index: "04", name: "Contact", description: "お仕事のご相談", href: "https://forms.gle/dE1gUqtRQKs2yS5z7", external: true },
];

const favorites = [
  {
    id: "music",
    slug: "music",
    label: "Music",
    index: "03.01",
    items: [
      { emoji: "🎸", name: "Guitar", comment: "自分に戻れる時間" },
      { emoji: "🎵", name: "邦ロック", comment: "感情を整理する" },
      { emoji: "🎧", name: "移動中の音楽", comment: "思考が静かになる" },
      { emoji: "🎼", name: "作曲", comment: "いつかやりたい" },
      { emoji: "🥁", name: "Drums", comment: "刻む感覚が好き" },
      { emoji: "🎤", name: "Live", comment: "体で感じる音楽" },
      { emoji: "📻", name: "夜のラジオ", comment: "誰かの声がいい" },
      { emoji: "🎹", name: "Piano", comment: "静かな部屋で流す" },
      { emoji: "🌙", name: "深夜の再生", comment: "世界が自分だけになる" },
      { emoji: "💿", name: "CD", comment: "物として持ちたい" },
      { emoji: "🎵", name: "歌詞カード", comment: "言葉を読む行為" },
      { emoji: "🔊", name: "大音量", comment: "たまに必要" },
      { emoji: "🎵", name: "弾き語り", comment: "自分だけに聴かせる" },
      { emoji: "🎶", name: "Instrumental", comment: "集中できる" },
      { emoji: "🎸", name: "Effector", comment: "音を作る楽しさ" },
      { emoji: "📱", name: "Spotify DJ", comment: "流れに任せる" },
      { emoji: "🎵", name: "Acoustic", comment: "一本あれば十分" },
      { emoji: "🌊", name: "環境音", comment: "海の音が好き" },
      { emoji: "🎵", name: "Cover曲", comment: "解釈の違いが面白い" },
      { emoji: "🎼", name: "バンドスコア", comment: "読むのが好き" },
    ],
  },
  {
    id: "lifestyle",
    slug: "lifestyle",
    label: "Lifestyle",
    index: "03.02",
    items: [
      { emoji: "🏔", name: "登山", comment: "頂上より道中が好き" },
      { emoji: "☕", name: "Coffee", comment: "朝の儀式" },
      { emoji: "📷", name: "Photography", comment: "記憶より記録" },
      { emoji: "🌿", name: "植物", comment: "育てる責任感" },
      { emoji: "🛁", name: "長風呂", comment: "思考整理の場" },
      { emoji: "🌙", name: "深夜作業", comment: "集中できる時間" },
      { emoji: "🏃", name: "Running", comment: "頭が空っぽになる" },
      { emoji: "🗺", name: "Map", comment: "知らない道が好き" },
      { emoji: "🌊", name: "海", comment: "見ているだけでいい" },
      { emoji: "🎒", name: "日帰り旅", comment: "気軽さがいい" },
      { emoji: "🍜", name: "一人ラーメン", comment: "最高の贅沢" },
      { emoji: "📓", name: "手帳", comment: "アナログが好き" },
      { emoji: "🌆", name: "夜景", comment: "都市の息遣い" },
      { emoji: "🛋", name: "何もしない日", comment: "必要な時間" },
      { emoji: "🍳", name: "自炊", comment: "工程が好き" },
      { emoji: "🚶", name: "散歩", comment: "アイデアが出る" },
      { emoji: "🎬", name: "映画", comment: "一人で観る派" },
      { emoji: "📚", name: "読書", comment: "夜に読む" },
      { emoji: "🌄", name: "早起き", comment: "たまに試みる" },
      { emoji: "🧘", name: "Meditation", comment: "静止する練習" },
    ],
  },
  {
    id: "work-mindset",
    slug: "work-mindset",
    label: "Work Mindset",
    index: "03.03",
    items: [
      { emoji: "🎯", name: "Purpose", comment: "手段より目的" },
      { emoji: "📐", name: "Design Thinking", comment: "問いを立てること" },
      { emoji: "🔍", name: "Observation", comment: "見えないものを見る" },
      { emoji: "💡", name: "Insight", comment: "突然くる" },
      { emoji: "📊", name: "数字で話す", comment: "感覚を言語化する" },
      { emoji: "🤝", name: "Trust", comment: "仕事の基盤" },
      { emoji: "📝", name: "言語化", comment: "考えを整理する" },
      { emoji: "🚀", name: "Challenge", comment: "怖さがある方が本物" },
      { emoji: "⏰", name: "Time Mgmt", comment: "自由のための制約" },
      { emoji: "🔄", name: "Iteration", comment: "完璧より継続" },
      { emoji: "📚", name: "Input", comment: "アウトプットの燃料" },
      { emoji: "🌱", name: "Long-term", comment: "今より3年後" },
      { emoji: "💬", name: "Feedback", comment: "正直な言葉が好き" },
      { emoji: "🎨", name: "Creativity", comment: "技術より発想" },
      { emoji: "🏗", name: "System", comment: "再現できる形に" },
      { emoji: "🤔", name: "Question", comment: "答えより問いが大事" },
      { emoji: "💪", name: "Execution", comment: "考えより動く" },
      { emoji: "🌐", name: "Context", comment: "文脈を読む力" },
      { emoji: "✨", name: "Aesthetics", comment: "仕事の質に出る" },
      { emoji: "🧩", name: "Problem Solving", comment: "バラして組み立てる" },
    ],
  },
  {
    id: "interests",
    slug: "interests",
    label: "Interests",
    index: "03.04",
    items: [
      { emoji: "💻", name: "Web Design", comment: "生業にしている" },
      { emoji: "🏉", name: "Rugby", comment: "チームで戦う感覚" },
      { emoji: "🌏", name: "海外文化", comment: "違いが面白い" },
      { emoji: "📱", name: "UI / UX", comment: "使いやすさを考える" },
      { emoji: "🤖", name: "AI", comment: "世界の変わり目にいる" },
      { emoji: "🌿", name: "Sustainability", comment: "仕組みが面白い" },
      { emoji: "🧠", name: "Psychology", comment: "人間を理解したい" },
      { emoji: "📡", name: "Tech", comment: "変化の速さが好き" },
      { emoji: "🗣", name: "English", comment: "武器にしたい" },
      { emoji: "🏋", name: "Training", comment: "自己管理の基本" },
      { emoji: "🎯", name: "Marketing", comment: "デザインと繋がる" },
      { emoji: "📸", name: "Video", comment: "次のスキル" },
      { emoji: "🌆", name: "Urban Planning", comment: "スケールが好き" },
      { emoji: "🚗", name: "Drive", comment: "思考が整理される" },
      { emoji: "📰", name: "News", comment: "世界を把握したい" },
      { emoji: "🎮", name: "Game Design", comment: "UXの宝庫" },
      { emoji: "🌍", name: "Travel", comment: "価値観が壊れる瞬間" },
      { emoji: "🏙", name: "Architecture", comment: "空間の力を感じる" },
      { emoji: "💰", name: "Finance", comment: "自由の設計図" },
      { emoji: "📖", name: "Philosophy", comment: "問いと向き合う" },
    ],
  },
  {
    id: "random",
    slug: "random",
    label: "Random",
    index: "03.05",
    items: [
      { emoji: "🐈", name: "Cat", comment: "気まぐれが好き" },
      { emoji: "🌙", name: "Night", comment: "昼より好き" },
      { emoji: "⛅", name: "Cloudy", comment: "落ち着く" },
      { emoji: "🧊", name: "Ice", comment: "飲み物の準備中" },
      { emoji: "📦", name: "Unboxing", comment: "ときめく" },
      { emoji: "🎲", name: "Chance", comment: "計画外が面白い" },
      { emoji: "🪴", name: "Plants", comment: "落ち着く" },
      { emoji: "🌙", name: "Moon", comment: "なんとなく" },
      { emoji: "📮", name: "Letter", comment: "温度がある" },
      { emoji: "🎁", name: "Gift", comment: "渡す瞬間が好き" },
      { emoji: "🌧", name: "Rain", comment: "集中できる" },
      { emoji: "🧩", name: "Puzzle", comment: "没頭する系" },
      { emoji: "🕯", name: "Candle", comment: "空間が変わる" },
      { emoji: "🫖", name: "Tea", comment: "コーヒーの次に" },
      { emoji: "📺", name: "Late Night TV", comment: "ゆるさが好き" },
      { emoji: "🎰", name: "Coincidence", comment: "偶然を信じたい" },
      { emoji: "🗿", name: "Stoic", comment: "揺れない軸が好き" },
      { emoji: "🌀", name: "Spiral", comment: "繰り返す中に気づく" },
      { emoji: "🛸", name: "Sci-Fi", comment: "可能性を見る" },
      { emoji: "🎴", name: "Japanese Cards", comment: "美しい抽象" },
    ],
  },
];

function byId(id) {
  return document.getElementById(id);
}

function renderHome() {
  byId("home-view").innerHTML = `
    <div class="section-head">
      <p class="eyebrow">Web Designer Freelance 2025-</p>
      <h1 class="title-xl">寺嶋 絃真</h1>
      <p class="role">Web Designer</p>
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
    <div class="category-list">
      ${favorites
        .map(
          (cat, i) => `
            <a class="category-row" href="#favorites/${cat.slug}">
              <span class="category-number">${String(i + 1).padStart(2, "0")}</span>
              <span class="category-name">${cat.label}</span>
              <span class="category-count">${cat.items.length}</span>
              <span class="category-arrow">→</span>
            </a>
          `
        )
        .join("")}
    </div>
  `;
}

function renderCategory(slug) {
  const cat = favorites.find((item) => item.slug === slug);
  if (!cat) {
    location.hash = "#favorites";
    return;
  }

  byId("category-view").innerHTML = `
    <div class="section-head">
      <p class="eyebrow">${cat.index} - ${cat.label}</p>
      <h1 class="title-lg">${cat.label}</h1>
      <div class="split">
        <strong>Items</strong>
        <p>${cat.items.length}個のアイテム。ホバーで一言コメントが表示されます。</p>
      </div>
    </div>
    <div class="grid">
      ${cat.items
        .map(
          (item) => `
            <div class="tile">
              <div class="tile-inner">
                <span class="emoji">${item.emoji}</span>
                <span class="tile-name">${item.name}</span>
              </div>
              <div class="overlay">
                <span class="comment">${item.comment}</span>
              </div>
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
  const categoryView = byId("category-view");

  homeView.classList.add("hidden");
  favoritesView.classList.add("hidden");
  categoryView.classList.add("hidden");
  backLink.classList.add("hidden");

  if (route.startsWith("favorites/")) {
    const slug = route.replace("favorites/", "");
    renderCategory(slug);
    categoryView.classList.remove("hidden");
    backLink.classList.remove("hidden");
    backLink.setAttribute("href", "#favorites");
    document.title = `${favorites.find((c) => c.slug === slug)?.label || "Favorites"} | 寺嶋 絃真`;
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
