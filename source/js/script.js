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
  var resultado = document.getElementById("resultado");

  if (resultado.value == "") {
    seccion_respuesta.classList.remove('visible');

  } else {
    seccion_respuesta.classList.add('visible');
  }
}

document.getElementById("copiar").addEventListener("click", function () {
  var seccion_respuesta = document.getElementById("seccion-respuesta");
  var textarea = document.getElementById("resultado");
  var textarea_input = document.getElementById("input");
  textarea.select();

  document.execCommand("copy");
  textarea_input.value = ""
  
  seccion_respuesta.classList.remove('visible'); // Oculta el div
});

const body = document.querySelector("body,html");
setTimeout(function () {
  body.classList.add("visible");
}, 500);
