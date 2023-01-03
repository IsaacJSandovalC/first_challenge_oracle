// Animaciones de la intro
let intro = document.querySelector('.intro');
let logo = document.querySelector('.logo');
let logo_parts = document.querySelectorAll('.logo-parts');

window.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        logo_parts.forEach((spam, index) => {
            setTimeout(() => {
                spam.classList.add('active');
            }, (index + 1) * 100);
        });

        setTimeout(() => {
            logo_parts.forEach((spam, index) => {
                setTimeout(() => {
                    spam.classList.remove('active');
                    spam.classList.add('fade');
                }, (spam + 1) * 50);
            });
        }, 3000);


        setTimeout(() => {
            intro.style.top = '-300vh';
        }, 2300);
    });
});

// Codificacion
function codificar() {
  var cadena = document.getElementById("input").value;

  cadena = cadena.replace(/a/g, "ai");
  cadena = cadena.replace(/e/g, "enter");
  cadena = cadena.replace(/i/g, "imes");
  cadena = cadena.replace(/o/g, "ober");
  cadena = cadena.replace(/u/g, "ufat");

  if (cadena.match(/[A-Z]/) !== null) {
    document.getElementById("resultado").value =
      "No podemos decodificar esto ya que contiene letras mayusculas o caracteres especiales";
  } else if (cadena.match(/[^a-zA-Z0-9\s]/) !== null) {
    document.getElementById("resultado").value =
      "No podemos decodificar esto ya que contiene letras mayusculas o caracteres especiales";
  } else {
    document.getElementById("resultado").value = cadena;
  }
}

// Decodificacion
function decodificar() {
  var cadena = document.getElementById("input").value;

  cadena = cadena.replace(/enter/g, "e");
  cadena = cadena.replace(/imes/g, "i");
  cadena = cadena.replace(/ai/g, "a");
  cadena = cadena.replace(/ober/g, "o");
  cadena = cadena.replace(/ufat/g, "u");

  if (cadena.match(/[A-Z]/) !== null) {
    document.getElementById("resultado").value =
      "No podemos decodificar esto ya que contiene letras mayusculas o caracteres especiales";
  } else if (cadena.match(/[^a-zA-Z0-9\s]/) !== null) {
    document.getElementById("resultado").value =
      "No podemos decodificar esto ya que contiene letras mayusculas o caracteres especiales";
  } else {
    document.getElementById("resultado").value = cadena;
  }
}

// Mostrar la seccion de resultados
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

// Acciones en el boton copiar
document.getElementById("copiar").addEventListener("click", function () {
  var seccion_respuesta = document.getElementById("seccion-respuesta");
  var serccion_texto = document.getElementById("seccion-mensaje");

  var textarea = document.getElementById("resultado");
  var textarea_input = document.getElementById("input");
  textarea.select();

  document.execCommand("copy");
  textarea_input.value = "";

  seccion_respuesta.classList.remove("visible");
  serccion_texto.classList.remove("visible");
});

const contenedor = document.querySelector("#contenedor");
setTimeout(function () {
  contenedor.classList.add("visible");
}, 500);


// Fecha footer
const fechaElement = document.getElementById("fecha");
const hoy = new Date().getFullYear();
fechaElement.textContent = hoy;

