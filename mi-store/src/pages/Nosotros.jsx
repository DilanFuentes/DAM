// src/pages/Nosotros.jsx
import React from "react";
import Navbar from "../components/Navbar";

export default function Nosotros() {
return (
<>
    <Navbar />
    <main className="pagina-nosotros">
    <h1>Sobre Nosotros</h1>
    <p>
        En <strong>Mi Store</strong> nos dedicamos a ofrecer los mejores productos
        al mejor precio. Nuestra misión es entregar calidad, atención personalizada
        y una experiencia de compra única.
    </p>

    <p>
        Somos un equipo apasionado por la innovación y la satisfacción de nuestros clientes.
    </p>
    </main>
</>
);
}
