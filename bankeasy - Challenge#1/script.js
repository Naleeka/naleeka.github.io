const nav = document.querySelector("#header nav");
const menuIcon = document.querySelector("#header .menu");

menuIcon.addEventListener("click", () => {
  nav.classList.toggle("active");
});
