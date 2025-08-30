import React from 'react';
import { Handshake, Globe, TrendingUp, Award } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Partnership = () => {
  const partnershipTypes = [
    {
      title: 'Поставщики сыров',
      description: 'Производители и фермеры, желающие представить свою продукцию на российском рынке',
      benefits: [
        'Доступ к широкой клиентской базе',
        'Маркетинговая поддержка',
        'Логистические решения',
        'Помощь в сертификации'
      ],
      icon: Globe
    },
    {
      title: 'Розничные партнеры',
      description: 'Магазины и торговые сети, заинтересованные в продаже качественных сыров',
      benefits: [
        'Выгодные условия поставок',
        'Обучение персонала',
        'Маркетинговые материалы',
        'Эксклюзивные продукты'
      ],
      icon: TrendingUp
    },
    {
      title: 'Ресторанные партнеры',
      description: 'Рестораны и кафе, стремящиеся предложить гостям лучшие сыры',
      benefits: [
        'Специальные цены для HoReCa',
        'Консультации шеф-повара',
        'Сезонные предложения',
        'Быстрая доставка'
      ],
      icon: Award
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Заявка на партнерство отправлена! Мы свяжемся с вами в ближайшее время.');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Заголовок */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Handshake className="w-16 h-16 text-yellow-500 mx-auto mb-6" />
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Партнерство</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Развивайте свой бизнес вместе с нами. Мы предлагаем взаимовыгодное сотрудничество
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Типы партнерства */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Виды партнерства</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {partnershipTypes.map((type, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader className="text-center">
                    <type.icon className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
                    <CardTitle>{type.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-6 text-center">{type.description}</p>
                    
                    <div>
                      <h4 className="font-semibold mb-3">Преимущества:</h4>
                      <ul className="space-y-2">
                        {type.benefits.map((benefit, i) => (
                          <li key={i} className="flex items-start text-sm">
                            <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full mt-2 mr-2 flex-shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Наши партнеры */}
            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Наши партнеры</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold mb-3">Производители</h4>
                      <div className="grid grid-cols-2 gap-4">
                        {[
                          'Fromagerie Laurent (Франция)',
                          'Caseificio Sociale (Италия)',
                          'Alpine Cheese Co (Швейцария)',
                          'Dutch Masters (Нидерланды)'
                        ].map((partner, index) => (
                          <div key={index} className="text-sm text-gray-600 p-3 bg-gray-50 rounded">
                            {partner}
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-3">Розничные сети</h4>
                      <div className="grid grid-cols-2 gap-4">
                        {[
                          'Азбука Вкуса',
                          'Глобус Гурмэ',
                          'Лента',
                          'Перекресток'
                        ].map((partner, index) => (
                          <div key={index} className="text-sm text-gray-600 p-3 bg-gray-50 rounded">
                            {partner}
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-3">Рестораны</h4>
                      <div className="grid grid-cols-2 gap-4">
                        {[
                          'White Rabbit',
                          'Café Pushkin',
                          'Bolshoi Restaurant',
                          'Savva'
                        ].map((partner, index) => (
                          <div key={index} className="text-sm text-gray-600 p-3 bg-gray-50 rounded">
                            {partner}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Форма заявки на партнерство */}
            <Card>
              <CardHeader>
                <CardTitle>Стать партнером</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="partnershipType">Тип партнерства *</Label>
                    <Select required>
                      <SelectTrigger>
                        <SelectValue placeholder="Выберите тип" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="supplier">Поставщик</SelectItem>
                        <SelectItem value="retail">Розничный партнер</SelectItem>
                        <SelectItem value="restaurant">Ресторанный партнер</SelectItem>
                        <SelectItem value="other">Другое</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <Label htmlFor="companyName">Название компании *</Label>
                    <Input id="companyName" required />
                  </div>
                  
                  <div>
                    <Label htmlFor="contactPerson">Контактное лицо *</Label>
                    <Input id="contactPerson" required />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="partnerPhone">Телефон *</Label>
                      <Input id="partnerPhone" type="tel" required />
                    </div>
                    <div>
                      <Label htmlFor="partnerEmail">Email *</Label>
                      <Input id="partnerEmail" type="email" required />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="website">Веб-сайт</Label>
                    <Input id="website" type="url" placeholder="https://" />
                  </div>
                  
                  <div>
                    <Label htmlFor="businessDescription">Описание бизнеса *</Label>
                    <Textarea 
                      id="businessDescription"
                      rows={4}
                      placeholder="Расскажите о вашей компании и продукции..."
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="partnershipGoals">Цели партнерства</Label>
                    <Textarea 
                      id="partnershipGoals"
                      rows={3}
                      placeholder="Что вы ожидаете от сотрудничества?"
                    />
                  </div>
                  
                  <Button type="submit" className="w-full bg-yellow-500 hover:bg-yellow-600">
                    Отправить заявку
                  </Button>
                  
                  <p className="text-xs text-gray-500 text-center">
                    Мы рассмотрим вашу заявку в течение 5 рабочих дней
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Partnership;