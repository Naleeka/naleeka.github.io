const cName = document.querySelector("#input-fields form .name input"),
  cExpM = document.querySelector(" #cDateM"),
  cExpY = document.querySelector(" #cDateY"),
  cNumber = document.querySelector("#input-fields form .number input"),
  cvc = document.querySelector("#cvc"),
  vName = document.querySelector("#visuals .card-front .cHName"),
  vNumber = document.querySelector("#visuals .card-front .card-number"),
  vExpM = document.querySelector("#visuals .card-front .exp .month"),
  vExpY = document.querySelector("#visuals .card-front .exp .year"),
  vcvc = document.querySelector("#visuals .card-back .cvc"),
  body = document.querySelector("body"),
  confirmBtn = document.querySelector("#input-fields form .confirm-btn button");

let errorMsg = "";
let validity = {
  cName: false,
  cNumber: false,
  cvc: false,
  cExpM: false,
  cExpY: false,
};
// clearAllInputs();

confirmBtn.addEventListener("click", (e) => {
  // validity = {};
  e.preventDefault();
  checkAll();
  checkMonth();
  checkInputsValidity(validity);
});
body.addEventListener("click", () => {
  checkAllInputs();
});

cName.addEventListener("keyup", () => {
  vName.textContent = cName.value;
});
cNumber.addEventListener("keyup", () => {
  vNumber.textContent = cNumber.value;
});
cExpM.addEventListener("keyup", () => {
  vExpM.textContent = cExpM.value;
});
cExpY.addEventListener("keyup", () => {
  vExpY.textContent = cExpY.value;
});
cvc.addEventListener("keyup", () => {
  vcvc.textContent = cvc.value;
});

