const subBtn = document.getElementById("submit-btn"),
  qrCode = document.getElementById("qrCode"),
  textBox = document.getElementById("textBox"),
  mainEl = document.querySelector("main");

let url = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=";

window.addEventListener("DOMContentLoaded", () => {
  if (mainEl.classList.contains("load")) {
    mainEl.classList.remove("load");
  }
});

subBtn.addEventListener("click", () => {
  if (textBox.value) {
    mainEl.classList.add("load");
    qrCode.src = url + textBox.value.replace(" ", "") + "&size=200x200";
  }
});
textBox.addEventListener("input", () => {
  if (!textBox.value) {
    qrCode.src = "";
    if (mainEl.classList.contains("load")) {
      mainEl.classList.remove("load");
    }
  }
});
textBox.addEventListener("keyup", (e) => {
  if (textBox.value) {
    if (e.key == "Enter") {
      mainEl.classList.add("load");
      qrCode.src = url + textBox.value.replace(" ", "") + "&size=200x200";
    }
  }
});
