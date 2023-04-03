const inputs = document.querySelectorAll(".inputs");
const arrInputs = Array.from(inputs);
const input = document.getElementById("primeiroNome")
const label = document.getElementsByTagName("label")
const arrLabel = Array.from(label)
const label2 = document.getElementById("nome2");
// const styleLabel = window.getComputedStyle(label);

for (let e of arrInputs) {
  e.addEventListener("focus",() => {
    label2.style.transform = "translateY(-42px)"
  })
  e.addEventListener("blur", () => {
    if (!input.value) {
      label2.style.transform = "translateY(-25px)"
    }
  })
}

// for (var elemento of arrInputs) {
//   elemento.addEventListener("click", function () {
//     for (i of arrInputs) {
//       i.classList.remove("focado");
//     }
//     this.classList.add("focado");
//   });
// }

// document.addEventListener("click", function (event) {
//   if (!arrInputs.includes(event.target)) {
//     for (let i = 0; i < arrInputs.length; i++) {
//       let campos = arrInputs[i];
//       if (campos.classList.contains("focado")) {
//         campos.classList.remove("focado");
//       }
//     }
//   }
// });

// document.addEventListener("keydown", function () {
//   for (i of arrInputs) {
//     if (i.classList.contains("focado")) {
//       label.style.transform = "translateY(-42px)";
//     } else if (!i.classList.contains("focado") && i.value.length > 0) {
//       label.style.transform = "translateY(-42px)";
//     } else {
//       label.style.transform = "translateY(-25px)";
//     }
//   }
// });
