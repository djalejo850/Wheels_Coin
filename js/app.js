// app.js
let contador = 10000;

function actualizarContador() {
    const contadorElement = document.getElementById('contador');
    contadorElement.textContent = contador;
}

function sumarCadaSegundo() {
    setInterval(() => {
        contador += 13;
        actualizarContador();
    }, 1000);
}

// Inicializa el contador al cargar la página
actualizarContador();
sumarCadaSegundo();