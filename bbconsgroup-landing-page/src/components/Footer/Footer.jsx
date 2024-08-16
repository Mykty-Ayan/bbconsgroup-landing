import React from 'react';
import { FaInstagram, FaWhatsapp, FaEnvelope, FaPhone } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-8">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap justify-between">
                    <div className="w-full lg:w-1/3 mb-6">
                        <h2 className="text-2xl font-bold mb-4">«BB Consulting Group»</h2>
                        <p className="text-gray-400 mt-2">
                            Адрес: <br />
                            ​050051, город Алматы, <br />
                            ​ЖК Алматы Тауэрс​Проспект Достык, 160
                        </p>
                    </div>

                    <div className="w-full lg:w-1/3 mb-6">
                        <h2 className="text-2xl font-bold mb-4">Контакты</h2>
                        <p className="text-gray-400 mt-2 flex items-center">
                            <FaPhone className="mr-2" />
                            моб/тел.: +7 701 880 4699 (WhatsApp)
                        </p>
                        <p className="text-gray-400 mt-2 flex items-center">
                            <FaEnvelope className="mr-2" />
                            e-mail:{" "}
                            <a
                                href="mailto:bbcngr@mail.ru"
                                className="text-yellow-500 hover:text-yellow-600 transition-colors duration-300"
                            >
                                bbcngr@mail.ru
                            </a>
                        </p>
                        <p className="text-gray-400 mt-2 flex items-center">
                            <FaInstagram className="mr-2" />
                            Instagram:{" "}
                            <a
                                href="https://instagram.com/bbconsgroup"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-yellow-500 hover:text-yellow-600 transition-colors duration-300"
                            >
                                @bbconsgroup
                            </a>
                        </p>
                    </div>
                </div>
                <hr className="my-4 border-gray-600" />
                <div className="flex flex-wrap text-gray-400 justify-center space-x-4">
                    {[
                        'Госзакупки', 'Тендер', 'Государственные закупки', 'Самрук Казына', 'Goszakup',
                        'Сопровождение', 'Аутсорсинг', 'Аутсорс госзакупки', 'Сопровождение тендеров', 'Госзакупки консультация',
                        'Самурык Казына консультация', 'Тендер сопровождение', 'Консалтинг в сфере тендеров', 'Услуга тендер',
                        'Госзакупка и тендер', 'Госзакупки Астана', 'Госзакупки Алматы', 'Госзакупки Шымкент', 'Госзакупки Атырау',
                        'Госзакупки Актау', 'Госзакупки Мангыстау', 'Обучение закупкам', 'Госзакупки с нуля'
                    ].map((item, index) => (
                        <span key={index} className="mb-2 w-1/2 md:w-1/4 lg:w-1/6 text-center">
              {item}
            </span>
                    ))}
                </div>
                <div className="text-center text-gray-500 mt-6">
                    &copy; {new Date().getFullYear()} BB Consulting Group. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
