const labels = document.querySelectorAll("label"),
  container = document.querySelector(".container");
btn = document.querySelector(".submit-div button");

labels.forEach((label) => {
  label.addEventListener("click", () => {
    for (let i = 0; i < labels.length; i++) {
      if (labels[i].classList.contains("active")) {
        labels[i].classList.remove("active");
      }
    }
    label.classList.add("active");
  });
});
btn.addEventListener("click", () => {
  for (let i = 0; i < labels.length; i++) {
    if (labels[i].classList.contains("active")) {
      const ratedStars = labels[i].textContent;
      document.querySelector(".back .rate span").textContent = ratedStars;
      container.classList.add("success");
    }
  }
});
