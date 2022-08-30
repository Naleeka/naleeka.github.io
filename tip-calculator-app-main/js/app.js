// *Formula =>
// * Tip/ per person = (Bill * tip %) / # of people

const billEl = document.querySelector(".inputs .bill input"),
  resetBtn = document.querySelector(".reset-btn"),
  outTipA = document.querySelector(".output .tipA .val span"),
  outTotA = document.querySelector(".output .totalA .val span"),
  allInpts = document.querySelectorAll("input[type = 'radio' ]"),
  custmInput = document.querySelector("#C-el"),
  numOfPeople = document.querySelector(".inputs .pNum input");

let tip = 0;

window.addEventListener("load", () => {
  clearInpts();
});
resetBtn.addEventListener("click", () => {
  resetBtn.disabled = true;
  resetBtn.style.background = "var(--dark-grayish-cyan)";
  resetBtn.style.color = "var(--very-dark-cyan)";
  resetBtn.style.cursor = "not-allowed";
  allInpts.forEach((radio) => {
    radio.checked = false;
  });
  clearInpts();
  clearOuts();
});
billEl.addEventListener("input", () => {
  checkInputs();
});
custmInput.addEventListener("input", () => {
  allInpts.forEach((radio) => {
    radio.checked = false;
  });
  tip = custmInput.value;
  checkInputs();
});
numOfPeople.addEventListener("input", () => {
  checkInputs();
});
allInpts.forEach((radio) => {
  radio.addEventListener("change", () => {
    if (radio.checked) {
      const className = "." + radio.attributes.id.nodeValue;
      tip = document
        .querySelector(".tVal")
        .querySelector(className)
        .querySelector("span").textContent;
    }
    checkInputs();
  });
});

// *functions
function clearInpts() {
  custmInput.value = "";
  billEl.value = "";
  numOfPeople.value = "";
  billEl.parentElement.querySelector(".error-msg").style.display = "none";
  numOfPeople.parentElement.querySelector(".error-msg").style.display = "none";
}
function clearOuts() {
  outTotA.textContent = "0.00";
  outTipA.textContent = "0.00";
}
function checkInputs() {
  if (!billEl.value || billEl.value == 0) {
    billEl.parentElement.querySelector(".error-msg").style.display = "block";
  } else {
    billEl.parentElement.querySelector(".error-msg").style.display = "none";
  }
  if (!numOfPeople.value || numOfPeople.value == 0) {
    numOfPeople.parentElement.querySelector(".error-msg").style.display =
      "block";
  } else {
    numOfPeople.parentElement.querySelector(".error-msg").style.display =
      "none";
  }
  if (numOfPeople.value > 0 && billEl.value > 0) {
    outTipA.textContent = (
      (parseFloat(billEl.value) * (tip / 100)) /
      parseInt(numOfPeople.value)
    ).toFixed(2);
    outTotA.textContent = (
      (parseFloat(billEl.value) * (tip / 100) + parseFloat(billEl.value)) /
      parseInt(numOfPeople.value)
    ).toFixed(2);
    resetBtn.disabled = false;
    resetBtn.style.background = "var(--strong-cyan)";
    resetBtn.style.color = "var(--very-dark-cyan)";
    resetBtn.style.cursor = "pointer";
  } else {
    clearOuts();
  }
}
