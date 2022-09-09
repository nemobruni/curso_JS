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

//metodo some

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

console.log(ejercicio4)