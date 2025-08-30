import React from 'react';
import { Package, Calendar, Star, Gift } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Subscription = () => {
  const subscriptionPlans = [
    {
      id: 'basic',
      name: 'Базовая',
      price: 2500,
      description: 'Идеально для знакомства с миром сыра',
      features: [
        '3-4 сорта сыра (300-400г)',
        'Информационные карточки',
        'Рекомендации по подаче',
        'Доставка раз в месяц'
      ],
      popular: false
    },
    {
      id: 'premium',
      name: 'Премиум',
      price: 4500,
      description: 'Для истинных ценителей сыра',
      features: [
        '5-6 сортов сыра (500-600г)',
        'Эксклюзивные сорта',
        'Дегустационные заметки',
        'Рецепты от шеф-повара',
        'Доставка раз в месяц'
      ],
      popular: true
    },
    {
      id: 'gourmet',
      name: 'Гурман',
      price: 7500,
      description: 'Максимальное разнообразие и качество',
      features: [
        '7-8 сортов сыра (700-800г)',
        'Редкие и лимитированные сорта',
        'Персональные рекомендации',
        'Видео от сомелье',
        'Приоритетная доставка',
        'Доступ к закрытым мероприятиям'
      ],
      popular: false
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Подписка оформлена! Первая коробка будет доставлена в течение 3 дней.');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Заголовок */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Package className="w-16 h-16 text-yellow-500 mx-auto mb-6" />
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Сырная подписка</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Получайте тщательно отобранные сыры каждый месяц. Откройте для себя новые вкусы!
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Планы подписки */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Выберите план подписки</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {subscriptionPlans.map((plan) => (
                <Card 
                  key={plan.id} 
                  className={`relative hover:shadow-xl transition-all ${
                    plan.popular ? 'ring-2 ring-yellow-500 shadow-lg' : ''
                  }`}
                >
                  {plan.popular && (
                    <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-yellow-500">
                      Популярный
                    </Badge>
                  )}
                  
                  <CardHeader className="text-center">
                    <CardTitle className="text-2xl">{plan.name}</CardTitle>
                    <div className="text-3xl font-bold text-gray-900 mt-2">
                      {plan.price.toLocaleString()} ₽
                      <span className="text-base font-normal text-gray-500">/месяц</span>
                    </div>
                    <p className="text-gray-600">{plan.description}</p>
                  </CardHeader>
                  
                  <CardContent>
                    <ul className="space-y-3 mb-6">
                      {plan.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <Button 
                      className={`w-full ${
                        plan.popular 
                          ? 'bg-yellow-500 hover:bg-yellow-600' 
                          : 'bg-gray-900 hover:bg-gray-800'
                      }`}
                    >
                      Выбрать план
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Как это работает */}
            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Как работает подписка</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {[
                      {
                        step: 1,
                        title: 'Выберите план',
                        description: 'Подберите подписку под ваши предпочтения и бюджет'
                      },
                      {
                        step: 2,
                        title: 'Получайте коробки',
                        description: 'Каждый месяц мы отправляем вам коробку с отобранными сырами'
                      },
                      {
                        step: 3,
                        title: 'Наслаждайтесь',
                        description: 'Дегустируйте новые сорта и расширяйте свои вкусовые горизонты'
                      },
                      {
                        step: 4,
                        title: 'Управляйте подпиской',
                        description: 'Приостанавливайте, изменяйте или отменяйте в любое время'
                      }
                    ].map((step) => (
                      <div key={step.step} className="flex items-start space-x-4">
                        <div className="w-8 h-8 bg-yellow-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                          {step.step}
                        </div>
                        <div>
                          <h4 className="font-semibold mb-1">{step.title}</h4>
                          <p className="text-sm text-gray-600">{step.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Что входит в коробку */}
              <Card>
                <CardHeader>
                  <CardTitle>Что входит в каждую коробку</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="text-2xl">🧀</div>
                      <div>
                        <h4 className="font-medium">Отборные сыры</h4>
                        <p className="text-sm text-gray-600">Тщательно отобранные нашими экспертами</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <div className="text-2xl">📋</div>
                      <div>
                        <h4 className="font-medium">Информационные карточки</h4>
                        <p className="text-sm text-gray-600">История, характеристики, способы подачи</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <div className="text-2xl">👨‍🍳</div>
                      <div>
                        <h4 className="font-medium">Рецепты</h4>
                        <p className="text-sm text-gray-600">Идеи использования от наших шеф-поваров</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <div className="text-2xl">🍷</div>
                      <div>
                        <h4 className="font-medium">Рекомендации по сочетанию</h4>
                        <p className="text-sm text-gray-600">Советы по подбору вина и закусок</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Форма подписки */}
            <Card>
              <CardHeader>
                <CardTitle>Оформить подписку</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label>Выберите план *</Label>
                    <RadioGroup defaultValue="premium" className="mt-2">
                      {subscriptionPlans.map((plan) => (
                        <div key={plan.id} className="flex items-center space-x-2">
                          <RadioGroupItem value={plan.id} id={plan.id} />
                          <Label htmlFor={plan.id} className="cursor-pointer flex-1">
                            <div className="flex justify-between items-center">
                              <span>{plan.name}</span>
                              <span className="font-bold">{plan.price.toLocaleString()} ₽</span>
                            </div>
                          </Label>
                        </div>
                      ))}
                    </RadioGroup>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="subName">Имя *</Label>
                      <Input id="subName" required />
                    </div>
                    <div>
                      <Label htmlFor="subSurname">Фамилия *</Label>
                      <Input id="subSurname" required />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="subEmail">Email *</Label>
                    <Input id="subEmail" type="email" required />
                  </div>
                  
                  <div>
                    <Label htmlFor="subPhone">Телефон *</Label>
                    <Input id="subPhone" type="tel" required />
                  </div>
                  
                  <div>
                    <Label htmlFor="subAddress">Адрес доставки *</Label>
                    <Input id="subAddress" placeholder="Улица, дом, квартира" required />
                  </div>
                  
                  <div>
                    <Label htmlFor="preferences">Предпочтения</Label>
                    <Input 
                      id="preferences" 
                      placeholder="Любимые виды сыра, аллергии..."
                    />
                  </div>
                  
                  <div>
                    <Label>Дата первой доставки</Label>
                    <RadioGroup defaultValue="asap" className="mt-2">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="asap" id="asap" />
                        <Label htmlFor="asap">Как можно скорее</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="specific" id="specific" />
                        <Label htmlFor="specific">Конкретная дата</Label>
                      </div>
                    </RadioGroup>
                  </div>
                  
                  <Button type="submit" className="w-full bg-yellow-500 hover:bg-yellow-600 text-white" size="lg">
                    Оформить подписку
                  </Button>
                  
                  <p className="text-xs text-gray-500 text-center">
                    Подписку можно приостановить или отменить в любое время
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

export default Subscription;