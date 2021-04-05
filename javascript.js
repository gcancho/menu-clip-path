const iconoMenu = document.getElementById('icono-menu');
const listaMenu = document.getElementById('lista-menu');

iconoMenu.addEventListener('click',()=>{
    listaMenu.classList.toggle('activate');
})
