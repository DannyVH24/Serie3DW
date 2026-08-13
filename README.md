# ByteMarket - Frontend (Next.js)

Proyecto de frontend para una tienda de hardware llamada ByteMarket.

Run locally:

```bash
npm install
npm run dev
```

Estructura principal:
- `pages/` - rutas Next.js
- `components/` - UI components (ProductCard, FilterBar, CartDrawer, Header)
- `context/CartContext.tsx` - gestión del carrito (Context + reducer)
- `data/db.ts` - catálogo inicial (simula DB)
- `lib/products.ts` - servicio para obtener productos y categorías

Siguientes pasos para entrega PDF:
1. Subir repo a GitHub público.
2. Capturar estructura del proyecto en el editor.
3. Capturas del catálogo con filtros y flujo del carrito.
