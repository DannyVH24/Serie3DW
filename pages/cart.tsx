import React from 'react';
import { useCart } from '../context/CartContext';

export default function CartPage() {
  const { state, dispatch, total } = useCart();
  return (
    <div className="container" style={{paddingTop:24}}>
      <h2>Carrito</h2>
      {state.items.length === 0 && <div>Carrito vacío</div>}
      {state.items.map((it) => (
        <div key={it.id} style={{display:'flex',gap:12,alignItems:'center',padding:8,borderBottom:'1px solid #0b1630'}}>
          <img
            src={it.image}
            loading="lazy"
            onError={(e) => (e.currentTarget as HTMLImageElement).src = '/placeholder.svg'}
            style={{width:80,height:60,objectFit:'cover',borderRadius:6}}
          />
          <div style={{flex:1}}>
            <div style={{fontWeight:700}}>{it.name}</div>
            <div style={{color:'#9fb1c7'}}>${it.price.toFixed(2)}</div>
          </div>
          <div>
            <button onClick={() => dispatch({ type: 'DECREASE', id: it.id })}>-</button>
            <span style={{padding:'0 8px'}}>{it.quantity}</span>
            <button onClick={() => dispatch({ type: 'INCREASE', id: it.id })}>+</button>
            <button onClick={() => dispatch({ type: 'REMOVE', id: it.id })}>🗑️</button>
          </div>
        </div>
      ))}
      <div style={{display:'flex',justifyContent:'space-between',marginTop:16}}>
        <div>Total a pagar</div>
        <div style={{fontWeight:800}}>${total.toFixed(2)}</div>
      </div>
    </div>
  );
}
