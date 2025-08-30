import React from 'react';
import { BookOpen, Award, Globe, Clock } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const CheeseGuide = () => {
  const cheeseTypes = [
    {
      name: 'Твердые сыры',
      description: 'Сыры с плотной текстурой и долгим сроком созревания',
      examples: ['Пармезан', 'Чеддер', 'Гауда', 'Эмменталь'],
      characteristics: 'Низкое содержание влаги, долгое хранение, насыщенный вкус',
      image: 'https://images.pexels.com/photos/4109943/pexels-photo-4109943.jpeg'
    },
    {
      name: 'Мягкие сыры',
      description: 'Нежные сыры с кремовой текстурой',
      examples: ['Камамбер', 'Бри', 'Шаурс', 'Реблошон'],
      characteristics: 'Высокое содержание влаги, нежная текстура, деликатный вкус',
      image: 'https://images.pexels.com/photos/4109943/pexels-photo-4109943.jpeg'
    },
    {
      name: 'Сыры с плесенью',
      description: 'Сыры с благородной плесенью внутри или снаружи',
      examples: ['Рокфор', 'Горгонзола', 'Стилтон', 'Дор Блю'],
      characteristics: 'Острый вкус, характерный аромат, голубые или зеленые прожилки',
      image: 'https://images.pexels.com/photos/4109943/pexels-photo-4109943.jpeg'
    }
  ];

  const tastingTips = [
    {
      title: 'Температура подачи',
      content: 'Достаньте сыр из холодильника за 30-60 минут до дегустации. Оптимальная температура для большинства сыров: 18-20°C.'
    },
    {
      title: 'Порядок дегустации',
      content: 'Начинайте с мягких сыров, переходите к твердым, завершайте сырами с плесенью. Между дегустациями очищайте вкус водой или нейтральными крекерами.'
    },
    {
      title: 'Сочетания',
      content: 'Мягкие сыры хорошо сочетаются с белым вином, твердые - с красным. Сыры с плесенью прекрасно дополняют сладкие вина и мед.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Заголовок */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <BookOpen className="w-16 h-16 text-yellow-500 mx-auto mb-6" />
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Гид по сырам</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Полное руководство по миру сыра: от истории до правил дегустации
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="types" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="types">Виды сыров</TabsTrigger>
              <TabsTrigger value="tasting">Дегустация</TabsTrigger>
              <TabsTrigger value="storage">Хранение</TabsTrigger>
              <TabsTrigger value="history">История</TabsTrigger>
            </TabsList>
            
            <TabsContent value="types" className="mt-8">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {cheeseTypes.map((type, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <div className="relative">
                      <img
                        src={type.image}
                        alt={type.name}
                        className="w-full h-48 object-cover rounded-t-lg"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle>{type.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 mb-4">{type.description}</p>
                      
                      <div className="mb-4">
                        <h4 className="font-semibold mb-2">Характеристики:</h4>
                        <p className="text-sm text-gray-600">{type.characteristics}</p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold mb-2">Примеры:</h4>
                        <div className="flex flex-wrap gap-2">
                          {type.examples.map((example, i) => (
                            <Badge key={i} variant="secondary">{example}</Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="tasting" className="mt-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="space-y-6">
                  {tastingTips.map((tip, index) => (
                    <Card key={index}>
                      <CardHeader>
                        <CardTitle className="text-lg">{tip.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600">{tip.content}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Этапы дегустации</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[
                        { step: 1, title: 'Визуальная оценка', desc: 'Оцените внешний вид, цвет, текстуру' },
                        { step: 2, title: 'Аромат', desc: 'Вдохните аромат, определите основные ноты' },
                        { step: 3, title: 'Текстура', desc: 'Почувствуйте консистенцию во рту' },
                        { step: 4, title: 'Вкус', desc: 'Определите основные и дополнительные вкусы' },
                        { step: 5, title: 'Послевкусие', desc: 'Оцените длительность и характер послевкусия' }
                      ].map((stage) => (
                        <div key={stage.step} className="flex items-start space-x-3">
                          <div className="w-8 h-8 bg-yellow-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                            {stage.step}
                          </div>
                          <div>
                            <h4 className="font-semibold">{stage.title}</h4>
                            <p className="text-sm text-gray-600">{stage.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="storage" className="mt-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Правила хранения</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-2">Температура</h4>
                        <p className="text-gray-600 text-sm">
                          Оптимальная температура хранения: +2°C до +8°C. 
                          Избегайте резких перепадов температуры.
                        </p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold mb-2">Упаковка</h4>
                        <p className="text-gray-600 text-sm">
                          Храните в оригинальной упаковке или заверните в пергаментную бумагу. 
                          Избегайте пластиковых пакетов.
                        </p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold mb-2">Влажность</h4>
                        <p className="text-gray-600 text-sm">
                          Оптимальная влажность: 80-85%. Используйте овощной отсек холодильника.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Сроки хранения</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {[
                        { type: 'Твердые сыры', period: '2-4 недели' },
                        { type: 'Полутвердые сыры', period: '1-2 недели' },
                        { type: 'Мягкие сыры', period: '3-7 дней' },
                        { type: 'Свежие сыры', period: '2-5 дней' },
                        { type: 'Сыры с плесенью', period: '1-2 недели' }
                      ].map((item, index) => (
                        <div key={index} className="flex justify-between items-center py-2 border-b last:border-b-0">
                          <span className="font-medium">{item.type}</span>
                          <Badge variant="outline">{item.period}</Badge>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="history" className="mt-8">
              <div className="space-y-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Clock className="w-6 h-6 text-yellow-500 mr-3" />
                      История сыроделия
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="prose max-w-none">
                      <p className="text-gray-600 mb-4">
                        Сыроделие - одно из древнейших ремесел человечества. Первые упоминания 
                        о сыре датируются 8000 годом до н.э. Считается, что сыр был открыт случайно, 
                        когда молоко, перевозимое в желудке животного, свернулось под воздействием 
                        ферментов и тряски.
                      </p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                        <div>
                          <h4 className="font-semibold mb-3">Древний мир</h4>
                          <ul className="text-gray-600 space-y-1 text-sm">
                            <li>• 8000 до н.э. - первые сыры в Месопотамии</li>
                            <li>• 3000 до н.э. - сыроделие в Древнем Египте</li>
                            <li>• 1000 до н.э. - развитие в Древней Греции</li>
                            <li>• 100 н.э. - римские технологии</li>
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold mb-3">Средневековье и современность</h4>
                          <ul className="text-gray-600 space-y-1 text-sm">
                            <li>• 400-1400 - монастырские традиции</li>
                            <li>• 1815 - первый сыр камамбер</li>
                            <li>• 1851 - изобретение рокфора</li>
                            <li>• 1900+ - промышленное производство</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Знаменитые сыры мира */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Globe className="w-6 h-6 text-yellow-500 mr-3" />
                      Знаменитые сыры мира
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {[
                        { country: 'Франция', cheese: 'Рокфор', fact: 'Король сыров с голубой плесенью' },
                        { country: 'Италия', cheese: 'Пармезан', fact: 'Созревает до 36 месяцев' },
                        { country: 'Швейцария', cheese: 'Эмменталь', fact: 'Знаменит своими дырочками' },
                        { country: 'Англия', cheese: 'Чеддер', fact: 'Самый популярный сыр в мире' },
                        { country: 'Нидерланды', cheese: 'Гауда', fact: 'Назван в честь города Гауда' },
                        { country: 'Греция', cheese: 'Фета', fact: 'Традиционно из овечьего молока' }
                      ].map((item, index) => (
                        <div key={index} className="border rounded-lg p-4">
                          <div className="flex items-center space-x-2 mb-2">
                            <Badge className="bg-yellow-500">{item.country}</Badge>
                          </div>
                          <h4 className="font-semibold mb-1">{item.cheese}</h4>
                          <p className="text-sm text-gray-600">{item.fact}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CheeseGuide;