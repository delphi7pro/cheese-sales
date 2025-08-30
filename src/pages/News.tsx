import React from 'react';
import { Calendar, User, Tag } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { newsArticles } from '@/data/news';
import { Link } from 'react-router-dom';

const News = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Заголовок */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Новости и события</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Следите за последними новостями из мира сыра и нашими специальными предложениями
          </p>
        </div>
      </section>

      {/* Новости */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Основные новости */}
            <div className="lg:col-span-2">
              <div className="space-y-8">
                {newsArticles.map((article) => (
                  <Card key={article.id} className="hover:shadow-lg transition-shadow">
                    <div className="md:flex">
                      <div className="md:w-1/3">
                        <img
                          src={article.image}
                          alt={article.title}
                          className="w-full h-48 md:h-full object-cover rounded-t-lg md:rounded-l-lg md:rounded-t-none"
                        />
                      </div>
                      <div className="md:w-2/3 p-6">
                        <div className="flex items-center space-x-4 mb-3">
                          <Badge>{article.category}</Badge>
                          <div className="flex items-center text-sm text-gray-500">
                            <Calendar className="w-4 h-4 mr-1" />
                            {article.publishedAt.toLocaleDateString('ru-RU')}
                          </div>
                        </div>
                        
                        <h2 className="text-xl font-bold mb-3 hover:text-yellow-600 transition-colors">
                          <Link to={`/news/${article.id}`}>
                            {article.title}
                          </Link>
                        </h2>
                        
                        <p className="text-gray-600 mb-4">{article.excerpt}</p>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center text-sm text-gray-500">
                            <User className="w-4 h-4 mr-1" />
                            {article.author}
                          </div>
                          <Link to={`/news/${article.id}`}>
                            <Button variant="outline" size="sm">
                              Читать далее
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* Боковая панель */}
            <div className="space-y-6">
              {/* Популярные статьи */}
              <Card>
                <CardHeader>
                  <CardTitle>Популярные статьи</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      'Как правильно хранить сыр дома',
                      'Топ-10 сыров для начинающих',
                      'Сырная тарелка: правила подачи',
                      'История сыра Рокфор'
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

              {/* Категории */}
              <Card>
                <CardHeader>
                  <CardTitle>Категории</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {[
                      { name: 'Новости', count: 12 },
                      { name: 'События', count: 8 },
                      { name: 'Рецепты', count: 15 },
                      { name: 'Обзоры', count: 6 }
                    ].map((category, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <Link to="#" className="text-sm hover:text-yellow-600 transition-colors">
                          {category.name}
                        </Link>
                        <span className="text-xs text-gray-500">({category.count})</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Подписка */}
              <Card className="bg-yellow-50">
                <CardHeader>
                  <CardTitle>Подписка на новости</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-4">
                    Получайте последние новости и специальные предложения
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
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default News;