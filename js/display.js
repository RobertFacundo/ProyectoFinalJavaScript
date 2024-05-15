
// document.addEventListener('DOMContentLoaded', function() {
//     const gridButton = document.getElementById('grid');
//     const listButton = document.getElementById('lista');
//     const productsContainer = document.querySelector('.contenedor-productos');

    
//     function displayGrid() {
//         productsContainer.classList.remove('lista');
//         gridButton.classList.add('active');
//         listButton.classList.remove('active');
        
//         localStorage.setItem('vista', 'grid');
//     }

   
//     function displayList() {
//         productsContainer.classList.add('lista');
//         listButton.classList.add('active');
//         gridButton.classList.remove('active');
    
//         localStorage.setItem('vista', 'lista');
//     }

//     gridButton.addEventListener('click', displayGrid);
//     listButton.addEventListener('click', displayList);

   
//     const eleccionPrevia = localStorage.getItem('vista');

//     eleccionPrevia === 'lista' ? displayList() : displayGrid();
// });

document.addEventListener('DOMContentLoaded', function() {
    const gridButton = document.getElementById('grid');
    const listButton = document.getElementById('lista');
    const productsContainer = document.querySelector('.contenedor-productos');

    function display(modoDisplay) {
        if (modoDisplay === 'lista') {
            productsContainer.classList.add('lista');
            listButton.classList.add('active');
            gridButton.classList.remove('active');
        } else {
            productsContainer.classList.remove('lista');
            gridButton.classList.add('active');
            listButton.classList.remove('active');
        }

        localStorage.setItem('vista', modoDisplay);
    }

    gridButton.addEventListener('click', () => display('grid'));
    listButton.addEventListener('click', () => display('lista'));

    const eleccionPrevia = localStorage.getItem('vista');
    display(eleccionPrevia || 'grid');
});