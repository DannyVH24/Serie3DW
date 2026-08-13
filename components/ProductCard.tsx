import React from 'react';
import { Product } from '../data/db';
import { useCart } from '../context/CartContext';

export default function ProductCard({ product }: { product: Product }) {
  const { dispatch } = useCart();
  return (
    <div className="card">
      <img
        src={product.image}
        alt={product.name}
        loading="lazy"
        onError={(e) => {
          (e.currentTarget as HTMLImageElement).src = '/placeholder.svg';
        }}
      />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginTop:8}}>
        <div className="price">${product.price.toFixed(2)}</div>
        <button
          className="cart-btn"
          onClick={() => dispatch({ type: 'ADD', product })}
        >Agregar</button>
      </div>
    </div>
  );
}
