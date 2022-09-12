//Practicando metodo forEach

//ejercicio 1:

let array = [10, 20, 30, 40];

array.forEach(function(elemento){
    console.log(elemento + 5);
});


//ejercicio 2:

let listaPar = [2,4,6,8];

listaPar.forEach(function(elemento){
    console.log(elemento + 10);
});

//ejercicio 3:

let mascotas = ["gatos", "perros", "conejos", "tortugas"];

mascotas.forEach(function(mascotas){
    console.log( "Mascotas como " + mascotas + " son populares entre los niños")
});










////////////////////////////////////////////////////////////////////////////////

//Practicando metodo find

//Ej 1:


let idiomas = ["Inglés", "Francés", "Alemán", "Japonés"];

let encontrar = idiomas.find(idiomaUniversal => {
    console.log(idiomaUniversal);
    return idiomaUniversal === "Inglés";
});

console.log(encontrar);





//ej 2

let estadoDeAnimo = ["alegre", "triste", "enojado"];

let angryMeans = estadoDeAnimo.find(animo => {
    console.log(animo);
    return animo === "enojado";
});

console.log(angryMeans)



//ej 3

let numerosPositivos = [1,2,3, -8];

// let negativo = (numerosPositivos < 0);

let esteNoEsPositivo = numerosPositivos.find(elemento => (elemento < 0));

console.log(esteNoEsPositivo)
//no salioooo
//ya me salioooo
//nota mental: find solo devuelve el primer elemento que cumple con la condicion
//si hay otros elementos que cumplen con la condicion no los va a devolver




//ejercicio 4

let nombre = "";
let precio = null;

let merienda = [
    {nombre: "mermelada", precio: 200 },
    {nombre: "Dulce de leche", precio: 500},
    {nombre: "mermelada premium", precio: 800 },

]

let resultado1 = merienda.find((elemento) => elemento.nombre === "mermelada premium");


console.log(resultado1);


//////////////////////////////////////////////////////////////////////////////////////////////////

// metodo filter
//este si devuelve todos los elementos que cumplen con la condicion

let numerosVariados = [1, 4, -8, -3 , 6, -15, 0, 20];

let numNegativos = numerosVariados.filter(elemento => (elemento < 0));

console.log(numNegativos);

///////////////////////////////////////////////////////////////////////////////////

//metodo some (hice mas ejercicios porque no lo entendia)

//ej 1 = no me salio bien y no entendi

let golosinas = [
    {dulces: "caramelos, alfajores, chocolates", precio: 100},
    {salado: "biscochitos, papas fritas, maní", precio: 50},
];

let noDulce = golosinas.some(elemento => elemento.salado == "biscochitos, papas fritas, maní")

console.log(noDulce)




// ejercicio 2

//Alguna de estas palabras tiene mas de 3 letras?

let palabrasLocas = ["teclado", "tomate", "maní", "chocolate", "un", "a"];

let ejercicio2 = palabrasLocas.some(function(elemento){
    return elemento.length > 3;
});

console.log(ejercicio2)




//ejercicio 3
//alguna de estas palabras comienza con la letra "b"?

let ejercicio3 = palabrasLocas.some(function(elemento){
    return elemento[0] === "b";
    });

    console.log(ejercicio3);





//Ejercicio 4

//alguna de estas palabras contiene la silaba "cho"?

let ejercicio4 = palabrasLocas.some(function(elemento){
    return elemento.includes("cho");
});

console.log(ejercicio4);


//ejercicio 5
//hay numeros negativos?

let listadeNumerosLocos = [1, 5, 6, 7, 9];

let esteEsNegativo = listadeNumerosLocos.some(elemento => elemento < 0);

console.log(esteEsNegativo);


//ejercicio 6
//algun alumno es mayor de edad?

let alumnos = [
    {nombre: "Alex", age: 15},
    {nombre: "Mari", age: 22},
    {nombre: "sofi", age: 20},
];

let quienEsMayor = alumnos.some(elemento => elemento.age > 18);

console.log(quienEsMayor);


// otra forma de solucionar el ejercicio 6

/* let menordeEdad = elemento => elemento.age > 18;

let quienEsMayor = alumnos.some(menordeEdad);

console.log(quienEsMayor); */


////////////////////////////////////////////////////////////////////////////////////////////


// metodo map : tira una nueva lista de elementos pero no modifica la original

//ejercicio 1

// multiplicar *3 a cada  elmento

let numerosPares = [2, 4, 6, 8];

let porTres = numerosPares.map(elemento => elemento * 3);

console.log(porTres);


//ejercicio 2
// transformar a lowercase estas lista 

let palabrasConfusas = ["HoLa", "cHauU", "BUen dIa", "buEnas tARdes"];

let palabrasLegibles = palabrasConfusas.map(elemento => elemento.toLowerCase());

console.log(palabrasLegibles);


//ejercicio 3
//restaurante: almuerzo, postre, infusiones.

