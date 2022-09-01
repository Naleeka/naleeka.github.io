const navs = document.querySelectorAll(".navs label"),
  cardBtns = document.querySelectorAll(".cards .card .content .head button"),
  profileEl = document.querySelector(".profile");
cardsContainer = document.querySelector(".cards");

const dailyBtn = document.getElementById("daily");
const weeklyBtn = document.getElementById("weekly");
const monthlyBtn = document.getElementById("monthly");

const url = "../data.json";

window.addEventListener("load", reqDataDaily);
navs.forEach((nav) => {
  nav.addEventListener("click", () => {
    for (let i = 0; i < navs.length; i++) {
      if (navs[i].classList.contains("active")) {
        navs[i].classList.remove("active");
      }

      nav.classList.add("active");
    }
  });
});
profileEl.addEventListener("click", () => {
  profileEl.classList.toggle("active");
});
dailyBtn.addEventListener("click", reqDataDaily);
weeklyBtn.addEventListener("click", reqDataWeekly);
monthlyBtn.addEventListener("click", reqDataMonthly);
cardBtns.forEach((cardBtn) => {
  cardBtn.addEventListener("click", () => {
    if (
      !cardBtn.parentElement.parentElement.parentElement.classList.contains(
        "view"
      )
    ) {
      for (let i = 0; i < cardBtns.length; i++) {
        if (
          cardBtns[
            i
          ].parentElement.parentElement.parentElement.classList.contains("view")
        ) {
          cardBtns[
            i
          ].parentElement.parentElement.parentElement.classList.remove("view");
        }
      }
      cardBtn.parentElement.parentElement.parentElement.classList.toggle(
        "view"
      );
    } else {
      cardBtn.parentElement.parentElement.parentElement.classList.remove(
        "view"
      );
    }
  });
});

function reqDataDaily() {
  fetch(url)
    .then((res) => res.json())
    .then((data) => adderDaily(data));
}
function reqDataWeekly() {
  fetch(url)
    .then((res) => res.json())
    .then((data) => adderWeekly(data));
}
function reqDataMonthly() {
  fetch(url)
    .then((res) => res.json())
    .then((data) => adderMonthly(data));
}

function adderMonthly(data) {
  data.forEach((elm, index) => {
    const className = ".card-" + (index + 1);
    const title = cardsContainer.querySelector(className + " .cContent .title");
    const totHours = cardsContainer.querySelector(
      className + " .cContent .total"
    );
    const curHours = cardsContainer.querySelector(
      className + " .content h1 span "
    );
    const prevHours = cardsContainer.querySelector(
      className + " .content .last .time "
    );
    const time = cardsContainer.querySelector(
      className + " .content .last .item"
    );

    title.textContent = elm.title;
    curHours.textContent = elm.timeframes.monthly.current;
    prevHours.textContent = elm.timeframes.monthly.previous;
    time.textContent = "day";
  });
}

function adderWeekly(data) {
  data.forEach((elm, index) => {
    const className = ".card-" + (index + 1);
    const title = cardsContainer.querySelector(className + " .cContent .title");
    const totHours = cardsContainer.querySelector(
      className + " .cContent .total"
    );
    const curHours = cardsContainer.querySelector(
      className + " .content h1 span "
    );
    const prevHours = cardsContainer.querySelector(
      className + " .content .last .time "
    );
    const time = cardsContainer.querySelector(
      className + " .content .last .item"
    );

    title.textContent = elm.title;
    curHours.textContent = elm.timeframes.weekly.current;
    prevHours.textContent = elm.timeframes.weekly.previous;
    time.textContent = "week";
  });
}

function adderDaily(data) {
  data.forEach((elm, index) => {
    const className = ".card-" + (index + 1);
    const title = cardsContainer.querySelector(className + " .cContent .title");
    const totHours = cardsContainer.querySelector(
      className + " .cContent .total"
    );
    const curHours = cardsContainer.querySelector(
      className + " .content h1 span "
    );
    const prevHours = cardsContainer.querySelector(
      className + " .content .last .time "
    );
    const time = cardsContainer.querySelector(
      className + " .content .last .item"
    );

    title.textContent = elm.title;
    totHours.textContent =
      elm.timeframes.monthly.previous + elm.timeframes.monthly.current;
    curHours.textContent = elm.timeframes.daily.current;
    prevHours.textContent = elm.timeframes.daily.previous;
    time.textContent = "day";
  });
}
