 
//  Aqui aplicaremos lo que es el getElementById()
 
 // ejemplo 1
 
 /* function clickTitulo(){
     console.log("Hola! Te informo que el usuario hizo click en el título!");
 }

 let titulo2 = document.getElementById("titulo");

 titulo2.onclick = clickTitulo; */


 // ejemplo 2 - button1

 
/* Practicando addEvenlistener con botones 1, 2 y 3 */


let botonUno = document.getElementById('botonUno')
botonUno.addEventListener("click", clicked)
console.log(botonUno)

function clicked(){
    console.log("se hizo click en el boton1")
    alert("haz hecho click en el boton 1")
};


let botonDos = document.querySelector(".botonDos")

botonDos.addEventListener("click", otroClick)

function otroClick(){
    console.log("se hizo click en el boton 2")
    alert("Holis, hiciste click en el boton 2")
};


let botonTres = document.querySelector("#botonTres")

botonTres.addEventListener("click", tercerClick)

function tercerClick(){
    console.log("Hole, hiciste click en el 3cer boton")
    alert("Holaa, se hizo click en el boton 3")
};


/* MOUSEMOVE */

let botonCuatro = document.querySelector('#botonCuatro')

botonCuatro.onclick = () => {console.log("Holaaa, se hizo Click en boton 4")}

botonCuatro.onmousemove = () => {console.log("cuando el mouse para o se mueve sobre boton4 se cuentan los movimientos ahhhhh")}

/* MOUSEOVER - MOUSEOUT */



let botonCinco = document.querySelector('.botonCinco')

botonCinco.onclick = () => {console.log("holis, se hizo click sobre el boton 5")}

botonCinco.onmouseover = () => {console.log("Holaaa, creo que esto cuenta las veces que pasaste el mouse sobre este boton 5, de up to down")}


/* MOUSEDOWN  */
 
let botonSeis = document.querySelector('#botonSeis')

botonSeis.onclick = () => {console.log("se hizo click en el boton 6")}

botonSeis.onmousedown = () => {console.log("bueno, se aplico mousedown, asi que se cuenta cuando se presiona y se baja")}

/*   MOUSEUP */

let botonSiete = document.querySelector('.botonSiete')

botonSiete.onclick = () => {console.log("hiciste click en el boton 7")}

botonSiete.onmouseup = () => {console.log("mouseup: se cuenta cuando se presiona y se sube ")}




/* EVENTOS DE TECLADO - keydown*/

let botonOcho = document.querySelector('#botonOcho')

botonOcho.onclick = () => {console.log("hiciste click en el boton OCHO")}

botonOcho.onkeydown = () => {console.log("se cuenta cuando se presion")}

/* KEYUP */
 
let botonNueve = document.querySelector('#botonNueve')

botonNueve.onclick = () => {console.log("click en el boton nueve")}

botonNueve.onkeyup = () => {console.log("se cuenta cuando se suelta el boton")}