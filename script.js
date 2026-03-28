/* ============================================================
   Safar Mehfil — Main JavaScript
   ============================================================ */

// ── Data ──────────────────────────────────────────────────────
const destinations = [
  {
    id: 1,
    name: "Santorini",
    city: "Thira", country: "Greece", region: "Europe",
    category: ["Beaches", "Islands", "Culture"],
    rating: 4.9, reviews: 2841,
    image: "images/santorini2.jpg",
    description: "Perched on volcanic cliffs, Santorini is an island of extraordinary beauty—white-washed cube-houses, blue-domed churches and sunsets that turn the Aegean gold.",
    spots: ["Oia Sunset Point", "Red Beach", "Akrotiri Archaeological Site", "Caldera Views", "Amoudi Bay"],
    badge: "Trending"
  },
  {
    id: 2,
    name: "Kyoto",
    city: "Kyoto", country: "Japan", region: "Asia",
    category: ["Culture", "Cities", "Nature"],
    rating: 4.8, reviews: 3204,
    image: "images/kyoto2.webp",
    description: "Japan's ancient capital where geisha glide down cobbled alleys, a thousand torii gates march up forested hillsides, and every season paints the city in new colors.",
    spots: ["Fushimi Inari Shrine", "Arashiyama Bamboo Grove", "Kinkaku-ji (Golden Pavilion)", "Gion District", "Nishiki Market"],
    badge: "Popular"
  },
  {
    id: 3,
    name: "Patagonia",
    city: "Torres del Paine", country: "Chile", region: "South America",
    category: ["Mountains", "Nature", "Adventure"],
    rating: 4.9, reviews: 1562,
    image: "images/patagonia1.jpg",
    description: "A wild, windswept wilderness at the end of the world—jagged granite towers, turquoise lakes, calving glaciers, and pumas moving silently through golden grasslands.",
    spots: ["Torres del Paine", "Grey Glacier", "Valle del Francés", "Mirador Las Torres", "Lago Pehoé"],
    badge: "Wild"
  },
  {
    id: 4,
    name: "Marrakech",
    city: "Marrakech", country: "Morocco", region: "Africa",
    category: ["Culture", "Cities", "Food"],
    rating: 4.7, reviews: 2109,
    image: "images/marrakech1.jpg",
    description: "A city of sensory overload—labyrinthine medinas perfumed with spices, ornate riads hiding lush gardens, and a Djemaa el-Fna that never sleeps.",
    spots: ["Djemaa el-Fna Square", "Majorelle Garden", "Ben Youssef Madrasa", "Bahia Palace", "Souks of Marrakech"],
    badge: ""
  },
  {
    id: 5,
    name: "Bali",
    city: "Ubud", country: "Indonesia", region: "Asia",
    category: ["Beaches", "Culture", "Nature"],
    rating: 4.8, reviews: 4520,
    image: "images/bali1.jpg",
    description: "The Island of the Gods blends Hindu temples, terraced rice paddies, ancient ceremonies, and dreamy coastal retreats into an endlessly photogenic whole.",
    spots: ["Tegallalang Rice Terraces", "Uluwatu Temple", "Monkey Forest", "Tanah Lot", "Seminyak Beach"],
    badge: "Popular"
  },
  {
    id: 6,
    name: "Iceland",
    city: "Reykjavik", country: "Iceland", region: "Europe",
    category: ["Nature", "Adventure", "Mountains"],
    rating: 4.9, reviews: 1893,
    image: "images/iceland2.webp",
    description: "Waterfalls plunging into basalt canyons, geysers punching skyward, and on clear winter nights the aurora borealis turns the whole sky into a living painting.",
    spots: ["Northern Lights Viewing", "Golden Circle", "Blue Lagoon", "Jökulsárlón Glacier Lagoon", "Skógafoss Waterfall"],
    badge: "Magical"
  },
  {
    id: 7,
    name: "Amalfi Coast",
    city: "Positano", country: "Italy", region: "Europe",
    category: ["Beaches", "Culture", "Cities"],
    rating: 4.8, reviews: 2670,
    image: "images/amalficoast2.jpg",
    description: "Stacked pastel villages tumble down limestone cliffs straight into the cerulean sea. Lemon groves, fresh limoncello, and some of Italy's most dramatic views.",
    spots: ["Positano Village", "Path of the Gods", "Ravello Gardens", "Emerald Grotto", "Marina di Praia"],
    badge: ""
  },
  {
    id: 8,
    name: "Machu Picchu",
    city: "Cusco", country: "Peru", region: "South America",
    category: ["Culture", "Mountains", "Adventure"],
    rating: 4.9, reviews: 3812,
    image: "images/machupicchu2.jpg",
    description: "The Lost City of the Incas hovers in the clouds above the Sacred Valley—a masterpiece of engineering so perfectly integrated with its mountain setting it seems to grow from the rock.",
    spots: ["Sun Gate (Inti Punku)", "Huayna Picchu", "Temple of the Sun", "Intihuatana Stone", "Agricultural Terraces"],
    badge: "UNESCO"
  },
  {
    id: 9,
    name: "Maldives",
    city: "Malé", country: "Maldives", region: "Asia",
    category: ["Beaches", "Islands", "Luxury"],
    rating: 5.0, reviews: 1204,
    image: "images/maldives1.webp",
    description: "A necklace of coral atolls scattered across the Indian Ocean—overwater bungalows, bioluminescent plankton beaches, and the world's most extraordinary snorkeling.",
    spots: ["Baa Atoll UNESCO Biosphere", "Hanifaru Bay", "Overwater Bungalow Sunrise", "Whale Shark Snorkeling", "Vaadhoo Island Beach"],
    badge: "Luxury"
  },
  {
    id: 10,
    name: "Dubrovnik",
    city: "Dubrovnik", country: "Croatia", region: "Europe",
    category: ["Culture", "Cities", "Beaches"],
    rating: 4.7, reviews: 2231,
    image: "images/dubrovnik1.jpg",
    description: "The Pearl of the Adriatic—massive medieval city walls encircle terracotta rooftops, baroque churches and marble streets that glow amber in the evening light.",
    spots: ["Old City Walls Walk", "Lokrum Island", "Cable Car Summit", "Stradun Promenade", "Fort Lovrijenac"],
    badge: ""
  },
  {
    id: 11,
    name: "Serengeti",
    city: "Arusha", country: "Tanzania", region: "Africa",
    category: ["Nature", "Adventure", "Wildlife"],
    rating: 4.9, reviews: 987,
    image: "images/serengeti2.jpg",
    description: "The most spectacular wildlife show on Earth—two million wildebeest, zebra and gazelle streaming across golden savanna in an unbroken circle of life.",
    spots: ["Great Migration Crossing", "Ngorongoro Crater", "Balloon Safari", "Seronera Valley", "Mara River Crossing"],
    badge: "Wild"
  },
  {
    id: 12,
    name: "images/New Zealand",
    city: "Queenstown", country: "New Zealand", region: "Oceania",
    category: ["Adventure", "Mountains", "Nature"],
    rating: 4.8, reviews: 1647,
    image: "images/newzealand3.avif",
    description: "Middle-earth made real—fiords carved by glaciers, mountains reflected in mirror lakes, and an adventure culture that invented bungee jumping for good reason.",
    spots: ["Milford Sound", "Tongariro Alpine Crossing", "Franz Josef Glacier", "Hobbiton Movie Set", "Queenstown Gondola"],
    badge: "Adventure"
  }
];

