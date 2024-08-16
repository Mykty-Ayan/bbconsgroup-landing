import React from "react";
import {
    FaLightbulb,
    FaFileAlt,
    FaSyncAlt,
    FaBook,
    FaArrowUp,
} from "react-icons/fa";
import bgImage from "../../assets/images/5192762.jpg"; // Adjust the path as necessary

const Services = () => {
    return (
        <section
            className="py-6 px-4"
            style={{
                backgroundImage: `url(${bgImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <div className="bg-white bg-opacity-90 py-12 px-6 rounded-lg shadow-lg">
                <div className="container mx-auto text-center">
                    <h2 className="text-5xl font-bold mb-6 text-gray-800">Наши услуги</h2>
                    <div className="bg-white bg-opacity-95 p-6 mb-8 rounded-lg shadow-md">
                        <p className="text-lg mb-4 text-gray-600 leading-relaxed">
                            Мы предоставляем полный комплекс услуг для эффективного участия в
                            государственных и коммерческих тендерах для поставщиков товаров,
                            работ и услуг. Наши услуги включают качественную подготовку
                            документов для участия в тендере, подачу заявки, мониторинг
                            закупок и поиск подходящих лотов для наших клиентов.
                        </p>
                        <p className="text-lg mb-4 text-gray-600 leading-relaxed">
                            Мы также предоставляем полное юридическое сопровождение по участию
                            в тендерах, заключение сделок, юридическую и техническую
                            консультацию, помощь в обжаловании неправомерных действий
                            организаторов закупок, и обучение процессу участия в тендерах.
                        </p>
                        <p className="text-lg mb-4 text-gray-600 leading-relaxed">
                            Наши специалисты обладают высшим юридическим образованием и
                            большим опытом участия в тендерах. Они глубоко разбираются в
                            действующем законодательстве и регулярно отслеживают изменения в
                            данной сфере.
                        </p>
                        <p className="text-lg mb-4 text-gray-600 leading-relaxed">
                            Доверив нам такую важную задачу, как участие в тендере, клиент
                            получает возможность увеличить свою прибыль за счет заключения
                            новых контрактов и экономит свое время на анализе тендерной
                            документации, подготовке и оформлении необходимых документов, а
                            также непосредственной подаче заявки и отслеживании результатов.
                        </p>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            Мы нацелены на то, чтобы исключить риски отклонения заявки клиента
                            и гарантируем правильное, законное оформление заявки и
                            формирование пакета документов.
                        </p>
                    </div>
                    <blockquote className="bg-gray-100 p-6 rounded-lg shadow-md mb-12 italic text-xl text-gray-700">
                        С нами вы уверенно шагаете к новым высотам в бизнесе
                    </blockquote>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
                        <div className="p-6 bg-white shadow-lg rounded-lg border-t-4 border-blue-500">
                            <FaLightbulb className="text-5xl text-blue-500 mb-4 mx-auto" />
                            <h4 className="text-2xl font-bold mb-2 text-gray-800">
                                Консалтинг в сфере тендеров
                            </h4>
                            <p className="text-gray-600">
                                Мы помогаем вам разобраться в сложных процедурах тендеров,
                                делимся стратегиями и советами для успешного участия.
                            </p>
                            <button className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-300">
                                <a href="#consulting">Узнать больше</a>
                            </button>
                        </div>
                        <div className="p-6 bg-white shadow-lg rounded-lg border-t-4 border-green-500">
                            <FaFileAlt className="text-5xl text-green-500 mb-4 mx-auto" />
                            <h4 className="text-2xl font-bold mb-2 text-gray-800">
                                Сопровождение тендеров
                            </h4>
                            <p className="text-gray-600">
                                Обеспечиваем вас всей необходимой поддержкой, от подготовки
                                документации до успешного заключения контракта.
                            </p>
                            <button className="mt-4 px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors duration-300">
                                <a href="#tenders">Узнать больше</a>
                            </button>
                        </div>
                        <div className="p-6 bg-white shadow-lg rounded-lg border-t-4 border-red-500">
                            <FaSyncAlt className="text-5xl text-red-500 mb-4 mx-auto" />
                            <h4 className="text-2xl font-bold mb-2 text-gray-800">
                                Аутсорсинг
                            </h4>
                            <p className="text-gray-600">
                                Доверьте нам управление вашими тендерными проектами, чтобы вы
                                могли сосредоточиться на своем бизнесе.
                            </p>
                            <button className="mt-4 px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors duration-300">
                                <a href="#outsourcing">Узнать больше</a>
                            </button>
                        </div>
                        <div className="p-6 bg-white shadow-lg rounded-lg border-t-4 border-yellow-500">
                            <FaBook className="text-5xl text-yellow-500 mb-4 mx-auto" />
                            <h4 className="text-2xl font-bold mb-2 text-gray-800">
                                Обучение тендерам
                            </h4>
                            <p className="text-gray-600">
                                Мы делимся нашим опытом и знаниями, помогаем вам и вашей команде
                                стать профессионалами в участии в тендерах.
                            </p>
                            <button className="mt-4 px-6 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition-colors duration-300">
                                <a href="#training">Узнать больше</a>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
