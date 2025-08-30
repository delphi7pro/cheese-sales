import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Truck, Shield, Award, Clock, Star, Users, Globe, Leaf, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import { products } from '@/data/products';

const Index = () => {
  const featuredProducts = products.slice(0, 3);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Главный баннер */}
      <section className="relative bg-gradient-to-r from-yellow-50 to-orange-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                Лучшие сыры 
                <span className="text-yellow-600"> со всего мира</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Откройте для себя изысканные вкусы премиальных сыров 
                с доставкой прямо к вашему столу
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-white">
                  <Link to="/catalog" className="flex items-center">
                    Смотреть каталог
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg">
                  <Link to="/about">Узнать больше</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/4109943/pexels-photo-4109943.jpeg"
                alt="Сырная тарелка"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Раздел 1: Наши преимущества */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Почему выбирают нас</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Truck, title: 'Быстрая доставка', desc: 'Доставка по Москве в день заказа' },
              { icon: Shield, title: 'Гарантия качества', desc: 'Только проверенные поставщики' },
              { icon: Award, title: 'Премиум качество', desc: 'Лучшие сыры мировых производителей' },
              { icon: Clock, title: 'Работаем 24/7', desc: 'Принимаем заказы круглосуточно' }
            ].map((item, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <item.icon className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Раздел 2: Рекомендуемые товары */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Рекомендуемые сыры</h2>
            <p className="text-gray-600">Попробуйте наши самые популярные сорта</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="text-center mt-8">
            <Button size="lg" variant="outline">
              <Link to="/catalog">Смотреть все товары</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Раздел 3: Категории сыров */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Категории сыров</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: 'Твердые сыры', image: 'https://images.pexels.com/photos/4109943/pexels-photo-4109943.jpeg', count: '15+ сортов' },
              { name: 'Мягкие сыры', image: 'https://images.pexels.com/photos/4109943/pexels-photo-4109943.jpeg', count: '12+ сортов' },
              { name: 'Сыры с плесенью', image: 'https://images.pexels.com/photos/4109943/pexels-photo-4109943.jpeg', count: '8+ сортов' }
            ].map((category, index) => (
              <Link key={index} to={`/category/${category.name.toLowerCase()}`}>
                <Card className="group hover:shadow-xl transition-all duration-300 cursor-pointer">
                  <div className="relative overflow-hidden">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition-all duration-300" />
                    <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
                      <h3 className="text-2xl font-bold mb-2">{category.name}</h3>
                      <p className="text-lg">{category.count}</p>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Раздел 4: О нашем качестве */}
      <section className="py-16 bg-yellow-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Качество превыше всего</h2>
              <p className="text-gray-600 mb-6">
                Мы работаем только с проверенными фермерами и сыроварнями, 
                которые следуют традиционным методам производства и используют 
                только натуральные ингредиенты.
              </p>
              <div className="space-y-4">
                {[
                  'Прямые поставки от производителей',
                  'Контроль температурного режима',
                  'Сертификаты качества на всю продукцию',
                  'Свежесть гарантирована'
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg"
                alt="Качество сыров"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Раздел 5: Статистика */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { icon: Users, number: '10,000+', label: 'Довольных клиентов' },
              { icon: Globe, number: '15', label: 'Стран-поставщиков' },
              { icon: Award, number: '200+', label: 'Сортов сыра' },
              { icon: Star, number: '4.9', label: 'Средний рейтинг' }
            ].map((stat, index) => (
              <div key={index}>
                <stat.icon className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
                <div className="text-3xl font-bold mb-2">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Раздел 6: Процесс заказа */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Как сделать заказ</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { step: '1', title: 'Выберите сыр', desc: 'Просмотрите наш каталог и выберите понравившиеся сорта' },
              { step: '2', title: 'Оформите заказ', desc: 'Добавьте товары в корзину и укажите адрес доставки' },
              { step: '3', title: 'Получите заказ', desc: 'Мы доставим свежие сыры прямо к вашей двери' }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-yellow-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Раздел 7: Отзывы клиентов */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Отзывы наших клиентов</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'Анна К.', text: 'Потрясающее качество! Сыры всегда свежие и вкусные.', rating: 5 },
              { name: 'Михаил П.', text: 'Быстрая доставка и отличный сервис. Рекомендую!', rating: 5 },
              { name: 'Елена С.', text: 'Большой выбор и разумные цены. Заказываю постоянно.', rating: 5 }
            ].map((review, index) => (
              <Card key={index}>
                <CardContent className="pt-6">
                  <div className="flex items-center mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4">"{review.text}"</p>
                  <p className="font-semibold">{review.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Раздел 8: Экологичность */}
      <section className="py-16 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg"
                alt="Экологичное производство"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <Leaf className="w-12 h-12 text-green-500 mb-4" />
              <h2 className="text-3xl font-bold mb-6">Забота об экологии</h2>
              <p className="text-gray-600 mb-6">
                Мы поддерживаем экологически чистое производство и работаем 
                с фермами, которые заботятся о природе и благополучии животных.
              </p>
              <ul className="space-y-3">
                {[
                  'Экологически чистые фермы',
                  'Упаковка из переработанных материалов',
                  'Поддержка местных производителей',
                  'Минимальный углеродный след'
                ].map((item, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Раздел 9: Здоровье и польза */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Heart className="w-12 h-12 text-red-500 mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-4">Польза для здоровья</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Сыр - это не только вкусно, но и полезно! Богат белком, кальцием и витаминами.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Высокое содержание белка', desc: 'Необходим для роста и восстановления мышц' },
              { title: 'Кальций для костей', desc: 'Укрепляет кости и зубы' },
              { title: 'Витамины группы B', desc: 'Поддерживают нервную систему' }
            ].map((benefit, index) => (
              <Card key={index} className="text-center">
                <CardContent className="pt-6">
                  <h3 className="text-lg font-semibold mb-3">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Раздел 10: Подписка на новости */}
      <section className="py-16 bg-yellow-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Будьте в курсе новинок
          </h2>
          <p className="text-yellow-100 mb-8 max-w-2xl mx-auto">
            Подпишитесь на нашу рассылку и первыми узнавайте о новых сортах сыра и специальных предложениях
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Ваш email"
              className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-yellow-300"
            />
            <Button className="bg-white text-yellow-500 hover:bg-gray-100">
              Подписаться
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;