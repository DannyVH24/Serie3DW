import React from 'react';
import { useCart } from '../context/CartContext';

export default function Header({ onCartOpen }: { onCartOpen: () => void }) {
  const { state } = useCart();
  const count = state.items.reduce((s, it) => s + it.quantity, 0);
  return (
    <header className="header container">
      <div className="logo">ByteMarket</div>
      <div style={{display:'flex',gap:8,alignItems:'center'}}>
        <button className="cart-btn" onClick={onCartOpen}>Carrito ({count})</button>
      </div>
    </header>
  );
}
