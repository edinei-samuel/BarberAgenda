import React from "react";
import { Link } from "react-router-dom";
import { servicesData } from "../assets/assets";

const ServicesMenu = () => {
  return (
    <div id="services" className="text-white flex flex-col items-center gap-4 text-gray-800 py-16">
      <h1 className="text-4xl font-bold text-center mb-4">
        Encontre o serviço ideal
      </h1>

      <p className="text-gray-500 sm:w-1/3 text-sm text-center">
        Escolha entre nossos serviços de barbearia e agende seu horário de forma
        rápida e sem complicação.
      </p>

      <div className="flex justify-center gap-4 pt-5 w-full overflow-scroll">
        {servicesData.map((service, index) => (
          <Link onClick={() => scrollTo(0,0)} className="flex flex-col items-center text-sx cursor-pointer flex-shrink-0" key={index} to={`/barbers/${service.services}`}  >
            <img className="w-16 sm:w-24 mb-2" src={service.image} alt={service.services} />
            <h3 className="uppercase text-primary text-center mt-4 font-semibold"> {service.services}</h3>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ServicesMenu;
