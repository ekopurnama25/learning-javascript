//Pengulangan dan pengkondisian bersarang

//membuat bolak balik atas bawah
var s = "";
for (var i = 1; i <= 10; i++) {
  for (var j = 1; j <= 10 - i; j++) {
    s += " ";
  }
  for (var x = 1; x < 2 * i; x++) {
    s += "*";
  }
  s += "\n";
}
for (var i = 10; i >= 1; i--) {
  for (var j = 1; j <= 10 - i; j++) {
    s += " ";
  }
  for (var x = 1; x < 2 * i; x++) {
    s += "*";
  }
  s += "\n";
}

//membuat segitiga
// var s = "";
// for (var i = 1; i <= 10; i++) {
//   for (var j = 1; j <= 10 - i; j++) {
//     s += " ";
//   }
//   for (var x = 1; x < 2 * i; x++) {
//     s += "*";
//   }
//   s += "\n";
// }
//ketupat
// var s = "";
// for (var i = 0; i < 15; i++) {
//   for (var j = 0; j <= i; j++) {
//     s += "*";
//   }
//   s += "\n";
// }

//biasa
// var s = "";
// for (var i = 0; i < 7; i++) {
//   for (var j = 0; j < 10; j++) {
//     s += "*";
//   }
//   s += "\n";
// }

console.log(s);
