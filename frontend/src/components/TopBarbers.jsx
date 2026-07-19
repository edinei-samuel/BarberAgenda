import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AppContext } from '../context/AppContext.jsx';


const TopBarbers = () => {

    const navigate = useNavigate();
    const { barbers } = useContext(AppContext);

  return (
    <div className='flex flex-col items-center gap-4 my-16 text-gray-900 md:mx-10'>
        <h1 className='text-white text-3xl font-bold'>Barbeiros prontos para atender você</h1>
        <p className='text-gray-500 text-center text-sm sm:w-1/3'>Conte com profissionais especializados para cuidar do seu estilo, com cortes, barbas e serviços feitos para você.</p>

        <div className='w-full grid grid-cols-auto gap-4 pt-5  gap-y-6 px-3 sm:px-0'>
            {barbers.slice(0,10).map((barber, index) => (
                <div onClick={() => navigate(`/appointments/${barber.id}`)} key={index} className='border border-primary-dark bg-primary rounded-xl overflow-hidden cursor-pointer hover:translate-y-[10px] transition-all duration-500'>
                    <img style={{ width: "100%", height: "260px", objectFit: "cover", borderRadius: "12px" }}
                        src={barber.image} alt={barber.name} /> 
                    <div className='p-4'>
                        <div className='flex items-center gap-2 text-sm text-center text-green-600'>
                            <p className='w-2 h-2 bg-green-500 rounded-full font-light'></p><p>Disponível</p>
                        </div>
                        <p className='text-white text-lg font-medium'>{barber.name}</p>
                        <p className='text-white font-light text-s'>{barber.services.join(', ')}</p>
                    </div>   
                </div>
            ))}
        </div>

        <button onClick={() =>{ navigate('/barbers'); scrollTo(0,0)}} className='text-white bg-primary hover:bg-primary-dark text-gray-600 py-3 px-12 rounded-full mt-10 font-medium transition-all duration-300 hover:border border-gray-400'>
            Ver Mais
        </button>
    </div>
  )
}

export default TopBarbers