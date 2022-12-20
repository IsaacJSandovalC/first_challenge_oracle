function codificar() {
  var texto = document.getElementById("input").value;
  var serccion_texto = document.getElementById("seccion-mensaje");
  let resultado = "";

  for (let caracter of texto) {
    if (caracter >= "a" && caracter <= "z") {
      if (caracter === "e") {
        resultado += "enter";
      } else if (caracter === "i") {
        resultado += "imes";
      } else if (caracter === "a") {
        resultado += "ai";
      } else if (caracter === "o") {
        resultado += "ober";
      } else if (caracter === "u") {
        resultado += "ufat";
      } else {
        resultado += caracter;
      }
    } else {
      resultado += caracter;
    }
  }

  if (texto.match(/[A-Z]/) !== null) {
    document.getElementById("resultado").value =
      "No podemos decodificar esto ya que contiene letras mayusculas o caracteres especiales";
  } else if (texto.match(/[^a-zA-Z0-9\s]/) !== null) {
    document.getElementById("resultado").value =
      "No podemos decodificar esto ya que contiene letras mayusculas o caracteres especiales";
  } else {
    document.getElementById("resultado").value = resultado;
  }
}

function decodificar() {
  var texto = document.getElementById("input").value;

  let resultado = "";
  for (let i = 0; i < texto.length; i++) {
    if (texto[i] === "e" && texto[i + 1] === "n") {
      resultado += "e";
      i += 2;
    } else if (texto[i] === "i" && texto[i + 1] === "m") {
      resultado += "i";
      i += 2;
    } else if (texto[i] === "a" && texto[i + 1] === "i") {
      resultado += "a";
      i += 1;
    } else if (
      texto[i] === "o" &&
      texto[i + 1] === "b" &&
      texto[i + 2] === "e" &&
      texto[i + 3] === "r"
    ) {
      resultado += "o";
      i += 3;
    } else if (
      texto[i] === "u" &&
      texto[i + 1] === "f" &&
      texto[i + 2] === "a" &&
      texto[i + 3] === "t"
    ) {
      resultado += "u";
      i += 3;
    } else {
      resultado += texto[i];
    }
  }
  if (texto.match(/[A-Z]/) !== null) {
    document.getElementById("resultado").value =
      "No podemos decodificar esto ya que contiene letras mayusculas o caracteres especiales";
  } else if (texto.match(/[^a-zA-Z0-9\s]/) !== null) {
    document.getElementById("resultado").value =
      "No podemos decodificar esto ya que contiene letras mayusculas o caracteres especiales";
  } else {
    document.getElementById("resultado").value = resultado;
  }
}

function mostrarDiv() {
  var seccion_respuesta = document.getElementById("seccion-respuesta");
  var serccion_texto = document.getElementById("seccion-mensaje");
  var resultado = document.getElementById("resultado");

  if (resultado.value == "") {
    seccion_respuesta.classList.remove("visible");
  } else {
    serccion_texto.classList.add("visible");
    seccion_respuesta.classList.add("visible");
  }
}

document.getElementById("copiar").addEventListener("click", function () {
  var seccion_respuesta = document.getElementById("seccion-respuesta");
  var serccion_texto = document.getElementById("seccion-mensaje");

  var textarea = document.getElementById("resultado");
  var textarea_input = document.getElementById("input");
  textarea.select();

  document.execCommand("copy");
  textarea_input.value = "";

  seccion_respuesta.classList.remove("visible"); // Oculta el div
  serccion_texto.classList.remove("visible");
});

const body = document.querySelector("body,html");
setTimeout(function () {
  body.classList.add("visible");
}, 500);

const fechaElement = document.getElementById("fecha");
const hoy = new Date();
const fechaISO = hoy.toISOString();
const fecha = fechaISO.split("T")[0];
fechaElement.textContent = fecha;
