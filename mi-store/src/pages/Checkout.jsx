import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { useCart } from '../context/CartContext';

export default function Checkout() {
    const navigate = useNavigate();
    const { carrito, total, vaciarCarrito } = useCart();
    
    // Usamos 'productosAComprar' para guardar una copia del carrito antes de vaciarlo
    // Esto es crucial para pasar los datos a la boleta
    const [productosAComprar, setProductosAComprar] = useState(carrito); 
    
    const [formData, setFormData] = useState({
        nombre: '',
        email: '',
        telefono: '',
        direccion: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (productosAComprar.length === 0) {
            alert("Tu carrito está vacío");
            navigate('/');
            return;
        }

        // 1. Guardar los datos del cliente y los productos en sessionStorage
        // para que la página de /boleta pueda recuperarlos.
        const cliente = {
            nombre: formData.nombre,
            email: formData.email,
            telefono: formData.telefono,
            direccion: formData.direccion
        };
        
        // El total se puede calcular en la boleta, pero es útil pasarlo también
        const datosBoleta = {
            cliente: cliente,
            productos: productosAComprar,
            total: total
        };

        sessionStorage.setItem("datosBoleta", JSON.stringify(datosBoleta));

        // 2. Vaciar el carrito de la aplicación (Context)
        vaciarCarrito();

        // 3. Redirigir a la página de la boleta (asegúrate de que esta ruta exista en tu Router)
        navigate('/boleta'); 
    };

    if (productosAComprar.length === 0) {
        return (
            <>
                <Navbar />
                <div className="checkout-page" style={{ padding: '100px 20px', textAlign: 'center' }}>
                    <h1>Tu carrito está vacío</h1>
                    <button onClick={() => navigate('/')}>Volver a la tienda</button>
                </div>
            </>
        );
    }

    return (
        <>
            <Navbar />
            <div className="checkout-page">
                <div className="checkout-container">
                    <h1>Finalizar Compra</h1>

                    <div className="resumen-compra">
                        <h2>Resumen de tu compra</h2>
                        {productosAComprar.map((item, index) => (
                            <div key={index} className="item-resumen">
                                <span>{item.nombre} x{item.cantidad}</span>
                                <span>${(item.precio * item.cantidad).toLocaleString()} CLP</span>
                            </div>
                        ))}
                        <div className="total-resumen">
                            <strong>Total:</strong>
                            <strong>${total.toLocaleString()} CLP</strong>
                        </div>
                    </div>

                    <form onSubmit={handleSubmit} className="checkout-form">
                        <h2>Datos de Envío</h2>

                        <label>Nombre Completo *</label>
                        <input
                            type="text"
                            name="nombre"
                            value={formData.nombre}
                            onChange={handleChange}
                            required
                        />

                        <label>Email *</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />

                        <label>Teléfono *</label>
                        <input
                            type="tel"
                            name="telefono"
                            value={formData.telefono}
                            onChange={handleChange}
                            required
                        />

                        <label>Dirección *</label>
                        <input
                            type="text"
                            name="direccion"
                            value={formData.direccion}
                            onChange={handleChange}
                            required
                        />

                        <button type="submit" className="btn-finalizar">
                            Confirmar Compra
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
}