const categories = [
  { name: "Beaches", icon: "🏖️", count: 48, image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&q=80" },
  { name: "Mountains", icon: "⛰️", count: 36, image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600&q=80" },
  { name: "Cities", icon: "🏙️", count: 64, image: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=600&q=80" },
  { name: "Culture", icon: "🏛️", count: 52, image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80" }
];

// ── State ─────────────────────────────────────────────────────
let wishlist = JSON.parse(localStorage.getItem('te_wishlist') || '[]');
let memories = JSON.parse(localStorage.getItem('te_memories') || '[]');
let visited  = JSON.parse(localStorage.getItem('te_visited')  || '[]');
let guidebookPage = 0;

// ── Save helpers ───────────────────────────────────────────────
function saveWishlist() { localStorage.setItem('te_wishlist', JSON.stringify(wishlist)); }
function saveMemories() { localStorage.setItem('te_memories', JSON.stringify(memories)); }
function saveVisited()  { localStorage.setItem('te_visited',  JSON.stringify(visited));  }

// ── Toast ─────────────────────────────────────────────────────
function showToast(msg, type = 'success') {
  const container = document.getElementById('toast-container');
  if (!container) return;
  const icons = { success: '✅', error: '❌', info: 'ℹ️' };
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.innerHTML = `<span>${icons[type]}</span><span>${msg}</span>`;
  container.appendChild(toast);
  setTimeout(() => toast.remove(), 3200);
}

// ── Navbar ────────────────────────────────────────────────────
function initNavbar() {
  const navbar  = document.querySelector('.navbar');
  const burger  = document.querySelector('.hamburger');
  const mobileNav = document.querySelector('.mobile-nav');
  const darkToggle = document.querySelector('.dark-toggle');

  if (!navbar) return;

  // Scroll effect
  const isTransparentHero = document.querySelector('.hero');
  function updateNavbar() {
    if (isTransparentHero) {
      navbar.classList.toggle('scrolled', window.scrollY > 60);
      navbar.classList.toggle('transparent', window.scrollY <= 60);
    } else {
      navbar.classList.add('scrolled');
    }
  }
  window.addEventListener('scroll', updateNavbar);
  updateNavbar();

  // Active link
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link').forEach(link => {
    const href = link.getAttribute('href');
    if (href === path || (path === 'index.html' && href === 'index.html')) {
      link.classList.add('active');
    }
  });

  // Hamburger
  if (burger && mobileNav) {
    burger.addEventListener('click', () => {
      burger.classList.toggle('open');
      mobileNav.classList.toggle('open');
      document.body.style.overflow = mobileNav.classList.contains('open') ? 'hidden' : '';
    });
  }

  // Dark mode
  const theme = localStorage.getItem('te_theme') || 'light';
  document.documentElement.setAttribute('data-theme', theme);
  if (darkToggle) {
    darkToggle.textContent = theme === 'dark' ? '☀️' : '🌙';
    darkToggle.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme');
      const next = current === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      localStorage.setItem('te_theme', next);
      darkToggle.textContent = next === 'dark' ? '☀️' : '🌙';
    });
  }
}

