class Producto {
    constructor(nombre, precio, esComida, img, desc) {
        this.nombre = nombre;
        this.precio = parseInt(precio, 10);
        this.esComida = esComida;
        this.img = img;
        this.desc = desc;
    }
}

const productosArray = [
    new Producto("Pizza Margarita", "4000", true, "./multimedia/cards/pizzamargarita.jpg", "Clásica italiana que lleva salsa de tomate, mozzarella fresca y hojas de albahaca fresca"),
    new Producto("Pizza de prosciuto y hongos", "4300", true, "./multimedia/cards/Pizza-prosciutto-e-funghi.jpg", "Combinación de salsa de tomate, queso mozzarella, jamón (prosciutto) y champiñones"),
    new Producto("Pepperoni pizza", "4100", true, "./multimedia/cards/pepperoni.jpg", "Esta pizza lleva salsa de tomate, queso mozzarella y rodajas de pepperoni (salami picante)"),
    new Producto("Hamburguesa Doble Bacon", "6600", true, "./multimedia/cards/HamburguesaDobleBacon.png", "Dos medallones de carne vacuna, queso cheddar fundido y en fetas, bacon crujiente y cebolla en trozos"),
    new Producto("Hamburguesa Doble Cheddar", "6900", true, "./multimedia/cards/cheddarbacon.png", "Clásica hamburguesa con queso cheddar en feta y fundido, dos tiras de bacon enteras, cebolla grillada en nuestro inigualable pan con semillas de sesamo"),
    new Producto("Hamburguesa Crispy Chicken", "6700", true, "./multimedia/cards/crispychicken.png", "Pollo sazonado y crujiente, cubierto con obligatorio queso derretido, apilado sobre panes suaves con cebolla, aguacate, lechuga, tomate y mayonesa de ajo"),
    new Producto("Pasta con crema de hongos", "7900", true, "./multimedia/cards/Espaguetis-con-hongos.jpg", "Plato de fetuccini con crema de hongos portobello"),
    new Producto("Empanadas de carne (1/2 docena)", "7000", true, "./multimedia/cards/empanadas-de-carne-cortada-a-cuchillo-4.jpg", "Riquísimas empanadas con carne cortada a cuchillo"),
    new Producto("Empanadas de jamón y queso (1/2 docena)", "7000", true, "./multimedia/cards/empanadajamonyqueso.jpg", "Sabrosas empanadas de jamón y queso"),
    new Producto("California Roll (12 rolls)", "8000", true, "./multimedia/cards/CALIFORNIA-roll.jpg", "Arroz, alga nori, aguacate, pepino, surimi, sésamo"),
    new Producto("Filadelfia Roll (12 rolls)", "8100", true, "./multimedia/cards/FILADELFIAroll.jpg", "Arroz, alga nori, aguacate, pepino, salmón, queso crema, sésamo"),
    new Producto("Ramen", "7900", true, "./multimedia/cards/ramen.jpeg", "Caldo de cerdo en cocción lenta, miso, noodles, huevo poche, bondiola braseada, verdeo, boniato crocante, alga kombu, pickles de cebolla morada, sriracha"),
    new Producto("Mirinda 2L", "3000", false, "./multimedia/cards/mirinda.png",''),
    new Producto("Sprite 1.5L", "2500", false, "./multimedia/cards/sprite.png",''),
    new Producto("Coca-cola de 2.25L", "3100", false, "./multimedia/cards/cocacola.png",''),
    new Producto("Agua Mineral de 2.25L", "3100", false, "./multimedia/cards/agua.png",'')
];


const productosJSON = JSON.stringify(productosArray);
localStorage.setItem('productos', productosJSON);

const contenedorProductos = document.getElementById('contenedor-productos');


function bebidasComidas() {

    contenedorProductos.innerHTML = '';

    productosArray.forEach(producto => {
        const div = document.createElement('div');
        div.classList.add('card');
        div.innerHTML = `
            <img src="${producto.img}" alt="${producto.nombre}">
           <section class=texto> <h3>${producto.nombre}</h3>
            <p>${producto.desc}</p>
            <p>Precio: <b>$${producto.precio}</b></p></section>
            <button> <span>Agregar pedido</span></button>
        `;
        contenedorProductos.appendChild(div);
    });
}

bebidasComidas();



function productosFiltrados(esComida) {

    const productosFiltrados = productosArray.filter(producto => producto.esComida === esComida);

    contenedorProductos.innerHTML = '';

    productosFiltrados.forEach(producto => {
        const div = document.createElement('div');
        div.classList.add('card');
        div.innerHTML = `
            <img src="${producto.img}" alt="${producto.nombre}">
            <section class=texto>
            <h3>${producto.nombre}</h3>
            <p>${producto.desc}</p>
            <p>Precio: $${producto.precio}</p> </section>
            <button> <span>Agregar pedido</span></button>
        `;
        contenedorProductos.appendChild(div);
    });

    esComida ? localStorage.setItem('ultimaEleccion', 'comidas') : localStorage.setItem('ultimaEleccion', 'bebidas');
}

const byc = document.getElementById('byc');
const bebidas = document.getElementById('be');
const comidas = document.getElementById('co');



byc.addEventListener('click', () => bebidasComidas());


bebidas.addEventListener('click', () => productosFiltrados(false));


comidas.addEventListener('click', () => productosFiltrados(true));


const ultimaEleccion = localStorage.getItem('ultimaEleccion');


ultimaEleccion === 'comidas' || ultimaEleccion === 'bebidas' ? productosFiltrados(ultimaEleccion === 'comidas') : bebidasComidas();











