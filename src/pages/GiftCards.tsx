import React, { useState } from 'react';
import { Gift, Heart, Star, CreditCard } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const GiftCards = () => {
  const [selectedAmount, setSelectedAmount] = useState('3000');
  const [customAmount, setCustomAmount] = useState('');
  const [selectedDesign, setSelectedDesign] = useState('classic');

  const predefinedAmounts = [
    { value: '1000', label: '1 000 ₽' },
    { value: '2000', label: '2 000 ₽' },
    { value: '3000', label: '3 000 ₽' },
    { value: '5000', label: '5 000 ₽' },
    { value: '10000', label: '10 000 ₽' },
    { value: 'custom', label: 'Другая сумма' }
  ];

  const designs = [
    {
      id: 'classic',
      name: 'Классический',
      image: 'https://images.pexels.com/photos/4109943/pexels-photo-4109943.jpeg',
      description: 'Элегантный дизайн с сырной тематикой'
    },
    {
      id: 'festive',
      name: 'Праздничный',
      image: 'https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg',
      description: 'Яркий дизайн для особых случаев'
    },
    {
      id: 'minimalist',
      name: 'Минималистичный',
      image: 'https://images.pexels.com/photos/4109943/pexels-photo-4109943.jpeg',
      description: 'Сдержанный и стильный дизайн'
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Подарочная карта оформлена! Инструкции по получению отправлены на email.');
  };

  const getAmount = () => {
    return selectedAmount === 'custom' ? customAmount : selectedAmount;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Заголовок */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Gift className="w-16 h-16 text-yellow-500 mx-auto mb-6" />
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Подарочные карты</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Подарите близким возможность выбрать любимые сыры. Идеальный подарок для гурманов!
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Форма оформления */}
            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Оформить подарочную карту</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Выбор суммы */}
                    <div>
                      <Label className="text-base font-semibold mb-4 block">Сумма подарочной карты</Label>
                      <RadioGroup value={selectedAmount} onValueChange={setSelectedAmount}>
                        <div className="grid grid-cols-2 gap-3">
                          {predefinedAmounts.map((amount) => (
                            <div key={amount.value} className="flex items-center space-x-2">
                              <RadioGroupItem value={amount.value} id={amount.value} />
                              <Label htmlFor={amount.value} className="cursor-pointer">
                                {amount.label}
                              </Label>
                            </div>
                          ))}
                        </div>
                      </RadioGroup>
                      
                      {selectedAmount === 'custom' && (
                        <div className="mt-4">
                          <Label htmlFor="customAmount">Укажите сумму (₽)</Label>
                          <Input
                            id="customAmount"
                            type="number"
                            min="500"
                            max="50000"
                            value={customAmount}
                            onChange={(e) => setCustomAmount(e.target.value)}
                            placeholder="Минимум 500 ₽"
                            required
                          />
                        </div>
                      )}
                    </div>

                    {/* Выбор дизайна */}
                    <div>
                      <Label className="text-base font-semibold mb-4 block">Дизайн карты</Label>
                      <RadioGroup value={selectedDesign} onValueChange={setSelectedDesign}>
                        <div className="grid grid-cols-1 gap-4">
                          {designs.map((design) => (
                            <div key={design.id} className="flex items-center space-x-2">
                              <RadioGroupItem value={design.id} id={design.id} />
                              <Label htmlFor={design.id} className="flex-1 cursor-pointer">
                                <div className="flex items-center space-x-3 p-3 border rounded-lg hover:bg-gray-50">
                                  <img
                                    src={design.image}
                                    alt={design.name}
                                    className="w-16 h-10 object-cover rounded"
                                  />
                                  <div>
                                    <div className="font-medium">{design.name}</div>
                                    <div className="text-sm text-gray-500">{design.description}</div>
                                  </div>
                                </div>
                              </Label>
                            </div>
                          ))}
                        </div>
                      </RadioGroup>
                    </div>

                    {/* Персонализация */}
                    <div>
                      <Label htmlFor="recipientName">Имя получателя</Label>
                      <Input id="recipientName" placeholder="Для кого подарок" />
                    </div>

                    <div>
                      <Label htmlFor="giftMessage">Сообщение на карте</Label>
                      <Textarea
                        id="giftMessage"
                        rows={3}
                        placeholder="Поздравление или пожелание (до 200 символов)"
                        maxLength={200}
                      />
                    </div>

                    {/* Информация о покупателе */}
                    <div className="border-t pt-6">
                      <h3 className="font-semibold mb-4">Ваши данные</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="buyerName">Ваше имя *</Label>
                          <Input id="buyerName" required />
                        </div>
                        <div>
                          <Label htmlFor="buyerEmail">Email *</Label>
                          <Input id="buyerEmail" type="email" required />
                        </div>
                      </div>
                    </div>

                    {/* Способ доставки */}
                    <div>
                      <Label className="text-base font-semibold mb-4 block">Способ получения</Label>
                      <RadioGroup defaultValue="email">
                        <div className="space-y-3">
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="email" id="email" />
                            <Label htmlFor="email" className="cursor-pointer">
                              <div>
                                <div className="font-medium">Электронная карта</div>
                                <div className="text-sm text-gray-500">Мгновенная доставка на email</div>
                              </div>
                            </Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="physical" id="physical" />
                            <Label htmlFor="physical" className="cursor-pointer">
                              <div>
                                <div className="font-medium">Физическая карта</div>
                                <div className="text-sm text-gray-500">Доставка курьером (+300 ₽)</div>
                              </div>
                            </Label>
                          </div>
                        </div>
                      </RadioGroup>
                    </div>

                    <Button type="submit" className="w-full bg-yellow-500 hover:bg-yellow-600 text-white" size="lg">
                      <CreditCard className="w-5 h-5 mr-2" />
                      Оформить за {getAmount() ? parseInt(getAmount()).toLocaleString() : '0'} ₽
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Информация о подарочных картах */}
            <div className="space-y-6">
              {/* Преимущества */}
              <Card>
                <CardHeader>
                  <CardTitle>Преимущества подарочных карт</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      {
                        icon: Heart,
                        title: 'Идеальный подарок',
                        description: 'Позвольте получателю выбрать то, что ему действительно нравится'
                      },
                      {
                        icon: Star,
                        title: 'Долгий срок действия',
                        description: 'Карты действительны в течение 12 месяцев с момента покупки'
                      },
                      {
                        icon: Gift,
                        title: 'Красивое оформление',
                        description: 'Несколько дизайнов на выбор и возможность персонализации'
                      }
                    ].map((benefit, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <benefit.icon className="w-5 h-5 text-yellow-500 mt-1" />
                        <div>
                          <h4 className="font-medium">{benefit.title}</h4>
                          <p className="text-sm text-gray-600">{benefit.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Условия использования */}
              <Card>
                <CardHeader>
                  <CardTitle>Условия использования</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Карта действительна 12 месяцев с момента покупки</li>
                    <li>• Можно использовать частями</li>
                    <li>• Не подлежит возврату и обмену на деньги</li>
                    <li>• Действует на всю продукцию в каталоге</li>
                    <li>• Можно совмещать с другими скидками</li>
                    <li>• При утере карты восст��новление невозможно</li>
                  </ul>
                </CardContent>
              </Card>

              {/* Популярные суммы */}
              <Card className="bg-yellow-50">
                <CardHeader>
                  <CardTitle>Популярные суммы</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span>1 000 ₽</span>
                      <span className="text-sm text-gray-500">Для знакомства с ассортиментом</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>3 000 ₽</span>
                      <span className="text-sm text-gray-500">Сырная тарелка для компании</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>5 000 ₽</span>
                      <span className="text-sm text-gray-500">Премиальные сорта</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>10 000 ₽</span>
                      <span className="text-sm text-gray-500">Для истинных гурманов</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Корпоративные карты */}
              <Card>
                <CardHeader>
                  <CardTitle>Корпоративные подарки</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Подарочные карты - отличное решение для корпоративных подарков сотрудникам и партнерам.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1 mb-4">
                    <li>• Скидки при заказе от 10 карт</li>
                    <li>• Персонализация с логотипом компании</li>
                    <li>• Отчетность по использованию</li>
                    <li>• Специальные условия оплаты</li>
                  </ul>
                  <Button variant="outline" className="w-full">
                    Узнать подробности
                  </Button>
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

export default GiftCards;