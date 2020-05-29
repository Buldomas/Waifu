

var monbouton = document.getElementById("btburger");
monbouton.addEventListener("click", function () {
  basculeMenu();
});
var monsand = document.getElementById("menuBurger");
monsand.addEventListener("click", function () {
  basculeMenu();
});
function basculeMenu() {
  var monmenuamoa = document.getElementById("menuBurger");
  var monicone = document.getElementById("burger");
  if (monmenuamoa.style.left == "100%") {
    monmenuamoa.style.display = "flex";
    monmenuamoa.style.left = "0px";
    monicone.style.left = "150%";
    monicone.style.display = "none";
  } else {
    monmenuamoa.style.left = "100%";
    monmenuamoa.style.display = "none";
    monicone.style.display = "flex";
    monicone.style.left = "0px";
  }
  return;
}