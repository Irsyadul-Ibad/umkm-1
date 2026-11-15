const WHATSAPP_NUMBER = "6281234567890"; // Ganti dengan nomor WhatsApp bisnis sebelum tayang.

const themes = {
  kuliner: {
    label: "Kuliner", brand: "Pagi Selasar", eyebrow: "ROTISERI RUMAHAN · BANJARMADU, LAMONGAN",
    headline: "Roti yang sabar,<br>untuk pagi yang<br>singkat.", intro: "Fermentasi pelan, tepung pilihan, dan oven yang menyala sebelum matahari.",
    batchTitle: "BATCH PAGI", batchText: "Dibuat segar, jumlah terbatas.", photoCaption: "Roti keluar dari oven, pukul 05.40", heroAlt: "Roti sourdough artisan dengan kulit keemasan",
    menuAside: "Dipanggang dalam batch kecil.<br>Habis hari ini? Besok ada lagi.",
    heroImage: "./assets/sourddough.jpg",
    storyImage: "https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=1000&q=80", storyAlt: "Adonan roti disiapkan di dapur rumahan",
    storyPhotoCaption: "Dapur kecil di Banjarmadu", storyTitle: "Pelan-pelan<br>lebih terasa.",
    story: ["Roti Pagi Selasar berawal dari meja kecil di rumah di Banjarmadu, dan kebiasaan memanggang sebelum pagi dimulai.", "Adonannya menginap semalam. Paginya dibentuk, dipanggang, lalu diantar selagi kulitnya masih renyah."],
    quote: "Kami percaya roti yang baik perlu waktu, bukan banyak bahan.", owner: "Nara & Dimas · pembuat roti", locationTitle: "Pintu kecil<br>di Banjarmadu.",
    address: "Ds. Banjarmadu, Kec. Karanggeneng<br>Kab. Lamongan", addressNote: "", hours: "07.00 — 15.00 WIB", mobileBarTitle: "Batch pagi", mapCaption: "ILUSTRASI KAWASAN · BUKAN PETA AKURAT", footerLocation: "Roti rumahan · dibuat di Banjarmadu.",
    district: "BANJARMADU", mapQuery: "Desa+Banjarmadu+Karanggeneng+Lamongan", openDays: "SELASA — MINGGU", instagram: "https://instagram.com/pagiselasar", accent: "#61734f",
    qualities: [
      ["Yang ditunggu", "Fermentasi semalam", "Adonan dibiarkan berkembang perlahan agar aromanya keluar tanpa banyak ragi."],
      ["Yang dipilih", "Bahan yang bisa disebut namanya", "Tepung, mentega, susu, sedikit garam. Sesederhana itu."],
      ["Yang diingat", "Gang kecil tempat kami tumbuh", "Dibuat dan diantar dari Banjarmadu, selama oven masih menyala."]
    ],
    products: [
      { id:"sourdough", name:"Sourdough kampung", kicker:"FERMENTASI 18 JAM", description:"Kulit tipis renyah, bagian dalam sedikit asam.", price:32000, photo:"./assets/sourddough.jpg", position:"center", filters:["favorit","batch"], tag:"Favorit" },
      { id:"pandan", name:"Roti susu pandan", kicker:"LEMBUT & HARUM", description:"Pandan asli, susu segar, dipanggang pagi.", price:28000, photo:"./assets/roti_pandan.jpg", position:"center", filters:["favorit"], tag:"Paling dicari" },
      { id:"cokelat", name:"Cokelat 70%", kicker:"GANACHE RUMAHAN", description:"Cokelat pekat di dalam roti susu.", price:30000, photo:"photo-1549931319-a545dcf3bc73", position:"center", filters:["batch"], tag:"Batch 04" }
    ],
    reviews: [
      ["“Wanginya sampai ke gang. Saya beli buat sarapan, tapi setengahnya habis di jalan.”", "Nisa S.", "Lamongan", "NS"],
      ["“Kulitnya renyah, dalamnya lembut. Pesan sore, paginya sudah bisa diambil.”", "Bagas W.", "Lamongan", "BW"],
      ["“Yang rasa pandan jadi favorit di rumah. Harumnya lembut, tidak berlebihan.”", "Rani P.", "Lamongan", "RP"]
    ]
  },
  fashion: {
    label: "Fashion", brand: "Sela Batik", eyebrow: "BATIK PESISIR · LAMONGAN",
    headline: "Batik pesisir,<br>dibawa keluar<br>dari lemari.", intro: "Batik pesisir dengan ragam motif dan warna yang kuat.",
    batchTitle: "RILIS KAIN 06", batchText: "Dijahit terbatas oleh penjahit sekitar.", photoCaption: "Kain cap pesisir, warna soga dan nila", heroAlt: "Kain batik bermotif pesisir dengan warna hangat",
    menuAside: "Potongan sederhana untuk hari yang panjang.<br>Dibuat dekat rumah.",
    heroImage: "./assets/kain_batik_warna_hangat.jpg",
    storyImage: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1000&q=80", storyAlt: "Kain batik pesisir disiapkan sebelum dijahit",
    storyPhotoCaption: "Kain disiapkan sebelum dipotong", storyTitle: "Motif lama,<br>hari-hari baru.",
    story: ["Sela Batik memilih kain dari pembatik kecil di pesisir, lalu menjahitnya dalam potongan yang ringan untuk dipakai sehari-hari.", "Setiap motif punya asal. Kami jaga warnanya, ukuran yang nyaman, dan jumlah produksi yang masuk akal."],
    quote: "Kain yang baik tidak cuma disimpan. Ia ikut jalan, duduk, dan hidup bersama kita.", owner: "Dira · memilih kain & pola", locationTitle: "Batik pesisir<br>di Lamongan.",
    address: "Ds. Banjarmadu, Kec. Karanggeneng<br>Kab. Lamongan", addressNote: "", hours: "09.00 — 17.00 WIB", mobileBarTitle: "Koleksi kain", mapCaption: "ILUSTRASI KAWASAN · BUKAN PETA AKURAT", footerLocation: "Batik pesisir · dibuat di Banjarmadu.",
    district: "BANJARMADU", mapQuery: "Desa+Banjarmadu+Karanggeneng+Lamongan", openDays: "SENIN — SABTU", instagram: "https://instagram.com/selabatik", accent: "#a34842",
    qualities: [
      ["Yang dicari", "Kain dari pembatik sekitar", "Motif pesisir dipilih langsung dari kelompok pembatik kecil."],
      ["Yang dijahit", "Satu pola, banyak tubuh", "Ukuran bisa ditanyakan langsung sebelum dibuat."],
      ["Yang dibatasi", "Jumlah yang benar-benar terpakai", "Diproduksi kecil agar sisa kain dan stok tidak menumpuk."]
    ],
    products: [
      { id:"batik-pesisir", name:"Batik Pesisir", kicker:"RAGAM MOTIF · WARNA HANGAT", description:"Ragam motif pesisir dalam pilihan kain yang penuh warna.", price:289000, photo:"./assets/kain_batik_warna_hangat.jpg", position:"center", filters:["favorit","batch"], tag:"Favorit" },
      { id:"outer", name:"Outer Pagi", kicker:"KAIN SISA PILIHAN", description:"Satu lapis ringan untuk perjalanan.", price:315000, photo:"photo-1594633312681-425c7b97ccd1", position:"center", filters:["favorit"], tag:"Paling dicari" },
      { id:"kain", name:"Kain Pagi", kicker:"BATIK CAP · 2 METER", description:"Motif pesisir, warna alami bersahaja.", price:195000, photo:"./assets/kain_pagi.jpg", position:"center", filters:["batch"], tag:"Rilis 06" }
    ],
    reviews: [
      ["“Potongannya enak buat dipakai kerja. Batiknya tetap kelihatan, tapi tidak terasa ramai.”", "Dewi M.", "Lamongan", "DM"],
      ["“Kainnya lembut dan bisa pesan ukuran. Enak bisa tanya langsung sebelum beli.”", "Sari A.", "Lamongan", "SA"],
      ["“Motif pesisirnya punya cerita. Saya suka detail kecil di bagian mansetnya.”", "Fina R.", "Lamongan", "FR"]
    ]
  },
  kerajinan: {
    label: "Kerajinan", brand: "Lereng Tanah", eyebrow: "GERABAH BUATAN TANGAN · BANJARMADU, LAMONGAN",
    headline: "Dari tanah<br>Banjarmadu, jadi<br>teman sehari-hari.", intro: "Tanah liat lokal, dibentuk dan dibakar perlahan oleh tangan-tangan di desa.",
    batchTitle: "BAKARAN 12", batchText: "Tiap bentuk punya sedikit perbedaan.", photoCaption: "Gerabah baru keluar dari tungku", heroAlt: "Karya keramik buatan tangan di atas meja kerja",
    menuAside: "Benda yang dipakai setiap hari.<br>Bentuknya dikerjakan tangan.",
    heroImage: "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?auto=format&fit=crop&w=1400&q=82",
    storyImage: "https://images.unsplash.com/photo-1493106641515-6b5631de4bb9?auto=format&fit=crop&w=1000&q=80", storyAlt: "Perajin menata benda keramik hasil kerja tangan",
    storyPhotoCaption: "Meja kerja di Banjarmadu", storyTitle: "Benda kecil,<br>jejak tangan.",
    story: ["Di Banjarmadu, tanah jadi bagian dari rumah. Lereng Tanah membuat cangkir dan wadah yang ingin dipakai, bukan hanya dipajang.", "Bentuknya mungkin tidak sama persis. Setiap benda melalui proses putar, jemur, dan bakar dengan tangan yang sama."],
    quote: "Kami suka melihat bekas tangan tetap tinggal di permukaan tanah.", owner: "Tono & Wening · perajin gerabah", locationTitle: "Bengkel tanah<br>di Banjarmadu.",
    address: "Ds. Banjarmadu, Kec. Karanggeneng<br>Kab. Lamongan", addressNote: "", hours: "09.00 — 16.00 WIB", mobileBarTitle: "Koleksi tanah", mapCaption: "ILUSTRASI KAWASAN · BUKAN PETA AKURAT", footerLocation: "Kerajinan lokal · dibuat di Banjarmadu.",
    district: "BANJARMADU", mapQuery: "Desa+Banjarmadu+Karanggeneng+Lamongan", openDays: "SELASA — MINGGU", instagram: "https://instagram.com/lerengtanah", accent: "#8a5928",
    qualities: [
      ["Yang dipakai", "Tanah dari sekitar desa", "Bahan diolah di bengkel keluarga di Banjarmadu."],
      ["Yang dibentuk", "Satu per satu di atas meja putar", "Jejak tangan dibiarkan tampak, bukan disamarkan."],
      ["Yang dibakar", "Tungku, jemur, dan kesabaran", "Warna dan ukuran bisa sedikit berbeda pada tiap bakaran."]
    ],
    products: [
      { id:"cangkir", name:"Cangkir Lereng", kicker:"TANAH LIAT · 250 ML", description:"Permukaan matte, nyaman digenggam.", price:85000, photo:"photo-1578749556568-bc2c40e68b61", position:"center", filters:["favorit","batch"], tag:"Favorit" },
      { id:"vas", name:"Vas Ranting", kicker:"BAKARAN KE-12", description:"Bentuk organik, setiap lekuk berbeda.", price:145000, photo:"photo-1576021182211-9ea8dced3690", position:"center", filters:["favorit"], tag:"Paling dicari" },
      { id:"piring", name:"Piring Bumi", kicker:"TANGAN DIBENTUK", description:"Satu piring kecil untuk sajian harian.", price:98000, photo:"photo-1493106641515-6b5631de4bb9", position:"center", filters:["batch"], tag:"Bakaran 12" }
    ],
    reviews: [
      ["“Suka karena bentuknya tidak terlalu sempurna. Tiap cangkir terasa punya ceritanya.”", "Mira K.", "Lamongan", "MK"],
      ["“Cangkirnya dipakai setiap pagi. Kiriman dibungkus rapi, aman sampai rumah.”", "Arif B.", "Lamongan", "AB"],
      ["“Saya pesan vas untuk ibu. Bagus lihat hasil tangan pengrajin Banjarmadu sendiri.”", "Dian P.", "Lamongan", "DP"]
    ]
  }
};

