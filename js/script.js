const inputs = document.querySelectorAll(".inputs");
const arrInputs = Array.from(inputs);
const input = document.getElementById("primeiroNome");
const label = document.getElementsByTagName("label");
const arrLabel = Array.from(label);
const label2 = document.getElementById("nome2");

for (let e of arrInputs) {
  e.addEventListener("focus", function() {
    inputClicado = this;
    labelClicado = document.querySelector(`label[for="${inputClicado.id}"]`);
    labelClicado.style.transform = "translateY(-42px)";
  });
  e.addEventListener("blur", function() {
    if (!inputClicado.value) {
      labelClicado.style.transform = "translateY(-25px)";
    }
  });
}

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
