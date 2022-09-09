/* let numA = prompt("Hola! Ingrese un número random porfavor");

let numMil = 1000;

if(numA > numMil){
    alert("Este número es mayor a " + numMil)
}else{
    alert("El número ingresado es: " + numA)
}
 */

/* function solicitarNombre(){
    let nombreIngresado = prompt("Ingrese su nombre porfavor");
    alert("el nombre ingresado es " + nombreIngresado)
}

solicitarNombre()
 */
//No puedo hacer que mi archivo js funcione, 
//lo que escribo aca no hace nigun efecto
//en mi pagina.
//Solucionado: puse mal el enlace

//La forma correcta de tratar de hacerlo es practicando vos mismo usando todos tus recursos.


//Ademas, no puedo poner una tercera condicion como de
//if(numA == ""){alert =("Eror: No ingresaste ningun valor. 
//Ingresa un num random porfavor")}


//Usamos for para contar de 0 a 9

//for(let i = 0; i < 10; i++){
  //  alert(i);
//}

//Usamos for para contar de 0 a 9

//for(let i = 0; i <= 10; i++){
  //  alert(i);
//}
//No termino de entender como funciona o que es parsear

//bueno, se hara una multiplicacion a continuacion

/* let ingresarNumero = parsenInt(prompt("Ingrese un número porfavor"));

for(let i = 1; i <= 10; i++){
    let resultado = ingresarNumero * i ;
    alert(ingresarNumero + " X " + i + " = " + resultado); */
//}


let resultado = 0;

function sumando(lugarA, lugarB){
    resultado = lugarA + lugarB
    return resultado;
}

function mostrarMSJ(mensaje){
    console.log(mensaje)
}

sumando(10,2);
mostrarMSJ(resultado);

console.log(sumando(50, 80))


function restando(a,b){
    return a - b;
}
let resultadoResta = restando(7,2);

console.log(restando(7,5))

function multiplicando (lala, lele){
    return lala * lele;
}

let resultadoMultip = multiplicando(4,5);
console.log(resultadoMultip)


function dividiendo(a,b){
    return a / b;
}
let resultDiv = dividiendo(40,2);
console.log(resultDiv)







function calculadora(a,b,operacion){
    switch(operacion){
        case "+":
            return a + b;
            break;
        default:
            return 0;
            break;
    }
}

console.log(calculadora(5,7,"+"))



//funcion local

function diTuNombre(){
    let nombre ="Carla";
    return nombre;
}

console.log(diTuNombre())

function sigoSumando(a,b){
    let result = a + b;
    return result;
}

console.log(sigoSumando(2,4))

function Galletita (forma, color, sabor){
    this.forma = forma;
    this.color = color;
    this.sabor = sabor;
}

const galletita1 = new Galletita("Estrella", "red","frutilla");

const galletita2 = new Galletita("Luna","yellow","banana");

console.log(galletita1)












//////////////////////////////////////////////////////////////////////////////////////


/* function Calculadora (a, b) {
    this.sumar = () => (a+b);
    this.restar = () => (a-b);
}

const resultado1 = Calculadora.sumar(10, 20)



//Call backs o retorno de funciones

function familiaVallejos(decendencia){
if (decendencia == tios) {
    return ("Carlos", "Miguel") 
}else if(decendencia == tias){
    return ("Alina","Lizbeth")
}
}

let tios = ("Carlos", "Miguel");

let tias = ("Alina","Lizbeth");

console.log(decendencia(tios)) */


////////////////////////////////////////////////////////////////////






// CALLBACKS

let funcion_loca_anonima = () => 'queso';

function callback(){
    return "Yo soy un callback";
}

function msjDecb(fn){
   return funcion_loca_anonima()
}

console.log(msjDecb(callback))





function mensaje(nombre){
    console.log("Hola", nombre);
}

mensaje("Carla");






