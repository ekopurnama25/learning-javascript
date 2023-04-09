var noAngkot = 1;
var jmlAngkot = 10;
var angkotBeroprasi = 6;

for (noAngkot = noAngkot; noAngkot <= jmlAngkot; noAngkot++) {
  if (noAngkot <= angkotBeroprasi) {
    console.log("Angkot No. " + noAngkot + " Beroprasi dengan baik");
  } else {
    console.log("Angkot No. " + noAngkot + " Tidak Beroprasi dengan baik");
  }
}
