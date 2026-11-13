# Student Management - React UI Implementation Practice

Aplikasi web sederhana berbasis **ReactJS** untuk menampilkan daftar data mahasiswa dan jam digital secara *real-time*. Proyek ini dibuat untuk memenuhi tugas individu **Asynchronous 14 - Frontend Development** (Celerates Acceleration Mastery Program Batch 5).

## Fitur Utama
- **Daftar Data Mahasiswa (`useState` & `.map()`)**: Menyimpan kumpulan data *dummy* mahasiswa dalam *state* lokal komponen dan menampilkannya ke dalam tabel interaktif secara dinamis.
- **Informasi Jumlah Mahasiswa**: Menampilkan total mahasiswa yang terdaftar secara otomatis[cite: 1].
- **Live Digital Clock (`useEffect`)**: Menampilkan tanggal dan waktu saat ini yang diperbarui setiap 1 detik menggunakan `setInterval()`, lengkap dengan fungsi *cleanup* (`clearInterval()`) saat komponen di-*unmount*.

## Teknologi yang Digunakan
- **ReactJS** (Vite)
- **JavaScript (ES6+)**
- **Vanilla CSS**

## Cara Menjalankan Proyek Secara Lokal
1. *Clone* repository ini:
   ```bash
   git clone https://github.com/Tatya17/student-management-react.git
   ```
2. Masuk ke direktori proyek dan pasang dependensi:
   ```bash
   cd student-management-react
   npm install
   ```
3. Jalankan server pengembangan:
   ```bash
   npm run dev
   ```
