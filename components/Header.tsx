import React from 'react';
import { useCart } from '../context/CartContext';

export default function Header({ onCartOpen }: { onCartOpen: () => void }) {
  const { state } = useCart();
  const count = state.items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <a className="brand" href="/">
          <img src="/logo.svg" alt="ByteMarket" className="logo-img" />
          <span>
            <strong>ByteMarket</strong>
            <small>Hardware que se ve pro</small>
          </span>
        </a>
        <nav className="header-links" aria-label="Principal">
          <a href="#catalogo">Catálogo</a>
          <a href="/cart">Carrito</a>
        </nav>
        <button className="cart-btn cart-trigger" onClick={onCartOpen}>
          Carrito <span>({count})</span>
        </button>
      </div>
    </header>
  );
}
