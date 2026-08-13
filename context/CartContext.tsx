import React, { createContext, useContext, useReducer, ReactNode } from 'react';
import { Product } from '../data/db';

export type CartItem = Product & { quantity: number };

type State = { items: CartItem[] };

type Action =
  | { type: 'ADD'; product: Product }
  | { type: 'INCREASE'; id: string }
  | { type: 'DECREASE'; id: string }
  | { type: 'REMOVE'; id: string }
  | { type: 'CLEAR' };

const CartContext = createContext<{
  state: State;
  dispatch: React.Dispatch<Action>;
  total: number;
}>({ state: { items: [] }, dispatch: () => null, total: 0 });

function cartReducer(state: State, action: Action): State {
  switch (action.type) {
    case 'ADD': {
      const exists = state.items.find((i) => i.id === action.product.id);
      if (exists) {
        return {
          items: state.items.map((it) =>
            it.id === action.product.id ? { ...it, quantity: it.quantity + 1 } : it
          )
        };
      }
      return { items: [...state.items, { ...action.product, quantity: 1 }] };
    }
    case 'INCREASE':
      return { items: state.items.map((it) => (it.id === action.id ? { ...it, quantity: it.quantity + 1 } : it)) };
    case 'DECREASE':
      return {
        items: state.items
          .map((it) => (it.id === action.id ? { ...it, quantity: it.quantity - 1 } : it))
          .filter((it) => it.quantity > 0)
      };
    case 'REMOVE':
      return { items: state.items.filter((it) => it.id !== action.id) };
    case 'CLEAR':
      return { items: [] };
    default:
      return state;
  }
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, { items: [] });
  const total = state.items.reduce((s, it) => s + it.price * it.quantity, 0);

  return <CartContext.Provider value={{ state, dispatch, total }}>{children}</CartContext.Provider>;
}

export function useCart() {
  return useContext(CartContext);
}
