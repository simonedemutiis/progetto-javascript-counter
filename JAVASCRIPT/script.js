let incremento = document.getElementById("incremento");
let decremento = document.getElementById("decremento");

let displayCount = document.getElementById("numero");
let clickerCount = 0;

incremento.addEventListener("click", function () {
  clickerCount += 1;
  displayCount.innerHTML = clickerCount;
});

decremento.addEventListener("click", function () {
  clickerCount -= 1;
  displayCount.innerHTML = clickerCount;
});
