import React from 'react';
import { useCart } from '../context/CartContext';

export default function CartDrawer({ open, onClose }: { open: boolean; onClose: () => void }) {
  const { state, dispatch, total } = useCart();

  return (
    <div className={`cart-overlay ${open ? 'open' : ''}`} aria-hidden={!open}>
      <button className="cart-backdrop" onClick={onClose} aria-label="Cerrar carrito" />
      <aside className={`cart-drawer ${open ? 'open' : ''}`} aria-label="Carrito de compras">
        <div className="cart-header">
          <div>
            <span className="eyebrow">Tu carrito</span>
            <h3>Resumen de compra</h3>
          </div>
          <button className="ghost-btn" onClick={onClose}>
            Cerrar
          </button>
        </div>

        <div className="cart-items">
          {state.items.length === 0 && <div className="empty-state">Carrito vacío</div>}

          {state.items.map((it) => (
            <article className="cart-item" key={it.id}>
              <img
                src={it.image}
                alt={it.name}
                loading="lazy"
                onError={(e) => (e.currentTarget as HTMLImageElement).src = '/placeholder.svg'}
              />
              <div className="cart-item-copy">
                <strong>{it.name}</strong>
                <span>${it.price.toFixed(2)}</span>
              </div>
              <div className="qty-controls">
                <button onClick={() => dispatch({ type: 'DECREASE', id: it.id })}>-</button>
                <span>{it.quantity}</span>
                <button onClick={() => dispatch({ type: 'INCREASE', id: it.id })}>+</button>
                <button className="remove-btn" onClick={() => dispatch({ type: 'REMOVE', id: it.id })}>
                  Eliminar
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className="cart-summary">
          <div>
            <span>Total a pagar</span>
            <strong>${total.toFixed(2)}</strong>
          </div>
          <button className="cart-btn">Finalizar compra</button>
        </div>
      </aside>
    </div>
  );
}
