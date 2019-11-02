/**
 * =============
 * Mencari Jarak
 * =============
 * 
 * [Description]
 * Diberikan sebuah array 2-dimensi yang berisikan 2 asterisk (*) dan sisanya adalah spasi (' ')
 * 
 * [Instruction]
 * Buatlah sebuah fungsi untuk menentukan jarak dari kedua asterisk tersebut.
 * 
 * [Example]
 * [
 *   [' ',' ','*',' '],
 *   [' ',' ',' ',' '],
 *   [' ',' ',' ',' '],
 *   ['*',' ',' ',' ']
 * ]
 * 
 * step by step solving :
 * [
 *   [' ', ' ', '0', ' '],
 *   [' ', ' ', '1', ' '],
 *   [' ', ' ', '2', ' '],
 *   ['5', '4', '3', ' ']
 * ]
 * jika kita perhatikan urutan angka - angka diatas, maka jarak antara
 * kedua x adalah 5. Dimana posisi * tujuan dihitung sebagai 1 langkah.
 * 
 * maka output : 5
 * 
 * [Rules]
 * 1. `Dilarang menggunakan built-in function apapun` kecuali push.
 */

function findDelta(arr) {
  
 var temp = []

  for(var i = 0; i < arr.length; i++) {
    for(var j = 0; j < arr[i].length; j++) {
      if(arr[i][j] === '*') {
        temp.push([i,j])
      }
    }
  }
  console.log(temp)
  if(temp.length < 2) {
    return 'jarak tidak ditemukan'
  }
  hasil = temp[0][0] - temp[1][0]
  hasil2 = temp[0][1] - temp[1][1]
  if(hasil < 0) {
    hasil = -hasil
  }
  if(hasil2 < 0) {
    hasil2 = -hasil2
  }
  // return hasil + hasil2
}

var arr1 = [
  [' ', ' ', ' ', ' ', ' '],
  [' ', '*', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' '],
  [' ', ' ', '*', ' ', ' '],
  [' ', ' ', ' ', ' ', ' '],
]
console.log(findDelta(arr1)) // 3

var arr2 = [
  [' ', ' ', ' ', ' ', '*'],
  [' ', ' ', ' ', ' ', ' '],
  [' ', '*', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' '],
]
console.log(findDelta(arr2)) // 5

var arr3 = [
  [' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' '],
  [' ', ' ', '*', ' ', ' '],
  [' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' '],
]
console.log(findDelta(arr3)) // Jarak tidak ditemukan