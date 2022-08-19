const navs = document.querySelectorAll(".globes-content nav label");

navs.forEach((nav) => {
  nav.addEventListener("click", () => {
    for (let i = 0; i < navs.length; i++) {
      if (navs[i].classList.contains("nav-active")) {
        navs[i].classList.remove("nav-active");
      }
    }
    nav.classList.add("nav-active");
  });
});