let comidas = [
    {almuerzo: "bolognesa", postre: "helado", infusion: "té"},
    {almuerzo: "milanesa napolitana", postre: "volcan de chocolate", infusion: "café"},
    {almuerzo: "choripan", postre: "torta", infusion: "mate"}
];

let principal = comidas.map(elemento => elemento.almuerzo);

console.log(principal);



////////////////////////////////////////////////////////////////////////////////

// metodo reduce: sirve para sumar todos los elementos de un array y ponerlos en un solo array

// ejercicio 1

let numerosDeMayoraMenor = [6,5,4,3,2,1];

let resultado = numerosDeMayoraMenor.reduce((accumulador,elemento) => accumulador + elemento,0);

console.log(resultado);


// ejercicio 2

let supermercado = [
    {almacen: "1 arroz", precio: 150 },
    {carnicería: "1 pollo", precio: 1000},
    {panadería: "pan lactal", precio: 400},

];

let totalCompra = supermercado.reduce((acc,el) => acc + el.precio, 0);

console.log(totalCompra);


// ejercicio 3
// tenemos una lista de fruta para la ensalada de fruta
// debemos pedir dos kilos de cada una y mostrar el precio

let ensaladaDeFrutas = [
    {fruta: "banana", precio: 200},
    {fruta: "manzana", precio: 300},
    {fruta: "naranja", precio: 200},
    {fruta: "frutilla", precio: 800}
];

let quieroDoskgTotal = ensaladaDeFrutas.reduce((acc,el) => acc + (el.precio * 2), 0);

console.log(quieroDoskgTotal);

///////////////////////////////////////////////////////////////////////////////////////////////////

// metodo sort
// ejercicio 1 . ordenar de menor a mayor los numeros del array "numerosLoquitos"

let numerosLoquitos = [15, 9, 40, 100, 76, 3, 16];

let menorAmayor = numerosLoquitos.sort((a,b) => a - b );

console.log(menorAmayor);

//ejercicio 2
//ahora llamar al array "numerosLoquitos" y ordenar de mayor a menor

let mayorAmenor = numerosLoquitos.sort((a,b) => b - a);

console.log(mayorAmenor);



//ejercicio 3
// ordenar alfabeticamente(a-z) la lista del array "animales"


let animales = ["oso", "abeja", "mariposa", "tigre"];

let ordenarAnimales = animales.sort((elemento1, elemento2) => {
    return (elemento1 < elemento2) ? - 1 : 1;
});

console.log(ordenarAnimales);

//ejercicio 4
//ordenar de forma opuesta  a la alfabetica(z-a) la lista del array "animales"

let animalesdeZaA = animales.sort((elemento1, elemento2) => {
    return (elemento1 > elemento2) ? - 1 : 1
});

console.log(animalesdeZaA); 

////////////////////////////////////////////////////////////////////////////////////////


// Metodos del objeto Math
// Math.max()

let numeroMaximo = Math.max(50, 90, 60, 30, 40);

console.log(numeroMaximo);


// Math.min()

let numeroMinimo = Math.min(50, 90, 60, 30, 40);

console.log(numeroMinimo);

//////////////////////////////////////////////////////////////////////////////////


// ceil = redondea hacia arriba

let cuentita = (8 / 5);

console.log(cuentita);

console.log(Math.ceil(cuentita));




// floor : redondea hacia abajo

console.log(Math.floor(cuentita));

// round = redondea hacia el nujmero mas cercado

console.log(Math.round(cuentita));


/////////////////////////////////////////////////////////////////////////////////////////

// Square root 

// metodo Math.sqrt() = retorna la raiz cuadrada de un numero
//ejercicio 1

let numeroNueve = 9;
console.log(Math.sqrt(numeroNueve));


//ejercicio 2
let numeroSesentaYcuatro = 64;

console.log(Math.sqrt(numeroSesentaYcuatro));

// ejercicio 3
let mumeroCuarentaYnueve = 49;

console.log(Math.sqrt(mumeroCuarentaYnueve));

////////////////////////////////////////////////////////////////////////////////////////////

// Metodo random = tira un numero random entre 0 y 1

console.log(Math.random());

// ejercicio 1 : multiplicar un num random * 50

console.log(Math.random() * 50);

// ejercicio 2 : multiplicar un num random * 80

console.log(Math.random() * 80);


////////////////////////////////////////////////////////////////////////////////////////////

// CLASE DATE = genera una fecha
// 

console.log( new Date);


/////////////////////////////////////////////////////////////////////////////////////////////

// Contructor = crea objetos date con fechas diferentes

console.log(new Date (2022, 8, 10));

let miCumpleaños = new Date (2022, 10, 12);

console.log(miCumpleaños);

let emaCumple = new Date ("Febreaury 15, 2023");

console.log(emaCumple);

let soniaCumple = new Date ("November 15, 2022");

console.log(soniaCumple);

/////////////////////////////////////////////////////////////////////////////////////////////










