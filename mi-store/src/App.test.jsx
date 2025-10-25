import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import ProductCard from './components/ProductCard';
import Navbar from './components/Navbar';
import { CartProvider } from './context/CartContext';

// PRUEBA 1: Verificar que ProductCard se renderiza correctamente
describe('ProductCard Component', () => {
it('muestra correctamente el nombre y precio del producto', () => {
const productoMock = {
    nombre: 'Nike Tawa',
    precio: 180000,
    imagen: '/test.jpg'
};

render(
    <BrowserRouter>
    <CartProvider>
        <ProductCard producto={productoMock} />
    </CartProvider>
    </BrowserRouter>
);

expect(screen.getByText('Nike Tawa')).toBeDefined();
expect(screen.getByText(/180/)).toBeDefined();
});
});

// PRUEBA 2: Verificar que el botón agregar al carrito existe
describe('Botón Agregar al Carrito', () => {
it('el botón está presente y es clickeable', () => {
const productoMock = {
    nombre: 'Nike Inflict SE',
    precio: 200000,
    imagen: '/test.jpg'
};

render(
    <BrowserRouter>
    <CartProvider>
        <ProductCard producto={productoMock} />
    </CartProvider>
    </BrowserRouter>
);

const boton = screen.getByText(/Agregar al carrito/i);
expect(boton).toBeDefined();

fireEvent.click(boton);
expect(boton).toBeDefined();
});
});

// PRUEBA 3: Verificar que Navbar se renderiza con el logo
describe('Navbar Component', () => {
it('renderiza el logo correctamente', () => {
render(
    <BrowserRouter>
    <CartProvider>
        <Navbar />
    </CartProvider>
    </BrowserRouter>
);

const logo = screen.getByAltText('Logo');
expect(logo).toBeDefined();
});
});