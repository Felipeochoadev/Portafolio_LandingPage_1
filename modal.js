document.addEventListener("DOMContentLoaded", () => {
    // Array optimizado con las rutas precisas
    const imagenesModal = [
        "assets/bomba-hidraulica-despiece-frontal.webp", 
        "assets/diagrama-tecnico-bomba-volqueta.webp", 
        "assets/plano-ensamble-bomba-hidraulica.webp"
    ];
    let indiceImagenActual = 0;

    // Referencias al DOM
    const modal = document.getElementById('modalExplorador');
    const imagenElemento = document.getElementById('imagenModal');
    const contadorElemento = document.getElementById('contadorModal');
    const botonAbrir = document.getElementById('abrirModal');
    const botonCerrar = document.getElementById('cerrarModal');
    const botonAtras = document.getElementById('botonAtrasModal');
    const botonAdelante = document.getElementById('botonAdelanteModal');

    // Funciones
    const actualizarImagenModal = () => {
        imagenElemento.style.opacity = '0';
        setTimeout(() => {
            imagenElemento.src = imagenesModal[indiceImagenActual];
            imagenElemento.style.opacity = '1';
            contadorElemento.innerText = `${indiceImagenActual + 1} / ${imagenesModal.length}`;
        }, 200);
    };

    const abrirModal = () => {
        modal.style.display = 'flex';
        // Timeout ligero para permitir que la transición de opacidad funcione
        setTimeout(() => modal.classList.add('activo'), 10);
        document.body.style.overflow = 'hidden';
        actualizarImagenModal();
    };

    const cerrarModal = () => {
        modal.classList.remove('activo');
        setTimeout(() => {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }, 400); // Sincronizado con CSS transition
    };

    const cambiarImagen = (direccion) => {
        indiceImagenActual += direccion;
        if (indiceImagenActual >= imagenesModal.length) indiceImagenActual = 0;
        if (indiceImagenActual < 0) indiceImagenActual = imagenesModal.length - 1;
        actualizarImagenModal();
    };

    // Event Listeners (Solo se registran una vez)
    botonAbrir.addEventListener('click', abrirModal);
    botonCerrar.addEventListener('click', cerrarModal);
    botonAtras.addEventListener('click', () => cambiarImagen(-1));
    botonAdelante.addEventListener('click', () => cambiarImagen(1));

    // Cerrar al hacer click afuera de la caja blanca
    modal.addEventListener('click', (e) => {
        if (e.target === modal) cerrarModal();
    });

    // Accesibilidad por teclado
    document.addEventListener('keydown', (e) => {
        if (!modal.classList.contains('activo')) return;
        
        if (e.key === "Escape") cerrarModal();
        if (e.key === "ArrowRight") cambiarImagen(1);
        if (e.key === "ArrowLeft") cambiarImagen(-1);
    });
});