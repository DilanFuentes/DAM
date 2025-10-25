// src/pages/Productos.jsx
import React from "react";
import Navbar from "../components/Navbar";
import ProductGrid from "../components/ProductGrid";
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

export default function Productos() {
return (
<>
    <Navbar />
    <section id="productos" className="productos">
    <div className="contenido-texto-productos">
        <h2>Nuestros Productos</h2>
        <p>Nike, Rudis, Cliff Keen</p>
        <ProductGrid productos={productos} />
    </div>
    </section>
</>
);
}
