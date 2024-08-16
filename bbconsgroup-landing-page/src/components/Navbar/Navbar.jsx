import React, { useState } from 'react';
import companyLogo from '../../assets/images/BB-logo15 (без фона).png'; // Path to your company logo
import { FaInstagram, FaWhatsapp, FaEnvelope, FaBars, FaTimes, FaGavel, FaRegHandshake, FaSyncAlt, FaChalkboardTeacher } from 'react-icons/fa'; // Added missing icons

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-white p-4 shadow-md fixed w-full z-50">
            <div className="container mx-auto flex justify-between items-center">
                <div className="flex items-center">
                    <img src={companyLogo} alt="Company Logo" className="h-8 lg:h-10" />
                    <span className="ml-3 text-sm lg:text-xl font-bold text-gray-800">BB Consulting Group</span>
                </div>
                <div className="hidden lg:flex items-center space-x-6 text-lg font-medium text-gray-700">
                    <a href="#tenders" className="flex items-center hover:text-gray-900 transition-colors duration-300 px-3 py-2 border border-transparent hover:border-gray-300 rounded">
                        <FaGavel className="mr-2" /> Тендеры
                    </a>
                    <a href="#consulting" className="flex items-center hover:text-gray-900 transition-colors duration-300 px-3 py-2 border border-transparent hover:border-gray-300 rounded">
                        <FaRegHandshake className="mr-2" /> Консалтинг
                    </a>
                    <a href="#outsourcing" className="flex items-center hover:text-gray-900 transition-colors duration-300 px-3 py-2 border border-transparent hover:border-gray-300 rounded">
                        <FaSyncAlt className="mr-2" /> Аутсорсинг
                    </a>
                    <a href="#training" className="flex items-center hover:text-gray-900 transition-colors duration-300 px-3 py-2 border border-transparent hover:border-gray-300 rounded">
                        <FaChalkboardTeacher className="mr-2" /> Обучение
                    </a>
                </div>
                <div className="flex items-center space-x-4">
                    <a
                        href="https://instagram.com/bbconsgroup"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-pink-600 hover:text-pink-700 transition-colors duration-300"
                    >
                        <FaInstagram className="text-xl lg:text-2xl" />
                    </a>
                    <a
                        href="https://wa.me/77018804699"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-green-500 hover:text-green-600 transition-colors duration-300"
                    >
                        <FaWhatsapp className="text-xl lg:text-2xl" />
                    </a>
                    <a
                        href="mailto:bbcngr@mail.ru"
                        className="text-blue-500 hover:text-blue-600 transition-colors duration-300"
                    >
                        <FaEnvelope className="text-xl lg:text-2xl" />
                    </a>
                    <button onClick={toggleMenu} className="lg:hidden text-gray-800 focus:outline-none">
                        {isOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
                    </button>
                </div>
            </div>
            <div className={`lg:hidden ${isOpen ? 'block' : 'hidden'} mt-4`}>
                <div className="flex flex-col items-center space-y-2 text-lg font-medium text-gray-700">
                    <a href="#tenders" className="flex items-center text-gray-700 hover:text-gray-900 transition-colors duration-300">
                        <FaGavel className="mr-2" /> Тендеры
                    </a>
                    <a href="#consulting" className="flex items-center text-gray-700 hover:text-gray-900 transition-colors duration-300">
                        <FaRegHandshake className="mr-2" /> Консалтинг
                    </a>
                    <a href="#outsourcing" className="flex items-center text-gray-700 hover:text-gray-900 transition-colors duration-300">
                        <FaSyncAlt className="mr-2" /> Аутсорсинг
                    </a>
                    <a href="#training" className="flex items-center text-gray-700 hover:text-gray-900 transition-colors duration-300">
                        <FaChalkboardTeacher className="mr-2" /> Обучение
                    </a>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
