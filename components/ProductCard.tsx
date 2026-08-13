import React from 'react';
import { Product } from '../data/db';
import { useCart } from '../context/CartContext';

export default function ProductCard({ product }: { product: Product }) {
  const { dispatch } = useCart();

  return (
    <article className="card">
      <div className="card-media">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).src = '/placeholder.svg';
          }}
        />
        <span className="card-badge">{product.category}</span>
      </div>
      <div className="card-body">
        <h3>{product.name}</h3>
        <p>{product.description}</p>
      </div>
      <div className="card-footer">
        <div>
          <span className="price-label">Precio</span>
          <div className="price">${product.price.toFixed(2)}</div>
        </div>
        <button className="cart-btn" onClick={() => dispatch({ type: 'ADD', product })}>
          Agregar
        </button>
      </div>
    </article>
  );
}
