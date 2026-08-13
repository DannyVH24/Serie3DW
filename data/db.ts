export type Product = {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
  description: string;
}

export const products: Product[] = [
  {
    id: 'gpu-rtx4070',
    name: 'NVIDIA GeForce RTX 4070',
    category: 'Componentes',
    price: 799.99,
    image: 'https://images.unsplash.com/photo-1611924229561-9d3b1c7d6a2f?w=800&q=80',
    description: '10GB GDDR6X, PCIe 4.0, Ray Tracing'
  },
  {
    id: 'cpu-ryzen7',
    name: 'AMD Ryzen 7 7800X',
    category: 'Componentes',
    price: 429.99,
    image: 'https://images.unsplash.com/photo-1587202372775-2d6e11f0a7d4?w=800&q=80',
    description: '8 núcleos / 16 hilos, 4.5GHz boost'
  },
  {
    id: 'monitor-27ip',
    name: 'Monitor 27" IPS 144Hz',
    category: 'Monitores',
    price: 289.99,
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800&q=80',
    description: '2560x1440, 144Hz, FreeSync'
  },
  {
    id: 'ssd-1tb',
    name: 'SSD NVMe 1TB',
    category: 'Componentes',
    price: 119.99,
    image: 'https://images.unsplash.com/photo-1581092334490-5a0b6a1a3f8f?w=800&q=80',
    description: 'Leitura 3500MB/s, PCIe 3.0'
  },
  {
    id: 'keyboard-mech',
    name: 'Teclado Mecánico RGB',
    category: 'Periféricos',
    price: 89.99,
    image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=800&q=80',
    description: 'Switches azules, retroiluminación RGB'
  },
  {
    id: 'mouse-pro',
    name: 'Mouse Óptico Pro',
    category: 'Periféricos',
    price: 49.99,
    image: 'https://images.unsplash.com/photo-1527430253228-e93688616381?w=800&q=80',
    description: '16000 DPI, sensor óptico premium'
  },
  {
    id: 'monitor-32curvo',
    name: 'Monitor 32" Curvo 4K',
    category: 'Monitores',
    price: 799.0,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80',
    description: '3840x2160, HDR, 60Hz'
  },
  {
    id: 'cooler-liquid',
    name: 'Refrigeración Líquida 240mm',
    category: 'Componentes',
    price: 129.99,
    image: 'https://images.unsplash.com/photo-1600180758895-1d5b8c1e4b4b?w=800&q=80',
    description: 'Radiador 240mm, bomba silenciosa'
  },
  {
    id: 'headset-gamer',
    name: 'Auriculares Gamer',
    category: 'Periféricos',
    price: 69.99,
    image: 'https://images.unsplash.com/photo-1585386959984-a4155223f5f0?w=800&q=80',
    description: 'Micrófono, sonido envolvente 7.1'
  }
];
