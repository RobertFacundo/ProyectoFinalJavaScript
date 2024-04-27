class Producto {
    constructor(nombre, precio, esComida) {
        this.nombre = nombre;
        this.precio = parseInt(precio, 10);
        this.esComida = esComida; // True si es comida, False si es bebida
    }
}

const productosArray = [
    new Producto("Pizza Margarita", "4000", true),
    new Producto("Pizza de prosciuto y hongos", "4300", true),
    new Producto("Pepperoni pizza", "4100", true),
    new Producto("Hamburguesa Doble Bacon", "6600", true),
    new Producto("Hamburguesa Doble Cheddar", "6900", true),
    new Producto("Hamburguesa Crispy Chicken", "6700", true),
    new Producto("Pasta con crema de hongos", "7900", true),
    new Producto("Empanadas de carne (1/2 docena)", "7000", true),
    new Producto("Empanadas de jamón y queso (1/2 docena)", "7000", true),
    new Producto("California Roll (12 rolls)", "8000", true),
    new Producto("Filadelfia Roll (12 rolls)", "8100", true),
    new Producto("Ramen", "7900", true),
    new Producto("Mirinda 2L", "3000", false),
    new Producto("Sprite 1.5L", "2500", false),
    new Producto("Coca-cola de 2.25L", "3100", false),
    new Producto("Agua Mineral de 2.25L", "3100", false)
];

productosArray.forEach(producto => {
    console.log(`Producto: ${producto.nombre}, Precio: $${producto.precio}`);
});


function filtrarPorTipo(esComida) {
    return productosArray.filter(producto => producto.esComida === esComida);
}

const comidas = filtrarPorTipo(true);
console.log("Comidas:", comidas);

const bebidas = filtrarPorTipo(false);
console.log("Bebidas:", bebidas);





