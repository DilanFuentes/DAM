// src/pages/Inicio.jsx
import React from "react";
import Navbar from "../components/Navbar";
import Video from "../assets/wrest.mp4";
import capN from "../assets/capN.png";

export default function Inicio() {
return (
<div className="inicio-page" style={{
    backgroundImage: `url(${capN})`,
    backgroundSize: "cover",
    backgroundPosition: "center"
}}>
    <Navbar />
    <section id="inicio" className="inicio">
    <video autoPlay muted loop className="video-fondo">
        <source src={Video} type="video/mp4" />
        Tu navegador no soporta el video.
    </video>
    <div className="contenido-texto-inicio">
        <h1 className="titulo1">BIENVENIDOS</h1>
        <h1 className="titulo2">A</h1>
        <h1 className="titulo3">WRESTLINGSHOP</h1>
        <p>Equipamiento original y de calidad para los verdaderos luchadores.</p>
    </div>
    </section>
</div>
);
}
