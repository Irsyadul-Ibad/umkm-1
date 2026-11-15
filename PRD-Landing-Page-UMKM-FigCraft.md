# PRD: Desain Landing Page UMKM (Minimalist & Aesthetic) dengan FigCraft

**Versi:** 1.0  |  **Status:** Draft  |  **Tanggal:** 15 November 2026  |  **Disusun oleh:** Ibad

> Catatan asumsi: dokumen ini memperlakukan FigCraft sebagai tool desain berbasis Figma/AI yang dipakai untuk menghasilkan dan menyusun layout. Bagian workflow dibuat generik agar tetap berlaku jika fitur FigCraft berbeda.

## 1. Ringkasan

Produk ini adalah desain web landing page untuk UMKM yang tampil minimalis, hangat, dan punya karakter sendiri, bukan tampilan template AI yang seragam. Desain dibuat di FigCraft dengan design system yang ketat sehingga hasilnya konsisten, mudah diadaptasi ke berbagai jenis usaha (kuliner, fashion, kerajinan, jasa), dan siap diserahkan ke developer.

## 2. Latar Belakang & Masalah

- Banyak UMKM belum punya website, atau punya tapi terlihat generik dan kurang dipercaya.
- Desain hasil AI cenderung seragam: gradasi ungu-biru, kartu bulat dengan bayangan berlebihan, ikon emoji, hero dengan headline klise, dan stok foto generik.
- UMKM membutuhkan halaman yang cepat dipahami, memicu aksi (pesan via WhatsApp), dan merepresentasikan identitas usaha yang unik.

## 3. Tujuan & Metrik Keberhasilan

| Tujuan | Metrik | Target |
| --- | --- | --- |
| Tampilan khas, tidak terkesan template AI | Skor review internal (skala 1-5) pada kriteria "karakter & keunikan" | ≥ 4 |
| Konversi ke kontak | Klik tombol WhatsApp / total kunjungan | ≥ 5% |
| Kecepatan pemahaman | Pengguna paham apa yang dijual dalam 5 detik (uji 5 orang) | ≥ 4 dari 5 |
| Efisiensi produksi | Waktu dari brief ke desain final | ≤ 3 hari kerja |
| Konsistensi | Komponen yang memakai variabel/style design system | 100% |

## 4. Target Pengguna

**Pengguna langsung:** pemilik UMKM atau desainer/freelancer yang membuatkan landing page untuk UMKM.

**Pengunjung akhir:** calon pelanggan, mayoritas membuka lewat ponsel dari Instagram, TikTok, atau pencarian lokal. Mereka ingin tahu produknya, harganya, lokasinya, dan cara memesan, secepat mungkin.

## 5. Ruang Lingkup

**Termasuk:**

- Satu landing page (mobile-first, desktop adaptif)
- Design system ringan (warna, tipografi, spasi, komponen)
- Template yang bisa dipakai ulang untuk 3 kategori UMKM contoh
- Handoff ke developer (spec, aset, anotasi)

**Tidak termasuk:**

- Pengembangan front-end/back-end
- Sistem pembayaran dan e-commerce penuh
- Pembuatan logo dari nol (memakai logo yang sudah ada)

## 6. Prinsip Desain: Minimalist, Aesthetic, dan Tidak "AI-Generik"

1. **Satu ide visual yang kuat.** Pilih satu konsep per brand (misalnya tekstur kertas kraft, atau grid editorial) lalu konsisten.
2. **Ruang kosong sebagai elemen desain.** Spasi lega, maksimal satu pesan utama per section.
3. **Tipografi sebagai karakter.** Kombinasi serif atau display yang punya kepribadian dengan sans-serif netral. Hindari satu font sans untuk semuanya.
4. **Palet terbatas.** Maksimal 3 warna utama + 1 aksen. Warna diambil dari produk atau budaya lokal usaha tersebut, bukan palet default.
5. **Foto asli di atas ilustrasi generik.** Pakai foto produk dari UMKM itu sendiri, dengan perlakuan konsisten (crop, tone, rasio).
6. **Detail yang disengaja.** Garis tipis, penomoran, label kecil, atau elemen asimetris yang tampak ditata tangan.
7. **Copy yang spesifik.** Menyebut nama produk, bahan, kota, dan cerita pemilik, bukan kalimat klise.

### Daftar "Hindari" (ciri visual AI generik)

