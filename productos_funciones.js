let main = document.querySelector("main");
let cart = document.querySelector("cart");
//Importo una funcion desde otro archivo
let { addToCart, obtenerTotal } = await import("./js/carrito.js");

/*creo una var llamada main xq esta realmente representara al main del html y la voy a necesitar siempre*/

/*detalle a resaltar: dentro de la var main soy especifica e indico que me refieron al main de html meediate document.queryselector('main')*/
const formatMoney = (num) => {
  return "$ " + num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
};

async function getData() {
  let res = await fetch("https://api.npoint.io/fe06d9b63dc01f2e9bed");
  let photos = await res.json();

  photos.forEach((p) => {
    /*___Codigo para crear tarjeta de img ___*/

    let card = document.createElement("div");
    /*estoy creando un div para poner img adentro. Esto lo guardo dentro de una variable*/
    card.className = "card";
    /*le asignamos una clase a la variable creada llamando a la var card + atributo class */

    let quantityInput = document.createElement("input");
    quantityInput.type = "number";
    quantityInput.className = "quantityInput";
    quantityInput.defaultValue = 1;
    quantityInput.placeholder = "1";

    let comprar = document.createElement("button");
    comprar.className = "boton_comprar";
    comprar.textContent = " Comprar! ";
    //llamo al addToCart desde un event listener
    comprar.addEventListener("click", function () {
      addToCart(p, quantityInput.value);
      setTimeout(() => {
        location.reload()
      }, 2000)
    });

    let animal = document.createElement("p");
    animal.className = "tipo_de_animal";
    animal.textContent = "";
    /*___aca indicaba el tipo de animal en la carta pero quedo feo y lo cambie por ponerle el boton de comprar */

    let img = document.createElement("img");
    /*creo una img y la guardo en la variable img*/
    img.src = p.pictureUrl;
    /*llamo a mi var img y el atributo src y le asigno una imagen url --- bueno, ahora borro la url de la img random que puse aca y pongo a p.pictureUrl xq pictureUrl es el indicador de img del obj array del api que estoy usando, hago esto para que me aparezcan todas las img de la api aca*/

    let titulo = document.createElement("h3");
    titulo.textContent = p.title;

    let subtitulo = document.createElement("h4");
    subtitulo.textContent = p.description;

    let cardPrecio = document.createElement("p");
    cardPrecio.className = "card_precio";

    let precio = document.createElement("h2");
    precio.textContent = formatMoney(p.price);

    let cardText = document.createElement("div");
    cardText.className = "card_text";

    cardPrecio.append(precio);
    cardText.append(titulo, subtitulo);
    animal.append(quantityInput);
    animal.append(comprar);
    card.append(animal, img, cardText, cardPrecio);
    /*aca le digo a card que le voy a agregar hijos. Estos hijos seran img y titulo, justo en ese orden*/
    main.append(card);

    //agregar()
  });
}

/*___en conclusion, como ahora cree div, img, h3 desde js, todo lo que cree en el html que este relacionado con esto lo voy a borrar porque quiero que quien exista sea lo que se creo desde el js*/

getData();

async function getCart() {
  let currentCart = JSON.parse(localStorage.getItem("carrito"));
  console.log(currentCart);

  let total = obtenerTotal(currentCart);

  let addSumaTotal = document.getElementById("sumaTotalCarrito");
  addSumaTotal.innerText = `Total de la compra: $${total}`;

  currentCart.forEach((p) => {
    /*___Codigo para crear tarjeta de img ___*/

    let card = document.createElement("div");
    /*estoy creando un div para poner img adentro. Esto lo guardo dentro de una variable*/
    card.className = "card_cart";
    /*le asignamos una clase a la variable creada llamando a la var card + atributo class */

   
    /*___aca indicaba el tipo de animal en la carta pero quedo feo y lo cambie por ponerle el boton de comprar */

    let titulo = document.createElement("h3");
    titulo.textContent = p.item.title;

    let subtitulo = document.createElement("h4");
    subtitulo.textContent = p.item.description;

    let cardPrecio = document.createElement("p");
    cardPrecio.className = "card_precio";

    let precio = document.createElement("h2");

    let cardText = document.createElement("div");
    cardText.className = "card_text";

    cardPrecio.append(precio);
    cardText.append(titulo, subtitulo);
    card.append( cardText, cardPrecio);
    /*aca le digo a card que le voy a agregar hijos. Estos hijos seran img y titulo, justo en ese orden*/
    cart.append(card);

    //agregar()
  });
}

/*____ BOTONES DE CARRITO _____*/
// BOTON POSITIVO

let botonPositivo = document.getElementById("boton_positivo");
botonPositivo.onclick = () => {
  Swal.fire({
    icon: "success",
    title: "Excelente! Completa el formulario para llevarte el pedido!",
    text: "Cobramos en efectivo!",
    showConfirmButton: true,
    timer: 5000,
  });
  localStorage.setItem("carrito", JSON.stringify([]));

  setTimeout(() => {
    location.reload()
  }, 3000)
};

// BOTON NEGATIVO

let botonNoGracias = document.getElementById("boton_negativo");
botonNoGracias.onclick = () => {
  localStorage.setItem("carrito", JSON.stringify([]));

  Swal.fire({
    icon: "success",
    title: "Listo!",
    text: "Se eliminaron los productos del carrito con exito!",
    showConfirmButton: true,
    confirmButtonText: "Gracias!",
    timer: 5000,
  });
  setTimeout(() => {
  window.scroll({
    top: 0,
    left: 0,
    behavior: 'smooth'
  })
  }, 3000)
};

// BOTON SUBMIT FORMULARIO

let botonFormulario = document.getElementById("boton_input");
botonFormulario.onclick = () => {
  Swal.fire({
    icon: "success",
    title: "Datos Completados!",
    text: "Tu pedido llegara en unas horas!",
    showConfirmButton: true,
    confirmButtonText: "Muchas Gracias !!",
    timer: 2500,
  });
};

getCart();
