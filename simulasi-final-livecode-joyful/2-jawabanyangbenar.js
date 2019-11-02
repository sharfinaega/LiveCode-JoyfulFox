/*
  =====
  Top 3
  =====
  Seorang user spotify ingin mengetahui lagu apa saja yang dia putar
  selama seminggu terakhir diurutkan dari paling jarang diputar

  Tugas kamu adalah membuat function sortPlaylist yang menerima inputan
  sebuah array satu dimensi berisi data lagu.

  Output dari function tersebut adalah array 2 dimensi yang menampilkan
  judul lagu terurut dari jumlah pemutaran yang paling sedikit.

  INPUT:
    ['Senorita', 'Senorita', 'I Love You 3000', 'A Whole New World', 'Senorita', 'I Love You 3000', 'Senorita']

  OUTPUT:
    [ 'A Whole New World', 'I Love You 3000', 'Senorita' ]

  RULES:
   - DILARANG MENGGUNAKAN BUILT IN FUNCTION APAPUN KECUALI .push()
*/

function sortPlaylist(playlist) {
  
  
    var jml_lagu = []
    for(var i = 0; i < playlist.length; i++) {
      var count = 0
      for(var j = 0; j < playlist.length; j++) {
        if(playlist[i] === playlist[j]) {
          count = count + 1
        }
      }
      // if(count < playlist.length) {
      //   hasil = count
      // }
      // count = 0
      jml_lagu.push(count)
      // console.log(temp[i] + ' muncul sebanyak '+ hasil+ 'kali')
      // console.log(jml_lagu)
    }
  
    for(var i = 0; i < jml_lagu.length; i++) {
      for(var j = i+1; j < jml_lagu.length; j++) {
        if(jml_lagu[i] > jml_lagu[j]) {
          var temp2 = jml_lagu[j]
          jml_lagu[j] = jml_lagu[i]
          jml_lagu[i] = temp2
          var temp3 = playlist[i]
          playlist[i] = playlist[j]
          playlist[j] = temp3
        }
      }
    }
    // console.log(jml_lagu)
   
    var result = []
    for(var i = 0; i < playlist.length; i++) {
      for(var j = 0; j <= result.length; j++) {
        if(result[j] === undefined) {
          result.push(playlist[i])
          break;
        }
        else if(playlist[i] === result[j]) {
          break;
        }
      }
      // console.log(result)
    }
    return result
  }
  
  console.log(sortPlaylist(['Senorita', 'Senorita', 'I Love You 3000', 'A Whole New World', 'Senorita', 'I Love You 3000', 'Senorita']));
  // [ 'A Whole New World', 'I Love You 3000', 'Senorita' ]
  
  console.log(sortPlaylist(['Donna Donna', 'Top of The World', 'Donna Donna', 'Top of The World', 'Top of The World', 'Location Unknown']));
  // [ 'Location Unknown', 'Donna Donna', 'Top of The World' ]
  
  console.log(sortPlaylist([])); // []
  