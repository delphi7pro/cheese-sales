import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, CreditCard, Truck, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Separator } from '@/components/ui/separator';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useCart } from '@/context/CartContext';

const Checkout = () => {
  const { state } = useCart();
  const [deliveryMethod, setDeliveryMethod] = useState('courier');
  const [paymentMethod, setPaymentMethod] = useState('card');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Здесь будет логика оформления заказа
    alert('Заказ оформлен! Спасибо за покупку!');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Навигация */}
        <div className="flex items-center space-x-4 mb-8">
          <Link to="/cart" className="flex items-center text-gray-600 hover:text-gray-900">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Назад в корзину
          </Link>
          <h1 className="text-3xl font-bold text-gray-900">Оформление заказа</h1>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Форма заказа */}
            <div className="lg:col-span-2 space-y-6">
              {/* Контактная информация */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <MapPin className="w-5 h-5 mr-2" />
                    Контактная информация
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">Имя *</Label>
                      <Input id="firstName" required />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Фамилия *</Label>
                      <Input id="lastName" required />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input id="email" type="email" required />
                  </div>
                  <div>
                    <Label htmlFor="phone">Телефон *</Label>
                    <Input id="phone" type="tel" required />
                  </div>
                </CardContent>
              </Card>

              {/* Доставка */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Truck className="w-5 h-5 mr-2" />
                    Способ доставки
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <RadioGroup value={deliveryMethod} onValueChange={setDeliveryMethod}>
                    <div className="flex items-center space-x-2 p-4 border rounded-lg">
                      <RadioGroupItem value="courier" id="courier" />
                      <Label htmlFor="courier" className="flex-1 cursor-pointer">
                        <div className="font-medium">Курьерская доставка</div>
                        <div className="text-sm text-gray-500">По Москве в день заказа - 300 ₽</div>
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2 p-4 border rounded-lg">
                      <RadioGroupItem value="pickup" id="pickup" />
                      <Label htmlFor="pickup" className="flex-1 cursor-pointer">
                        <div className="font-medium">Самовывоз</div>
                        <div className="text-sm text-gray-500">Бесплатно, ул. Сырная, 123</div>
                      </Label>
                    </div>
                  </RadioGroup>

                  {deliveryMethod === 'courier' && (
                    <div className="mt-4 space-y-4">
                      <div>
                        <Label htmlFor="address">Адрес доставки *</Label>
                        <Input id="address" placeholder="Улица, дом, квартира" required />
                      </div>
                      <div>
                        <Label htmlFor="comment">Комментарий к заказу</Label>
                        <Textarea id="comment" placeholder="Дополнительная информация для курьера" />
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Оплата */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <CreditCard className="w-5 h-5 mr-2" />
                    Способ оплаты
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
                    <div className="flex items-center space-x-2 p-4 border rounded-lg">
                      <RadioGroupItem value="card" id="card" />
                      <Label htmlFor="card" className="flex-1 cursor-pointer">
                        <div className="font-medium">Банковская карта</div>
                        <div className="text-sm text-gray-500">Visa, MasterCard, МИР</div>
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2 p-4 border rounded-lg">
                      <RadioGroupItem value="cash" id="cash" />
                      <Label htmlFor="cash" className="flex-1 cursor-pointer">
                        <div className="font-medium">Наличными при получении</div>
                        <div className="text-sm text-gray-500">Только для курьерской доставки</div>
                      </Label>
                    </div>
                  </RadioGroup>
                </CardContent>
              </Card>
            </div>

            {/* Сводка заказа */}
            <div>
              <Card className="sticky top-24">
                <CardHeader>
                  <CardTitle>Ваш заказ</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {state.items.map((item) => (
                      <div key={item.product.id} className="flex justify-between items-start">
                        <div className="flex-1">
                          <h4 className="font-medium">{item.product.name}</h4>
                          <p className="text-sm text-gray-500">{item.quantity} × {item.product.price.toLocaleString()} ₽</p>
                        </div>
                        <div className="font-medium">
                          {(item.product.price * item.quantity).toLocaleString()} ₽
                        </div>
                      </div>
                    ))}
                    
                    <Separator />
                    
                    <div className="flex justify-between">
                      <span>Товары</span>
                      <span>{state.total.toLocaleString()} ₽</span>
                    </div>
                    
                    <div className="flex justify-between">
                      <span>Доставка</span>
                      <span>{deliveryMethod === 'courier' ? '300' : '0'} ₽</span>
                    </div>
                    
                    <Separator />
                    
                    <div className="flex justify-between text-lg font-bold">
                      <span>Итого</span>
                      <span>{(state.total + (deliveryMethod === 'courier' ? 300 : 0)).toLocaleString()} ₽</span>
                    </div>
                    
                    <Button type="submit" className="w-full bg-yellow-500 hover:bg-yellow-600 text-white" size="lg">
                      Подтвердить заказ
                    </Button>
                    
                    <p className="text-xs text-gray-500 text-center">
                      Нажимая "Подтвердить заказ", вы соглашаетесь с 
                      <Link to="/terms" className="text-yellow-600 hover:underline"> условиями использования</Link>
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </form>
      </div>

      <Footer />
    </div>
  );
};

export default Checkout;