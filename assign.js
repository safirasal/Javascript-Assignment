console.log(`--------------------soal no 1-----------------------`);
let panjang = 20.5
let lebar = 30
let luasTanah = 0
let hargaTanah = 1500000
let totalTanah = 0
let ppn = 0


luasTanah = panjang * lebar
totalTanah = luasTanah * hargaTanah
ppn = 15/100 * totalTanah

totalTanah += ppn
console.log(`Total bayar = ${totalTanah}`);

console.log(`--------------------soal no 2-----------------------`);
let totalBelanja = 0
let Beras = 0 
let Gula = 0
let Telur = 0
let minyakGoreng = 0
let barang = [
    { nama: "Beras" , harga: 10000, jumlah: 5 },
    { nama: "Gula" , harga: 14000, jumlah: 5 },
    { nama: "Telur" , harga: 20000, jumlah: 2 },
    { nama: "Minyak Goreng" , harga: 9000, jumlah: 10 }
]
for (let i = 0; i < barang.length; i++) {
    totalBelanja += barang[i].harga * barang[i].jumlah
}
for (let i = 0; i < barang.length; i++) {
    Beras = barang[0].harga * barang[0].jumlah
}
for (let i = 0; i < barang.length; i++) {
    Gula = barang[1].harga * barang[1].jumlah
}
for (let i = 0; i < barang.length; i++) {
    Telur = barang[2].harga * barang[2].jumlah
}
for (let i = 0; i < barang.length; i++) {
    minyakGoreng  = barang[3].harga * barang[3].jumlah
}
console.log(`Beras = ${Beras}`);
console.log(`Gula = ${Gula}`);
console.log(`Telur = ${Telur}`);
console.log(`Minyak Goreng = ${minyakGoreng}`);
console.log(`Total belanja = ${totalBelanja}`);

