// src/pages/Contacto.jsx
import React from "react";
import Navbar from "../components/Navbar";

export default function Contacto() {
return (
<>
    <Navbar />
    <main className="pagina-contacto">
    <h1>Contacto</h1>
    <p>Puedes comunicarte con nosotros a través del siguiente formulario:</p>

    <form className="form-contacto">
        <input type="text" placeholder="Tu nombre" required />
        <input type="email" placeholder="Tu correo" required />
        <textarea placeholder="Escribe tu mensaje" required></textarea>
        <button type="submit">Enviar</button>
    </form>
    </main>
</>
);
}
