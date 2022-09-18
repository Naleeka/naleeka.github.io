const toggleBtn = document.getElementById("mode"),
  main = document.querySelector("main"),
  body = document.querySelector("body"),
  bgPtrn = document.querySelector(".bg-ptrn"),
  socialTiles = document.querySelectorAll(".socials div");

toggleBtn.addEventListener("change", () => {
  if (toggleBtn.checked == true) {
    socialTiles.forEach((tile) => {
      tile.style.background = "var(--night-mode-bg)";
    });
    body.classList.add("dark");
    main.style.color = "var(--color-dark)";
  } else {
    socialTiles.forEach((tile) => {
      tile.style.background = "var(--day-mode-bg)";
    });
    body.classList.remove("dark");
    main.style.color = "var(--color-light)";
  }
});
