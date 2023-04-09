var item = prompt(
  "masukan nama makanan / minum : \n (cth: nasi, daging, susu, hamburger, softdrink"
);

switch (item) {
  case "nasi":
  case "daging":
  case "susu":
    alert("makanan / minuman SEHAT!");
    break;
  case "hamburger":
  case "softdrink":
    alert("makanan / minuman Tidak SEHAT!");
    break;
  default:
    alert("Makanan / Minuman Tidak Ada!");
    break;
}
