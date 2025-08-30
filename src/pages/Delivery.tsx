import React from 'react';
import { Truck, Clock, MapPin, Package, Shield, CreditCard } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Delivery = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Заголовок */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Truck className="w-16 h-16 text-yellow-500 mx-auto mb-6" />
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Доставка и оплата</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Мы доставляем свежие сыры быстро и безопасно по всей России
          </p>
        </div>
      </section>

      {/* Способы доставки */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Способы доставки</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Truck className="w-6 h-6 text-yellow-500 mr-3" />
                  Курьерская доставка
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">По Москве</h4>
                    <ul className="text-gray-600 space-y-1">
                      <li>• Доставка в день заказа (при заказе до 15:00)</li>
                      <li>• Стоимость: 300 ₽</li>
                      <li>• Бесплатно при заказе от 3000 ₽</li>
                      <li>• Время доставки: 2-4 часа</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">По Московской области</h4>
                    <ul className="text-gray-600 space-y-1">
                      <li>• Доставка на следующий день</li>
                      <li>• Стоимость: 500 ₽</li>
                      <li>• Бесплатно при заказе от 5000 ₽</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MapPin className="w-6 h-6 text-yellow-500 mr-3" />
                  Самовывоз
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Наш магазин</h4>
                    <p className="text-gray-600 mb-2">
                      г. Москва, ул. Сырная, д. 123<br />
                      ТЦ "Гурман", 2 этаж
                    </p>
                    <Badge className="bg-green-500">Бесплатно</Badge>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Режим работы</h4>
                    <ul className="text-gray-600 space-y-1">
                      <li>• Пн-Пт: 9:00 - 21:00</li>
                      <li>• Сб-Вс: 10:00 - 20:00</li>
                      <li>• Готовность заказа: через 2 часа</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Доставка по России */}
          <Card className="mb-16">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Package className="w-6 h-6 text-yellow-500 mr-3" />
                Доставка по России
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                  <h4 className="font-semibold mb-3">Крупные города</h4>
                  <ul className="text-gray-600 space-y-1">
                    <li>• Санкт-Петербург: 1-2 дня</li>
                    <li>• Екатеринбург: 2-3 дня</li>
                    <li>• Новосибирск: 3-4 дня</li>
                    <li>• Казань: 2-3 дня</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Другие города</h4>
                  <ul className="text-gray-600 space-y-1">
                    <li>• Доставка: 3-7 дней</li>
                    <li>• Стоимость от 500 ₽</li>
                    <li>• Расчет при оформлении</li>
                    <li>• Отслеживание посылки</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Условия</h4>
                  <ul className="text-gray-600 space-y-1">
                    <li>• Термоупаковка включена</li>
                    <li>• Страхование груза</li>
                    <li>• SMS уведомления</li>
                    <li>• Бесплатно от 7000 ₽</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Способы оплаты */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <CreditCard className="w-6 h-6 text-yellow-500 mr-3" />
                  Способы оплаты
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Онлайн оплата</h4>
                    <ul className="text-gray-600 space-y-1">
                      <li>• Банковские карты (Visa, MasterCard, МИР)</li>
                      <li>• Электронные кошельки</li>
                      <li>• Интернет-банкинг</li>
                      <li>• Безопасные платежи через SSL</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">При получении</h4>
                    <ul className="text-gray-600 space-y-1">
                      <li>• Наличными курьеру</li>
                      <li>• Картой при получении</li>
                      <li>• Только для Москвы и МО</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Форма обратной связи */}
            <Card>
              <CardHeader>
                <CardTitle>Есть вопросы?</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="contactName">Ваше имя</Label>
                    <Input id="contactName" required />
                  </div>
                  <div>
                    <Label htmlFor="contactEmail">Email</Label>
                    <Input id="contactEmail" type="email" required />
                  </div>
                  <div>
                    <Label htmlFor="contactMessage">Вопрос</Label>
                    <Textarea 
                      id="contactMessage" 
                      rows={4}
                      placeholder="Задайте ваш вопрос о доставке или оплате..."
                      required 
                    />
                  </div>
                  <Button type="submit" className="w-full bg-yellow-500 hover:bg-yellow-600">
                    Отправить вопрос
                  </Button>
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

export default Delivery;