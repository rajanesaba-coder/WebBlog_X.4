/* =====================================================================
   FILE INI YANG PALING SERING KAMU BUKA.

   Cara pakai:
   1. Simpan hasil desain Canva sebagai PNG/JPG.
   2. Beri nama urut: 1.png, 2.png, 3.png, dst.
   3. Taruh di folder images/kelompokX/ yang sesuai.
   4. Tulis nama file itu di daftar kelompok di bawah ini,
      urut sesuai halaman LHO-nya.

   Tidak perlu ubah file lain. Cukup file ini saja.
   ===================================================================== */

const laporan = {
  kelompok1: ["1.jpeg"],
  kelompok2: ["1.jpeg"],
  kelompok3: ["1.jpeg", "2.jpeg"],
  kelompok4: ["1.jpeg", "2.jpeg"],
  kelompok5: ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg"],
  kelompok6: ["1.jpeg", "2.jpeg", "3.jpeg", "4.jpeg", "5.jpeg"],
  kelompok7: ["1.jpeg"],
  kelompok8: ["1.jpeg", "2.jpeg", "3.jpeg", "4.jpeg", "5.jpeg", "6.jpeg", "7.jpeg"],
};

/* Contoh kalau kelompok 1 sudah punya 3 halaman gambar:

   kelompok1: ["1.png", "2.png", "3.png"],

   Kalau kelompok 2 baru punya 2 halaman:

   kelompok2: ["1.png", "2.png"],

   Kelompok yang arraynya masih kosong [] akan otomatis
   ditampilkan sebagai "belum ada laporan" di halaman archive.
*/
