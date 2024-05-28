class Producto {
    constructor(id, nombre, precio, esComida, img, desc) {
        this.id = id;
        this.nombre = nombre;
        this.precio = parseInt(precio, 10);
        this.esComida = esComida;
        this.img = img;
        this.desc = desc;
    }
}

let productosArray = [];

fetch('./data/productos.json')
    .then(response => response.json())
    .then(data => {
        productosArray = data.map(producto => new Producto(
            producto.id, producto.nombre, producto.precio,
            producto.esComida, producto.img, producto.desc
        ));

        const productosJSON = JSON.stringify(productosArray);
        localStorage.setItem('productos', productosJSON);

        bebidasComidas();
    })

    .catch(error => console.error('error al cargar productos', error));



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
            <button class="agregar-al-carrito"> <span class="agregar-al-carrito">Agregar pedido</span></button>
        `;
        contenedorProductos.appendChild(div);
    });
}

bebidasComidas();


document.addEventListener('DOMContentLoaded', function () {
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
            <p>Precio: <b>$${producto.precio}</b></p> </section>
            <button class="agregar-al-carrito"> <span>Agregar pedido</span></button>
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

    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    const carritoBody = document.getElementById('carrito-body');
    const totalElement = document.getElementById('total');


    function actualizarCarrito() {
        carritoBody.innerHTML = '';
        let total = 0;

        carrito.forEach((producto, index) => {
            const subtotal = producto.precio * producto.cantidad;
            total += subtotal;

            const tr = document.createElement('tr');
            tr.innerHTML = `
            <td>${producto.nombre}</td>
            <td>$${producto.precio}</td>
            <td>${producto.cantidad}</td>
            <td>$${subtotal}</td>
            <td>
                <button><i data-index="${index}" class="fa-solid fa-xmark eliminar-producto"></i></button>
            </td>
        `;
            carritoBody.appendChild(tr);
        });

        totalElement.textContent = `$${total}`;
        localStorage.setItem('carrito', JSON.stringify(carrito));
    }

    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('agregar-al-carrito')) {
            const productoDiv = e.target.closest('.card');
            const productoId = productoDiv.querySelector('img').alt;

            const producto = productosArray.find(p => p.nombre === productoId);
            const productoEnCarrito = carrito.find(p => p.id === producto.id);

            if (productoEnCarrito) {
                productoEnCarrito.cantidad++;
            } else {
                carrito.push({ ...producto, cantidad: 1 });
            }

            actualizarCarrito();

            Swal.fire({
                icon: 'success',
                title: 'Producto añadido',
                text: `${producto.nombre} ha sido añadido al carrito.`,
                showConfirmButton: false,
                timer: 1300,
                customClass: {
                    popup: 'my-swal-font',
                    title: 'my-swal-font',
                    content: 'my-swal-font',
                    confirmButton: 'my-swal-font'
                }
            });
        }

        if (e.target.classList.contains('eliminar-producto')) {
            const index = e.target.dataset.index;
            carrito.splice(index, 1);
            actualizarCarrito();
        }

        if (e.target.id === 'vaciar-carrito') {
            if (carrito.length > 0) {
                Swal.fire({
                    title: '¿Estás seguro?',
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#2CCD46',
                    cancelButtonColor: '#1c6907',
                    confirmButtonText: 'Sí, vaciar carrito',
                    cancelButtonText: 'Cancelar',
                    customClass: {
                        popup: 'my-swal-font',
                        title: 'my-swal-font',
                        content: 'my-swal-font',
                        confirmButton: 'my-swal-font',
                        cancelButton: 'my-swal-font'
                    }
                }).then((result) => {
                    if (result.isConfirmed) {
                        carrito.length = 0;
                        actualizarCarrito();
                        Swal.fire({
                            icon: 'success',
                            title: '¡Carrito vaciado!',
                            text: 'Tu carrito ha sido vaciado.',
                            showConfirmButton: true,
                            confirmButtonColor: '#2CCD46',
                            customClass: {
                                popup: 'my-swal-font',
                                title: 'my-swal-font',
                                content: 'my-swal-font',
                                confirmButton: 'my-swal-font'
                            }
                        });
                    }
                }).catch((error) => {
                    console.error('Error vaciando el carrito:', error);
                    Swal.fire({
                        icon: 'error',
                        title: 'Error',
                        text: 'Hubo un problema vaciando el carrito. Por favor, intenta de nuevo.',
                        showConfirmButton: true,
                        confirmButtonColor: '#2CCD46',
                        customClass: {
                            popup: 'my-swal-font',
                            title: 'my-swal-font',
                            content: 'my-swal-font',
                            confirmButton: 'my-swal-font'
                        }
                    });
                });
            } else {
                Swal.fire({
                    icon: 'info',
                    title: 'Carrito vacío',
                    text: 'No hay productos en el carrito para vaciar.',
                    showConfirmButton: false,
                    timer: 1900,
                    customClass: {
                        popup: 'my-swal-font',
                        title: 'my-swal-font',
                        content: 'my-swal-font',
                        confirmButton: 'my-swal-font'
                    }
                });
            }
        }

        if (e.target.id === 'realizar-pedido') {
            if (carrito.length > 0) {
                Swal.fire({
                    icon: 'success',
                    title: 'Pedido realizado',
                    text: '¡Tu pedido ha sido realizado con éxito!',
                    showConfirmButton: true,
                    confirmButtonColor: '#2CCD46',
                    customClass: {
                        popup: 'my-swal-font',
                        title: 'my-swal-font',
                        content: 'my-swal-font',
                        confirmButton: 'my-swal-font'
                    }
                });
                carrito.length = 0;
                actualizarCarrito();
            } else {
                Swal.fire({
                    icon: 'info',
                    title: 'Carrito vacío',
                    text: 'Agrega productos al carrito para poder confirmar la compra',
                    showConfirmButton: false,
                    timer: 1900,
                    customClass: {
                        popup: 'my-swal-font',
                        title: 'my-swal-font',
                        content: 'my-swal-font',
                        confirmButton: 'my-swal-font'
                    }
                });
            }
        }
    });

    actualizarCarrito();

});















