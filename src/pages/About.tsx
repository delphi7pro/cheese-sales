import React from 'react';
import { Award, Users, Globe, Heart } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Главный баннер */}
      <section className="relative bg-gradient-to-r from-yellow-50 to-orange-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">О компании СырМир</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Мы - команда энтузиастов, влюбленных в мир сыра. Уже более 10 лет мы привозим 
              в Россию лучшие сорта сыра со всего мира.
            </p>
          </div>
        </div>
      </section>

      {/* История компании */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Наша история</h2>
              <p className="text-gray-600 mb-6">
                СырМир начался как небольшой семейный бизнес в 2014 году. Основатели компании, 
                путешествуя по Европе, влюбились в разнообразие и качество местных сыров.
              </p>
              <p className="text-gray-600 mb-6">
                Сегодня мы - ведущий поставщик премиальных сыров в России, работающий 
                напрямую с лучшими сыроварнями Франции, Италии, Швейцарии и других стран.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-600">10+</div>
                  <div className="text-gray-600">лет опыта</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-600">50+</div>
                  <div className="text-gray-600">партнеров</div>
                </div>
              </div>
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg"
                alt="История компании"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Наши ценности */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Наши ценности</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Award,
                title: 'Качество',
                description: 'Мы никогда не идем на компромиссы в вопросах качества продукции'
              },
              {
                icon: Users,
                title: 'Клиентоориентированность',
                description: 'Каждый клиент для нас важен, мы ценим доверие и стремимся его оправдать'
              },
              {
                icon: Globe,
                title: 'Разнообразие',
                description: 'Предлагаем сыры со всего мира для самых взыскательных гурманов'
              },
              {
                icon: Heart,
                title: 'Страсть',
                description: 'Мы искренне любим то, что делаем, и делимся этой страстью с вами'
              }
            ].map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <value.icon className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Команда */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Наша команда</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Анна Сырникова',
                position: 'Основатель и CEO',
                image: 'https://images.pexels.com/photos/4109943/pexels-photo-4109943.jpeg',
                description: 'Эксперт по французским сырам с 15-летним опытом'
              },
              {
                name: 'Михаил Сыромятников',
                position: 'Главный сомелье',
                image: 'https://images.pexels.com/photos/4109943/pexels-photo-4109943.jpeg',
                description: 'Сертифицированный сырный сомелье и дегустатор'
              },
              {
                name: 'Елена Моцареллова',
                position: 'Менеджер по качеству',
                image: 'https://images.pexels.com/photos/4109943/pexels-photo-4109943.jpeg',
                description: 'Контролирует качество всех поставок'
              }
            ].map((member, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-lg font-semibold mb-1">{member.name}</h3>
                  <p className="text-yellow-600 font-medium mb-3">{member.position}</p>
                  <p className="text-gray-600 text-sm">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;