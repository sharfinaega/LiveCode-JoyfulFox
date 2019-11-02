/**
 * ============
 * Lucky Number
 * ============
 * 
 * [Instruction]
 * 1. Buat sebuah program yang akan menampilkan deret angka mulai dari 1 hingga angka yang diberikan
 * 
 * 2. Ketika angka itu menyentuh 2 digit, maka hanya menampilkan angka satuannya, angka puluhannya tidak diprint
 *    Contoh:
 *    angka 1-15: 123456789012345
 *    angka 1-21: 123456789012345678901
 * 
 * 3. Jika angka tersebut `habis dibagi 2 DAN habis dibagi 3`, maka angka tersebut diganti menjadi asterisk ('*')
 *    Contoh:
 *    angka 1-12: 12345*78901*345
 *    Penjelasan:
 *    asterisk jatuh pada angka 6 dan 12 karena angka tersebut habis dibagi 2 DAN 3,
 *    maka angka tersebut diganti dengan asterisk.
 */

var size = 20 // 12345*78901*34567*90

for(var i = 1; i <= 20; i++) {
    console.log(i);
}

// console.log(temp);
    // for(var i = 1; i < 10; i++) {
    //     console.log(i);}
    // for(var j = 0; j < 10; j++) {
    //     console.log(j);
    //     }
    // for(var j = 0; j <= 1; j++) {
    //     console.log(j);
    //     }

for(var i = 1; i <= size; i++) {
        console.log(i % 10);
}

var temp = '';
for(var i = 0; i <= size; i++) {
    temp = temp + (i % 10);
}
console.log(temp);

var temp = '';
var angka = 21;
for(var i = 1; i <= angka; i++) {
    if(i % 2 == 0 && i % 3 == 0) {
        temp = temp + '*'
    }
    else{
    temp = temp + (i % 10);
}
}
console.log(temp);

var temp = '';
var angka = 21;
for(var i = 1; i <= angka; i++) {
    if(i % 2 == 0 && i % 3 == 0) {
        console.log('*');
    }
    else{
        console.log(i % 10);
}
}
