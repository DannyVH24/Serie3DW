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

  return (
    <div>
      <div className="container">
        <FilterBar categories={categories} selected={category} onSelect={setCategory} sort={sort} onSort={setSort} />
        <div className="grid">
          {filtered.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </div>
  );
}
