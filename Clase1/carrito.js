let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

// Función para actualizar el contador del carrito
function actualizarContador() {
    const contador = document.querySelector('.nav-links .contador');
    const cantidadTotal = carrito.reduce((acc, producto) => acc + producto.cantidad, 0);
    contador.textContent = cantidadTotal;
}

// Agregar producto al carrito
function agregarAlCarrito(productoNuevo) {
    const productoExistente = carrito.find(p => p.nombre === productoNuevo.nombre);
    if (productoExistente) {
        productoExistente.cantidad += 1;
    } else {
        carrito.push({ ...productoNuevo, cantidad: 1 });
    }
    localStorage.setItem('carrito', JSON.stringify(carrito));
    actualizarContador();
    alert(`Agregaste ${productoNuevo.nombre} al carrito.`);
}

// Botones "Agregar al carrito"
document.querySelectorAll('.agregar-carrito').forEach(button => {
    button.addEventListener('click', () => {
        const nombre = button.getAttribute('data-nombre');
        const precio = parseFloat(button.getAttribute('data-precio'));
        const imagen = button.getAttribute('data-imagen') || 'default.jpg';
        agregarAlCarrito({ nombre, precio, imagen });
    });
});

// Vaciar carrito
document.getElementById('vaciar-carrito').addEventListener('click', () => {
    if(carrito.length === 0) {
        alert("El carrito ya está vacío");
        return;
    }
    carrito = [];
    localStorage.removeItem('carrito');
    actualizarContador();
    alert("Carrito vaciado");
});

// Confirmar compra → ir a checkout
document.getElementById('confirmar-compra').addEventListener('click', () => {
    if(carrito.length === 0) {
        alert("Tu carrito está vacío");
        return;
    }
    // Guardar productos para mostrar en checkout
    localStorage.setItem('carritoParaPago', JSON.stringify(carrito));
    window.location.href = "checkout.html";
});

// Actualizar contador al cargar
actualizarContador();
