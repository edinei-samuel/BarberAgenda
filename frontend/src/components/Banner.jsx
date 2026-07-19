import React from 'react'
import { assets } from "../assets/assets";
import { useNavigate } from 'react-router-dom';

const Banner = () => {

    const navigate = useNavigate();

    return (
        <div className='flex bg-primary rounded-lg px-6 sm:px-10 md:px-14 lg:px-12 my-20 md:mx-10'>

            {/* ---------------- Left side -------------------*/}
            <div className='flex-1 justify-center sm:py-10 md:py-16 lg:py-24 py-8 lg:pl-5'>
                <div className='text-white text-xl sm:text-2xl md:text-3xl lg:text-6xl font-semibold leading-tight'>
                    <p>Agende seu horário</p>
                    <p className='mt-4'>Com os melhores barbeiros da cidade</p>
                </div>
                <button onClick={() => { navigate('/login'); scrollTo(0,0)}} className='text-primary bg-white hover:scale-105 transition-transform duration-300 hover:bg-gray-200 hover:text-primary-dark hover:border border-primary-dark py-3 px-12 rounded-full mt-10 font-medium transition-all duration-300'>
                    Marcar Horário
                </button>
            </div>
            
            {/* ---------------- Right side -------------------*/}
            <div className='hidden md:block md:w-1/2 lg:w-[370px] relative'>
                <img className='w-full bottom-0 absolute right-0 max-w-md' src={assets.banner} alt="Banner" />
            </div>

        </div>
    )
}

export default Banner