// ── Scroll Animations ─────────────────────────────────────────
function initReveal() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
}

// ── Wishlist helpers ──────────────────────────────────────────
function toggleWishlist(id, btn) {
  const idx = wishlist.indexOf(id);
  if (idx === -1) {
    wishlist.push(id);
    if (btn) { btn.classList.add('active'); btn.textContent = '❤️'; }
    showToast('Added to Wishlist!', 'success');
  } else {
    wishlist.splice(idx, 1);
    if (btn) { btn.classList.remove('active'); btn.textContent = '🤍'; }
    showToast('Removed from Wishlist', 'info');
  }
  saveWishlist();
  updateProgressTracker();
}
function toggleVisited(id, btn) {
  const idx = visited.indexOf(id);
  if (idx === -1) {
    visited.push(id);
    if (btn) { btn.classList.add('visited'); btn.textContent = '✅ Visited'; }
    showToast('Marked as Visited! 🌍', 'success');
  } else {
    visited.splice(idx, 1);
    if (btn) { btn.classList.remove('visited'); btn.textContent = '☑ Mark Visited'; }
    showToast('Removed from Visited', 'info');
  }
  saveVisited();
  updateProgressTracker();
}

// ── Progress Tracker ──────────────────────────────────────────
function updateProgressTracker() {
  const tracker = document.querySelector('.progress-tracker');
  if (!tracker) return;
  tracker.classList.add('visible');
  const count = document.querySelector('.progress-tracker-count');
  const fill  = document.querySelector('.progress-fill');
  if (count) count.textContent = visited.length;
  if (fill) fill.style.width = Math.min(visited.length / destinations.length * 100, 100) + '%';
}

