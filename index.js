// 1. Mencari Keliling Persegi Panjang
// Memasukan nilai panjang, lebar
// Menghitung rumus: 2*P + 2*L
// Menampilkan Hasil

// Memasukan nilai panjang, lebar
let panjang = 150;
let lebar = 40;

// Menghitung Rumus
let hasil = 2 *panjang + 2 * lebar;

// Menampilkan
console.log( "Keliling persegi panjang adalah: " + hasil)

// 2. Luas lingkaran

// Tentukan phi dan r
let phi = 3.14;
let r = 10;

// Proses
let hasilL = phi * r * r;

// Menampilkan hasil
console.log( "Hasil nya: " + hasilL)


// 3. Luas persegi 
let Lp = 64;

let sisi = Math.sqrt(Lp);

let hasilNya =  4 * sisi;

console.log (hasilNya)

// syarat umum membuat KTP
// input
let umur = 17;

// proses / logika
if (umur >= 17){
    result = "Membuat KTP";
} else {
    result = "Belum bisa membuat KTP"
}

// output
console.log(result)


let pabp = 86;
let math = 82;
let dpk = 77;
let rata2 = (pabp + math + dpk) / 3;

if (rata2 >=80 && rata2 <=100){
        grade = "A"
}

else if (rata2 >=75 && rata2 <80){
        grade = "B"
}

else if (rata2 >=65 && rata2 <75){
        grade = "C"
}

else if (rata2 >=45 && rata2 <65){
        grade = "D"
}

else if (rata2 >=0 && rata2 <45){
        grade = "E"
}

console.log(rata2)

