const output = document.querySelector("span#name-output");
const input = document.querySelector("input#name-input");


output.textContent = "Anonymous";
input.addEventListener("input", (event) => {
    if (!event.currentTarget.value) output.textContent = "Anonymous";
          
      else output.textContent = `${event.currentTarget.value}`;
})