const state = { theme: "kuliner", filter: "semua", cart: [], carts: { kuliner:[], fashion:[], kerajinan:[] }, review: 0, menuOpen: false };
const root = document.documentElement;
const $ = (selector, within = document) => within.querySelector(selector);
const $$ = (selector, within = document) => [...within.querySelectorAll(selector)];
const money = value => new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", maximumFractionDigits: 0 }).format(value).replace(/\u00a0/g, " ");
const imageUrl = (photo, width = 820) => photo.startsWith("./") || photo.startsWith("/")
  ? photo
  : `https://images.unsplash.com/${photo}?auto=format&fit=crop&w=${width}&q=80`;

function setText(key, value) {
  $$(`[data-bind="${key}"]`).forEach(node => {
    if (key === "storyBody") node.innerHTML = value.map(part => `<p>${part}</p>`).join("");
    else node.innerHTML = value;
  });
}

function announce(message) {
  const target = $("#announcement");
  target.textContent = "";
  requestAnimationFrame(() => { target.textContent = message; });
  const toast = $("#toast");
  toast.textContent = message;
  toast.hidden = false;
  clearTimeout(announce.timer);
  announce.timer = setTimeout(() => { toast.hidden = true; }, 2600);
}

function renderProducts() {
  const theme = themes[state.theme];
  const products = state.filter === "semua" ? theme.products : theme.products.filter(item => item.filters.includes(state.filter));
  const grid = $("#product-grid");
  grid.setAttribute("aria-busy", "true");
  grid.innerHTML = products.map((item, index) => `
    <article class="product-card reveal is-visible" style="--reveal-delay:${index * 55}ms">
      <div class="product-card-media"><img src="${imageUrl(item.photo)}" alt="${item.name}, foto ilustrasi produk" loading="lazy" style="object-position:${item.position}" /><span class="product-label">${item.tag}</span></div>
      <div class="product-info"><p class="product-kicker">${item.kicker}</p><h3 class="product-name">${item.name}</h3><p class="product-description">${item.description}</p><div class="product-bottom"><span class="product-price">${money(item.price)}</span><button class="add-button" type="button" data-add="${item.id}" aria-label="Tambahkan ${item.name} ke pesanan"><span aria-hidden="true">+</span> Tambah pesanan</button></div></div>
    </article>`).join("");
  grid.setAttribute("aria-busy", "false");
}

