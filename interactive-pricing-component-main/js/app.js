const checkBox = document.querySelector("#bill"),
  packageName = document.getElementById("packName"),
  monthEl = document.querySelector(".month"),
  yearEl = document.querySelector(".year"),
  packagePrice = document.querySelector("#packPrice span"),
  slider = document.querySelector("input[type='range']");

checkBox.addEventListener("change", () => {
  if (checkBox.checked) {
    yearEl.classList.add("active");
    monthEl.classList.remove("active");
  } else {
    yearEl.classList.remove("active");
    monthEl.classList.add("active");
  }
  changeVals(slider.value, checkBox.checked, list);
});
window.addEventListener("DOMContentLoaded", () => {
  slider.value = 0;
  checkBox.checked = false;
  changeVals(slider.value, checkBox.checked, list);
});
slider.addEventListener("input", () => {
  changeVals(slider.value, checkBox.checked, list);
});

// Functions

function changeVals(value, timeP, array) {
  let Pprice = array[value].price;
  let Pname = array[value].name;
  const discount = 25 / 100;
  if (timeP) {
    Pprice = Pprice * 12 * discount;
  }
  packagePrice.textContent = Pprice;
  packageName.textContent = Pname;
}
