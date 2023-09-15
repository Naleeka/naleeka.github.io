const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
    } else {
      entry.target.classList.remove("active");
    }
  });
});

const aniations = document.querySelectorAll(".anima");
aniations.forEach((animattion) => observer.observe(animattion));

// * Nav Bar active state change
const pages = document.querySelectorAll(".page");
const navs = document.querySelectorAll(".nav a");

const body = document.querySelector("body");

window.addEventListener("load", () => {
  if (body.classList.contains("loading")) {
    body.classList.remove("loading");
  }
});
