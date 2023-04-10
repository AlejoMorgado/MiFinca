
const botonMenu = document.createElement('button');
botonMenu.innerText = 'Menu';
botonMenu.addEventListener('click', function () {
    document.querySelector('.menu-lateral').classList.toggle('activo');

});

document.querySelector('.contenedor1').appendChild(botonMenu);
