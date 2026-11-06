/* =====================================================================
   PUSAT PENGATURAN SITUS
   Ubah data di file ini SATU KALI, maka semua halaman ikut berubah:
   menu, footer, tombol WhatsApp melayang, semua tombol Chat WhatsApp,
   serta alamat, jam kerja, dan email di halaman Kontak.

   Aturan: ganti hanya teks di antara tanda kutip "...".
   Jangan hapus tanda kutip, koma, atau titik koma.
   ===================================================================== */
const SITE = {
  // Nama perumahan, tampil di menu dan footer
  nama: "Villa Batu Asri",

  // Nama perusahaan pengembang, tampil di footer
  pengembang: "Kelompok 1",

  // Alamat kantor pemasaran, tampil di footer dan halaman Kontak
  alamat: "FHVW+R45, Jl. Lap. Golf, Kp. Tengah, Kec. Pancur Batu, Kabupaten Deli Serdang, Sumatera Utara 20138",

  // Nomor WhatsApp untuk tombol: awali 62, tanpa 0 dan tanpa tanda +
  wa: "6285609383925",

  // Nomor WhatsApp yang ditampilkan sebagai tulisan
  wa_tampil: "0856-0938-3925",

  // Email
  email: "info@contoh.com",

  // Jam kerja, gunakan <br> untuk pindah baris
  jam: "Sen–Sab 09.00–17.00<br>Min 10.00–15.00",

  // Kalimat singkat di footer
  deskripsi: "Hunian nyaman dan aman untuk keluarga dan mahasiswa.",

  // FOTO LATAR: nama file foto yang dipasang sebagai latar blur di bagian hero dan judul halaman.
  // Simpan fotonya di folder yang sama. Kalau file tidak ada, latar tetap biru polos (tidak error).
  // Kosongkan dengan "" untuk mematikan fitur ini.
  fotoLatar: "hero.jpg",

  // Tingkat blur latar, dalam piksel. Makin besar makin kabur (disarankan 8 sampai 30)
  blurLatar: 16,

  // Daftar menu. Untuk menambah halaman baru, tambah satu baris: ["namafile.html", "Nama Menu"]
  menu: [
    ["index.html", "Beranda"],
    ["tentang.html", "Tentang"],
    ["tipe-unit.html", "Tipe Unit"],
    ["fasilitas.html", "Fasilitas"],
    ["lokasi.html", "Lokasi"],
    ["galeri.html", "Galeri"],
    ["cara-sewa.html", "Cara Sewa"],
    ["faq.html", "FAQ"],
    ["kontak.html", "Kontak"]
  ]
};
