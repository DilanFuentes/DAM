// src/pages/Boleta.jsx
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function Boleta() {
    const [datosBoleta, setDatosBoleta] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const storedData = sessionStorage.getItem("datosBoleta"); 
        
        if (storedData) {
            const datos = JSON.parse(storedData);
            setDatosBoleta(datos);
            // Opcional: limpiar los datos para futuras compras
            // sessionStorage.removeItem("datosBoleta"); 
        }
        setIsLoaded(true);
    }, []);

    // Si no hay datos después de la carga, redirigir
    if (isLoaded && !datosBoleta) {
        return (
            <>
                <Navbar />
                <main id="boleta-container" style={{ textAlign: 'center', padding: '100px 20px' }}>
                    <div id="boleta" style={{ background: 'rgba(0,0,0,0.8)', color: 'white' }}>
                        <p>No hay información de la compra. Por favor, realiza un pedido.</p>
                        <button onClick={() => navigate('/')}>Volver a la Tienda</button>
                    </div>
                </main>
            </>
        );
    }

    if (!datosBoleta) {
        return (
            <>
                <Navbar />
                <main style={{ padding: '100px 20px', textAlign: 'center', color: 'white' }}>
                    <p>Cargando información de la compra...</p>
                </main>
            </>
        );
    }

    const { cliente, productos, total } = datosBoleta;

    return (
        <>
            <Navbar />
            {/* home-root debe tener el fondo capN.png para las páginas principales, pero lo definimos en CSS */}
            <div className="home-root"> 
                <main id="boleta-container">
                    <div id="boleta"> 
                        <h2>¡Compra Confirmada!</h2>
                        
                        <h3>Detalles del Cliente</h3>
                        <p><strong>Cliente:</strong> {cliente.nombre}</p>
                        <p><strong>Email:</strong> {cliente.email}</p>
                        <p><strong>Teléfono:</strong> {cliente.telefono}</p>
                        <p><strong>Dirección:</strong> {cliente.direccion}</p>
                        <hr />
                        
                        <h3>Artículos Comprados</h3>
                        {productos.map((p, i) => (
                            <div key={i} className="producto-boleta">
                                <img src={p.imagen} alt={p.nombre} /> 
                                <div className="detalle-producto-boleta">
                                    <p><strong>Producto:</strong> {p.nombre}</p>
                                    <p><strong>Cantidad:</strong> {p.cantidad}</p>
                                    <p><strong>Precio unitario:</strong> ${p.precio.toLocaleString()} CLP</p>
                                    <p><strong>Subtotal:</strong> ${(p.precio * p.cantidad).toLocaleString()} CLP</p>
                                </div>
                            </div>
                        ))}
                        
                        <hr />
                        <h3>Total Pagado: ${total.toLocaleString()} CLP</h3>
                        
                        <button onClick={() => window.print()}>Imprimir Boleta / Descargar PDF</button>
                    </div>
                </main>
            </div>
        </>
    );
}