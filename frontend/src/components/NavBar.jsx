import React from 'react'
import { assets } from "../assets/assets"
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className='flex justify-between items-center text-sm py-4 mb-5 border-b border-b-amber-500 '>
        <img className='w-44 cursor-pointer' src={assets.logo} alt="Logo" />
        <ul className='hidden md:flex items-start gap-5 font-medium cursor-pointer'>
            <NavLink>
                <li className='py-1 hover:text-amber-500'>Início</li>
                <hr className='border-amber-500' />
            </NavLink>
            <NavLink>
                <li className='py-1 hover:text-amber-500'>Todos os Barbeiros</li>
            </NavLink>
            <NavLink>
                <li className='py-1 hover:text-amber-500'>Sobre</li>
            </NavLink>
            <NavLink>
                <li className='py-1 hover:text-amber-500'>Contato</li>
            </NavLink>
        </ul>
        <div>
            <button>Cadastro</button>
        </div>
    </div>
  )
}

export default NavBar