const btn = document.querySelector("button.change-color");
const bgColor = document.querySelector("div.widget>p>span.color");
const body = document.querySelector("body");


function getRandomHexColor() {
return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

btn.addEventListener("click", e => {

  body.style.backgroundColor = `${getRandomHexColor()}`;
  bgColor.textContent = `${getRandomHexColor()}`;
  
});
