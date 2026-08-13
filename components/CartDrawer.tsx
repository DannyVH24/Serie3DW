import React from 'react';
import { useCart } from '../context/CartContext';

export default function CartDrawer({ open, onClose }: { open: boolean; onClose: () => void }) {
  const { state, dispatch, total } = useCart();
  return (
    <div className={"cart-drawer" + (open ? ' open' : '')}>
      <h3>Tu Carrito</h3>
      <button onClick={onClose} style={{float:'right'}}>Cerrar</button>
      <div style={{marginTop:24}}>
        {state.items.length === 0 && <div>Carrito vacío</div>}
        {state.items.map((it) => (
          <div className="cart-item" key={it.id}>
            <img
              src={it.image}
              alt={it.name}
              loading="lazy"
              onError={(e) => (e.currentTarget as HTMLImageElement).src = '/placeholder.svg'}
              style={{width:64,height:48,objectFit:'cover',borderRadius:6}}
            />
            <div style={{flex:1}}>
              <div style={{fontWeight:700}}>{it.name}</div>
              <div style={{color:'#9fb1c7'}}> ${it.price.toFixed(2)}</div>
            </div>
            <div className="qty-controls">
              <button onClick={() => dispatch({ type: 'DECREASE', id: it.id })}>-</button>
              <span style={{margin:'0 8px'}}>{it.quantity}</span>
              <button onClick={() => dispatch({ type: 'INCREASE', id: it.id })}>+</button>
              <button onClick={() => dispatch({ type: 'REMOVE', id: it.id })} style={{marginLeft:8}}>🗑️</button>
            </div>
          </div>
        ))}
      </div>
      <div className="footer">
        <div>Total:</div>
        <div style={{fontWeight:800}}>${total.toFixed(2)}</div>
      </div>
    </div>
  );
}
