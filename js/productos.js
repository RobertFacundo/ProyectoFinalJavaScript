//arrays de productos con clase constructora

class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = parseInt(precio, 10);
    }
}


const productosArray = [
    new Producto("Pizza Margarita", "4000"),
    new Producto("Pizza de prosciuto y hongos", "4300"),
    new Producto("Pepperoni pizza", "4100"),
    new Producto("Hamburguesa Doble Bacon", "6600"),
    new Producto("Hamburguesa Doble Cheddar", "6900"),
    new Producto("Hamburguesa Crispy Chicken", "6700"),
    new Producto("Pasta con crema de hongos", "7900"),
    new Producto("Empanadas de carne (1/2 docena)", "7000"),
    new Producto("Empanadas de jamón y queso (1/2 docena)", "7000"),
    new Producto("California Roll (12 rolls)", "8000"),
    new Producto("Filadelfia Roll (12 rolls)", "8100"),
    new Producto("Ramen", "7900"),
    new Producto("Mirinda 2L", "3000"),
    new Producto("Sprite 1.5L", "2500"),
    new Producto("Coca-cola de 2.25L", "3100"),
    new Producto("Agua Mineral de 2.25L", "3100")
];

productosArray.forEach(producto => {
    console.log(`Producto: ${producto.nombre}, Precio: $${producto.precio}`);
});






