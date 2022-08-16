const menuBtn = document.querySelector("#header .menu ");
const bodyContent = document.querySelector("#content");

menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("active");
});

bodyContent.addEventListener("click", () => {
  hideHeads();
});

// function
function onlyOne(checkbox) {
  var checkboxes = document.getElementsByName("head-titles");
  checkboxes.forEach((item) => {
    if (item !== checkbox) item.checked = false;
  });
}
function hideHeads() {
  var checkboxes = document.getElementsByName("head-titles");
  checkboxes.forEach((item) => {
    if (item.checked) item.checked = false;
  });
}
