const input = document.querySelector("#validation-input");
const dataLength = input.getAttribute("data-length");
input.addEventListener("blur", () => {
    if (input.value.length == dataLength) {
        input.setAttribute("class", "valid")
     } else {
        input.classList.add('invalid', 'valid');
     }
  });