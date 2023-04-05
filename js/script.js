const inputs = document.querySelectorAll(".inputs");
const arrInputs = Array.from(inputs);
const label = document.getElementsByTagName("label");
const arrLabel = Array.from(label);
const data = document.getElementById("idata")

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

let arrKeys = [];
const regex = new RegExp("^(0?[1-9]|[1-2][0-9]|3[0-1])[/][0-9]{2}[/][0-9]{4}$");

data.addEventListener("keyup", function() {
  let valor = this.value;
  valor = valor.replace(/\D/g, "");
  
  if (valor.length > 2 && valor.length < 5) {
    valor = valor.substr(0, 2) + "/" + valor.substr(2);
  } else if (valor.length >= 5) {
    valor = valor.substr(0, 2) + "/" + valor.substr(2, 2) + "/" + valor.substr(4);
  }
  
  this.value = valor;
});

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
