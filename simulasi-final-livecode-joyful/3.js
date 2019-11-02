/* 
==================
Rating Ojek Online
==================

Setiap kali naik ojek online setelah sampai di tujuan, pada aplikasi kamu akan diminta untuk memberikan feedback.
Salah satu feedback yang diberi adalah dalam bentuk memberikan bintang.

Tugas kamu adalah membuat function countStar yang akan menghitung jumlah rata-rata dari semua bintang yang diterima oleh si abang ojol.

[INPUT]
[
  ['*', '*', '*', ' ', ' '],
  ['*', '*', '*', '*', ' '],
  ['*', '*', '*', ' ', ' '],
  ['*', '*', '*', '*', '*'],
  ['*', '*', ' ', ' ', ' '],
  ['*', '*', '*', ' ', ' '],
  ['*', '*', '*', '*', ' '],
  ['*', '*', ' ', ' ', ' '],
  ['*', '*', '*', ' ', ' '],
  ['*', '*', ' ', ' ', ' '],
  ['*', '*', '*', '*', '*'],
  ['*', '*', '*', '*', ' '],
]


[PROCESS]
bintang yang diterima = [ 3, 4, 3, 5, 2, 3, 4, 2, 3, 2, 5, 4 ]

[OUTPUT]
3.333333333 => 3.33

[NOTE]
jika bentuk angka desimal maka hanya mereturn nilai sampai 2 angka di belakang koma

*/


function countStar(stars) {
  var count = 0
  var temp = []

  for(var i = 0; i < stars.length; i++) {
    for(var j = 0; j < stars[i].length; j++) {
      if(stars[i][j] === '*') {
        count = count + 1
        temp.push(count)
      }
    }
  }
  console.log(count)
  count = count/(stars.length)
  var str = count.toString()
// console.log(str)
// return str.slice(0,4)
  }

console.log(countStar([
  ['*', '*', '*', ' ', ' '],
  ['*', '*', '*', '*', ' '],
  ['*', '*', '*', ' ', ' '],
  ['*', '*', '*', '*', '*'],
  ['*', '*', ' ', ' ', ' '],
  ['*', '*', '*', ' ', ' '],
  ['*', '*', '*', '*', ' '],
  ['*', '*', ' ', ' ', ' '],
  ['*', '*', '*', ' ', ' '],
  ['*', '*', ' ', ' ', ' '],
  ['*', '*', '*', '*', '*'],
  ['*', '*', '*', '*', ' '],
]));
// 3.33

console.log(countStar([
  ['*', '*', '*', '*', ' '],
  ['*', '*', '*', '*', '*'],
  ['*', '*', '*', ' ', ' '],
  ['*', '*', '*', '*', '*'],
  ['*', '*', '*', '*', ' '],
  ['*', '*', '*', '*', '*'],
  ['*', '*', '*', ' ', ' '],
  ['*', '*', '*', '*', ' '],
  ['*', '*', '*', '*', '*'],
]));
// 4.22