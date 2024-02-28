document.addEventListener("DOMContentLoaded", function () {
    function createCards(cardContainerId, jsonDataFile) {
        const cardContainer = document.getElementById(cardContainerId);
        // Obtener datos del JSON
        fetch(jsonDataFile)
            .then(response => response.json())
            .then(data => {
                data.forEach(cardData => {
                    // Crear elemento de tarjeta
                    const card = document.createElement('div');
                    card.classList.add('DC');

                    // Establecer imagen de fondo
                    card.style.backgroundImage = `url(${cardData.imagenURL})`;
                    card.style.backgroundSize = 'contain';
                    card.style.backgroundRepeat = 'no-repeat';

                    // Crear HTML interno
                    card.innerHTML = `
                        <a href="#">
                            <div class="IM" id="IM1"></div>
                            <div class="I">
                                <h4>${cardData.nombre}</h4>
                            </div>
                            <div class="I">
                                <p>Talla: ${cardData.talla}</p>
                            </div>
                            <div class="I">
                                <div class="P mt-3 mb-2">
                                    <span>${cardData.precio}</span>
                                </div>
                            </div>
                        </a>
                    `;

                    // Agregar tarjeta al contenedor
                    cardContainer.appendChild(card);
                });
            })
            .catch(error => console.error('Error al obtener datos:', error));
    }

    // Llamar a la función para las tarjetas de Nike
    createCards('cardContainerNike', 'nike.json');

    // Llamar a la función para las tarjetas de Jordan
    createCards('cardContainerJordan1', 'jordan1.json');

    createCards('cardContainerJordan3', 'jordan3.json');

    createCards('cardContainerJordan4', 'jordan4.json');

    createCards('cardContainerJordan5', 'jordan5.json');

});
