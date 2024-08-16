import React from "react";
import {
  FaCheckCircle,
  FaRegLightbulb,
  FaChalkboardTeacher,
} from "react-icons/fa";

import bgImage from "../../assets/images/4022164.jpg"; // Adjust the path as necessary

const AboutUs = () => {
  return (
    <section className="relative pt-20 pb-1 px-4 text-white">
      <div className="relative bg-black bg-opacity-70 py-20 px-4">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${bgImage})`, zIndex: -1 }}
        >
          {/*<img className="object-cover bg-cover bg-center" src={bgImage}*/}
          {/*style={{ zIndex: -1 }} alt={"clip"}/>*/}
        </div>
        <div className="container mx-auto text-center relative">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">О компании</h2>
          <p className="text-lg md:text-xl mb-10 leading-relaxed max-w-3xl mx-auto">
            «BB Consulting Group» – это ведущая консалтинговая компания,
            специализирующаяся на оказании услуг аутсорсинга по государственным
            закупкам и коммерческим тендерам, а также обучении эффективного
            сопровождения участия во всевозможных тендерах. Наша компания имеет
            богатый опыт и надежную репутацию, что позволяет нам успешно решать
            задачи с любыми уровнями сложности.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            <div className="p-6 bg-gray-800 bg-opacity-75 shadow-lg rounded-lg">
              <FaCheckCircle className="text-5xl text-yellow-500 mb-4 mx-auto" />
              <h4 className="text-xl md:text-2xl font-bold mb-2">Консалтинг</h4>
              <p className="text-gray-300">
                Экспертные рекомендации и стратегии для успешного участия в
                тендерах.
              </p>
            </div>
            <div className="p-6 bg-gray-800 bg-opacity-75 shadow-lg rounded-lg">
              <FaRegLightbulb className="text-5xl text-yellow-500 mb-4 mx-auto" />
              <h4 className="text-xl md:text-2xl font-bold mb-2">Аутсорсинг</h4>
              <p className="text-gray-300">
                Полное сопровождение тендерного процесса с минимальными рисками.
              </p>
            </div>
            <div className="p-6 bg-gray-800 bg-opacity-75 shadow-lg rounded-lg">
              <FaChalkboardTeacher className="text-5xl text-yellow-500 mb-4 mx-auto" />
              <h4 className="text-xl md:text-2xl font-bold mb-2">Обучение</h4>
              <p className="text-gray-300">
                Профессиональные тренинги и семинары для повышения квалификации.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
