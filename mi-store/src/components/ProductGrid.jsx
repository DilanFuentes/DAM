// src/components/ProductGrid.jsx
import React from "react";
import ProductCard from "./ProductCard";

export default function ProductGrid({ productos }) {
return (
<div className="grid-productos">
    {productos.map((p, i) => <ProductCard key={i} producto={p} />)}
</div>
);
}
