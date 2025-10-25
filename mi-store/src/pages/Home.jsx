// src/pages/Home.jsx
import React from "react";
import Navbar from "../components/Navbar";
import ProductGrid from "../components/ProductGrid";
import capN from "../assets/capN.png";
import wrest from "../assets/wrest.mp4";

// importa los productos (imagenes ya en assets)
import producto1 from "../assets/producto1.jpg";
import producto2 from "../assets/producto2.jpg";
import producto3 from "../assets/producto3.jpg";
import producto4 from "../assets/producto4.jpg";
import producto5 from "../assets/producto5.jpg";
import producto6 from "../assets/producto6.jpg";
import producto7 from "../assets/producto7.jpg";
import producto8 from "../assets/producto8.jpg";
import producto9 from "../assets/producto9.jpg";

const productos = [
{ nombre: "Nike Tawa", precio: 180000, imagen: producto1 },
{ nombre: "Nike Inflict SE", precio: 200000, imagen: producto2 },
{ nombre: "Nike Inflict Blue", precio: 185000, imagen: producto3 },
{ nombre: "USAW Icon 2.0 Elite Singlet", precio: 85000, imagen: producto4 },
{ nombre: "USAW Icon 2.0 Elite Singlet", precio: 85000, imagen: producto5 },
{ nombre: "USAW Icon 2.0 Elite Singlet", precio: 85000, imagen: producto6 },
{ nombre: "Headgear Blue", precio: 48500, imagen: producto7 },
{ nombre: "Headgear White", precio: 48500, imagen: producto8 },
{ nombre: "Headgear Red", precio: 48500, imagen: producto9 },
];

export default function Home() {
return (
<div
    className="home-root"
    style={{
    backgroundImage: `url(${capN})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    }}
    >

    <Navbar />

    {/* INICIO */}
    <section id="inicio" className="inicio section">
    <div className="video-wrapper">
        <video className="video-fondo" autoPlay muted loop playsInline>
        <source src={wrest} type="video/mp4" />
        Tu navegador no soporta el video.
        </video>
    </div>
    <div className="contenido-texto-inicio">
        <h1 className="titulo1">BIENVENIDOS</h1>
        <h1 className="titulo2">A</h1>
        <h1 className="titulo3">WRESTLINGSHOP</h1>
        <p>Equipamiento original y de calidad para los verdaderos luchadores.</p>
    </div>
    </section>

    {/* PRODUCTOS */}
    <section id="productos" className="productos section">
    <div className="contenido-texto-productos">
        <h2>Nuestros Productos</h2>
        <p>Nike, Rudis, Cliff Keen</p>
        <ProductGrid productos={productos} />
    </div>
    </section>

    {/* NOSOTROS */}
    <section id="nosotros" className="nosotros section">
    <div className="contenido-texto-nosotros">
        <h2>Acerca de Nosotros</h2>
        <p>
                En <strong>WrestlingShop</strong> nos dedicamos con pasión al mundo del Wrestling.
                Sabemos lo complicado que resulta encontrar equipamiento y productos originales de calidad,
                especialmente en un mercado donde muchas veces lo que buscamos no está disponible.
            </p>
            <p>
                Por eso nace nuestra tienda: con el compromiso de acercar a fanáticos y luchadores todo lo necesario
                para entrenar, competir y vivir al máximo esta disciplina.
            </p>
            <p>
                Lo que nos diferencia es que no somos solo vendedores, <strong>también somos luchadores</strong>.
                Compartimos la misma pasión, los mismos desafíos y esa sensación de querer contar siempre
                con más y mejores productos.
            </p>
            <p>
                En WrestlingShop trabajamos día a día para seleccionar, importar y poner a tu alcance
                productos confiables y de gran calidad, siempre con la visión de fortalecer la comunidad del Wrestling
                en nuestro país.
            </p>
            <p>
                Queremos que al entrar a nuestra tienda sientas que llegaste al lugar correcto:
                un espacio creado por luchadores y para luchadores.
            </p>        {/* copia aquí todo el texto que quieras */}
    </div>
    </section>

    {/* CONTACTO */}
    <section id="contacto" className="contacto section">
    <div className="contenido-texto-contacto">
        <h2>Contacto</h2>
        <ul className="contacto-lista">
        <li>📱 <a href="https://wa.me/5491123456789" target="_blank" rel="noreferrer">WhatsApp</a></li>
        <li>📷 <a href="https://instagram.com/insaggi.wrest" target="_blank" rel="noreferrer">@insaggi.wrest</a></li>
        <li>📧 <a href="mailto:correo@wrestlingshop.com">correo@wrestlingshop.com</a></li>
        </ul>
    </div>
    </section>
</div>
);
}
