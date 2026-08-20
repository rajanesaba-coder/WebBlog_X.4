/* Merender kartu-kartu kelompok di halaman utama (index.html)
   berdasarkan data di js/config.js — tidak perlu diedit. */

(function () {
  const catalog = document.getElementById("catalog");
  const totalKelompok = Object.keys(laporan).length;

  for (let i = 1; i <= totalKelompok; i++) {
    const key = "kelompok" + i;
    const halaman = laporan[key] || [];
    const isEmpty = halaman.length === 0;
    const nomor = String(i).padStart(2, "0");

    const card = document.createElement(isEmpty ? "div" : "a");
    if (!isEmpty) card.href = "kelompok.html?id=" + i;
    card.className = "card" + (isEmpty ? " empty" : "");

    card.innerHTML = `
      <div class="file-no">FILE NO. ${nomor}</div>
      <h2>Kelompok ${nomor}</h2>
      <div class="status">${
        isEmpty
          ? "belum ada laporan"
          : halaman.length + (halaman.length === 1 ? " halaman" : " halaman")
      }</div>
      ${!isEmpty ? '<div class="stamp">Filed &check;</div>' : ""}
    `;

    catalog.appendChild(card);
  }
})();