// ── Render Card ───────────────────────────────────────────────
function renderCard(dest) {
  const inWishlist = wishlist.includes(dest.id);
  const inVisited  = visited.includes(dest.id);
  const stars = '★'.repeat(Math.floor(dest.rating)) + (dest.rating % 1 ? '½' : '');
  return `
    <div class="destination-card reveal">
      <div class="card-image">
        <img src="${dest.image}" alt="${dest.name}" loading="lazy">
        ${dest.badge ? `<div class="card-badge">${dest.badge}</div>` : ''}
        <button class="card-wishlist-btn ${inWishlist ? 'active' : ''}" data-id="${dest.id}" title="Add to Wishlist">
          ${inWishlist ? '❤️' : '🤍'}
        </button>
      </div>
      <div class="card-body">
        <div class="card-rating">
          <span class="stars">${stars}</span>
          <span>${dest.rating} (${dest.reviews.toLocaleString()})</span>
        </div>
        <div class="card-title">${dest.name}</div>
        <div class="card-location">📍 ${dest.city}, ${dest.country}</div>
        <div class="card-tags">
          ${dest.category.slice(0, 2).map(c => `<span class="tag tag-terracotta">${c}</span>`).join('')}
          <span class="tag">${dest.region}</span>
        </div>
        <div class="card-actions">
          <button class="card-action-btn ${inVisited ? 'visited' : 'secondary'}" data-visited="${dest.id}">
            ${inVisited ? '✅ Visited' : '☑ Mark Visited'}
          </button>
          <button class="card-action-btn primary" data-wishlist="${dest.id}">
            ${inWishlist ? '❤️ Saved' : '+ Wishlist'}
          </button>
        </div>
      </div>
    </div>
  `;
}

// ── Attach card events ─────────────────────────────────────────
function attachCardEvents(container) {
  container.querySelectorAll('.card-wishlist-btn').forEach(btn => {
    btn.addEventListener('click', () => toggleWishlist(+btn.dataset.id, btn));
  });
  container.querySelectorAll('[data-wishlist]').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = +btn.dataset.wishlist;
      toggleWishlist(id, null);
      btn.textContent = wishlist.includes(id) ? '❤️ Saved' : '+ Wishlist';
    });
  });
  container.querySelectorAll('[data-visited]').forEach(btn => {
    btn.addEventListener('click', () => toggleVisited(+btn.dataset.visited, btn));
  });
}

// ============================================================
// HOME PAGE
// ============================================================
function initHome() {
  // Featured destinations
  const featured = document.getElementById('featured-grid');
  if (featured) {
    featured.innerHTML = destinations.slice(0, 6).map(renderCard).join('');
    attachCardEvents(featured);
  }

  // Categories
  const catGrid = document.getElementById('categories-grid');
  if (catGrid) {
    catGrid.innerHTML = categories.map(c => `
      <div class="category-card reveal">
        <img src="${c.image}" alt="${c.name}" loading="lazy">
        <div class="category-overlay">
          <div class="category-info">
            <div class="category-icon">${c.icon}</div>
            <div class="category-name">${c.name}</div>
            <div class="category-count">${c.count} destinations</div>
          </div>
        </div>
      </div>
    `).join('');
  }

  // Trending
  const trending = document.getElementById('trending-scroll');
  if (trending) {
    const trendDests = [destinations[0], destinations[5], destinations[7], destinations[8], destinations[4], destinations[2]];
    trending.innerHTML = trendDests.map((d, i) => `
      <div class="trending-card">
        <img src="${d.image}" alt="${d.name}" loading="lazy">
        <div class="overlay">
          <div class="trending-rank">${String(i + 1).padStart(2, '0')}</div>
          <div class="trending-name">${d.name}</div>
          <div class="trending-location">📍 ${d.city}, ${d.country}</div>
        </div>
      </div>
    `).join('');
  }
}

