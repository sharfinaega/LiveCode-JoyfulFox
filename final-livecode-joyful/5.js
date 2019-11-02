/**
 * =========================
 * Mengumpulkan poin belanja
 * =========================
 * 
 * Ibu sedang mengumpulan poin belanja dan kita diminta membantunya.
 * Dari list barang yang ingin ibu beli, yang sudah ibu urutkan dari
 * pentingnya barang itu, kumpulkanlah sebanyak mungkin poin belanja
 * dengan modal yang diberikan.
 * 
 * Ibu mau kita membeli barang sesuai dari list ibu. 
 * Jika sudah sampai barang terakhir di list dan 
 * kita masih ada sisa uang, maka kita mulai lagi membeli
 * dari barang pertama di list.
 * 
 * Daftar Harga Barang:
 * | Nama        | Harga        | Poin  |
 * | ----------- | ------------ | ----- |
 * | Shampoo     | Rp    20.000 |  100  |
 * | Sabun       | Rp    10.000 |   90  |
 * | Kompor      | Rp 1.000.000 |   65  |
 * | Bantal      | Rp    25.000 |   20  |
 * | Daging Sapi | Rp   300.000 |   15  |
 * 
 * Jadi saat punya uang Rp. 40.000,-
 * Kita harusnya membeli shampoo 1 dan sabun 2 (bukan shampoo 2)
 * karena kita beli dulu shampoo, lalu sabun, lalu tidak cukup uang untuk
 * barang berikut di list sampai Daging Sapi, baru kita mulai lagi
 * dari beli shampoo
 *
 * Dan saat punya uang Rp. 55.000,-
 * Kita harusnya membeli shampoo 1, sabun 1, dan bantal 1
 */

function belanja(modal) {
  var data = [
    {
      name: 'shampoo',
      price: 20000,
      poin: 100
    },
    {
      name: 'sabun',
      price: 10000,
      poin: 90
    },
    {
    name: 'kompor',
    price: 1000000,
    poin: 65
    },
    {
      name: 'bantal',
      price: 25000,
      poin: 20
    },
    {
      name: 'daging sapi',
      price: 300000,
      poin: 15
    }
  ]

// var inLoop = true;
// var i = 0;
// var beli = {};
// var kembalian = 0;
// var poin = 0;

// while(inLoop === true) {
//   kembalian = modal - data[i].price;
//   if(kembalian >= 0) {
//     beli[data[i].name] = beli[data[i].name] + 1
//   }
//     console.log(data[i].name);
//     if(i === data.length-1) {
//       inLoop = false;
//     }
//     i++;
// }
// return true;


  var beli = {
    belanja: {},
    change: modal,
    totalPoin: 0
  }
  var masihBeli = true
  while(beli.change >= 0 && masihBeli) {
    masihBeli = false
    for(var i = 0; i < data.length; i++) {
      if(beli.change >= data[i].price) {
        beli.change = beli.change - data[i].price
        beli.totalPoin = beli.totalPoin + data[i].poin
        if(beli.belanja[data[i].name] === undefined) {
          beli.belanja[data[i].name] = 1
        }
      else {
        beli.belanja[data[i].name] = beli.belanja[data[i].name] + 1
      }
      masihBeli = true
    }
  }
  }
  if(beli.change === modal) {
    beli.belanja = 'Kosong'
  }
  else {
    beli.belanja = beli.belanja
  }
  return beli
}

console.log(belanja(100000))
// { belanja: { Shampoo: 2, Sabun: 3, Bantal: 1 },
//   kembalian: 5000,
//   totalPoin: 490 }

console.log(belanja(1000000))
// // { belanja: { Shampoo: 7, Sabun: 8, Bantal: 7, 'Daging Sapi': 2 },
// //   kembalian: 5000,
// //   totalPoin: 1590 }

console.log(belanja(1150500))
// // { belanja: { Shampoo: 3, Sabun: 4, Kompor: 1, Bantal: 2 },
// //   kembalian: 500,
// //   totalPoin: 765 }

console.log(belanja(0))
// {
//   belanja: 'Kosong',
//   kembalian: 0,
//   totalPoin: 0
// }


