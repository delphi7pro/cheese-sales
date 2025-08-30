import React from 'react';
import { Building2, TrendingUp, Users, Package } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Wholesale = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Заявка отправлена! Наш менеджер свяжется с вами в течение рабочего дня.');
  };

  const benefits = [
    {
      icon: TrendingUp,
      title: 'Выгодные цены',
      description: 'Скидки до 30% при оптовых закупках'
    },
    {
      icon: Package,
      title: 'Большой ассортимент',
      description: 'Более 200 видов сыров в наличии'
    },
    {
      icon: Users,
      title: 'Персональный менеджер',
      description: 'Индивидуальный подход к каждому клиенту'
    },
    {
      icon: Building2,
      title: 'Гибкие условия',
      description: 'Отсрочка платежа для постоянных клиентов'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Заголовок */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Building2 className="w-16 h-16 text-yellow-500 mx-auto mb-6" />
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Оптовые продажи</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Выгодные условия для ресторанов, кафе, магазинов и других предприятий
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Преимущества */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <benefit.icon className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Условия сотрудничества */}
            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle>Условия сотрудничества</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold mb-3">Скидки по объему</h4>
                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span>От 50 000 ₽</span>
                          <Badge className="bg-green-500">5%</Badge>
                        </div>
                        <div className="flex justify-between items-center">
                          <span>От 100 000 ₽</span>
                          <Badge className="bg-green-500">10%</Badge>
                        </div>
                        <div className="flex justify-between items-center">
                          <span>От 200 000 ₽</span>
                          <Badge className="bg-green-500">15%</Badge>
                        </div>
                        <div className="flex justify-between items-center">
                          <span>От 500 000 ₽</span>
                          <Badge className="bg-green-500">20%</Badge>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-3">Дополнительные услуги</h4>
                      <ul className="text-gray-600 space-y-1">
                        <li>• Бесплатная доставка от 30 000 ₽</li>
                        <li>• Консультации по ассортименту</li>
                        <li>• Обучение персонала</li>
                        <li>• Маркетинговая поддержка</li>
                        <li>• Отсрочка платежа до 30 дней</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Наши клиенты</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      'Рестораны',
                      'Кафе и бары',
                      'Продуктовые магазины',
                      'Гостиницы',
                      'Кейтеринг',
                      'Корпоративные клиенты'
                    ].map((client, index) => (
                      <div key={index} className="text-center p-4 border rounded-lg">
                        <div className="text-2xl mb-2">🏢</div>
                        <div className="text-sm font-medium">{client}</div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Форма заявки */}
            <Card>
              <CardHeader>
                <CardTitle>Оставить заявку</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
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
                      <Label htmlFor="phone">Телефон *</Label>
                      <Input id="phone" type="tel" required />
                    </div>
                    <div>
                      <Label htmlFor="email">Email *</Label>
                      <Input id="email" type="email" required />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="businessType">Тип бизнеса</Label>
                    <Input id="businessType" placeholder="Ресторан, магазин, кафе..." />
                  </div>
                  
                  <div>
                    <Label htmlFor="monthlyVolume">Планируемый месячный объем закупок</Label>
                    <Input id="monthlyVolume" placeholder="Сумма в рублях" />
                  </div>
                  
                  <div>
                    <Label htmlFor="interests">Интересующие категории товаров</Label>
                    <Textarea 
                      id="interests"
                      rows={3}
                      placeholder="Опишите, какие сыры вас интересуют..."
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="additionalInfo">Дополнительная информация</Label>
                    <Textarea 
                      id="additionalInfo"
                      rows={3}
                      placeholder="Расскажите о ваших потребностях..."
                    />
                  </div>
                  
                  <Button type="submit" className="w-full bg-yellow-500 hover:bg-yellow-600 text-white">
                    Отправить заявку
                  </Button>
                  
                  <p className="text-xs text-gray-500 text-center">
                    Отправляя заявку, вы соглашаетесь на обработку персональных данных
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

export default Wholesale;