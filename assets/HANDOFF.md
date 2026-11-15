# Handoff — Template Landing Page UMKM

## Artefak

- `index.html`, `styles.css`, `app.js`: landing page satu halaman. Buka `index.html` untuk melihat versi statis; tidak memerlukan proses build.
- `pagi-selasar.figcraft`: editable design board yang memuat preview desktop/mobile, palet, tipografi, dan tiga contoh kategori.
- `pagi-selasar-design.svg`: sumber vector board yang dapat dibuka atau diekspor dari FigCraft.
- `DESIGN.md`: keputusan visual yang menjadi acuan implementasi CSS.

Semua tema Kuliner, Fashion, dan Kerajinan memakai lokasi yang diberikan: **Ds. Banjarmadu, Kec. Karanggeneng, Kab. Lamongan**. Cerita dan penanda lokasi diselaraskan ke Banjarmadu; jam buka, testimoni, dan data usaha lainnya masih contoh.

## Sebelum dipublikasikan

Semua nama, harga, cerita, testimoni, jam, alamat, dan tautan di versi ini merupakan **data contoh**, bukan informasi usaha terverifikasi. Ganti sebelum dibagikan ke pelanggan.

1. Di `app.js`, ganti `WHATSAPP_NUMBER` dengan nomor bisnis format internasional tanpa `+` atau spasi.
2. Ganti isi `themes` dengan informasi tiap usaha: headline, lokasi, jadwal, cerita, harga, dan daftar produk.
3. Empat foto lokal yang sudah terpasang: `assets/sourddough.jpg` (hero dan sourdough), `assets/roti_pandan.jpg` (roti susu pandan), `assets/kain_batik_warna_hangat.jpg` (hero Fashion dan produk Batik Pesisir), serta `assets/kain_pagi.jpg` (Kain Pagi). Ganti URL `images.unsplash.com` yang tersisa dengan foto asli usaha bila tersedia; isi ulang teks alternatif agar menggambarkan foto yang benar.
4. Ganti URL Instagram dan pencarian Google Maps dengan akun dan pin lokasi resmi.
5. Pastikan harga, stok, testimoni, dan jam buka benar. Hapus label demo hanya setelah semua data contoh diganti.

## Mengganti atau menambah tema

`themes` di `app.js` adalah sumber data bagi pemilih Kuliner, Fashion, dan Kerajinan. Setiap tema memakai struktur komponen yang sama. Variabel warna ada di awal `styles.css` pada `:root` dan `[data-theme]`; gunakan `--bg`, `--surface`, `--ink`, `--muted`, `--accent`, `--accent-soft`, dan `--line`. Pertahankan kontras teks 4.5:1 dan tinggi target tindakan minimum 44px.

## Catatan teknis

- Tidak ada framework build atau penyimpanan lokal. Keranjang hanya berada di memori halaman saat ini dan dipisahkan untuk tiap tema demo.
- Checkout membuka WhatsApp dengan draf pesan yang sudah terformat. Tidak ada pembayaran atau pemesanan otomatis.
- Google Fonts dan foto Unsplash memakai koneksi internet; font fallback lokal disediakan, foto dapat diganti tanpa perubahan layout.
- Peta lokasi adalah ilustrasi, bukan navigasi atau pin akurat.
- Animasi reveal menghormati `prefers-reduced-motion`; bagian interaktif menggunakan button/link native dan fokus keyboard terlihat.
