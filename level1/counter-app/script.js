let count = 0;

const counter = document.getElementById("counter");
const increaseBtn = document.getElementById("increase");
const decreaseBtn = document.getElementById("decrease");
const resetBtn = document.getElementById("reset");

increaseBtn.addEventListener("click", function () {
  count++;
  decreaseBtn.disabled = false;
  updateCounter();
});

decreaseBtn.addEventListener("click", function () {
  count === 0 ? (decreaseBtn.disabled = true) : count--;
  updateCounter();
});

resetBtn.addEventListener("click", function () {
  count = 0;
  decreaseBtn.disabled = true;
  updateCounter();
});

function updateCounter() {
  counter.textContent = count;

  // Change color based on value
  if (count === 0) {
    counter.style.color = "black";
  } else {
    counter.style.color = "green";
  }
}