// ============================================================
// EXPLORE PAGE
// ============================================================
function initExplore() {
  const grid = document.getElementById('explore-grid');
  const countEl = document.getElementById('results-count');
  const chips = document.querySelectorAll('.filter-chip');
  const searchInput = document.getElementById('explore-search');

  let activeFilter = 'All';
  let searchQuery = '';

  function renderExplore() {
    const filtered = destinations.filter(d => {
      const matchCat = activeFilter === 'All' || d.category.includes(activeFilter) || d.region === activeFilter;
      const matchSearch = !searchQuery || d.name.toLowerCase().includes(searchQuery) || d.country.toLowerCase().includes(searchQuery) || d.city.toLowerCase().includes(searchQuery);
      return matchCat && matchSearch;
    });
    if (grid) {
      grid.innerHTML = filtered.length ? filtered.map(renderCard).join('') : `<div style="grid-column:1/-1;text-align:center;padding:60px;color:var(--warm-gray)"><div style="font-size:48px;margin-bottom:12px">🔍</div><div style="font-family:var(--font-display);font-size:1.5rem;margin-bottom:8px">No destinations found</div><div>Try adjusting your filters</div></div>`;
      attachCardEvents(grid);
      initReveal();
    }
    if (countEl) countEl.textContent = `${filtered.length} destination${filtered.length !== 1 ? 's' : ''} found`;
  }

  chips.forEach(chip => {
    chip.addEventListener('click', () => {
      chips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      activeFilter = chip.dataset.filter;
      renderExplore();
    });
  });

  if (searchInput) {
    searchInput.addEventListener('input', e => { searchQuery = e.target.value.toLowerCase().trim(); renderExplore(); });
  }

  renderExplore();
}

// ============================================================
// GUIDEBOOK PAGE
// ============================================================
function initGuidebook() {
  const leftPage  = document.getElementById('book-left');
  const rightPage = document.getElementById('book-right');
  const prevBtn   = document.getElementById('book-prev');
  const nextBtn   = document.getElementById('book-next');
  const progressEl = document.getElementById('book-progress');
  if (!leftPage) return;

  function renderPages() {
    const dest = destinations[guidebookPage];
    const next = destinations[guidebookPage + 1];

    // Flip animation
    leftPage.classList.add('flipping');
    rightPage.classList.add('flipping');
    setTimeout(() => {
      leftPage.innerHTML = `
        <div class="book-page-label">✦ The Guidebook</div>
        <div class="book-destination-name">${dest.name}</div>
        <div class="book-location">📍 ${dest.city} · ${dest.country} · ${dest.region}</div>
        <div class="book-divider"></div>
        <div class="book-description">${dest.description}</div>
        <div class="book-tags">${dest.category.map(c => `<span class="tag tag-terracotta">${c}</span>`).join('')}</div>
        <div class="book-spots-title">Best Places to Visit</div>
        <div class="book-spots-list">${dest.spots.map(s => `<div class="book-spot">${s}</div>`).join('')}</div>
        <div class="book-page-number">— ${guidebookPage * 2 + 1} —</div>
      `;
      rightPage.innerHTML = `
        <div class="book-image"><img src="${dest.image.replace('w=600', 'w=800')}" alt="${dest.name}" loading="lazy"></div>
        <div class="book-page-label">☆ Rating: ${'★'.repeat(Math.floor(dest.rating))} ${dest.rating}</div>
        <div class="book-location">${dest.reviews.toLocaleString()} traveller reviews</div>
        <div style="margin-top:16px;font-family:var(--font-accent);font-style:italic;color:var(--warm-gray);font-size:.95rem;line-height:1.7">
          "${dest.spots[0]}, ${dest.spots[1]} — the highlights of any visit to ${dest.name}."
        </div>
        ${next ? `<div style="margin-top:24px;padding:16px;background:var(--sand);border-radius:var(--radius-sm)">
          <div style="font-size:10px;letter-spacing:2px;text-transform:uppercase;color:var(--warm-gray);font-weight:700;margin-bottom:6px">Next Destination</div>
          <div style="font-family:var(--font-display);font-size:1.1rem;font-weight:700">${next.name}</div>
          <div style="font-size:12px;color:var(--warm-gray)">${next.country}</div>
        </div>` : ''}
        <div class="book-page-number">— ${guidebookPage * 2 + 2} —</div>
      `;
      leftPage.classList.remove('flipping');
      rightPage.classList.remove('flipping');
    }, 350);

    if (prevBtn) prevBtn.disabled = guidebookPage === 0;
    if (nextBtn) nextBtn.disabled = guidebookPage >= destinations.length - 1;
    if (progressEl) progressEl.textContent = `${guidebookPage + 1} / ${destinations.length}`;
  }

  if (prevBtn) prevBtn.addEventListener('click', () => { if (guidebookPage > 0) { guidebookPage--; renderPages(); } });
  if (nextBtn) nextBtn.addEventListener('click', () => { if (guidebookPage < destinations.length - 1) { guidebookPage++; renderPages(); } });

  renderPages();
}

