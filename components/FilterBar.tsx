import React from 'react';

export default function FilterBar({
  categories,
  selected,
  onSelect,
  sort,
  onSort
}: {
  categories: string[];
  selected: string | null;
  onSelect: (cat: string | null) => void;
  sort: 'asc' | 'desc' | null;
  onSort: (s: 'asc' | 'desc' | null) => void;
}) {
  return (
    <div className="filters container">
      <select value={selected ?? ''} onChange={(e) => onSelect(e.target.value || null)}>
        <option value="">Todas las categorías</option>
        {categories.map((c) => (
          <option key={c} value={c}>{c}</option>
        ))}
      </select>
      <select value={sort ?? ''} onChange={(e) => onSort((e.target.value as any) || null)}>
        <option value="">Ordenar por precio</option>
        <option value="asc">Menor a mayor</option>
        <option value="desc">Mayor a menor</option>
      </select>
    </div>
  );
}
