import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { CartProvider } from '../context/CartContext';
import Header from '../components/Header';
import CartDrawer from '../components/CartDrawer';
import React, { useState } from 'react';

export default function App({ Component, pageProps }: AppProps) {
  const [open, setOpen] = useState(false);
  return (
    <CartProvider>
      <Header onCartOpen={() => setOpen(true)} />
      <CartDrawer open={open} onClose={() => setOpen(false)} />
      <main>
        <Component {...pageProps} />
      </main>
    </CartProvider>
  );
}
