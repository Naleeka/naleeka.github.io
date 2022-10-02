const content = document.querySelector(".contents ul"),
  searchBar = document.querySelector("#searchBar"),
  clearBtn = document.querySelector("#clear"),
  headBtns = document.querySelectorAll("input[type='radio']");

function loadItems(array) {
  content.innerHTML = "";
  for (let i = 0; i < array.length; i++) {
    content.innerHTML += `
    <li class="content">
      <div class="bnum">${array[i].brCode}</div>
      <div class="bname">${array[i].name}</div>
      <div class="prov">${array[i].prov}</div>
    </li>
    `;
  }
}

clearBtn.addEventListener("click", () => {
  if (searchBar.value) {
    searchBar.value = "";
  }
});

window.addEventListener("DOMContentLoaded", () => {
  loadItems(array);

  headBtns.forEach((btn) => {
    btn.addEventListener("input", () => {
      if (btn.getAttribute("id") === "name") {
        loadItems(
          array.sort(function (a, b) {
            if (a.name < b.name) {
              return -1;
            }
            if (a.name > b.name) {
              return 1;
            }
            return 0;
          })
        );
      } else if (btn.getAttribute("id") === "code") {
        loadItems(
          array.sort(function (a, b) {
            if (a.brCode < b.brCode) {
              return -1;
            }
            if (a.brCode > b.brCode) {
              return 1;
            }
            return 0;
          })
        );
      } else {
        loadItems(
          array.sort(function (a, b) {
            if (a.prov < b.prov) {
              return -1;
            }
            if (a.prov > b.prov) {
              return 1;
            }
            return 0;
          })
        );
      }
    });
  });
});
