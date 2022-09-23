/* 
// DOM = document object model

// metodo getElementById = sirve para acceder a un elemento de html utilizando ID
 */

let idTitulo = document.getElementById("titulo");

console.log(idTitulo.innerHTML);

/* Aplicando innerText con el mismo ejercicio anterior */

idTitulo.innerText = "este titulo cambio por aplicar innerText desde JS"; 

console.log(idTitulo);

/* ///////////////////////////////////////////////////////////////////////////

// Creando nodo con etiqueta parrado
 */
let parrafo = document.createElement("p");

parrafo.innerHTML = "<p> hola! soy el parrafo creado por JS </p>";

document.body.append(parrafo);
/* 
//////////////////////////////////////////////////////////// */