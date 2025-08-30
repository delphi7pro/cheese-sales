import { Product } from '@/types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Пармезан выдержанный',
    description: 'Классический итальянский твердый сыр с насыщенным вкусом',
    price: 2500,
    image: 'https://images.pexels.com/photos/4109943/pexels-photo-4109943.jpeg',
    category: 'Твердые сыры',
    origin: 'Италия',
    weight: '200г',
    aging: '24 месяца',
    inStock: true,
    rating: 4.8,
    reviews: 156
  },
  {
    id: '2',
    name: 'Камамбер де Норманди',
    description: 'Мягкий французский сыр с белой плесневой корочкой',
    price: 1800,
    image: 'https://images.pexels.com/photos/4109943/pexels-photo-4109943.jpeg',
    category: 'Мягкие сыры',
    origin: 'Франция',
    weight: '250г',
    aging: '4-6 недель',
    inStock: true,
    rating: 4.6,
    reviews: 89
  },
  {
    id: '3',
    name: 'Рокфор',
    description: 'Знаменитый французский сыр с голубой плесенью',
    price: 3200,
    image: 'https://images.pexels.com/photos/4109943/pexels-photo-4109943.jpeg',
    category: 'Сыры с плесенью',
    origin: 'Франция',
    weight: '150г',
    aging: '3 месяца',
    inStock: true,
    rating: 4.9,
    reviews: 234
  },
  {
    id: '4',
    name: 'Гауда молодая',
    description: 'Голландский полутвердый сыр с мягким сливочным вкусом',
    price: 1200,
    image: 'https://images.pexels.com/photos/4109943/pexels-photo-4109943.jpeg',
    category: 'Полутвердые сыры',
    origin: 'Нидерланды',
    weight: '300г',
    aging: '4 недели',
    inStock: true,
    rating: 4.4,
    reviews: 67
  },
  {
    id: '5',
    name: 'Моцарелла Буффало',
    description: 'Свежий итальянский сыр из молока буйволиц',
    price: 2800,
    image: 'https://images.pexels.com/photos/4109943/pexels-photo-4109943.jpeg',
    category: 'Свежие сыры',
    origin: 'Италия',
    weight: '125г',
    aging: 'Свежий',
    inStock: true,
    rating: 4.7,
    reviews: 123
  },
  {
    id: '6',
    name: 'Чеддер выдержанный',
    description: 'Английский твердый сыр с острым вкусом',
    price: 1900,
    image: 'https://images.pexels.com/photos/4109943/pexels-photo-4109943.jpeg',
    category: 'Твердые сыры',
    origin: 'Англия',
    weight: '250г',
    aging: '12 месяцев',
    inStock: true,
    rating: 4.5,
    reviews: 98
  }
];

export const categories = [
  'Все категории',
  'Твердые сыры',
  'Мягкие сыры',
  'Полутвердые сыры',
  'Сыры с плесенью',
  'Свежие сыры'
];