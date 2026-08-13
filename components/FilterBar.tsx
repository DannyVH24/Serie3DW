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
    <section className="filters">
      <div className="filters-copy">
        <span className="eyebrow">Filtrar</span>
        <h3>Encontrá rápido lo que te interesa.</h3>
      </div>
      <div className="filters-controls">
        <label>
          <span>Categoría</span>
          <select value={selected ?? ''} onChange={(e) => onSelect(e.target.value || null)}>
            <option value="">Todas las categorías</option>
            {categories.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </label>
        <label>
          <span>Orden</span>
          <select value={sort ?? ''} onChange={(e) => onSort((e.target.value as 'asc' | 'desc') || null)}>
            <option value="">Destacados</option>
            <option value="asc">Menor a mayor</option>
            <option value="desc">Mayor a menor</option>
          </select>
        </label>
        <button className="ghost-btn" onClick={() => { onSelect(null); onSort(null); }}>
          Limpiar
        </button>
      </div>
    </section>
  );
}
