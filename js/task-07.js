const size = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

const sizeChange = () => { 
    let slider = size.value + "px";
    text.style.fontSize = slider;

};

size.addEventListener("input",sizeChange);