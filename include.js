function cargarContenido(url, idElemento) {
    fetch(url)
        .then(response => response.text())
        .then(html => {
            document.getElementById(idElemento).innerHTML = html;
        })
        .catch(error => console.log(error));
}

// Cargar el encabezado y el pie de página
cargarContenido('header.html', 'header');
cargarContenido('footer.html', 'footer');