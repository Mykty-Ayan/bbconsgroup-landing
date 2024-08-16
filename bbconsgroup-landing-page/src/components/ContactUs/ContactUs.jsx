import React from 'react';
import { FaWhatsapp, FaInstagram } from 'react-icons/fa';

const ContactUs = () => {
  return (
    <section className="py-4 px-0 text-white">
      <div className="container mx-auto text-center px-2 md:px-4 lg:px-6 xl:px-8" style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)', borderRadius: '10px' }}>
        <h2 className="text-3xl md:text-4xl font-bold mb-6 pt-2">Свяжитесь с нами</h2>
        <p className="text-lg md:text-xl mb-8">
          Для получения дополнительной информации или консультации, свяжитесь с нами через WhatsApp или Instagram.
        </p>
        <div className="flex flex-col md:flex-row justify-center md:space-x-4 space-y-4 md:space-y-0 mb-0 pb-3">
          <a
            href="https://wa.me/77018804699"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center space-x-2 px-6 py-3 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition-colors duration-300"
          >
            <FaWhatsapp className="text-2xl" />
            <span>WhatsApp</span>
          </a>
          <a
            href="https://instagram.com/bbconsgroup"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center space-x-2 px-6 py-3 bg-pink-500 text-white font-semibold rounded-lg hover:bg-pink-600 transition-colors duration-300"
          >
            <FaInstagram className="text-2xl" />
            <span>Instagram</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
