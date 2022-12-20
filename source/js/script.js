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
    seccion_respuesta.style.display = "none";
  } else {
    seccion_respuesta.style.display = "flex";
  }
}

document.getElementById("copiar").addEventListener("click", function () {
  var seccion_respuesta = document.getElementById("seccion-respuesta");
  var textarea = document.getElementById("resultado");
  textarea.select();

  document.execCommand("copy");

  seccion_respuesta.style.display = 'none'; // Oculta el div

});
