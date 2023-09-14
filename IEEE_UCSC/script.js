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

window.onscroll = () => {
  pages.forEach((page) => {
    let top = window.scrollY;
    let offset = page.offsetTop;
    let height = page.offsetHeight;
    let id = page.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navs.forEach((nav) => {
        nav.classList.remove("active");
        document
          .querySelector(".nav[class  *=' + id + ']")
          .parentElement.classList.add("active");
      });
    }
  });
};

const body = document.querySelector("body");

window.addEventListener("load", () => {
  if (body.classList.contains("loading")) {
    body.classList.remove("loading");
  }
});
