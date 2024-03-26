// Mendefinisikan fungsi untuk menambahkan teks ke elemen h1
function addText() {
    // Mendapatkan referensi ke elemen h1 dengan id 'myH1'
    var myH1 = document.getElementById("myH1");
  
    // Menambahkan teks pada elemen h1
    myH1.innerHTML += " World";
  }
  
  // Memanggil fungsi addText setelah halaman selesai dimuat
  window.addEventListener("load", addText);