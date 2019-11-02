/*
=============
Reverse Array
=============

Function reverseAll() mengambil input berupa sebuah array, dan mengembalikan kebalikan dari isi array tersebut
beserta kebalikan dari angka-angka di dalamnya.

CONTOH:

input : [123, 456]

PROSES:
1. 456 dibalik jadi 654
2. 123 dibalik jadi 321
3. 654 akan berada di index 0 array dan 321 akan berada di index 1 array

output: [654, 321]

catatan: output merupakan array of numbers, bukan array of string

DILARANG MENGGUNAKAN:
- .map()
- .filter()
- .reduce()
- .reverse()
- .split()
- .join()
*/

    function reverseAll(arr) {
      var str = []
      for(i = 0; i < arr.length; i++){
        str.push(arr[i].toString())
      }

      var result = []
      for(var i = str.length-1; i >= 0; i--) {
        var temp = ''
        for(var j = str[i].length-1; j >= 0; j--) {
          temp = temp + str[i][j]
        }
        // console.log(temp)
        result.push(Number(temp))
      }
      return result
    }


console.log(reverseAll([123, 521, 456])) //[654,125,321]
console.log(reverseAll([897])) //[798]
console.log(reverseAll([])) //[]