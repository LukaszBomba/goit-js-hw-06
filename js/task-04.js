

let counterValue = 0;

const btnMinus = document.querySelector(`button[data-action="decrement"]`);
const btnPlus = document.querySelector(`button[data-action="increment"]`);
const counter = document.querySelector("#value");

counter.textContent = `${counterValue}`;

const counterPlus = () => {
      counter.textContent = `${counterValue += 1}`;};
const counterMinus = () => {
      counter.textContent = `${counterValue -= 1}`;};

btnMinus.addEventListener("click", counterMinus);
btnPlus.addEventListener("click", counterPlus);

