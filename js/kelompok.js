/* Merender halaman detail satu kelompok (kelompok.html?id=N)
   berdasarkan data di js/config.js — tidak perlu diedit. */

(function () {
  const params = new URLSearchParams(window.location.search);
  const totalKelompok = Object.keys(laporan).length;
  let id = parseInt(params.get("id"), 10);

  if (!id || id < 1 || id > totalKelompok || isNaN(id)) id = 1;

  const key = "kelompok" + id;
  const halaman = laporan[key] || [];
  const nomor = String(id).padStart(2, "0");

  document.title = "Kelompok " + nomor + " — X.4 UNITED Archive";
  document.getElementById("group-title").textContent = "KELOMPOK " + nomor;
  document.getElementById("group-count").textContent =
    halaman.length > 0
      ? halaman.length + (halaman.length === 1 ? " halaman diarsipkan" : " halaman diarsipkan")
      : "belum ada halaman diarsipkan";

  const pagesEl = document.getElementById("pages");

  if (halaman.length === 0) {
    pagesEl.innerHTML = `<div class="empty-archive">
      Berkas kelompok ${nomor} masih kosong.<br>
      Tambahkan nama file gambar di js/config.js untuk menampilkannya di sini.
    </div>`;
  } else {
    halaman.forEach((file, index) => {
      const frame = document.createElement("div");
      frame.className = "page-frame";
      frame.innerHTML = `
        <img src="images/${key}/${file}" alt="Kelompok ${nomor} — Halaman ${index + 1}"
             onerror="this.parentElement.innerHTML='<div class=&quot;page-missing&quot;>Gambar &quot;${file}&quot; tidak ditemukan di images/${key}/</div>'">
        <div class="page-label">Halaman ${index + 1} dari ${halaman.length}</div>
      `;
      const img = frame.querySelector("img");
      img.addEventListener("click", () => openLightbox(img.src, img.alt));
      pagesEl.appendChild(frame);
    });
  }

  /* ---------- Prev / Next antar kelompok ---------- */

  function wrap(n) {
    if (n < 1) return totalKelompok;
    if (n > totalKelompok) return 1;
    return n;
  }

  const prevId = wrap(id - 1);
  const nextId = wrap(id + 1);

  const prevBtn = document.getElementById("nav-prev");
  const nextBtn = document.getElementById("nav-next");
  prevBtn.href = "kelompok.html?id=" + prevId;
  nextBtn.href = "kelompok.html?id=" + nextId;
  document.getElementById("nav-prev-label").textContent = "Kelompok " + String(prevId).padStart(2, "0");
  document.getElementById("nav-next-label").textContent = "Kelompok " + String(nextId).padStart(2, "0");

  /* ---------- Lightbox ---------- */

  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const lightboxClose = document.getElementById("lightbox-close");

  function openLightbox(src, alt) {
    lightboxImg.src = src;
    lightboxImg.alt = alt;
    lightbox.classList.add("open");
  }
  function closeLightbox() {
    lightbox.classList.remove("open");
    lightboxImg.src = "";
  }

  lightboxClose.addEventListener("click", closeLightbox);
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) closeLightbox();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeLightbox();
  });
})();
