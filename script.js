let text = document.getElementById("textArea");
let count = document.getElementById("letter-count")
let wordCounter = 0;

window.onload = function() {
  text.value = "";
}

textArea.addEventListener("input", () => {
  count.textContent = textArea.value.length;
  if (count.textContent == 250) {
    text.classList.add("red");
    counter.classList.add("red-counter");
  }

  if (count.textContent < 250) {
    text.classList.remove("red");
    counter.classList.remove("red-counter");
  }

});

