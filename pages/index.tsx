import React, { useEffect, useMemo, useState } from 'react';
import { fetchProducts, getCategories } from '../lib/products';
import ProductCard from '../components/ProductCard';
import FilterBar from '../components/FilterBar';

export default function Home() {
  const [items, setItems] = useState<any[]>([]);
  const [category, setCategory] = useState<string | null>(null);
  const [sort, setSort] = useState<'asc' | 'desc' | null>(null);

  useEffect(() => {
    fetchProducts().then((p) => setItems(p));
  }, []);

  const categories = useMemo(() => getCategories(items), [items]);

  const filtered = useMemo(() => {
    let out = items.slice();
    if (category) out = out.filter((i) => i.category === category);
    if (sort === 'asc') out.sort((a, b) => a.price - b.price);
    if (sort === 'desc') out.sort((a, b) => b.price - a.price);
    return out;
  }, [items, category, sort]);

  const featured = useMemo(() => items.slice(0, 3), [items]);
  const totalProducts = items.length;
  const lowestPrice = useMemo(
    () => (items.length ? Math.min(...items.map((item) => item.price)) : 0),
    [items]
  );

  return (
    <div className="page-shell">
      <section className="hero container">
        <div className="hero-copy">
          <span className="eyebrow">Tienda oficial de hardware</span>
          <h1>Equipamos tu setup con productos que sí se ven y se sienten premium.</h1>
          <p>
            ByteMarket reúne componentes, periféricos y monitores seleccionados para una experiencia de compra clara,
            moderna y confiable.
          </p>
          <div className="hero-actions">
            <a className="primary-link" href="#catalogo">
              Ver catálogo
            </a>
            <a className="secondary-link" href="/cart">
              Ir al carrito
            </a>
          </div>
          <div className="hero-metrics">
            <div>
              <strong>{totalProducts}</strong>
              <span>productos listos para comprar</span>
            </div>
            <div>
              <strong>{categories.length}</strong>
              <span>categorías para comparar</span>
            </div>
            <div>
              <strong>${lowestPrice.toFixed(2)}</strong>
              <span>precio inicial del catálogo</span>
            </div>
          </div>
        </div>
        <div className="hero-panel">
          <div className="hero-panel-card">
            <span className="panel-label">Oferta destacada</span>
            <h2>Armá tu escritorio completo en un solo lugar.</h2>
            <p>
              Pantallas, GPU, almacenamiento y accesorios con una presentación más parecida a una tienda real.
            </p>
            <div className="hero-pills">
              <span>Pago seguro</span>
              <span>Envío rápido</span>
              <span>Stock actualizado</span>
            </div>
          </div>
          <div className="hero-highlight">
            {featured.map((product) => (
              <article key={product.id}>
                <img src={product.image} alt={product.name} loading="lazy" />
                <div>
                  <strong>{product.name}</strong>
                  <span>${product.price.toFixed(2)}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="trustbar container">
        <div>
          <strong>+500</strong>
          <span>órdenes procesadas</span>
        </div>
        <div>
          <strong>4.8/5</strong>
          <span>valoración promedio</span>
        </div>
        <div>
          <strong>24h</strong>
          <span>respuesta de soporte</span>
        </div>
        <div>
          <strong>Garantía</strong>
          <span>en todo el catálogo</span>
        </div>
      </section>

      <section className="catalog-section container" id="catalogo">
        <div className="section-heading">
          <div>
            <span className="eyebrow">Catálogo</span>
            <h2>Productos pensados para vender, no solo para listar.</h2>
          </div>
          <p>Filtrá por categoría y ordená por precio para encontrar más rápido lo que buscás.</p>
        </div>

        <FilterBar categories={categories} selected={category} onSelect={setCategory} sort={sort} onSort={setSort} />

        <div className="grid">
          {filtered.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>
    </div>
  );
}