// ============================================================
// WISHLIST PAGE
// ============================================================
function initWishlist() {
  const grid  = document.getElementById('wishlist-grid');
  const empty = document.getElementById('wishlist-empty');
  const countEl = document.getElementById('wishlist-count');
  if (!grid) return;

  function renderWishlist() {
    const saved = destinations.filter(d => wishlist.includes(d.id));
    if (countEl) countEl.textContent = saved.length;
    if (saved.length === 0) {
      grid.style.display = 'none';
      if (empty) empty.style.display = 'block';
      return;
    }
    grid.style.display = 'grid';
    if (empty) empty.style.display = 'none';
    grid.innerHTML = saved.map(dest => `
      <div class="destination-card reveal">
        <div class="card-image">
          <img src="${dest.image}" alt="${dest.name}" loading="lazy">
          ${dest.badge ? `<div class="card-badge">${dest.badge}</div>` : ''}
          <button class="card-wishlist-btn active" data-id="${dest.id}" title="Remove from Wishlist">❤️</button>
        </div>
        <div class="card-body">
          <div class="card-rating"><span class="stars">${'★'.repeat(Math.floor(dest.rating))}</span> ${dest.rating}</div>
          <div class="card-title">${dest.name}</div>
          <div class="card-location">📍 ${dest.city}, ${dest.country}</div>
          <div class="card-tags">${dest.category.slice(0, 2).map(c => `<span class="tag tag-terracotta">${c}</span>`).join('')}</div>
          <div class="card-actions">
            <button class="card-action-btn secondary remove-wish" data-id="${dest.id}">🗑 Remove</button>
            <button class="card-action-btn primary">Explore →</button>
          </div>
        </div>
      </div>
    `).join('');

    grid.querySelectorAll('.card-wishlist-btn').forEach(btn => {
      btn.addEventListener('click', () => { toggleWishlist(+btn.dataset.id, btn); setTimeout(renderWishlist, 100); });
    });
    grid.querySelectorAll('.remove-wish').forEach(btn => {
      btn.addEventListener('click', () => { const id = +btn.dataset.id; wishlist = wishlist.filter(w => w !== id); saveWishlist(); renderWishlist(); showToast('Removed from Wishlist', 'info'); });
    });
    initReveal();
  }
  renderWishlist();
}

