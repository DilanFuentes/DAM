// src/context/CartContext.jsx
import React, { createContext, useState, useContext, useEffect } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
const [carrito, setCarrito] = useState(() => {
try {
    return JSON.parse(localStorage.getItem("carrito")) || [];
} catch {
    return [];
}
});

useEffect(() => {
localStorage.setItem("carrito", JSON.stringify(carrito));
}, [carrito]);

const agregarProducto = (producto) => {
setCarrito(prev => {
    const existe = prev.find(p => p.nombre === producto.nombre);
    if (existe) {
    return prev.map(p => p.nombre === producto.nombre ? { ...p, cantidad: p.cantidad + 1 } : p);
    }
    return [...prev, { ...producto, cantidad: 1 }];
});
};

const quitarProducto = (nombre) => {
setCarrito(prev => prev.filter(p => p.nombre !== nombre));
};

const cambiarCantidad = (nombre, cantidad) => {
if (cantidad <= 0) {
    quitarProducto(nombre);
    return;
}
setCarrito(prev => prev.map(p => p.nombre === nombre ? { ...p, cantidad } : p));
};

const vaciarCarrito = () => {
setCarrito([]);
};

const total = carrito.reduce((acc, p) => acc + (p.precio * p.cantidad), 0);

return (
<CartContext.Provider value={{ carrito, agregarProducto, quitarProducto, cambiarCantidad, vaciarCarrito, total }}>
    {children}
</CartContext.Provider>
);
}

export function useCart() {
return useContext(CartContext);
}
