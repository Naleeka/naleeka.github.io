const chartArray = [
  {
    day: "mon",
    amount: 17.45,
  },
  {
    day: "tue",
    amount: 34.91,
  },
  {
    day: "wed",
    amount: 52.36,
  },
  {
    day: "thu",
    amount: 31.07,
  },
  {
    day: "fri",
    amount: 23.39,
  },
  {
    day: "sat",
    amount: 43.28,
  },
  {
    day: "sun",
    amount: 25.48,
  },
];
var allAmounts = [];

const chart = document.querySelector(".bars");
let stat = document.querySelector(".bottom-content .left .val h2 span"),
  percentage = document.querySelector(
    ".bottom-content .right .percentage span"
  );

window.addEventListener("load", () => {
  chart.classList.add("loaded");
  startCountP(percentage);
  startCountM(stat);
  const maxA = checkMaxAmount();
  for (let i = 0; i < chartArray.length; i++) {
    const day = chartArray[i].day;
    const amount = chartArray[i].amount;
    if (amount === maxA) {
      chart.innerHTML += `
    <div class="${day}">
    <span class="tooltip">$${amount}</span>
    <span class="pointer"></span>
      <span style="height: calc(${amount}px * 2.8); background:hsl(186, 34%, 60%) ; transition: height 0.3s ease;" class="bar bar-${i}"></span>
      <span class="day">${day}</span>
    </div>
    `;
    } else {
      chart.innerHTML += `
      <div class="${day}">
      <span class="tooltip">$${amount}</span>
      <span class="pointer"></span>
        <span style="height: calc(${amount}px * 2.8); transition: height 0.3s ease;" class="bar bar-${i}"></span>
        <span class="day">${day}</span>
      </div>
      `;
    }
  }
});
function checkMaxAmount() {
  for (let i = 0; i < chartArray.length; i++) {
    const amount = chartArray[i].amount;
    allAmounts.push(amount);
  }
  return Math.max(...allAmounts);
}
function startCountM(el) {
  let max = parseFloat(el.dataset.max);
  let count = setInterval(() => {
    el.textContent++;
    if (el.textContent >= max) {
      clearInterval(count);
      el.textContent = max;
    }
  }, 4);
}

function startCountP(el) {
  let max = parseFloat(el.dataset.max);
  let count = setInterval(() => {
    el.textContent++;
    if (el.textContent >= max) {
      clearInterval(count);
      el.textContent = max;
    }
  }, 1000);
}
