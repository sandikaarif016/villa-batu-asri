/* Membuat menu, footer, dan tombol WhatsApp dari config.js. Tidak perlu diubah. */
(function () {
  var S = window.SITE || SITE;
  var file = location.pathname.split("/").pop() || "index.html";
  var wa = "https://wa.me/" + S.wa;

  var nav = document.getElementById("site-nav");
  if (nav) {
    nav.innerHTML = '<div class="wrap"><strong><a href="index.html" style="text-decoration:none">' + S.nama + '</a></strong><ul>' +
      S.menu.map(function (m) {
        return '<li><a href="' + m[0] + '"' + (m[0] === file ? ' class="active" aria-current="page"' : '') + '>' + m[1] + '</a></li>';
      }).join("") + '</ul></div>';
  }

  var foot = document.getElementById("site-footer");
  if (foot) {
    var half = Math.ceil(S.menu.length / 2);
    var li = function (a) { return a.map(function (m) { return '<li><a href="' + m[0] + '">' + m[1] + '</a></li>'; }).join(""); };
    foot.innerHTML = '<div class="wrap"><div class="foot">' +
      '<div><h4>' + S.nama + '</h4><p>' + S.deskripsi + ' ' + S.alamat + '</p></div>' +
      '<div><h4>Halaman</h4><ul>' + li(S.menu.slice(0, half)) + '</ul></div>' +
      '<div><h4>&nbsp;</h4><ul>' + li(S.menu.slice(half)) + '<li><a href="' + wa + '">WhatsApp ' + S.wa_tampil + '</a></li></ul></div></div>' +
      '<p>© ' + new Date().getFullYear() + ' ' + S.nama + ' oleh ' + S.pengembang + '.</p>' +
      '<p>Gambar dan ilustrasi bersifat contoh. Harga, spesifikasi, dan promo dapat berubah sewaktu-waktu tanpa pemberitahuan.</p></div>';
    var f = document.createElement("a");
    f.className = "wa"; f.href = wa + "?text=" + encodeURIComponent("Halo, saya tertarik dengan " + S.nama);
    f.setAttribute("aria-label", "Chat WhatsApp"); f.textContent = "Chat WhatsApp";
    document.body.appendChild(f);
  }

  // Semua tautan WhatsApp dan email di halaman ikut nomor/email dari config.js
  document.querySelectorAll('a[href*="wa.me/"]').forEach(function (a) {
    a.href = a.getAttribute("href").replace(/wa\.me\/\d+/, "wa.me/" + S.wa);
  });
  document.querySelectorAll('a[href^="mailto:"]').forEach(function (a) { a.href = "mailto:" + S.email; });
  document.querySelectorAll("[data-site]").forEach(function (e) { e.textContent = S[e.getAttribute("data-site")]; });
  document.querySelectorAll("[data-site-html]").forEach(function (e) { e.innerHTML = S[e.getAttribute("data-site-html")]; });

  // Foto latar blur untuk hero dan judul halaman (diatur lewat fotoLatar dan blurLatar di config.js)
  if (S.fotoLatar) {
    var img = new Image();
    img.onload = function () {
      var r = document.documentElement;
      r.style.setProperty("--foto-latar", 'url("' + S.fotoLatar + '")');
      r.style.setProperty("--blur-latar", (S.blurLatar || 16) + "px");
      r.classList.add("ada-foto");
    };
    img.src = S.fotoLatar; // kalau file tidak ada, onload tidak jalan dan latar tetap polos
  }
})();