function renderQualities() {
  $("#quality-list").innerHTML = themes[state.theme].qualities.map(([label, title, description], index) => `
    <article class="quality-item reveal" style="--reveal-delay:${index * 70}ms"><span class="quality-index">0${index + 1}</span><div><h3>${title}</h3><p>${description}</p></div><span class="quality-mark" aria-hidden="true">↗</span></article>`).join("");
  if (root.dataset.ready === "true" && !matchMedia("(prefers-reduced-motion: reduce)").matches) {
    requestAnimationFrame(() => $$(".quality-item.reveal").forEach(node => revealObserver?.observe(node)));
  }
}

function showReview(index) {
  const reviews = themes[state.theme].reviews;
  state.review = (index + reviews.length) % reviews.length;
  const [quote, name, location, initials] = reviews[state.review];
  $("#testimonial-quote").textContent = quote;
  $("#testimonial-name").textContent = name;
  $("#testimonial-location").textContent = location;
  $(".credit-mark").textContent = initials;
  $("#testimonial-count").textContent = `${String(state.review + 1).padStart(2,"0")} / ${String(reviews.length).padStart(2,"0")}`;
}

function applyTheme(key) {
  state.carts[state.theme] = state.cart;
  state.theme = key;
  state.cart = state.carts[key];
  const theme = themes[key];
  root.dataset.theme = key;
  root.style.setProperty("--accent", theme.accent);
  setText("brand", theme.brand); setText("eyebrow", theme.eyebrow); setText("headline", theme.headline);
  setText("intro", theme.intro); setText("batchTitle", theme.batchTitle); setText("batchText", theme.batchText);
  setText("photoCaption", theme.photoCaption); setText("menuAside", theme.menuAside); setText("storyPhotoCaption", theme.storyPhotoCaption);
  setText("storyTitle", theme.storyTitle); setText("storyBody", theme.story); setText("pullQuote", theme.quote); setText("ownerName", theme.owner);
  setText("locationTitle", theme.locationTitle); setText("address", `${theme.address}${theme.addressNote ? `<br><span class="sample-tag">${theme.addressNote}</span>` : ""}`);
  setText("hours", theme.hours); setText("mobileBarTitle", theme.mobileBarTitle);
  setText("footerLocation", theme.footerLocation);
  $(".hours-row span").textContent = theme.openDays;
  $("[data-map-label='north']").textContent = theme.district;
  $("[data-map-label='brand']").textContent = theme.brand.toLocaleUpperCase("id-ID");
  $(".location-actions a:first-child").href = `https://maps.google.com/?q=${theme.mapQuery}`;
  $(".location-actions a:last-child").href = theme.instagram;
  $("[data-bind-img='heroImage']").src = theme.heroImage;
  $("[data-bind-img='heroImage']").alt = theme.heroAlt;
  $("[data-bind-img='storyImage']").src = theme.storyImage;
  $("[data-bind-img='storyImage']").alt = theme.storyAlt;
  document.title = `${theme.brand} — ${theme.label} lokal, dibuat dekat rumah`;
  $(".story-signature").setAttribute("aria-label", `Cerita dari ${theme.owner}`);
  renderProducts(); renderQualities(); showReview(0); renderCart();
  $$("[data-theme-choice]").forEach(button => button.setAttribute("aria-pressed", String(button.dataset.themeChoice === key)));
  if (state.menuOpen) closeMenu();
}

