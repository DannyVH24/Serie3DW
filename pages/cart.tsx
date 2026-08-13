import React from 'react';
import { useCart } from '../context/CartContext';

export default function CartPage() {
  const { state, dispatch, total } = useCart();

  return (
    <div className="container cart-page">
      <div className="section-heading cart-page-heading">
        <div>
          <span className="eyebrow">Carrito</span>
          <h1>Revisá tu compra antes de finalizar.</h1>
        </div>
        <p>Un resumen más claro, con totales visibles y controles rápidos para ajustar cantidades.</p>
      </div>

      <div className="cart-page-layout">
        <section className="cart-list">
          {state.items.length === 0 && <div className="empty-state">Carrito vacío</div>}

          {state.items.map((it) => (
            <article className="cart-item cart-item-page" key={it.id}>
              <img
                src={it.image}
                alt={it.name}
                loading="lazy"
                onError={(e) => (e.currentTarget as HTMLImageElement).src = '/placeholder.svg'}
              />
              <div className="cart-item-copy">
                <strong>{it.name}</strong>
                <span>{it.category}</span>
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
        </section>

        <aside className="checkout-card">
          <span className="eyebrow">Resumen</span>
          <h2>Total a pagar</h2>
          <div className="checkout-total">${total.toFixed(2)}</div>
          <p>Incluye seguimiento de tu orden, empaquetado seguro y soporte de compra.</p>
          <button className="cart-btn">Proceder al pago</button>
        </aside>
      </div>
    </div>
  );
}
