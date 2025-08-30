import React from 'react';
import { Leaf, Recycle, Heart, Globe } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Sustainability = () => {
  const initiatives = [
    {
      icon: Leaf,
      title: 'Экологичная упаковка',
      description: 'Переход на биоразлагаемые и переработанные материалы',
      progress: 85,
      details: [
        'Упаковка из переработанного картона',
        'Биоразлагаемые пакеты',
        'Минимизация пластика',
        'Многоразовые контейнеры'
      ]
    },
    {
      icon: Heart,
      title: 'Благополучие животных',
      description: 'Поддержка ферм с высокими стандартами содержания животных',
      progress: 92,
      details: [
        'Свободный выпас скота',
        'Натуральное питание',
        'Ветеринарный контроль',
        'Этичное обращение'
      ]
    },
    {
      icon: Recycle,
      title: 'Переработка отходов',
      description: 'Программа по сокращению и переработке производственных отходов',
      progress: 78,
      details: [
        'Переработка сыворотки',
        'Компостирование органики',
        'Повторное использование упаковки',
        'Сокращение пищевых отходов'
      ]
    },
    {
      icon: Globe,
      title: 'Углеродный след',
      description: 'Снижение выбросов CO2 в процессе производства и доставки',
      progress: 65,
      details: [
        'Оптимизация логистики',
        'Электротранспорт',
        'Возобновляемая энергия',
        'Компенсация выбросов'
      ]
    }
  ];

  const certifications = [
    {
      name: 'Organic Certification',
      description: 'Сертификат органического производства',
      image: '🌱'
    },
    {
      name: 'Animal Welfare Approved',
      description: 'Высшие стандарты благополучия животных',
      image: '🐄'
    },
    {
      name: 'Carbon Neutral',
      description: 'Углеродно-нейтральное производство',
      image: '🌍'
    },
    {
      name: 'Fair Trade',
      description: 'Справедливая торговля',
      image: '🤝'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Заголовок */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Leaf className="w-16 h-16 text-green-500 mx-auto mb-6" />
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Устойчивое развитие</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Мы заботимся о планете и будущих поколениях, внедряя экологичные практики во все аспекты нашего бизнеса
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Наши инициативы */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Наши экологические инициативы</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {initiatives.map((initiative, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <initiative.icon className="w-6 h-6 text-green-500 mr-3" />
                      {initiative.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">{initiative.description}</p>
                    
                    <div className="mb-4">
                      <div className="flex justify-between text-sm text-gray-600 mb-2">
                        <span>Прогресс реализации</span>
                        <span>{initiative.progress}%</span>
                      </div>
                      <Progress value={initiative.progress} className="h-2" />
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-2">Что мы делаем:</h4>
                      <ul className="space-y-1">
                        {initiative.details.map((detail, i) => (
                          <li key={i} className="flex items-start text-sm">
                            <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 mr-2 flex-shrink-0" />
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Сертификации */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Наши сертификации</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {certifications.map((cert, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className="text-4xl mb-4">{cert.image}</div>
                    <h3 className="font-semibold mb-2">{cert.name}</h3>
                    <p className="text-sm text-gray-600">{cert.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Цели на 2024 год */}
          <Card className="mb-16">
            <CardHeader>
              <CardTitle className="text-center">Наши цели на 2024 год</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-green-600 mb-2">100%</div>
                  <div className="text-sm text-gray-600">Переработанная упаковка</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-600 mb-2">50%</div>
                  <div className="text-sm text-gray-600">Снижение выбросов CO2</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-purple-600 mb-2">25</div>
                  <div className="text-sm text-gray-600">Новых эко-партнеров</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-orange-600 mb-2">0</div>
                  <div className="text-sm text-gray-600">Пищевых отходов</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Как вы можете помочь */}
          <Card className="bg-green-50">
            <CardHeader>
              <CardTitle className="text-center">Как вы можете помочь планете</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-semibold mb-4">Простые шаги:</h3>
                  <ul className="space-y-3">
                    {[
                      'Выбирайте сыры от экологичных производителей',
                      'Используйте многоразовые сумки для покупок',
                      'Правильно утилизируйте упаковку',
                      'Покупайте только необходимое количество',
                      'Поддерживайте местных производителей'
                    ].map((tip, index) => (
                      <li key={index} className="flex items-start">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                        <span className="text-sm">{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="text-center">
                  <div className="text-6xl mb-4">🌱</div>
                  <h3 className="font-semibold mb-4">Вместе мы можем больше!</h3>
                  <p className="text-gray-600 mb-6">
                    Каждая покупка экологичных продуктов - это вклад в будущее нашей планеты
                  </p>
                  <Button className="bg-green-500 hover:bg-green-600">
                    Узнать больше
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Sustainability;