function renderCart() {
  const count = state.cart.reduce((total, item) => total + item.quantity, 0);
  $$('[data-cart-count]').forEach(node => { node.textContent = String(count); node.hidden = count === 0; });
  $("[data-cart-summary]").textContent = count ? `${count} item · ${money(cartTotal())}` : "Mulai pesan langsung";
  const items = $("#cart-items");
  items.innerHTML = state.cart.map(item => `
    <article class="cart-item"><div><h3 class="cart-item-name">${item.name}</h3><p class="cart-item-meta">${money(item.price)} · ${item.themeName}</p></div><div class="quantity-control" aria-label="Jumlah ${item.name}"><button type="button" data-quantity="minus" data-id="${item.id}" aria-label="Kurangi ${item.name}">−</button><span>${item.quantity}</span><button type="button" data-quantity="plus" data-id="${item.id}" aria-label="Tambah ${item.name}">+</button></div></article>`).join("");
  $("#cart-empty").hidden = count > 0;
  $("#cart-total").textContent = money(cartTotal());
  const checkout = $("#checkout-link");
  checkout.setAttribute("aria-disabled", String(count === 0));
  checkout.href = count ? whatsappUrl(buildOrderMessage()) : "#";
}

function cartTotal() { return state.cart.reduce((total,item) => total + item.quantity * item.price, 0); }

