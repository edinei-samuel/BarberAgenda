import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom';

const Footer = () => {

    const navigate = useNavigate();

  return (
    <div className='md:mx-10'>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-gray-400  text-sm'>
        
            {/* --------------- Left section -------------------*/}
            <div>
                <img className='mb-4 w-40' src={assets.logo} alt="Logo" />
                <p className=' w-full md:w-2/3 leading-5 text-gray-400'>
                    Este site foi desenvolvido exclusivamente para fins de estudo e demonstração profissional. 
                    <br/>As informações, serviços, profissionais e contatos apresentados são fictícios e não representam uma empresa real.
                </p>
            </div>

            {/* --------------- Center section -------------------*/}
            <div>
                <p className='font-medium text-xl uppercase mb-4 text-primary'>Barbearia</p>
                <ul className='flex flex-col gap-2'>
                    <li onClick={() => { document.getElementById('navbar')?.scrollIntoView({ behavior: 'smooth' }) }}  className='cursor-pointer hover:text-primary'>Início</li>
                    <li onClick={() => { document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' }) }} className='cursor-pointer hover:text-primary'>Serviços</li>
                    <li onClick={() => navigate('/about')} className='cursor-pointer hover:text-primary'>Sobre Nós</li>
                    <li onClick={() => navigate('/contact')} className='cursor-pointer hover:text-primary'>Contato</li>
                </ul>
            </div>

            {/* --------------- Right section -------------------*/}
            <div>
                <p className='font-medium text-xl uppercase mb-4 text-primary'>Entre em Contato</p>
                <ul className='flex flex-col gap-2'>
                    <li>Telefone: (00) 1234-5678</li>
                    <li>Email: contato@barbearia.com</li>
                </ul>
            </div>
        </div>
        <div className='text-center text-gray-400 text-sm py-4 border-t border-t-gray-600'>
            <p className='text-gray-400 text-sm mb-2'>Desenvolvido por <span className="font-bold">Edinei Samuel</span></p>
            <p className='text-gray-400 text-sm mb-2'>Este site é apenas para fins de estudo e demonstração profissional.</p>
        </div>
    </div>
  )
}

export default Footer