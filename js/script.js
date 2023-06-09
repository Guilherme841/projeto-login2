const inputs = document.querySelectorAll(".inputs");
const arrInputs = Array.from(inputs);
const label = document.getElementsByTagName("label");
const arrLabel = Array.from(label);
const data = document.getElementById("idata");
const ipass = document.getElementById("ipass");
const mostrarSenha = document.getElementById("mostrarSenha");
const sim = document.getElementById("sim");
const tokenStorage = localStorage.getItem("tokenStorage");

window.addEventListener("pageshow", function () {
  for (let elemento of arrInputs) {
    let input = elemento;
    if (input.value) {
      let inputWithValue = this.document.querySelector(`label[for="${input.id}"]`);
      inputWithValue.style.transform = "translateY(-50px)"
    }
  }
});

mostrarSenha.addEventListener("click", function () {
  if (ipass.type === "password") {
    ipass.type = "text";
    mostrarSenha.textContent = "visibility";
  } else {
    ipass.type = "password";
    mostrarSenha.textContent = "visibility_off";
  }
});

for (let e of arrInputs) {
  e.addEventListener("focus", function () {
    inputClicado = this;
    labelClicado = document.querySelector(`label[for="${inputClicado.id}"]`);
    labelClicado.style.transform = "translateY(-50px)";
  });
  e.addEventListener("blur", function () {
    if (!inputClicado.value) {
      labelClicado.style.transform = "translateY(-25px)";
    }
  });
}
