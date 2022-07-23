function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const input = document.querySelector("div#controls>input");
const createBtn = document.querySelector("button[data-create]");
const destroyBtn = document.querySelector("button[data-destroy]");
const div = document.querySelector("div#boxes");
const createBoxes = (amount) => {

  let divSize = 20;
  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    divSize = divSize + 10;
    box.style.width = divSize + "px";
    box.style.height = divSize + "px";
    box.style.backgroundColor = getRandomHexColor();
    div.append(box);
  }
};
const destroyBoxes = () => {
  div.innerHTML = "";
};

createBtn.addEventListener("click", () => createBoxes(input.value));
destroyBtn.addEventListener("click", () => destroyBoxes());