//  Functions
function checkMonth() {
  validity.cExpM = false;
  if (!validity.cExpM) {
    let errorMsg = "These fields can't be Empty ";
    cExpM.parentElement.querySelector("span.error-msg").textContent = errorMsg;
    if (!cExpM.parentElement.classList.contains("error")) {
      cExpM.parentElement.classList.add("error");
    }
  }
}
function clearAllInputs() {
  const inputs = document.querySelectorAll("input");
  inputs.forEach((input) => {
    input.value = "";
  });
}
function checkAllInputs() {
  if (cName.value) {
    vName.textContent = cName.value;
  }
  if (cNumber.value) {
    vNumber.textContent = cNumber.value;
  }
  if (cExpM.value) {
    vExpM.textContent = cExpM.value;
  }
  if (cExpY.value) {
    vExpY.textContent = cExpY.value;
  }
  if (cvc.value) {
    vcvc.textContent = cvc.value;
  }
}
function checkAll() {
  checkValidity(cvc);
  checkValidity(cName);
  checkValidity(cNumber);
  checkValidity(cExpM);
  checkValidity(cExpY);
}
function checkCvc(fieldValue) {
  let isnum = /^\d+$/.test(fieldValue.trim());
  if (fieldValue.length === 3 || fieldValue.length === 4) {
    if (!isnum) {
      validity.cvc = false;
      let errorMsg = "Wrong format";
      if (!cvc.parentElement.classList.contains("error")) {
        cvc.parentElement.querySelector("span.error-msg").textContent =
          errorMsg;
        cvc.parentElement.classList.add("error");
      }
    } else {
      if (cvc.parentElement.classList.contains("error")) {
        cvc.parentElement.classList.remove("error");
      }
    }
  } else {
    validity.cvc = false;
    let errorMsg = "Invalid CVC";
    if (!cvc.parentElement.classList.contains("error")) {
      cvc.parentElement.querySelector("span.error-msg").textContent = errorMsg;
      cvc.parentElement.classList.add("error");
    }
  }
}
function checkMonth() {
  if (cExpM.value.length === 0) {
    validity.cExpM = false;
    let errorMsg = "This field can't be Empty";
    if (!cExpM.parentElement.classList.contains("error")) {
      cExpM.parentElement.classList.add("error");
      cExpM.parentElement.querySelector(".error-msg").textContent = errorMsg;
    }
  } else {
    if (cExpM.value > 0 && cExpM.value <= 12) {
      validity.cExpM = true;
    } else {
      validity.cExpM = false;
      let errorMsg = "Invalid input";
      if (!cExpM.parentElement.classList.contains("error")) {
        cExpM.parentElement.classList.add("error");
        cExpM.parentElement.querySelector(".error-msg").textContent = errorMsg;
      }
    }
  }
}
function checkYear() {
  if (cExpY.value.length === 0) {
    validity.cExpY = false;
    let errorMsg = "This field can't be Empty";
    if (!cExpY.parentElement.classList.contains("error")) {
      cExpY.parentElement.classList.add("error");
      cExpY.parentElement.querySelector(".error-msg").textContent = errorMsg;
    }
  } else {
    if (cExpY.value > 0 && cExpY.value <= 99) {
      validity.cExpY = true;
    } else {
      validity.cExpY = false;
      let errorMsg = "Invalid input";
      if (!cExpY.parentElement.classList.contains("error")) {
        cExpY.parentElement.classList.add("error");
        cExpY.parentElement.querySelector(".error-msg").textContent = errorMsg;
      }
    }
  }
}
function checkCNumber() {
  let fieldValue = cNumber.value;
  const fieldParent = cNumber.parentElement;
  if (
    fieldValue
      .replace(" ", "")
      .replace(" ", "")
      .replace(" ", "")
      .replace(" ", "").length === 16
  ) {
    validity.cNumber = true;
    fieldValue = fieldValue
      .replace(" ", "")
      .replace(" ", "")
      .replace(" ", "")
      .replace(" ", "");
    let isnum = /^\d+$/.test(fieldValue.trim());
    if (!isnum) {
      validity.cNumber = false;
      errorMsg = "Wrong format, Numbers only";
      fieldParent.querySelector("span.error-msg").textContent = errorMsg;
      if (!fieldParent.classList.contains("error")) {
        fieldParent.classList.add("error");
      }
    }
  } else {
    validity.cNumber = false;
    errorMsg = "Invalid Number";
    fieldParent.querySelector("span.error-msg").textContent = errorMsg;
    if (!fieldParent.classList.contains("error")) {
      fieldParent.classList.add("error");
    }
  }
}
function checkName() {
  let fieldValue = cName.value;
  const fieldParent = cName.parentElement;
  validity.cName = true;
  if (fieldValue.trim().split(" ").length < 2) {
    validity.cName = false;
    errorMsg = "Full name required";
    fieldParent.querySelector("span.error-msg").textContent = errorMsg;
    if (!fieldParent.classList.contains("error")) {
      fieldParent.classList.add("error");
    }
  }
}
function checkValidity(field) {
  const fieldParent = field.parentElement;
  let fieldValue = "";
  if (field === cvc) {
    fieldValue = field.value;
  } else {
    fieldValue = clearMultipleSpaces(field);
  }
  // if the input field is empty, the error msg will show
  if (!fieldValue) {
    errorMsg = "This field can't be empty";
    fieldParent.querySelector("span.error-msg").textContent = errorMsg;
    if (!fieldParent.classList.contains("error")) {
      fieldParent.classList.add("error");
    }
  } else {
    if (fieldParent.classList.contains("error")) {
      fieldParent.classList.remove("error");
    }
  }

  // if cardholder's name has only first name =>
  if (fieldValue && field == cName) {
    checkName();
  }

  // card number validation
  if (fieldValue && field == cNumber) {
    checkCNumber();
  }

  // month validation
  if (fieldValue && field == cExpM) {
    checkMonth();
  }

  // year validation
  if (fieldValue && field == cExpY) {
    checkYear();
  }

  //  validate cvc
  if (fieldValue && field == cvc) {
    validity.cvc = true;
    checkCvc(field.value);
  }
}
function clearErrors() {
  const allParentsOfInputFields = document.querySelectorAll(
    "#input-fields form > div"
  );
  allParentsOfInputFields.forEach((div) => {
    if (div.classList.contains("error")) {
      div.classList.remove("error");
    }
  });
}
function clearMultipleSpaces(text) {
  let newString = text.value.replace(/ +(?= )/g, "");
  return newString;
}
function leadingZeros(input) {
  if (!isNaN(input.value) && input.value.length === 1) {
    input.value = "00" + input.value;
  }
  if (!isNaN(input.value) && input.value.length === 2) {
    input.value = "0" + input.value;
  }
}

function leadingZerosDate(input) {
  if (!isNaN(input.value) && input.value.length === 1) {
    input.value = "0" + input.value;
  }
}
function checkInputsValidity(dict) {
  if (dict.cName && dict.cNumber && dict.cExpM && dict.cExpY && dict.cvc) {
    body.classList.add("successful");
  } else {
    if (body.classList.contains("successful")) {
      body.classList.remove("successful");
    }
    if (!body.classList.contains("pending")) {
      body.classList.add("pending");
    }
  }
}
