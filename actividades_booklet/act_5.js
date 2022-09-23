

 /*  PRACTICANDO OBJETOS */

 /* let persona1 ={
     nombre: "Sol",
     edad: 22,
     calle: "Suiza 2512"
 };

 console.log(persona1.nombre)

 console.log(persona1["edad"]); */


 /* CONSTRUCTORES */
/* 
 Function Socio (literal) {
     this.nombre = listeral.nombre;
     this.email = literal.email;
     this.celular = literal.celular;
 }



 let socio1 = new Socio({}) */

 /////////////////////////////////////////////////////////////////////////////

//  let ingresoDePrecio = prompt("Hola! Ingrese un presion porfavor, le haremos un 20% de descuento");


let precio = parseFloat(prompt('Hola! Ingresar precio porfavor!'));

 let veintePorCiento = (precio * 20) / 100;

 let descuento = (precio - veintePorCiento);

 console.log(descuento);

 alert("el precio junto con el descuento es: " + descuento);

 

 


