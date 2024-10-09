const number = document.getElementById("number");
const decrease_btn = document.getElementById("decrease");
const reset_btn = document.getElementById("reset");
const increase_btn = document.getElementById("increase");

let count = 0;

decrease_btn.addEventListener("click", () => {
  count--;
  number.innerText = count;
  numberColor();
});

increase_btn.addEventListener("click", () => {
  count++;
  number.innerText = count;
  numberColor();
});

reset_btn.addEventListener("click", () => {
  count = 0;
  number.innerText = count;
  number.style.color = "Black";
});

function numberColor() {
  if (count < 0) {
    number.style.color = "Red";
  } else if (count > 0) {
    number.style.color = "Green";
  } else number.style.color = "Black";
}
