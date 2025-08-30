import React, { useState } from 'react';
import { Star, ThumbsUp, MessageCircle, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Reviews = () => {
  const [filter, setFilter] = useState('all');
  const [newReview, setNewReview] = useState({
    name: '',
    email: '',
    rating: 5,
    title: '',
    text: ''
  });

  const reviews = [
    {
      id: 1,
      name: 'Анна Петрова',
      rating: 5,
      title: 'Отличное качество!',
      text: 'Заказывала камамбер и рокфор. Сыры пришли в идеальном состоянии, очень вкусные. Доставка быстрая.',
      date: '2024-01-15',
      helpful: 12,
      verified: true
    },
    {
      id: 2,
      name: 'Михаил Сидоров',
      rating: 5,
      title: 'Рекомендую всем!',
      text: 'Покупаю здесь сыры уже полгода. Качество всегда на высоте, цены адекватные.',
      date: '2024-01-10',
      helpful: 8,
      verified: true
    },
    {
      id: 3,
      name: 'Елена Козлова',
      rating: 4,
      title: 'Хороший выбор',
      text: 'Большой ассортимент, быстрая доставка. Единственный минус - хотелось бы больше российских сыров.',
      date: '2024-01-08',
      helpful: 5,
      verified: false
    }
  ];

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Спасибо за отзыв! Он будет опубликован после модерации.');
    setNewReview({ name: '', email: '', rating: 5, title: '', text: '' });
  };

  const filteredReviews = reviews.filter(review => {
    if (filter === 'all') return true;
    if (filter === 'verified') return review.verified;
    if (filter === '5') return review.rating === 5;
    if (filter === '4') return review.rating === 4;
    return true;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Заголовок */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <MessageCircle className="w-16 h-16 text-yellow-500 mx-auto mb-6" />
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Отзывы покупателей</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Читайте отзывы наших клиентов и делитесь своим опытом покупок
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Отзывы */}
            <div className="lg:col-span-2">
              {/* Статистика */}
              <Card className="mb-8">
                <CardContent className="pt-6">
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
                    <div>
                      <div className="text-3xl font-bold text-yellow-600">4.8</div>
                      <div className="text-sm text-gray-500">Средний рейтинг</div>
                      <div className="flex justify-center mt-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-gray-900">1,247</div>
                      <div className="text-sm text-gray-500">Всего отзывов</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-green-600">96%</div>
                      <div className="text-sm text-gray-500">Рекомендуют</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-blue-600">892</div>
                      <div className="text-sm text-gray-500">Проверенные</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Фильтр */}
              <div className="flex items-center space-x-4 mb-6">
                <Filter className="w-5 h-5 text-gray-500" />
                <Select value={filter} onValueChange={setFilter}>
                  <SelectTrigger className="w-48">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Все отзывы</SelectItem>
                    <SelectItem value="verified">Проверенные</SelectItem>
                    <SelectItem value="5">5 звезд</SelectItem>
                    <SelectItem value="4">4 звезды</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Список отзывов */}
              <div className="space-y-6">
                {filteredReviews.map((review) => (
                  <Card key={review.id}>
                    <CardContent className="pt-6">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <div className="flex items-center space-x-2 mb-1">
                            <h4 className="font-semibold">{review.name}</h4>
                            {review.verified && (
                              <Badge variant="secondary" className="text-xs">
                                <Shield className="w-3 h-3 mr-1" />
                                Проверен
                              </Badge>
                            )}
                          </div>
                          <div className="flex items-center space-x-2">
                            <div className="flex">
                              {[...Array(5)].map((_, i) => (
                                <Star 
                                  key={i} 
                                  className={`w-4 h-4 ${
                                    i < review.rating 
                                      ? 'fill-yellow-400 text-yellow-400' 
                                      : 'text-gray-300'
                                  }`} 
                                />
                              ))}
                            </div>
                            <span className="text-sm text-gray-500">{review.date}</span>
                          </div>
                        </div>
                      </div>
                      
                      <h5 className="font-medium mb-2">{review.title}</h5>
                      <p className="text-gray-600 mb-4">{review.text}</p>
                      
                      <div className="flex items-center space-x-4">
                        <Button variant="ghost" size="sm" className="text-gray-500">
                          <ThumbsUp className="w-4 h-4 mr-1" />
                          Полезно ({review.helpful})
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Форма добавления отзыва */}
            <div>
              <Card className="sticky top-24">
                <CardHeader>
                  <CardTitle>Оставить отзыв</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmitReview} className="space-y-4">
                    <div>
                      <Label htmlFor="reviewName">Ваше имя *</Label>
                      <Input 
                        id="reviewName" 
                        value={newReview.name}
                        onChange={(e) => setNewReview({...newReview, name: e.target.value})}
                        required 
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="reviewEmail">Email *</Label>
                      <Input 
                        id="reviewEmail" 
                        type="email"
                        value={newReview.email}
                        onChange={(e) => setNewReview({...newReview, email: e.target.value})}
                        required 
                      />
                    </div>
                    
                    <div>
                      <Label>Оценка *</Label>
                      <div className="flex space-x-1 mt-2">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star
                            key={star}
                            className={`w-6 h-6 cursor-pointer transition-colors ${
                              star <= newReview.rating
                                ? 'fill-yellow-400 text-yellow-400'
                                : 'text-gray-300 hover:text-yellow-400'
                            }`}
                            onClick={() => setNewReview({...newReview, rating: star})}
                          />
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="reviewTitle">Заголовок отзыва *</Label>
                      <Input 
                        id="reviewTitle"
                        value={newReview.title}
                        onChange={(e) => setNewReview({...newReview, title: e.target.value})}
                        required 
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="reviewText">Ваш отзыв *</Label>
                      <Textarea 
                        id="reviewText"
                        rows={4}
                        value={newReview.text}
                        onChange={(e) => setNewReview({...newReview, text: e.target.value})}
                        placeholder="Поделитесь своим опытом покупки..."
                        required 
                      />
                    </div>
                    
                    <Button type="submit" className="w-full bg-yellow-500 hover:bg-yellow-600">
                      Отправить отзыв
                    </Button>
                  </form>
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

export default Reviews;