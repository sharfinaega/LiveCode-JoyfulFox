/*
==========================
Gundala Membasmi Kejahatan
==========================
Instruksi
=========
Gundala sedang mengejar pelaku-pelaku kejahatan. Pelaku-pelaku kejahatan
ini akan memasang beberapa jebakan secara acak agar Gundala tidak dapat menangkap mereka.
Gundala memiliki 3 "nyawa", jika Gundala terkena jebakan maka "nyawa" dari gundala ini akan berkurang.

Keterangan
 - '*' adalah jebakan yang dipasang oleh pelaku-pelaku kejahatan
 - '#' adalah jalanan biasa
 - 'Begundal' adalah pelaku kejahatan

 Jika nyawa Gundala habis, pertarungan pun akan berakhir. Dan mengembalikan jumlah begundal yang 
 berhasil ditangkap sebelum Gundala gugur.

 [RULES]
  - WAJIB menggunakan PSEUDOCODE
  - DILARANG menggunakan built-in function lain
 */

/*

START

STORE 'nyawa' with any value number 3
STORE 'jebakan' with any value number 0
STORE 'jalanan' with any value number 0
STORE 'begundal' with any value number 0



 */


function basmiKejahatan(gundala) {
  var nyawa = 3
  var jebakan = 0;
  var jalanan = 0;
  var begundal = 0;

  for(var i = 0; i < gundala.length; i++) {
    if(gundala[i] === '*') {
      jebakan = jebakan + 1
    }
    else if(gundala[i] === '#') {
      jalanan = jalanan + 1
    }
    else if(gundala[i]=== 'Begundal') {
      begundal = begundal + 1
    }

    if(nyawa <= jebakan) {
      break;
    }
  }
  if(nyawa > jebakan) {
    return 'Selamat Gundala, kamu telah memenangkan peperangan! Kamu telah menangkap '+begundal+' begundal'
  }
  else if(begundal > 0) {
    return 'Maaf Gundala, kamu telah gugur. Kamu hanya berhasil menangkap '+begundal+' begundal'
  }
   
  return 'Maaf Gundala, kamu telah gugur. Dan kamu tidak berhasil menangkap para begundal'
}

console.log(basmiKejahatan(['*', '*', '#', '#', 'Begundal', '#', 'Begundal', 'Begundal', '#']));
// Selamat Gundala, kamu telah memenangkan peperangan! Kamu telah menangkap 3 begundal.

console.log(basmiKejahatan(['*', '*', 'Begundal', '*', '*', '#', 'Begundal']));
// Maaf Gundala, kamu telah gugur. Kamu hanya berhasil menangkap 1 begundal.

console.log(basmiKejahatan(['*', '*', '*', '*', '#', 'Begundal', '*', 'Begundal', '#', 'Begundal']));
// Maaf Gundala, kamu telah gugur. Dan kamu tidak berhasil menangkap para begundal.