//alert("Hola este es mi Javascript");

//let nombre = "Melisa";
//console.log(nombre);

let contenidoTitulo = "Nombre";

let titulo = document.querySelector(".logo");
titulo.innerHTML = contenidoTitulo;

//CONDICIONALES

let textoTitulo = titulo.innerText;
console.log(textoTitulo);

if(textoTitulo == "Nombre" ){
titulo.innerHTML = "Sobre mi"; }
else { console.log("no se cumple"); }

//let Titulo1 = document.querySelector(".logo");
//console.log(Titulo1);


//document.addEventListener("DOMContentLoaded", function() {
//const elementByQuerySelector = document.querySelector(".acerca-de .h2");
//console.log("querySelector()", elementByQuerySelector);});

const form = document.getElementById("form");
const nombre = document.getElementById("nombre");
const parrafo = document.getElementById("alertas");

function validarFormulario() {
  let warnings = "";
  let valido = true;
  parrafo.innerHTML = "";

  if (nombre.value.length < 4) {
    warnings += `El nombre debe contener más de 4 carcateres`;
    valido = false;
  }

  if (!valido) {
    parrafo.innerHTML = warnings;
  } else {
    parrafo.innerHTML = "Enviado";
  }
  return valido;
}

form.addEventListener("submit", (e) => {
  if (validarFormulario()) {
    // Si la validación es exitosa, puedes enviar el formulario
    formulario.submit();
  } else {
    e.preventDefault(); // Evita que el formulario se envíe automáticamente
  }
});

