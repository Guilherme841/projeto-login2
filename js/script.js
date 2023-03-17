const inputs = document.querySelectorAll(".inputs");
const arrInputs = Array.from(inputs);
console.log(arrInputs);

for (var elemento of arrInputs) {
  elemento.addEventListener("click", function () {
    for (i of arrInputs) {
      i.classList.remove("focado");
    }
    this.classList.add("focado");
  });
}

document.addEventListener("click", function (event) {
  if (!arrInputs.includes(event.target)) {
    for (let i = 0; i < arrInputs.length; i++) {
        let campos = arrInputs[i];
        if (campos.classList.contains("focado")) {
            campos.classList.remove("focado")
        }
    }
  }
  for (i of arrInputs) {
    if (i.classList.contains("focado")) {
      i.style.height = "35px";
    } else if (!i.classList.contains("focado") && i.value.length > 0) {
      i.style.height = "35px";
    } else {
      i.style.height = "";
    }
  }
});

document.addEventListener("keydown", function () {
  for (i of arrInputs) {
    if (i.classList.contains("focado")) {
      i.style.height = "35px";
    } else if (!i.classList.contains("focado") && i.value.length > 0) {
      i.style.height = "35px";
    } else {
      i.style.height = "";
    }
  }
});
