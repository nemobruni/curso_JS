export function addToCart(item, quantity = 1) {
  //primero me fijo que hay en el localStorage
  let currentCart = JSON.parse(localStorage.getItem("carrito"));
  //Si el localstorage no tiene nada, entonces creo el carrito desde cero.
  if (currentCart === null) {
    let newCart = [];
    newCart.push({
      item,
      quantity,
    });
    localStorage.setItem("carrito", JSON.stringify(newCart));
    Swal.fire({
      title: "Exito!",
      text: "Agregaste un producto al carrito!",
      icon: "success",
      confirmButtonText: "Genial!",
    });
    console.log("Cart created successfully");
    return "Cart created successfully";
  } //Si tiene algo, uso el carrito anterior como base para el nuevo
  else {
    currentCart.push({
      item,
      quantity,
    });
    localStorage.setItem("carrito", JSON.stringify(currentCart));
    console.log("Cart updated successfully");
    Swal.fire({
      title: "Exito!",
      text: "Agregaste un producto al carrito!",
      icon: "success",
      confirmButtonText: "Genial!",
    });
    return "Cart updated successfully";
  }
}

let ejemploCarrito = [
  {
    item: {
      id: 1,
      price: 17500,
      title: "PEDIGREE",
      animal: "Perro",
      pictureUrl:
        "https://carrefourar.vtexassets.com/arquivos/ids/256066/7797453000369_02.jpg?v=637986095784470000",
      description: "Perro Adulto Grande Carne y Vegetales - 15kg",
    },
    quantity: "2",
  },
  {
    item: {
      id: 2,
      price: 3500,
      title: "DOG CHOW",
      animal: "Perro",
      pictureUrl:
        "https://media2.mimundomascota.com.ar/2446-thickbox_default/dog-chow-perros-adultos-razas-pequenas-x-8kg.jpg",
      description:
        "Perro Adulto Pequeño Carne Pollo Cereales y Vegetales - 15kg - 2kg",
    },
    quantity: "3",
  },
  {
    item: {
      id: 6,
      price: 1500,
      title: "WHISKAS",
      animal: "Gato",
      pictureUrl:
        "https://sp-ao.shortpixel.ai/client/to_webp,q_lossy,ret_img/https://www.whiskas.com.ar/wp-content/uploads/2018/12/Carne-Adulto.jpg",
      description:
        "Gato Adulto Sobrecitos Sabor Carne - Pack 12 unidades x (85 gr)",
    },
    quantity: "5",
  },
];
