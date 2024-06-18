function adjustFontSize() {
    var viewportWidth = window.innerWidth; // Mendapatkan lebar viewport
    var customHeading = document.querySelector('.custom-heading'); // Elemen h1

    // Perhitungan ukuran font berdasarkan lebar viewport
    var baseFontSize = 2; // Ukuran font base di sini lebih besar dari h1
    var scaleFactor = viewportWidth / 500; // Sesuaikan angka ini sesuai dengan skala desain Anda

    var fontSize = baseFontSize * scaleFactor; // Menghitung ukuran font responsif
    customHeading.style.fontSize = fontSize + 'rem'; // Atur ukuran font
}

// Menyesuaikan ukuran font pada muat halaman pertama kali
adjustFontSize();

// Menyesuaikan ukuran font saat jendela diubah ukurannya
window.addEventListener('resize', adjustFontSize);