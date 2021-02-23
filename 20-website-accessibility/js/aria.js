var increment = document.querySelector("#inc");
var decrement = document.querySelector("#dec");
var counter = document.querySelector("#count");

// Set initial count to 0
var count = 0;

increment.addEventListener("click", add);
decrement.addEventListener("click", subtract);

function add() {
  count = count + 5;
  setCounter();
}

function subtract() {
  if (count < 5) {
    return;
  }

  count = count - 5;
  setCounter();
}

function setCounter() {
  counter.innerHTML = count;
}

setCounter();
