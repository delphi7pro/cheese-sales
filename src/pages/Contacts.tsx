import React from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Contacts = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Сообщение отправлено! Мы свяжемся с вами в ближайшее время.');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Заголовок */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Контакты</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Свяжитесь с нами любым удобным способом. Мы всегда рады помочь!
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Контактная информация */}
            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle>Наши контакты</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <MapPin className="w-6 h-6 text-yellow-500 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Адрес</h3>
                      <p className="text-gray-600">
                        г. Москва, ул. Сырная, д. 123<br />
                        ТЦ "Гурман", 2 этаж
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <Phone className="w-6 h-6 text-yellow-500 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Телефон</h3>
                      <p className="text-gray-600">
                        +7 (495) 123-45-67<br />
                        +7 (800) 555-01-23 (бесплатно)
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <Mail className="w-6 h-6 text-yellow-500 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Email</h3>
                      <p className="text-gray-600">
                        info@syrmir.ru<br />
                        orders@syrmir.ru
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <Clock className="w-6 h-6 text-yellow-500 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Режим работы</h3>
                      <p className="text-gray-600">
                        Пн-Пт: 9:00 - 21:00<br />
                        Сб-Вс: 10:00 - 20:00
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Карта */}
              <Card>
                <CardHeader>
                  <CardTitle>Как нас найти</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
                    <p className="text-gray-500">Здесь будет интерактивная карта</p>
                  </div>
                  <p className="text-sm text-gray-600 mt-4">
                    Ближайшие станции метро: Сырная (5 мин пешком), Молочная (7 мин пешком)
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Форма обратной связи */}
            <div>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Send className="w-5 h-5 mr-2" />
                    Напишите нам
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Имя *</Label>
                        <Input id="name" required />
                      </div>
                      <div>
                        <Label htmlFor="email">Email *</Label>
                        <Input id="email" type="email" required />
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="phone">Телефон</Label>
                      <Input id="phone" type="tel" />
                    </div>
                    
                    <div>
                      <Label htmlFor="subject">Тема сообщения *</Label>
                      <Input id="subject" required />
                    </div>
                    
                    <div>
                      <Label htmlFor="message">Сообщение *</Label>
                      <Textarea 
                        id="message" 
                        rows={6} 
                        placeholder="Расскажите, чем мы можем помочь..."
                        required 
                      />
                    </div>
                    
                    <Button type="submit" className="w-full bg-yellow-500 hover:bg-yellow-600 text-white">
                      Отправить сообщение
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Часто задаваемые вопросы */}
              <Card className="mt-8">
                <CardHeader>
                  <CardTitle>Часто задаваемые вопросы</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      {
                        question: 'Как долго хранится сыр?',
                        answer: 'Срок хранения зависит от типа сыра. Подробную информацию смотрите на упаковке.'
                      },
                      {
                        question: 'Доставляете ли вы в регионы?',
                        answer: 'Да, мы доставляем по всей России курьерскими службами.'
                      },
                      {
                        question: 'Можно ли вернуть товар?',
                        answer: 'Возврат возможен в течение 24 часов при сохранении товарного вида.'
                      }
                    ].map((faq, index) => (
                      <div key={index} className="border-b pb-4 last:border-b-0">
                        <h4 className="font-medium mb-2">{faq.question}</h4>
                        <p className="text-sm text-gray-600">{faq.answer}</p>
                      </div>
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

export default Contacts;