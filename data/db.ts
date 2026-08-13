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
    image: '/images/gpu.svg',
    description: '10GB GDDR6X, PCIe 4.0, Ray Tracing'
  },
  {
    id: 'cpu-ryzen7',
    name: 'AMD Ryzen 7 7800X',
    category: 'Componentes',
    price: 429.99,
    image: '/images/cpu.svg',
    description: '8 núcleos / 16 hilos, 4.5GHz boost'
  },
  {
    id: 'monitor-27ip',
    name: 'Monitor 27" IPS 144Hz',
    category: 'Monitores',
    price: 289.99,
    image: '/images/monitor.svg',
    description: '2560x1440, 144Hz, FreeSync'
  },
  {
    id: 'ssd-1tb',
    name: 'SSD NVMe 1TB',
    category: 'Componentes',
    price: 119.99,
    image: '/images/ssd.svg',
    description: 'Leitura 3500MB/s, PCIe 3.0'
  },
  {
    id: 'keyboard-mech',
    name: 'Teclado Mecánico RGB',
    category: 'Periféricos',
    price: 89.99,
    image: '/images/keyboard.svg',
    description: 'Switches azules, retroiluminación RGB'
  },
  {
    id: 'mouse-pro',
    name: 'Mouse Óptico Pro',
    category: 'Periféricos',
    price: 49.99,
    image: '/images/mouse.svg',
    description: '16000 DPI, sensor óptico premium'
  },
  {
    id: 'monitor-32curvo',
    name: 'Monitor 32" Curvo 4K',
    category: 'Monitores',
    price: 799.0,
    image: '/images/monitor.svg',
    description: '3840x2160, HDR, 60Hz'
  },
  {
    id: 'cooler-liquid',
    name: 'Refrigeración Líquida 240mm',
    category: 'Componentes',
    price: 129.99,
    image: '/images/cooler.svg',
    description: 'Radiador 240mm, bomba silenciosa'
  },
  {
    id: 'headset-gamer',
    name: 'Auriculares Gamer',
    category: 'Periféricos',
    price: 69.99,
    image: '/images/headset.svg',
    description: 'Micrófono, sonido envolvente 7.1'
  }
];
