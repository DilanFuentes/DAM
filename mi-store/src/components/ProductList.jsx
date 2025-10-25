import React from "react";
import ProductCard from "./ProductCard";
import prod1 from "../assets/prod1.png";
import prod2 from "../assets/prod2.png";

const products = [
{ id: 1, name: "Audífonos", price: 19990, img: prod1 },
{ id: 2, name: "Mouse Gamer", price: 14990, img: prod2 },
];

export default function ProductList({ addToCart }) {
return (
<div className="product-list">
    {products.map((p) => (
    <ProductCard key={p.id} product={p} addToCart={addToCart} />
    ))}
</div>
);
}
