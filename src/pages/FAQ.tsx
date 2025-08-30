import React from 'react';
import { HelpCircle, Search } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const FAQ = () => {
  const faqData = [
    {
      category: 'Заказы и доставка',
      questions: [
        {
          question: 'Как оформить заказ?',
          answer: 'Выберите товары в каталоге, добавьте их в корзину и перейдите к оформлению заказа. Заполните контактную информацию и выберите способ доставки и оплаты.'
        },
        {
          question: 'Сколько стоит доставка?',
          answer: 'Доставка по Москве стоит 300 ₽, бесплатно при заказе от 3000 ₽. По Московской области - 500 ₽, бесплатно от 5000 ₽. Стоимость доставки в регионы рассчитывается индивидуально.'
        },
        {
          question: 'Как быстро доставляете?',
          answer: 'По Москве доставляем в день заказа при оформлении до 15:00. По МО - на следующий день. В регионы - 3-7 дней в зависимости от удаленности.'
        }
      ]
    },
    {
      category: 'Товары и качество',
      questions: [
        {
          question: 'Как вы гарантируете свежесть сыров?',
          answer: 'Мы работаем напрямую с производителями, контролируем температурный режим на всех этапах и используем специальную термоупаковку для доставки.'
        },
        {
          question: 'Есть ли сертификаты качества?',
          answer: 'Да, на всю нашу продукцию имеются сертификаты соответствия и декларации о качестве от производителей.'
        },
        {
          question: 'Можно ли попробовать сыр перед покупкой?',
          answer: 'В нашем магазине на ул. Сырной, 123 проводятся дегустации по выходным с 12:00 до 16:00.'
        }
      ]
    },
    {
      category: 'Оплата и возврат',
      questions: [
        {
          question: 'Какие способы оплаты доступны?',
          answer: 'Принимаем банковские карты, электронные кошельки, интернет-банкинг. При курьерской доставке можно оплатить наличными или картой.'
        },
        {
          question: 'Можно ли вернуть товар?',
          answer: 'Возврат возможен в течение 24 часов с момента получения при сохранении товарного вида и упаковки.'
        },
        {
          question: 'Когда списываются деньги?',
          answer: 'При онлайн-оплате деньги списываются сразу после подтверждения заказа. При оплате наличными - в момент получения.'
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Заголовок */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <HelpCircle className="w-16 h-16 text-yellow-500 mx-auto mb-6" />
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Часто задаваемые вопросы</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Найдите ответы на самые популярные вопросы о наших товарах и услугах
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Поиск */}
          <Card className="mb-8">
            <CardContent className="pt-6">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  type="text"
                  placeholder="Поиск по вопросам..."
                  className="pl-10"
                />
              </div>
            </CardContent>
          </Card>

          {/* FAQ по категориям */}
          {faqData.map((category, categoryIndex) => (
            <Card key={categoryIndex} className="mb-8">
              <CardHeader>
                <CardTitle>{category.category}</CardTitle>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  {category.questions.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${categoryIndex}-${index}`}>
                      <AccordionTrigger className="text-left">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-600">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          ))}

          {/* Не нашли ответ */}
          <Card className="bg-yellow-50">
            <CardContent className="pt-6 text-center">
              <h3 className="text-lg font-semibold mb-4">Не нашли ответ на свой вопрос?</h3>
              <p className="text-gray-600 mb-6">
                Свяжитесь с нами, и мы обязательно поможем!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-yellow-500 hover:bg-yellow-600">
                  Написать в поддержку
                </Button>
                <Button variant="outline">
                  Позвонить: +7 (495) 123-45-67
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FAQ;