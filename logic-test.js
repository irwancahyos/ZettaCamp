// Expected Result = 7
// Direction : Find median of this array
const input = [8, 7, 7, 9, 5, 4, 2, 9];

function result(input) {
  // Mengurutkan array secara ascending
  input.sort((a, b) => {
    return a - b;
  });

  // menghitung panjang dari data/ array
  let len = input.length;
  // membuat rumus bantuan untuk mencari median
  let mid = Math.floor(len / 2);
  // pengkondisian, apabila jumlah array genap maka kondisi pertama akan di jalankan dan apabilia data/ jumlah array ganjil maka kondisi kedua akan di esekusi
  len % 2 == 0 ? (len = (input[mid - 1] + input[mid]) / 2) : (len = input[mid]);
  // mengembalikan variabel len yang sudah di isi ulang isinya di pengkondisian sesuai dengan hasil / median yang di cari
  return len;
}

console.log(result(input));
