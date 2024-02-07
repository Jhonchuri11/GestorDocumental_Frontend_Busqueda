const anotherSearchSection = document.getElementById('SearchSection');
const showSearchButton = document.getElementById('showSearch');

showSearchButton.addEventListener('click', function() {
    if (anotherSearchSection.style.display === 'none') {
        anotherSearchSection.style.display = 'block';
    } else {
        anotherSearchSection.style.display = 'none';
    }
});

function cambioEstado() {
    var button = document.getElementById("showSearch");
    if (button.innerHTML === "Mostrar filtros") {
        button.innerHTML = "Ocultar filtros";
    } else {
        button.innerHTML = "Mostrar filtros";
    }
}

// Funcionalidad para el agregado y eliminado de contenidos de filtros
function agregarelemento() {
    // Primero clonamos el primer elemento y agregamos lo nuevo como clon al contenedor
    var contenedor = document.getElementById("contenedor");
    var elementoOriginal = contenedor.querySelector('.elemento');
    var nuevoElemento = elementoOriginal.cloneNode(true);
    contenedor.appendChild(nuevoElemento);

    // Limpiamos el input de nuevo elemento
    var inputs = nuevoElemento.querySelectorAll('input');
    inputs.forEach(function(input) {
        input.value = '';
    });
}

// Funcionalidad para eliminar o quitar elemento de contenidos de filtros
function eliminarElemento(row) {
    var contenedor = document.getElementById("contenedor");
    var elemento = contenedor.getElementsByClassName("elemento");
    
    if (elemento.length > 1) {
        var elementoPadre = row.parentNode.parentNode.parentNode;
        contenedor.removeChild(elementoPadre);
    }
}
