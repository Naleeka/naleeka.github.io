const header = document.querySelector(".header"),
  main = document.querySelector("main"),
  closeBtn = document.querySelector(".close-btn"),
  menuBtn = document.querySelector(".menu-btn"),
  checkBoxes = document.querySelectorAll(
    ".nav > ul > li > input[type='checkbox']"
  );

window.addEventListener("scroll", () => {
  header.classList.toggle("sticks", window.scrollY > 1);
});

menuBtn.addEventListener("click", () => {
  main.classList.add("active");
  if (!header.classList.contains("sticks")) {
    header.classList.add("sticks");
  }
});
closeBtn.addEventListener("click", () => {
  main.classList.remove("active");
  header.classList.toggle("sticks", window.scrollY > 1);
});

checkBoxes.forEach((checkBox) => {
  checkBox.addEventListener("click", () => {
    console.log(checkBox.checked);
  });
});
