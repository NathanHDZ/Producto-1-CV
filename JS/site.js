
function toggleMenu() {
    var button = document.querySelector('.gg-menu-oreos');
    button.classList.toggle('gg-close'); 
    
    var menu = document.getElementsByClassName('js-menu');
    menu[0].classList.toggle('active');   
}

function fixPhotoOnScroll() {
    var photo = document.getElementById("photo-profile");
    
    // Usar window.scrollY para obtener el desplazamiento vertical actual
    if (window.scrollY > 50) {
    photo.style.marginTop = "0";
    } else {
    photo.style.marginTop = "-7rem";
    }
}
window.addEventListener("scroll", fixPhotoOnScroll, false);

function showImage(image) {
    // Crear una nueva imagen
    var newImage = document.createElement('img');
    newImage.src = image.src;
    newImage.removeAttribute('onclick');

    // Obtener el contenedor modal
    var modal = document.getElementById('preview');
        var eliminar = document.createElement('button');
        eliminar.textContent= 'CLOSE'
        eliminar.classList.add('boton')
    
    // Limpiar cualquier imagen anterior dentro del modal
    modal.innerHTML = '';

    // Agregar clase y nueva imagen al modal
    modal.classList.toggle('showModal');
    modal.appendChild(newImage);
    modal.appendChild(eliminar);

}

function cerrarModal(){
    var modal= document.getElementById('preview');
    modal.classList.remove('showModal')
}


