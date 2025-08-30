import React from 'react';
import { Calendar, MapPin, Clock, Users, Ticket } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Events = () => {
  const events = [
    {
      id: 1,
      title: 'Мастер-класс по дегустации французских сыров',
      description: 'Изучите искусство дегустации с профессиональным сомелье',
      date: '2024-02-15',
      time: '19:00',
      location: 'Наш магазин на ул. Сырной, 123',
      price: 2500,
      maxParticipants: 15,
      currentParticipants: 8,
      image: 'https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg',
      category: 'Мастер-класс',
      status: 'upcoming'
    },
    {
      id: 2,
      title: 'Фестиваль итальянских сыров',
      description: 'Попробуйте лучшие сорта итальянских сыров и узнайте их историю',
      date: '2024-02-22',
      time: '15:00',
      location: 'Парк Сокольники, павильон №5',
      price: 1500,
      maxParticipants: 50,
      currentParticipants: 23,
      image: 'https://images.pexels.com/photos/4109943/pexels-photo-4109943.jpeg',
      category: 'Фестиваль',
      status: 'upcoming'
    },
    {
      id: 3,
      title: 'Сырная вечеринка для детей',
      description: 'Веселое мероприятие для детей с дегустацией детских сыров',
      date: '2024-03-01',
      time: '14:00',
      location: 'Детский центр "Радуга"',
      price: 800,
      maxParticipants: 20,
      currentParticipants: 12,
      image: 'https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg',
      category: 'Детское',
      status: 'upcoming'
    }
  ];

  const pastEvents = [
    {
      id: 4,
      title: 'Новогодняя сырная ярмарка',
      date: '2023-12-25',
      participants: 150,
      image: 'https://images.pexels.com/photos/4109943/pexels-photo-4109943.jpeg'
    },
    {
      id: 5,
      title: 'Мастер-класс по приготовлению фондю',
      date: '2023-12-10',
      participants: 25,
      image: 'https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg'
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Мастер-класс': return 'bg-blue-500';
      case 'Фестиваль': return 'bg-purple-500';
      case 'Детское': return 'bg-green-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Заголовок */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Calendar className="w-16 h-16 text-yellow-500 mx-auto mb-6" />
          <h1 className="text-4xl font-bold text-gray-900 mb-4">События и мероприятия</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Присоединяйтесь к нашим мероприятиям и погрузитесь в удивительный мир сыра
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Предстоящие события */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Предстоящие события</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {events.map((event) => (
                <Card key={event.id} className="hover:shadow-xl transition-all duration-300">
                  <div className="relative">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                    <Badge className={`absolute top-3 right-3 ${getCategoryColor(event.category)}`}>
                      {event.category}
                    </Badge>
                  </div>
                  
                  <CardHeader>
                    <CardTitle className="text-lg">{event.title}</CardTitle>
                  </CardHeader>
                  
                  <CardContent>
                    <p className="text-gray-600 mb-4 text-sm">{event.description}</p>
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-sm text-gray-500">
                        <Calendar className="w-4 h-4 mr-2" />
                        {event.date}
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <Clock className="w-4 h-4 mr-2" />
                        {event.time}
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <MapPin className="w-4 h-4 mr-2" />
                        {event.location}
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <Users className="w-4 h-4 mr-2" />
                        {event.currentParticipants} / {event.maxParticipants} участников
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="text-xl font-bold text-gray-900">
                        {event.price.toLocaleString()} ₽
                      </div>
                      <Button className="bg-yellow-500 hover:bg-yellow-600">
                        <Ticket className="w-4 h-4 mr-2" />
                        Записаться
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Прошедшие события */}
          <div>
            <h2 className="text-3xl font-bold mb-8">Прошедшие события</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {pastEvents.map((event) => (
                <Card key={event.id} className="opacity-75 hover:opacity-100 transition-opacity">
                  <div className="flex">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-24 h-24 object-cover rounded-l-lg"
                    />
                    <div className="flex-1 p-4">
                      <h3 className="font-semibold mb-2">{event.title}</h3>
                      <div className="flex items-center text-sm text-gray-500 mb-1">
                        <Calendar className="w-4 h-4 mr-1" />
                        {event.date}
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <Users className="w-4 h-4 mr-1" />
                        {event.participants} участников
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Организация мероприятий */}
          <Card className="mt-16 bg-yellow-50">
            <CardHeader>
              <CardTitle className="text-center">Хотите организовать мероприятие?</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-gray-600 mb-6">
                Мы организуем корпоративные дегустации, частные мероприятия и обучающие семинары
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="text-center">
                  <div className="text-2xl mb-2">🏢</div>
                  <div className="font-medium">Корпоративные</div>
                  <div className="text-sm text-gray-600">мероприятия</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl mb-2">🎉</div>
                  <div className="font-medium">Частные</div>
                  <div className="text-sm text-gray-600">праздники</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl mb-2">📚</div>
                  <div className="font-medium">Обучающие</div>
                  <div className="text-sm text-gray-600">семинары</div>
                </div>
              </div>
              <Button className="bg-yellow-500 hover:bg-yellow-600">
                Связаться с нами
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Events;