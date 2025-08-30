import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* О компании */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">🧀</span>
              </div>
              <span className="text-xl font-bold">СырМир</span>
            </div>
            <p className="text-gray-300 mb-4">
              Лучшие сыры со всего мира с доставкой по России. 
              Качество, проверенное временем.
            </p>
            <div className="flex space-x-4">
              <Facebook className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <Instagram className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <Twitter className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Быстрые ссылки */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Быстрые ссылки</h3>
            <ul className="space-y-2">
              <li><Link to="/catalog" className="text-gray-300 hover:text-white transition-colors">Каталог</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors">О нас</Link></li>
              <li><Link to="/delivery" className="text-gray-300 hover:text-white transition-colors">Доставка</Link></li>
              <li><Link to="/payment" className="text-gray-300 hover:text-white transition-colors">Оплата</Link></li>
              <li><Link to="/reviews" className="text-gray-300 hover:text-white transition-colors">Отзывы</Link></li>
            </ul>
          </div>

          {/* Категории */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Категории</h3>
            <ul className="space-y-2">
              <li><Link to="/category/hard" className="text-gray-300 hover:text-white transition-colors">Твердые сыры</Link></li>
              <li><Link to="/category/soft" className="text-gray-300 hover:text-white transition-colors">Мягкие сыры</Link></li>
              <li><Link to="/category/blue" className="text-gray-300 hover:text-white transition-colors">Сыры с плесенью</Link></li>
              <li><Link to="/category/fresh" className="text-gray-300 hover:text-white transition-colors">Свежие сыры</Link></li>
            </ul>
          </div>

          {/* Контакты */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Контакты</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-yellow-500" />
                <span className="text-gray-300">+7 (495) 123-45-67</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-yellow-500" />
                <span className="text-gray-300">info@syrmir.ru</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-yellow-500" />
                <span className="text-gray-300">Москва, ул. Сырная, 123</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 СырМир. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;