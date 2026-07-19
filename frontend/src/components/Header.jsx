import React from 'react';
import { assets } from "../assets/assets";

const Header = () => {
  return (
    <div className='flex flex-col md:flex-row flex-wrap bg-primary rounded-lg px-6 md:px-10 lg:px-20 '>
        

        {/* -- left Slide -- */}
        <div className='md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 m-auto md:py-[10vw] md:mb-[30px]'>
            <p className='text-3xl md:text-3xl font-bold text-white font-semibold leading-tight md:leading-tight lg:leading-tight'>
                Agende Seu Corte <br/>Com os Melhores Barbeiros
            </p>
            <div className='flex flex-col md:flex-row items-start gap-3 text-white font-light text-sm'>
                <img className='w-28' src={assets.group_profiles} alt="Perfis de Pessoas" />
                <p>Escolha seu barbeiro favorito, selecione o serviço e reserve seu horário em poucos cliques.</p>
            </div>
            <a className='flex items-center bg-white px-8 py-3 rounded-full text-gray-800 text-sm font-medium m-auto md:m-0 hover:scale-105 transition-transform duration-300 hover:bg-gray-200 hover:text-primary-dark' 
                href="#services">
                    Agendar Agora  <img className='ml-2 w-3' src={assets.arrow_icon} alt="Seta" />
            </a>
        </div>

        {/* -- right Slide -- */}
        <div className='md:w-1/2 flex relative'>
            <img className='w-full md:absolute bottom-0 h-auto rounded-lg' src={assets.header_img} alt="Nossos Barbeiros" />
        </div>


    </div>
  )
}

export default Header