// ============================================================
// MEMORIES PAGE
// ============================================================
function initMemories() {
  const masonry = document.getElementById('memories-masonry');
  const modal   = document.getElementById('memory-modal');
  const addBtn  = document.getElementById('add-memory-fab');
  const closeBtn = document.getElementById('modal-close');
  const form    = document.getElementById('memory-form');
  const fileInput = document.getElementById('memory-image');
  const fileLabel = document.getElementById('file-label');
  let previewDataUrl = null;

  if (!masonry) return;

  function renderMemories() {
    const empty = document.getElementById('memories-empty');
    if (memories.length === 0) {
      masonry.innerHTML = '';
      if (empty) empty.style.display = 'block';
      return;
    }
    if (empty) empty.style.display = 'none';
    masonry.innerHTML = memories.map((m, i) => `
      <div class="memory-card">
        <div class="memory-photo">
          ${m.image ? `<img src="${m.image}" alt="${m.place}">` : '📷'}
        </div>
        <div class="memory-place">${m.place}</div>
        <div class="memory-location">📍 ${m.location}</div>
        <div class="memory-date">🗓 ${m.date}</div>
        ${m.note ? `<div class="memory-note">"${m.note}"</div>` : ''}
        <button class="memory-delete" data-index="${i}" title="Delete memory">✕</button>
      </div>
    `).join('');

    masonry.querySelectorAll('.memory-delete').forEach(btn => {
      btn.addEventListener('click', () => {
        const idx = +btn.dataset.index;
        memories.splice(idx, 1);
        saveMemories();
        renderMemories();
        updateProgressTracker();
        showToast('Memory deleted', 'info');
      });
    });
  }

  if (addBtn) addBtn.addEventListener('click', () => { modal.classList.add('open'); });
  if (closeBtn) closeBtn.addEventListener('click', () => { modal.classList.remove('open'); });
  if (modal) modal.addEventListener('click', e => { if (e.target === modal) modal.classList.remove('open'); });

  if (fileInput) {
    fileInput.addEventListener('change', e => {
      const file = e.target.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = ev => {
        previewDataUrl = ev.target.result;
        if (fileLabel) fileLabel.textContent = '✅ ' + file.name;
      };
      reader.readAsDataURL(file);
    });
  }

  if (form) {
    form.addEventListener('submit', e => {
      e.preventDefault();
      const place    = document.getElementById('m-place').value.trim();
      const location = document.getElementById('m-location').value.trim();
      const date     = document.getElementById('m-date').value;
      const note     = document.getElementById('m-note').value.trim();
      if (!place || !location || !date) return;
      memories.unshift({ place, location, date, note, image: previewDataUrl });
      saveMemories();
      renderMemories();
      showToast('Memory saved! 📸', 'success');
      form.reset();
      previewDataUrl = null;
      if (fileLabel) fileLabel.textContent = 'Click to upload photo';
      modal.classList.remove('open');
      updateProgressTracker();
    });
  }

  renderMemories();
}

// ============================================================
// AUTH PAGE
// ============================================================
function initAuth() {
  const tabs    = document.querySelectorAll('.auth-tab');
  const forms   = document.querySelectorAll('.auth-form');
  if (!tabs.length) return;
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      forms.forEach(f => f.classList.remove('active'));
      tab.classList.add('active');
      document.getElementById('form-' + tab.dataset.tab)?.classList.add('active');
    });
  });
  document.querySelectorAll('.auth-form .btn-primary').forEach(btn => {
    btn.addEventListener('click', e => {
      e.preventDefault();
      showToast('🎉 Welcome to Safar Mehfil!', 'success');
      setTimeout(() => { window.location.href = 'index.html'; }, 1200);
    });
  });
}

// ============================================================
// INIT
// ============================================================
document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initReveal();
  updateProgressTracker();

  const page = window.location.pathname.split('/').pop() || 'index.html';
  if (page === 'index.html' || page === '') initHome();
  if (page === 'explore.html') initExplore();
  if (page === 'guidebook.html') initGuidebook();
  if (page === 'wishlist.html') initWishlist();
  if (page === 'memories.html') initMemories();
  if (page === 'auth.html') initAuth();

  // Hero parallax
  window.addEventListener('scroll', () => {
    const heroBg = document.querySelector('.hero-bg');
    if (heroBg) heroBg.style.transform = `translateY(${window.scrollY * 0.3}px)`;
  }, { passive: true });
});