function buildOrderMessage() {
  const theme = themes[state.theme];
  const name = $("#customer-name").value.trim();
  const lines = state.cart.map(item => `• ${item.name} x${item.quantity} — ${money(item.price * item.quantity)}`);
  return [`Halo ${theme.brand}, saya mau pesan:`, "", ...(lines.length ? lines : ["Saya ingin tanya menu yang tersedia."]), "", `Perkiraan total: ${money(cartTotal())}`, ...(name ? [`Nama: ${name}`] : []), "Mohon konfirmasi stok dan waktu pengambilan, ya. Terima kasih!"].join("\n");
}

function whatsappUrl(message) { return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`; }

function openCart() {
  const dialog = $("#cart-dialog");
  if (!dialog.open) dialog.showModal();
}

function addToCart(productId) {
  const product = themes[state.theme].products.find(item => item.id === productId);
  if (!product) return;
  const item = state.cart.find(entry => entry.id === `${state.theme}-${product.id}`);
  if (item) item.quantity += 1;
  else state.cart.push({ id:`${state.theme}-${product.id}`, productId:product.id, name:product.name, price:product.price, quantity:1, themeName:themes[state.theme].brand });
  state.carts[state.theme] = state.cart;
  renderCart();
  announce(`${product.name} ditambahkan ke pesanan.`);
}

function changeQuantity(id, direction) {
  const item = state.cart.find(entry => entry.id === id);
  if (!item) return;
  if (direction === "plus") item.quantity += 1;
  else item.quantity -= 1;
  state.cart = state.cart.filter(entry => entry.quantity > 0);
  state.carts[state.theme] = state.cart;
  renderCart();
}

function closeMenu() {
  state.menuOpen = false;
  $(".menu-toggle").setAttribute("aria-expanded", "false");
  $(".menu-toggle .sr-only").textContent = "Buka navigasi";
  $("#main-nav").classList.remove("is-open");
}

$("#product-grid").addEventListener("click", event => {
  const button = event.target.closest("[data-add]");
  if (button) addToCart(button.dataset.add);
});

$(".filter-row").addEventListener("click", event => {
  const button = event.target.closest("[data-filter]");
  if (!button) return;
  state.filter = button.dataset.filter;
  $$("[data-filter]").forEach(node => { const active = node === button; node.classList.toggle("is-active", active); node.setAttribute("aria-pressed", String(active)); });
  renderProducts();
});

document.addEventListener("click", event => {
  const choice = event.target.closest("[data-theme-choice]");
  if (choice) applyTheme(choice.dataset.themeChoice);
  const quantity = event.target.closest("[data-quantity]");
  if (quantity) changeQuantity(quantity.dataset.id, quantity.dataset.quantity);
  if (event.target.closest(".js-open-cart")) openCart();
  if (event.target.closest(".js-order-now,.js-mobile-order")) openCart();
  if (event.target.closest(".dialog-close")) $("#cart-dialog").close();
  if (event.target.closest("[data-slide='next']")) showReview(state.review + 1);
  if (event.target.closest("[data-slide='prev']")) showReview(state.review - 1);
});

$("#customer-name").addEventListener("input", renderCart);
$(".menu-toggle").addEventListener("click", event => {
  state.menuOpen = !state.menuOpen;
  const toggle = event.currentTarget;
  toggle.setAttribute("aria-expanded", String(state.menuOpen));
  toggle.querySelector(".sr-only").textContent = state.menuOpen ? "Tutup navigasi" : "Buka navigasi";
  $("#main-nav").classList.toggle("is-open", state.menuOpen);
});
$("#main-nav").addEventListener("click", event => { if (event.target.closest("a")) closeMenu(); });
$("#cart-dialog").addEventListener("click", event => {
  if (event.target === event.currentTarget) event.currentTarget.close();
});
$("#checkout-link").addEventListener("click", event => {
  if (!state.cart.length) { event.preventDefault(); announce("Pilih produk terlebih dahulu dari menu."); }
});

let revealObserver;
if ("IntersectionObserver" in window && !matchMedia("(prefers-reduced-motion: reduce)").matches) {
  revealObserver = new IntersectionObserver(entries => entries.forEach(entry => {
    if (entry.isIntersecting) { entry.target.classList.add("is-visible"); revealObserver.unobserve(entry.target); }
  }), { threshold:.12, rootMargin:"0px 0px -24px 0px" });
  $$(".reveal").forEach(node => {
    node.style.setProperty("--reveal-delay", `${Number(node.dataset.delay || 0)}ms`);
    revealObserver.observe(node);
  });
  root.dataset.ready = "true";
}

if ("IntersectionObserver" in window) {
  new IntersectionObserver(entries => {
    $("#mobile-order-bar").classList.toggle("is-hidden", entries[0].isIntersecting);
  }, { threshold:.05 }).observe($(".site-footer"));
}

// Swipe support on the testimonial quote; arrow buttons remain the keyboard and pointer alternative.
let touchStartX = null;
$(".testimonial-main").addEventListener("pointerdown", event => { touchStartX = event.clientX; }, { passive:true });
$(".testimonial-main").addEventListener("pointerup", event => {
  if (touchStartX === null || event.pointerType === "mouse") return;
  const delta = event.clientX - touchStartX;
  if (Math.abs(delta) > 46) showReview(state.review + (delta < 0 ? 1 : -1));
  touchStartX = null;
}, { passive:true });

applyTheme("kuliner");
