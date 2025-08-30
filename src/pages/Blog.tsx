import React from 'react';
import { Calendar, User, Eye, MessageCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'Искусство сочетания сыра и вина',
      excerpt: 'Узнайте, как правильно подбирать вино к различным сортам сыра для идеальной гармонии вкусов.',
      content: 'Полная статья о сочетании сыра и вина...',
      image: 'https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg',
      author: 'Анна Сырникова',
      publishedAt: '2024-01-20',
      category: 'Дегустация',
      views: 1250,
      comments: 23
    },
    {
      id: 2,
      title: 'История французского сыроделия',
      excerpt: 'Погрузитесь в богатую историю французских сыров и узнайте секреты их производства.',
      content: 'Подробная история французского сыроделия...',
      image: 'https://images.pexels.com/photos/4109943/pexels-photo-4109943.jpeg',
      author: 'Михаил Сыромятников',
      publishedAt: '2024-01-18',
      category: 'История',
      views: 890,
      comments: 15
    },
    {
      id: 3,
      title: 'Домашнее производство сыра',
      excerpt: 'Пошаговое руководство по изготовлению простых сыров в домашних условиях.',
      content: 'Руководство по домашнему сыроделию...',
      image: 'https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg',
      author: 'Елена Моцареллова',
      publishedAt: '2024-01-15',
      category: 'Рецепты',
      views: 2100,
      comments: 45
    }
  ];

  const categories = [
    { name: 'Все статьи', count: 45 },
    { name: 'Дегустация', count: 12 },
    { name: 'История', count: 8 },
    { name: 'Рецепты', count: 15 },
    { name: 'Производство', count: 6 },
    { name: 'Здоровье', count: 4 }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Заголовок */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Сырный блог</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Интересные статьи о мире сыра: история, традиции, рецепты и секреты дегустации
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Основной контент */}
            <div className="lg:col-span-3">
              <div className="space-y-8">
                {blogPosts.map((post) => (
                  <Card key={post.id} className="hover:shadow-lg transition-shadow">
                    <div className="md:flex">
                      <div className="md:w-1/3">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-48 md:h-full object-cover rounded-t-lg md:rounded-l-lg md:rounded-t-none"
                        />
                      </div>
                      <div className="md:w-2/3 p-6">
                        <div className="flex items-center space-x-4 mb-3">
                          <Badge>{post.category}</Badge>
                          <div className="flex items-center text-sm text-gray-500">
                            <Calendar className="w-4 h-4 mr-1" />
                            {post.publishedAt}
                          </div>
                        </div>
                        
                        <h2 className="text-2xl font-bold mb-3 hover:text-yellow-600 transition-colors">
                          <Link to={`/blog/${post.id}`}>
                            {post.title}
                          </Link>
                        </h2>
                        
                        <p className="text-gray-600 mb-4">{post.excerpt}</p>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4 text-sm text-gray-500">
                            <div className="flex items-center">
                              <User className="w-4 h-4 mr-1" />
                              {post.author}
                            </div>
                            <div className="flex items-center">
                              <Eye className="w-4 h-4 mr-1" />
                              {post.views}
                            </div>
                            <div className="flex items-center">
                              <MessageCircle className="w-4 h-4 mr-1" />
                              {post.comments}
                            </div>
                          </div>
                          
                          <Link to={`/blog/${post.id}`}>
                            <Button variant="outline">
                              Читать далее
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
              
              {/* Пагинация */}
              <div className="flex justify-center mt-12">
                <div className="flex space-x-2">
                  <Button variant="outline" disabled>Предыдущая</Button>
                  <Button className="bg-yellow-500">1</Button>
                  <Button variant="outline">2</Button>
                  <Button variant="outline">3</Button>
                  <Button variant="outline">Следующая</Button>
                </div>
              </div>
            </div>

            {/* Боковая панель */}
            <div className="space-y-6">
              {/* Категории */}
              <Card>
                <CardHeader>
                  <CardTitle>Категории</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {categories.map((category, index) => (
                      <div key={index} className="flex items-center justify-between py-2 hover:bg-gray-50 px-2 rounded cursor-pointer">
                        <span className="text-sm">{category.name}</span>
                        <Badge variant="secondary">{category.count}</Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Популярные статьи */}
              <Card>
                <CardHeader>
                  <CardTitle>Популярные статьи</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      'Как правильно резать сыр',
                      'Топ-10 сыров для начинающих',
                      'Сырная тарелка: искусство подачи',
                      'Мифы о сыре: правда и вымысел'
                    ].map((title, index) => (
                      <div key={index} className="border-b pb-2 last:border-b-0">
                        <Link to="#" className="text-sm hover:text-yellow-600 transition-colors">
                          {title}
                        </Link>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Подписка */}
              <Card className="bg-yellow-50">
                <CardHeader>
                  <CardTitle>Подписка на блог</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-4">
                    Получайте новые статьи прямо на почту
                  </p>
                  <div className="space-y-2">
                    <input
                      type="email"
                      placeholder="Ваш email"
                      className="w-full px-3 py-2 border rounded-md text-sm"
                    />
                    <Button className="w-full bg-yellow-500 hover:bg-yellow-600" size="sm">
                      Подписаться
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Теги */}
              <Card>
                <CardHeader>
                  <CardTitle>Популярные теги</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {[
                      'сыр', 'дегустация', 'рецепты', 'франция', 'италия',
                      'пармезан', 'камамбер', 'рокфор', 'вино', 'традиции'
                    ].map((tag, index) => (
                      <Badge key={index} variant="outline" className="cursor-pointer hover:bg-yellow-50">
                        #{tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;