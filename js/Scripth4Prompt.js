// Hola, para la pre entrega se me ocurrió hacer un prompt donde el usuario ingrese su nombre,
// y ese mismo nombre usarlo para que forme parte del h4 del header !

//---------------------------------------------------------

// Esta fue la manera que encontre utilizando for

// let nombre;

// for (;;) {
//     nombre = prompt("¡Hola! Bienvenido a la primer pre-entrega del curso de JavaScript. \n\n Antes de continuar, por favor, ingresa un nombre:");

//     if (nombre && /^[A-Za-z]+$/.test(nombre) && nombre.length > 3) { 
//         alert("Muchas Gracias, adelante")
//         break;
//     }

//     if (!nombre) {
//         alert("Por favor, ingresa un nombre válido.");
//     } else if (!/^[A-Za-z]+$/.test(nombre)) {  
//         alert("Nonono, un nombre contiene solo letras, no me mientas");
//     } else if (nombre.length <= 3) {  
//         alert("Ni un sobrenombre tiene tan pocas letras. Por favor, ingresa un nombre de verdad.");
//     }
// }

// let mensaje = document.querySelector("h4"); 
// mensaje.textContent = "¡Scrollea sin culpa, " + nombre + "!";  

//misma pero utilizando funcion

// function nombreIngresado() {
//     let nombre;
//     for (;;) {
//         nombre = prompt("¡Hola! Bienvenido a la primer pre-entrega del curso de JavaScript. \n\n Antes de continuar, por favor, ingresa un nombre:");
    
//         if (nombre && /^[A-Za-z]+$/.test(nombre) && nombre.length > 3) { 
//             alert("Muchas Gracias, adelante");
//             break;
//         }
    
//         if (!nombre) {
//             alert("Por favor, ingresa un nombre válido.");
//         } else if (!/^[A-Za-z]+$/.test(nombre)) {   // esta linea verifica si el nombre ingresado contiene algun caracter que no sea letra
//             alert("Nonono, un nombre contiene solo letras, no me mientas");
//         } else if (nombre.length <= 3) {      // esta linea verifica si el nombre ingresado contiene tres letras o menos
//             alert("Ni un sobrenombre tiene tan pocas letras. Por favor, ingresa un nombre de verdad.");
//         }
//     }
//     return nombre;                          // return para poder utilizar el nombre elegido fuera de la funcion
// }

// let nombre = nombreIngresado();

// let mensaje = document.querySelector("h4"); //querySelector para seleccionar el elemento h4 del header
// mensaje.textContent = "¡Scrollea sin culpa, " + nombre + "!";  //textContent para poder cambiar el contenido del texto

//-----------------------------------------------------------------

// UTILIZANDO !!WHILE!! A PEDIDO PARA APROBAR PRE ENTREGA YFP

function nombreIngresado() {
    let nombre;
    while (true) {
        nombre = prompt("¡Hola! Bienvenido a la segunda pre-entrega del curso de JavaScript. \n\n Antes de continuar, por favor, ingresa un nombre:");
    
        if (nombre && /^[A-Za-z]+$/.test(nombre) && nombre.length > 3) { 
            alert("Muchas Gracias, adelante");
            break;
        }
    
        if (!nombre) {
            alert("Por favor, ingresa un nombre válido.");
        } else if (!/^[A-Za-z]+$/.test(nombre)) {
            alert("Nonono, un nombre contiene solo letras, no me mientas");
        } else if (nombre.length <= 3) {
            alert("Ni un sobrenombre tiene tan pocas letras. Por favor, ingresa un nombre de verdad.");
        }
    }
    return nombre;
}

let nombre = nombreIngresado();

let mensaje = document.querySelector("h4");
mensaje.textContent = "¡Scrollea sin culpa, " + nombre + "!";


//--------------------------------------------------------------------

// Utilizando do...while

// let nombre;

// do {
//     nombre = prompt("¡Hola! Bienvenido a la primer pre-entrega del curso de JavaScript. \n\n Antes de continuar, por favor, ingresa un nombre:");

//     if (!nombre) {
//         alert("Por favor, ingresa un nombre válido.");
//     } else if (!/^[A-Za-z]+$/.test(nombre)) {
//         alert("Nonono, un nombre contiene solo letras, no me mientas");
//     } else if (nombre.length <= 3) {
//         alert("Ni un sobrenombre tiene tan pocas letras. Por favor, ingresa un nombre de verdad.");
//     }
// } while (!nombre || !/^[A-Za-z]+$/.test(nombre) || nombre.length <= 3);

// let mensaje = document.querySelector("h4");
// mensaje.textContent = "¡Scrollea sin culpa, " + nombre + "!";

// --------------------------------------------------------------------
// misma manera pero utilizando una funcion

// function validarNombre(nombre) {
//     if (!nombre) {
//         alert("Por favor, ingresa un nombre válido.");
//         return false;
//     } else if (!/^[A-Za-z]+$/.test(nombre)) {
//         alert("Nonono, un nombre contiene solo letras, no me mientas");
//         return false;
//     } else if (nombre.length <= 3) {
//         alert("Ni un sobrenombre tiene tan pocas letras. Por favor, ingresa un nombre de verdad.");
//         return false;
//     }
//     return true;
// }

// let nombre;

// do {
//     nombre = prompt("¡Hola! Bienvenido a la primer pre-entrega del curso de JavaScript. \n\n Antes de continuar, por favor, ingresa un nombre:");
// } while (!validarNombre(nombre));

// let mensaje = document.querySelector("h4");
// mensaje.textContent = "¡Scrollea sin culpa, " + nombre + "!";



// --------------------------------------------------------------------
// usando switch

// let nombre;

// do {
//     nombre = prompt("¡Hola! Bienvenido a la primer pre-entrega del curso de JavaScript. \n\n Antes de continuar, por favor, ingresa un nombre:");

//     switch (true) {
//         case !nombre:
//             alert("Por favor, ingresa un nombre válido.");
//             break;
//         case !/^[A-Za-z]+$/.test(nombre):
//             alert("Nonono, un nombre contiene solo letras, no me mientas");
//             break;
//         case nombre.length <= 3:
//             alert("Ni un sobrenombre tiene tan pocas letras. Por favor, ingresa un nombre de verdad.");
//             break;
//         default:
//             alert("¡Muchas Gracias, adelante!");
//             break;
//     }
// } while (!nombre || !/^[A-Za-z]+$/.test(nombre) || nombre.length <= 3);

// let mensaje = document.querySelector("h4");
// mensaje.textContent = "¡Scrollea sin culpa, " + nombre + "!";