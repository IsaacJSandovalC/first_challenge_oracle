function codificar() {
  var texto = document.getElementById("input").value;
  texto = texto.toLowerCase();
  var codificado = btoa(texto);
  document.getElementById("resultado").value = codificado;
}

function decodificar() {
  var texto = document.getElementById("input").value;
  var decodificado = atob(texto);
  document.getElementById("resultado").value = decodificado;
}

function mostrarDiv() {
  var seccion_respuesta = document.getElementById("seccion-respuesta");
  var serccion_texto = document.getElementById("seccion-mensaje")
  var resultado = document.getElementById("resultado");

  if (resultado.value == "") {
    seccion_respuesta.classList.remove('visible');

  } else {
    serccion_texto.classList.add('visible')
    seccion_respuesta.classList.add('visible');
  }
}

document.getElementById("copiar").addEventListener("click", function () {
  var seccion_respuesta = document.getElementById("seccion-respuesta");
  var serccion_texto = document.getElementById("seccion-mensaje")

  var textarea = document.getElementById("resultado");
  var textarea_input = document.getElementById("input");
  textarea.select();

  document.execCommand("copy");
  textarea_input.value = ""
  
  seccion_respuesta.classList.remove('visible'); // Oculta el div
  serccion_texto.classList.remove('visible')
});

const body = document.querySelector("body,html");
setTimeout(function () {
  body.classList.add("visible");
}, 500);


const fechaElement = document.getElementById('fecha');
const hoy = new Date();
const fechaISO = hoy.toISOString();
const fecha = fechaISO.split('T')[0];
fechaElement.textContent = fecha;
