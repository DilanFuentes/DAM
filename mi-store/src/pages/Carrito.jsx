// src/pages/Carrito.jsx
import React from "react";
import Navbar from "../components/Navbar";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

export default function Carrito() {
const { carrito, vaciarCarrito, cambiarCantidad, total } = useCart();
const navigate = useNavigate();

return (
<>
    <Navbar />
    <main className="pagina-carrito">
    <h2>Tu Carrito</h2>
    <div id="carrito-container">
        {carrito.length === 0 ? (
        <p>Tu carrito está vacío.</p>
        ) : (
        carrito.map((p, i) => (
            <div key={i} className="producto-carrito">
            <img src={p.imagen} alt={p.nombre} width="100" />
            <div className="detalle">
                <strong>{p.nombre}</strong>
                <p>Precio unitario: ${p.precio.toLocaleString()}</p>
                <p>
                Cantidad:{" "}
                <input
                    type="number"
                    min="1"
                    value={p.cantidad}
                    onChange={(e) => cambiarCantidad(p.nombre, Number(e.target.value))}
                />
                </p>
                <p>Subtotal: ${ (p.precio * p.cantidad).toLocaleString() }</p>
            </div>
            </div>
        ))
        )}
    </div>

    <h3>Total: ${total.toLocaleString()}</h3>
    <div className="botones-carrito">
        <button onClick={vaciarCarrito}>Vaciar carrito</button>
        <button onClick={() => navigate("/checkout")}>Pagar</button>
    </div>
    </main>
</>
);
}
