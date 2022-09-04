const checkBox = document.querySelector("#bill"),
  packageName = document.getElementById("packName"),
  packagePrice = document.querySelector("#packPrice span"),
  slider = document.querySelector("input[type='range']");

checkBox.addEventListener("change", () => {
  if (checkBox.checked) {
    checkBox.parentElement.querySelector(".year").classList.add("active");
    checkBox.parentElement.querySelector(".month").classList.remove("active");
  } else {
    checkBox.parentElement.querySelector(".year").classList.remove("active");
    checkBox.parentElement.querySelector(".month").classList.add("active");
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
