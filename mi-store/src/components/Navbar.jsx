import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useCart } from "../context/CartContext";
import logo from "../assets/unnamed.png";

export default function Navbar() {
  const { carrito } = useCart();
  const contador = carrito.reduce((acc, p) => acc + p.cantidad, 0);
  const navigate = useNavigate();
  const location = useLocation();

  const goToSection = (id) => {
    if (location.pathname !== "/") {
      navigate("/", { replace: false });
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 150);
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/"><img src={logo} alt="Logo" /></Link>
      </div>
      <ul className="nav-links">
        <li><button onClick={() => goToSection("inicio")}>Inicio</button></li>
        <li><button onClick={() => goToSection("productos")}>Productos</button></li>
        <li><button onClick={() => goToSection("nosotros")}>Nosotros</button></li>
        <li><button onClick={() => goToSection("contacto")}>Contacto</button></li>
        <li><Link to="/carrito">🛒 {contador}</Link></li>
      </ul>
    </nav>
  );
}
