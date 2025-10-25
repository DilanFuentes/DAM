// src/components/ProductCard.jsx
import React from "react";
import { useCart } from "../context/CartContext";

export default function ProductCard({ producto }) {
const { agregarProducto } = useCart();

return (
<div className="producto">
    <img src={producto.imagen} alt={producto.nombre} />
    <h3>{producto.nombre}</h3>
    <p>${producto.precio.toLocaleString()} CLP</p>
    <button onClick={() => agregarProducto(producto)} className="agregar-carrito">
    Agregar al carrito
    </button>
</div>
);
}
