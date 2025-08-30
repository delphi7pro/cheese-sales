import React from 'react';
import { Gift, Star, Trophy, Crown } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Loyalty = () => {
  const loyaltyLevels = [
    {
      name: 'Сырный новичок',
      icon: Star,
      minSpent: 0,
      discount: 0,
      benefits: ['Приветственная скидка 5%', 'Уведомления о новинках'],
      color: 'bg-gray-500'
    },
    {
      name: 'Сырный любитель',
      icon: Gift,
      minSpent: 10000,
      discount: 5,
      benefits: ['Скидка 5%', 'Бесплатная доставка от 2000 ₽', 'Приоритетная поддержка'],
      color: 'bg-blue-500'
    },
    {
      name: 'Сырный эксперт',
      icon: Trophy,
      minSpent: 50000,
      discount: 10,
      benefits: ['Скидка 10%', 'Бесплатная доставка', 'Эксклюзивные товары', 'Дегустации'],
      color: 'bg-purple-500'
    },
    {
      name: 'Сырный гурман',
      icon: Crown,
      minSpent: 100000,
      discount: 15,
      benefits: ['Скидка 15%', 'VIP поддержка', 'Персональные рекомендации', 'Закрытые мероприятия'],
      color: 'bg-yellow-500'
    }
  ];

  const currentLevel = 1; // В реальном приложении это будет из состояния пользователя
  const currentSpent = 25000;
  const nextLevelSpent = loyaltyLevels[currentLevel + 1]?.minSpent || 100000;
  const progressToNext = ((currentSpent - loyaltyLevels[currentLevel].minSpent) / (nextLevelSpent - loyaltyLevels[currentLevel].minSpent)) * 100;

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Заголовок */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Gift className="w-16 h-16 text-yellow-500 mx-auto mb-6" />
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Программа лояльности</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Покупайте больше - получайте больше выгод! Накапливайте бонусы и получайте эксклюзивные привилегии
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Текущий статус */}
          <Card className="mb-12 bg-gradient-to-r from-yellow-50 to-orange-50">
            <CardHeader>
              <CardTitle className="flex items-center">
                <loyaltyLevels[currentLevel].icon className="w-6 h-6 text-yellow-500 mr-3" />
                Ваш текущий статус: {loyaltyLevels[currentLevel].name}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <div className="text-2xl font-bold text-gray-900 mb-1">
                    {currentSpent.toLocaleString()} ₽
                  </div>
                  <div className="text-sm text-gray-600">Потрачено всего</div>
                </div>
                
                <div>
                  <div className="text-2xl font-bold text-yellow-600 mb-1">
                    {loyaltyLevels[currentLevel].discount}%
                  </div>
                  <div className="text-sm text-gray-600">Текущая скидка</div>
                </div>
                
                <div>
                  <div className="text-2xl font-bold text-green-600 mb-1">
                    {(nextLevelSpent - currentSpent).toLocaleString()} ₽
                  </div>
                  <div className="text-sm text-gray-600">До следующего уровня</div>
                </div>
              </div>
              
              {currentLevel < loyaltyLevels.length - 1 && (
                <div className="mt-6">
                  <div className="flex justify-between text-sm text-gray-600 mb-2">
                    <span>Прогресс до уровня "{loyaltyLevels[currentLevel + 1].name}"</span>
                    <span>{Math.round(progressToNext)}%</span>
                  </div>
                  <Progress value={progressToNext} className="h-3" />
                </div>
              )}
            </CardContent>
          </Card>

          {/* Уровни программы */}
          <h2 className="text-3xl font-bold text-center mb-12">Уровни программы лояльности</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {loyaltyLevels.map((level, index) => (
              <Card 
                key={index} 
                className={`relative hover:shadow-lg transition-all ${
                  index === currentLevel ? 'ring-2 ring-yellow-500 shadow-lg' : ''
                }`}
              >
                {index === currentLevel && (
                  <Badge className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-yellow-500">
                    Ваш уровень
                  </Badge>
                )}
                
                <CardHeader className="text-center">
                  <div className={`w-16 h-16 ${level.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <level.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-lg">{level.name}</CardTitle>
                  <div className="text-sm text-gray-600">
                    От {level.minSpent.toLocaleString()} ₽
                  </div>
                </CardHeader>
                
                <CardContent>
                  <div className="text-center mb-4">
                    <div className="text-2xl font-bold text-gray-900">
                      {level.discount}%
                    </div>
                    <div className="text-sm text-gray-600">скидка</div>
                  </div>
                  
                  <ul className="space-y-2">
                    {level.benefits.map((benefit, i) => (
                      <li key={i} className="text-sm text-gray-600 flex items-start">
                        <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full mt-2 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Как работает программа */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle>Как работает программа лояльности</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-yellow-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    1
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Регистрируйтесь</h3>
                  <p className="text-gray-600">Создайте аккаунт и получите приветственную скидку 5%</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-yellow-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    2
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Покупайте</h3>
                  <p className="text-gray-600">Совершайте покупки и накапливайте сумму для повышения уровня</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-yellow-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    3
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Получайте привилегии</h3>
                  <p className="text-gray-600">Пользуйтесь скидками и эксклюзивными предложениями</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Регистрация в программе */}
          <Card className="bg-yellow-50">
            <CardHeader>
              <CardTitle className="text-center">Присоединяйтесь к программе лояльности</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="max-w-md mx-auto space-y-4">
                <div>
                  <Label htmlFor="loyaltyName">Имя *</Label>
                  <Input id="loyaltyName" required />
                </div>
                
                <div>
                  <Label htmlFor="loyaltyEmail">Email *</Label>
                  <Input id="loyaltyEmail" type="email" required />
                </div>
                
                <div>
                  <Label htmlFor="loyaltyPhone">Телефон</Label>
                  <Input id="loyaltyPhone" type="tel" />
                </div>
                
                <Button type="submit" className="w-full bg-yellow-500 hover:bg-yellow-600 text-white">
                  Зарегистрироваться
                </Button>
                
                <p className="text-xs text-gray-500 text-center">
                  Регистрируясь, вы соглашаетесь с условиями программы лояльности
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Loyalty;