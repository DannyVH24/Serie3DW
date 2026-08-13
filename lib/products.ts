import { products, Product } from '../data/db';

export async function fetchProducts(): Promise<Product[]> {
  // Simulate async fetch
  return new Promise((res) => setTimeout(() => res(products), 120));
}

export function getCategories(items: Product[]) {
  const s = new Set<string>();
  items.forEach((p) => s.add(p.category));
  return Array.from(s);
}
