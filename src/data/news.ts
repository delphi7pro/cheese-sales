import { NewsArticle } from '@/types';

export const newsArticles: NewsArticle[] = [
  {
    id: '1',
    title: 'Новые поставки французских сыров',
    excerpt: 'Мы получили свежие поставки лучших французских сыров прямо из Нормандии',
    content: 'Подробная статья о новых поставках...',
    image: 'https://images.pexels.com/photos/4109943/pexels-photo-4109943.jpeg',
    author: 'Анна Сырникова',
    publishedAt: new Date('2024-01-15'),
    category: 'Новости'
  },
  {
    id: '2',
    title: 'Мастер-класс по дегустации сыров',
    excerpt: 'Приглашаем на увлекательный мастер-класс по правильной дегустации сыров',
    content: 'Подробная информация о мастер-классе...',
    image: 'https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg',
    author: 'Михаил Сыромятников',
    publishedAt: new Date('2024-01-10'),
    category: 'События'
  }
];