import React from 'react';
import { Briefcase, Users, TrendingUp, Heart } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Careers = () => {
  const openPositions = [
    {
      id: 1,
      title: 'Менеджер по продажам',
      department: 'Продажи',
      type: 'Полная занятость',
      location: 'Москва',
      salary: '80 000 - 120 000 ₽',
      description: 'Ищем энергичного менеджера для работы с клиентами и развития продаж',
      requirements: [
        'Опыт работы в продажах от 2 лет',
        'Знание продуктов питания',
        'Коммуникабельность',
        'Ответственность'
      ]
    },
    {
      id: 2,
      title: 'Сырный сомелье',
      department: 'Продукт',
      type: 'Полная занятость',
      location: 'Москва',
      salary: '100 000 - 150 000 ₽',
      description: 'Требуется эксперт по сырам для консультаций клиентов и закупок',
      requirements: [
        'Образование в области пищевых технологий',
        'Опыт дегустации сыров',
        'Знание иностранных языков',
        'Сертификат сомелье (приветствуется)'
      ]
    },
    {
      id: 3,
      title: 'Курьер',
      department: 'Логистика',
      type: 'Частичная занятость',
      location: 'Москва',
      salary: '50 000 - 70 000 ₽',
      description: 'Ищем ответственного курьера для доставки сырной продукции',
      requirements: [
        'Наличие личного транспорта',
        'Знание Москвы',
        'Пунктуальность',
        'Аккуратность'
      ]
    }
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: 'Карьерный рост',
      description: 'Возможности профессионального развития и повышения'
    },
    {
      icon: Heart,
      title: 'Дружная команда',
      description: 'Работа в команде единомышленников, увлеченных своим делом'
    },
    {
      icon: Users,
      title: 'Обучение',
      description: 'Регулярные тренинги и курсы повышения квалификации'
    },
    {
      icon: Briefcase,
      title: 'Соцпакет',
      description: 'ДМС, оплачиваемый отпуск, корпоративные скидки'
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Резюме отправлено! Мы рассмотрим вашу кандидатуру и свяжемся с вами.');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Заголовок */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Briefcase className="w-16 h-16 text-yellow-500 mx-auto mb-6" />
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Карьера в СырМир</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Присоединяйтесь к нашей команде и станьте частью удивительного мира сыра
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Преимущества работы */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Почему стоит работать с нами</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Открытые вакансии */}
            <div>
              <h2 className="text-3xl font-bold mb-8">Открытые вакансии</h2>
              <div className="space-y-6">
                {openPositions.map((position) => (
                  <Card key={position.id} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div>
                          <CardTitle className="text-lg mb-2">{position.title}</CardTitle>
                          <div className="flex items-center space-x-2">
                            <Badge>{position.department}</Badge>
                            <Badge variant="outline">{position.type}</Badge>
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    
                    <CardContent>
                      <p className="text-gray-600 mb-4">{position.description}</p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div>
                          <div className="flex items-center text-sm text-gray-500 mb-1">
                            <MapPin className="w-4 h-4 mr-1" />
                            {position.location}
                          </div>
                          <div className="font-semibold text-green-600">
                            {position.salary}
                          </div>
                        </div>
                      </div>
                      
                      <div className="mb-4">
                        <h4 className="font-semibold mb-2">Требования:</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          {position.requirements.map((req, index) => (
                            <li key={index} className="flex items-start">
                              <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full mt-2 mr-2 flex-shrink-0" />
                              {req}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <Button className="w-full bg-yellow-500 hover:bg-yellow-600">
                        Откликнуться
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Форма отклика */}
            <div>
              <Card className="sticky top-24">
                <CardHeader>
                  <CardTitle>Отправить резюме</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <Label htmlFor="fullName">Полное имя *</Label>
                      <Input id="fullName" required />
                    </div>
                    
                    <div>
                      <Label htmlFor="email">Email *</Label>
                      <Input id="email" type="email" required />
                    </div>
                    
                    <div>
                      <Label htmlFor="phone">Телефон *</Label>
                      <Input id="phone" type="tel" required />
                    </div>
                    
                    <div>
                      <Label htmlFor="position">Интересующая позиция</Label>
                      <Input id="position" placeholder="Название вакансии" />
                    </div>
                    
                    <div>
                      <Label htmlFor="experience">Опыт работы</Label>
                      <Textarea 
                        id="experience"
                        rows={4}
                        placeholder="Расскажите о своем опыте работы..."
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="motivation">Мотивационное письмо</Label>
                      <Textarea 
                        id="motivation"
                        rows={4}
                        placeholder="Почему вы хотите работать в СырМир?"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="resume">Резюме (ссылка или текст)</Label>
                      <Textarea 
                        id="resume"
                        rows={3}
                        placeholder="Ссылка на резюме или краткое описание..."
                      />
                    </div>
                    
                    <Button type="submit" className="w-full bg-yellow-500 hover:bg-yellow-600">
                      Отправить резюме
                    </Button>
                    
                    <p className="text-xs text-gray-500 text-center">
                      Отправляя резюме, вы соглашаетесь на обработку персональных данных
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Корпоративная культура */}
          <Card className="mt-16">
            <CardHeader>
              <CardTitle className="text-center">Наша корпоративная культура</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-4xl mb-4">🎯</div>
                  <h3 className="font-semibold mb-2">Цель</h3>
                  <p className="text-gray-600 text-sm">
                    Делать качественные сыры доступными каждому
                  </p>
                </div>
                <div>
                  <div className="text-4xl mb-4">🤝</div>
                  <h3 className="font-semibold mb-2">Команда</h3>
                  <p className="text-gray-600 text-sm">
                    Поддерживаем друг друга и растем вместе
                  </p>
                </div>
                <div>
                  <div className="text-4xl mb-4">🌟</div>
                  <h3 className="font-semibold mb-2">Качество</h3>
                  <p className="text-gray-600 text-sm">
                    Стремимся к совершенству во всем
                  </p>
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

export default Careers;