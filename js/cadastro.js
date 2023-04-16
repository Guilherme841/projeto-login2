const inputs = document.querySelectorAll(".inputs");
const arrInputs = Array.from(inputs);
const label = document.getElementsByTagName("label");
const arrLabel = Array.from(label);
const data = document.getElementById("idata");
const ipass = document.getElementById("ipass");
const mostrarSenha = document.getElementById("mostrarSenha");
const date = new Date();
const ano = date.getFullYear();
const mes = String(date.getMonth()).padStart(2, + "0");
const dia = String(date.getDate()).padStart(2, + "0");
const dataFull = `${dia}/${mes}/${ano}`;

mostrarSenha.addEventListener("click", function () {
  if (ipass.type === "password") {
    ipass.type = "text";
    mostrarSenha.textContent = "visibility"
  } else {
    ipass.type = "password";
    mostrarSenha.textContent = "visibility_off"
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

// let arrKeys = [];
// const regex = new RegExp("^(0?[1-9]|[1-2][0-9]|3[0-1])[/][0-9]{2}[/][0-9]{4}$");

data.addEventListener("keyup", function () {
  let valor = this.value;
  let valorAno = 0;
  let valorMes = 12;
  let valorDia = 31;
  valor = valor.replace(/\D/g, "");

  if (valor.length > 2 && valor.length < 5) {
    valor = valor.substr(0, 2) + "/" + valor.substr(2);
  } else if (valor.length >= 5) {
    valor =
      valor.substr(0, 2) + "/" + valor.substr(2, 2) + "/" + valor.substr(4);
  } if (valor.length > 6 && valor.length <= 10) {
    valorAno = valor.substr(6,10)
    if (valorAno > ano) {
      valor = 0;
    }
  } if (valor.length > 3 && valor.length < 6) {
    valorMes = valor.substr(3,6);
    if (valorMes > 12) {
      valor = 0;
    }
  }
  if (valor.length > 0 && valor.length < 3) {
    if (valor > valorDia) {
      valor = 0;
    }
  }
  this.value = valor; 
});