- Gradasi ungu/biru/pink pada hero dan tombol
- Kartu seragam dengan sudut sangat bulat dan bayangan tebal
- Emoji atau ikon seragam sebagai pengganti ilustrasi
- Headline klise seperti "Solusi terbaik untuk bisnis Anda"
- Tiga kolom fitur dengan ikon lingkaran yang identik
- Stok foto orang tersenyum di depan laptop
- Semua elemen rata tengah dengan jarak yang sama persis

## 7. Design System

### 7.1 Tipografi

| Peran | Spesifikasi |
| --- | --- |
| Display / Headline | Serif atau display berkarakter, 40-64 px desktop, 32-40 px mobile, tracking sedikit rapat |
| Body | Sans-serif netral, 16-18 px, line-height 1.6 |
| Label / Caption | 12-13 px, huruf kapital kecil dengan tracking lebar |

Maksimal 2 keluarga font. Gunakan font yang mendukung karakter Indonesia dengan baik dan berlisensi gratis (misalnya dari Google Fonts).

### 7.2 Warna

- **Latar:** off-white hangat atau krem (bukan putih murni)
- **Teks:** hampir hitam dengan sedikit rona hangat (bukan #000)
- **Aksen:** satu warna khas brand untuk tombol dan sorotan
- **Netral pendukung:** 2 tingkat abu hangat untuk garis dan teks sekunder
- Rasio kontras teks minimal 4.5:1

Semua warna disimpan sebagai **Figma variables** agar mudah diganti per brand.

### 7.3 Spasi & Grid

- Skala spasi kelipatan 8 (8, 16, 24, 40, 64, 96, 128)
- Desktop: 12 kolom, lebar konten maks 1120 px. Mobile: 4 kolom, margin 20 px
- Jarak antar section lega (96-128 px desktop, 64 px mobile)

### 7.4 Komponen

Tombol (primer, sekunder, teks), navigasi sederhana, kartu produk, blok testimoni, blok lokasi/jam buka, footer. Setiap komponen punya varian dan memakai auto layout.

## 8. Struktur Halaman

1. **Navigasi:** logo, 3-4 tautan, tombol WhatsApp
2. **Hero:** satu headline spesifik, satu kalimat pendukung, satu CTA, satu foto produk yang kuat
3. **Produk unggulan:** 3-6 item dengan foto, nama, harga, tombol pesan
4. **Cerita usaha:** foto pemilik/proses, 2-3 paragraf pendek yang jujur
5. **Keunggulan:** maksimal 3 poin, dibuat editorial (penomoran atau garis), bukan kartu ikon
6. **Testimoni:** 2-3 kutipan pelanggan asli, dengan nama dan kota
7. **Cara pesan:** 3 langkah singkat
8. **Lokasi & jam buka:** peta sederhana, alamat, tautan Instagram
9. **CTA penutup & footer**

## 9. Persyaratan Fungsional (Desain)

- **F1.** Seluruh frame dibuat mobile-first (375 px), lalu tablet (768 px) dan desktop (1440 px).
- **F2.** CTA WhatsApp terlihat di hero, setelah produk, dan di bagian akhir; di mobile tersedia tombol melayang yang tidak menutupi konten.
- **F3.** Semua teks, warna, dan spasi memakai style/variable, tanpa nilai hardcode.
- **F4.** Tersedia 3 contoh tema (misalnya kuliner, fashion, kerajinan) dari satu struktur yang sama.
- **F5.** Aset diekspor dalam format ringan (WebP/SVG) dengan penamaan konsisten.

## 10. Persyaratan Non-Fungsional

- Aksesibilitas: kontras memadai, target sentuh minimal 44 px, teks alternatif untuk gambar.
- Performa: halaman dirancang untuk muat cepat di jaringan seluler (gambar hero maks ~200 KB).
- Bahasa: Bahasa Indonesia yang natural dan sesuai gaya brand.

## 11. Workflow di FigCraft

1. **Kumpulkan brief:** nama usaha, produk, target pelanggan, 3 kata kunci suasana, 3 referensi visual, foto asli.
2. **Bangun design system dulu:** buat variables warna, tipografi, spasi, lalu komponen dasar, sebelum membuat halaman.
3. **Generate dengan prompt terarah:** minta FigCraft membuat section per section (bukan seluruh halaman sekaligus), dengan batasan jelas dari daftar "Hindari".
4. **Kurasi manual:** ganti teks placeholder dengan copy spesifik, atur ulang ritme spasi, tambahkan satu detail khas per section.
5. **Terapkan foto asli** dan seragamkan perlakuannya.
6. **Responsif:** susun varian mobile, tablet, desktop dengan auto layout dan constraints.
7. **Review & uji 5 detik**, lalu revisi.
8. **Handoff:** anotasi, spec, ekspor aset.

### Template Prompt

```
Buat section hero untuk landing page UMKM [jenis usaha] bernama Ibad.
Gaya: minimalis, editorial, hangat. Latar krem, teks hampir hitam, satu warna aksen [warna].
Tipografi: headline serif berkarakter, body sans-serif netral.
Layout asimetris, banyak ruang kosong, satu foto produk besar.
Hindari: gradasi ungu/biru, kartu bulat bershadow tebal, ikon emoji, rata tengah semua.
Headline harus spesifik tentang [produk unggulan], bukan slogan generik.
Satu CTA: "Pesan via WhatsApp".
```

## 12. Deliverables

- File Figma/FigCraft dengan halaman: Cover, Design System, Components, Landing Page (mobile/tablet/desktop), 3 tema contoh
- Prototipe klik sederhana
- Dokumen handoff dan folder aset
- Panduan singkat penggunaan template untuk UMKM lain

## 13. Timeline (Estimasi 3-5 Hari Kerja)

| Hari | Aktivitas |
| --- | --- |
| 1 | Brief, riset referensi, moodboard, keputusan konsep visual |
| 2 | Design system dan komponen |
| 3 | Layout halaman mobile dan desktop |
| 4 | Kurasi copy, foto, detail, prototipe |
| 5 | Uji 5 detik, revisi, handoff |

## 14. Risiko & Mitigasi

| Risiko | Mitigasi |
| --- | --- |
| Hasil AI tetap terlihat generik | Wajib kurasi manual, checklist "Hindari", satu detail khas per section |
| UMKM tidak punya foto berkualitas | Panduan foto sederhana dengan ponsel (cahaya alami, latar polos) |
| Konsep terlalu minimalis hingga informasi kurang | Uji 5 detik, pastikan harga, lokasi, dan cara pesan jelas |
| Font atau aset bermasalah lisensi | Hanya pakai aset berlisensi terbuka atau milik klien |

## 15. Checklist QA

- [ ] Dalam 5 detik jelas apa yang dijual dan cara memesannya
- [ ] Hanya 2 font dan palet terbatas
- [ ] Tidak ada gradasi ungu/biru, ikon emoji, atau kartu seragam
- [ ] Headline dan copy menyebut hal spesifik tentang usaha
- [ ] Foto asli dengan perlakuan konsisten
- [ ] Kontras dan ukuran teks lolos aksesibilitas
- [ ] Semua nilai memakai variable/style
- [ ] Tampilan mobile diperiksa lebih dulu

## 16. Pertanyaan Terbuka

- Jenis UMKM mana yang jadi prioritas pertama?
- Apakah sudah ada identitas brand (logo, warna) atau perlu dibuat?
- Apakah pemesanan hanya lewat WhatsApp atau perlu marketplace/pembayaran?

## 17. Kumpulan Prompt (Siap Pakai)

Isi tanda kurung siku `[...]` sesuai usaha kamu. Gunakan urutan: **A (master brief) → B (design system) → C (per section) → D (web interaktif) → E (poles)**. Semakin spesifik isi `[...]`, semakin jauh hasilnya dari tampilan AI generik.

### A. Master Brief (tempel di awal setiap sesi)

```
Kamu adalah art director senior dan product designer yang berpengalaman membuat identitas visual untuk brand kecil di Indonesia. Kamu benci desain template.

Proyek: landing page untuk UMKM [jenis usaha] bernama Ibad di [kota].
Produk utama: [produk 1, produk 2, produk 3].
Pelanggan: [siapa, usia, dari mana mereka datang, misal Instagram/TikTok].
Cerita unik usaha: [1-2 kalimat jujur, misal resep turunan nenek, bahan lokal, dibuat tangan].
Suasana (3 kata): [hangat, tenang, artisanal].
Referensi rasa: [majalah editorial, kemasan kraft, toko roti Skandinavia, dll].

Tujuan halaman: pengunjung paham apa yang dijual dalam 5 detik, lalu menekan tombol Pesan via WhatsApp.

Arah visual: minimalis, editorial, banyak ruang kosong, satu ide visual yang konsisten. Tipografi berkarakter (serif/display + sans netral), palet maksimal 3 warna + 1 aksen dari budaya atau produk usaha ini. Layout asimetris yang disengaja.

LARANGAN KERAS: gradasi ungu/biru/pink, kartu seragam bersudut sangat bulat dengan bayangan tebal, ikon emoji, tiga kolom ikon lingkaran yang identik, headline klise ("solusi terbaik", "tingkatkan bisnis Anda"), stok foto generik, semua elemen rata tengah, jarak yang seragam mekanis.

Setiap keputusan desain harus bisa kamu jelaskan dalam satu kalimat. Jika sebuah elemen tidak membantu pengunjung memesan atau mempercayai usaha ini, buang.
```

### B. Prompt Design System

```
Buat design system untuk brand di atas sebelum membuat halaman apa pun.

1. Warna: 1 latar hangat (bukan putih murni), 1 warna teks hampir hitam hangat, 1 warna aksen khas, 2 netral. Beri nama semantik (bg, ink, accent, line, muted) dan simpan sebagai variables. Pastikan kontras teks minimal 4.5:1.
2. Tipografi: pilih 2 font Google Fonts yang berkarakter dan mendukung Bahasa Indonesia. Tentukan skala (display, h2, h3, body, caption) untuk mobile dan desktop. Jelaskan alasan pasangan font ini.
3. Spasi: skala kelipatan 8. Grid 12 kolom desktop (maks 1120 px), 4 kolom mobile.
4. Komponen dengan auto layout dan varian: tombol (primer, sekunder, teks), kartu produk, kutipan testimoni, blok info lokasi, navigasi, footer.
5. Satu "signature detail" yang berulang di seluruh halaman (misalnya garis tipis bernomor, label kecil kapital, atau bentuk organik dari kemasan produk).

Keluarkan hasil berupa style dan variables yang rapi, bukan sekadar contoh visual.
```

### C. Prompt Desain per Section

**Hero**

```
Desain hero mobile (375 px) dan desktop (1440 px). Satu headline spesifik tentang [produk unggulan + keunikannya], maksimal 8 kata, bernada manusiawi. Satu kalimat pendukung. Satu CTA "Pesan via WhatsApp" dan satu tautan teks "Lihat menu". Foto produk besar dengan crop berani dan komposisi asimetris, teks dan foto saling tumpang tipis. Tanpa gradasi, tanpa bayangan tebal. Tambahkan satu detail kecil bergaya editorial (nomor edisi, nama kota, atau tahun berdiri).
```

**Produk unggulan**

```
Desain grid [3-6] produk. Jangan buat semua kartu identik: variasikan ukuran (satu produk besar, lainnya kecil) dengan ritme seperti halaman majalah. Tiap produk: foto, nama, deskripsi satu baris, harga dalam Rupiah, tautan "Pesan". Tanpa border tebal dan tanpa kartu melayang bershadow. Gunakan garis tipis dan jarak lega.
```

**Cerita usaha**

```
Desain section cerita dengan tata letak editorial: foto pemilik atau proses pembuatan di satu sisi, teks 2-3 paragraf pendek di sisi lain, ditambah satu kutipan besar sebagai pull quote. Nada: jujur, hangat, spesifik (sebutkan bahan, tempat, nama). Hindari kata "berkualitas", "terbaik", "inovatif".
```

**Keunggulan, testimoni, cara pesan, lokasi**

```
Buat empat section berikut dengan gaya editorial yang sama:
- Keunggulan: 3 poin bernomor besar (01, 02, 03) dengan garis tipis, bukan kartu ikon.
- Testimoni: 2-3 kutipan pelanggan dengan nama dan kota, tipografi besar, tanpa foto avatar bulat generik.
- Cara pesan: 3 langkah horizontal di desktop, vertikal di mobile, dengan langkah terakhir mengarah ke WhatsApp.
- Lokasi: alamat, jam buka, tautan Instagram, dan peta sederhana bernuansa palet brand.
Pastikan ritme spasi antar section bervariasi namun terasa tertata.
```

### D. Prompt Membuat Web Interaktif (Kode)

```
Bangun landing page ini memakai React saja (functional components + hooks, tanpa library UI lain) berdasarkan design system dan desain di atas. Kualitas kode harus setara studio profesional.

Teknis:
- Satu file App.jsx dengan export default, dipecah menjadi komponen kecil yang jelas: Navbar, Hero, ProductGrid, ProductCard, Story, Highlights, Testimonials, OrderSteps, Location, Footer, FloatingWhatsApp.
- State dengan useState/useReducer, efek dengan useEffect/useRef/useMemo/useCallback. Logika berulang dibuat custom hook (useInView, useScrolled, useMediaQuery, useCountUp).
- Data (produk, testimoni, jam buka, nomor WhatsApp) dipisah di satu objek konstanta di atas file agar mudah diganti per UMKM.
- Styling: CSS variables untuk semua warna, font, dan spasi (di tag style dalam komponen) atau kelas Tailwind core. Tanpa CSS framework lain.
- Google Fonts [font 1] dan [font 2] dengan fallback stack yang layak.
- Mobile-first, responsif sampai 1440 px+, semantic HTML, alt pada gambar, fokus keyboard terlihat, hormati prefers-reduced-motion.
- Tanpa localStorage/sessionStorage; semua data disimpan di state.

Interaksi (halus, bermakna, tidak berlebihan):
1. Scroll reveal: komponen Reveal yang membungkus elemen, memakai hook useInView (IntersectionObserver), fade + translate kecil dengan jeda bertahap.
2. Hero: headline muncul per baris, foto bergeser sangat tipis mengikuti kursor di desktop (parallax lembut lewat onMouseMove).
3. Navbar: transparan di atas, menjadi solid halus saat di-scroll (hook useScrolled), menu mobile dengan animasi buka-tutup.
4. Produk: filter kategori tanpa reload (state kategori aktif), hover memperbesar foto sedikit dan menggeser label, tombol "Tambah ke pesanan".
5. Keranjang pesan ringan (useReducer): pilih produk dan jumlah, total harga dihitung otomatis, tombol "Kirim via WhatsApp" membuat pesan terformat lewat encodeURIComponent ke https://wa.me/[62xxxxxxxxxx], berisi daftar item, total, dan nama pemesan.
6. Testimoni: carousel dengan geser jari di mobile dan tombol di desktop.
7. Kursor kustom kecil di desktop yang berubah saat menyentuh elemen yang bisa diklik (nonaktif di perangkat sentuh).
8. Tombol WhatsApp melayang di mobile yang menyembunyikan diri saat pengguna berada di footer.
9. Micro-interaction: efek tekan pada tombol, garis bawah tautan beranimasi, penghitung angka (misal "500+ pesanan") yang naik saat terlihat (useCountUp).

Gaya gerak: easing cubic-bezier(0.22, 1, 0.36, 1), durasi 400-700 ms, tanpa efek yang mengganggu membaca.

Keluaran: satu file App.jsx lengkap yang langsung bisa dijalankan, dengan komentar singkat di bagian penting.
```

### E. Prompt Poles & Anti-Generik

**Audit "terasa AI"**

```
Tinjau desain/kode ini sebagai art director yang kritis. Daftar semua elemen yang terlihat seperti hasil AI generik atau template (palet, bentuk, headline, ikon, ritme spasi, pola layout). Untuk tiap temuan, beri penggantian spesifik yang selaras dengan karakter Ibad. Lalu terapkan perbaikannya.
```

**Tulis ulang copy**

```
Tulis ulang semua teks halaman dengan suara Ibad yang hangat dan apa adanya. Ganti setiap klaim umum dengan fakta konkret: bahan, proses, angka, nama tempat. Maksimal 2 kalimat per paragraf. Hapus kata klise dan kata sifat kosong.
```

**Tingkatkan interaksi**

```
Perhalus semua animasi agar terasa mahal dan tenang: kurangi jumlah gerakan, perpanjang easing, pastikan tidak ada yang bergerak tanpa alasan. Uji pada layar 375 px dan 1440 px, perbaiki apa pun yang patah, dan pastikan skor Lighthouse performa dan aksesibilitas di atas 90.
```

### F. Tips Memakai Prompt

- **Satu section per prompt.** Hasil lebih tajam daripada meminta seluruh halaman sekaligus.
- **Beri bahan nyata:** foto produk, nama, harga, alamat, dan cerita asli. Placeholder menghasilkan desain generik.
- **Kunci keputusan yang sudah bagus.** Tulis "pertahankan palet dan font ini, ubah hanya layout section X" agar tidak berubah-ubah.
- **Minta alasan.** Tambahkan "jelaskan alasan tiap pilihan desain dalam satu kalimat" untuk memaksa hasil yang disengaja.
- **Iterasi 2-3 kali.** Jalankan prompt E setelah tiap putaran sampai checklist QA di bagian 15 terpenuhi.
