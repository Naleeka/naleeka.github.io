const clear = document.querySelector(".clear i"),
  main = document.querySelector("main"),
  inputEl = document.querySelector("#search-bar"),
  speaker = document.querySelector(".audio i");

clear.addEventListener("click", () => {
  clear.parentNode.parentNode.querySelector("input").value = "";
});

let url = "https://api.dictionaryapi.dev/api/v2/entries/en/";

inputEl.addEventListener("keyup", (e) => {
  if (e.key === "Enter" && inputEl.value) {
    const word = inputEl.value;
    console.log(fetch(url + word));
    main.classList.add("searched");
    document.getElementById("word").textContent = word;
    const audio = new Audio(
      `https://api.dictionaryapi.dev/media/pronunciations/en/${word}-uk.mp3`
    );
  } else {
    if (main.classList.contains("searched")) {
      main.classList.remove("searched");
    }
  }
});
speaker.addEventListener("click", () => {
  audio.play();
});
