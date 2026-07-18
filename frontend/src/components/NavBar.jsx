import React from 'react';
import { assets } from "../assets/assets";
import { NavLink, useNavigate } from 'react-router-dom';

const NavBar = () => {
  const navigate = useNavigate();

  const [showMenu, setShowMenu] = React.useState(false);
  const [token, setToken] = React.useState(true);

  return (
    <div className='flex justify-between items-center text-sm py-4 mb-5 border-b border-b-amber-500'>
      <img
        className='w-44 cursor-pointer'
        src={assets.logo}
        alt="Logo"
      />

      <ul className='hidden md:flex items-start gap-5 font-medium cursor-pointer'>
        <NavLink to="/">
          <li className='py-1 hover:text-primary'>Início</li>
          <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
        </NavLink>

        <NavLink to="/todos">
          <li className='py-1 hover:text-primary'>Todos</li>
          <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
        </NavLink>

        <NavLink to="/sobre">
          <li className='py-1 hover:text-primary'>Sobre</li>
          <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
        </NavLink>

        <NavLink to="/contato">
          <li className='py-1 hover:text-primary'>Contato</li>
          <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
        </NavLink>
      </ul>

      <div className='flex items-center gap-5'>
        {token ? (
          <div className='flex items-center gap-2 cursor-pointer group relative' onClick={() => setShowMenu(!showMenu)}>
            <img className='w-8 h-8 rounded-full' src={assets.profile_pic} alt="User" />
            <img className='w-2.5' src={assets.dropdown_icon} alt="" />
            <div className={`absolute top-0 right-0 pt-14 text-base font-medium text-gray-700 z-20 hidden group-hover:block`}>
              <div className={`min-w-48 bg-stone-100 rounded-lg shadow-lg flex flex-col gap-1`}>
                <p onClick={() => navigate('my-profile')} className='py-2 px-4 hover:text-primary cursor-pointer'>Meu Perfil</p>
                <p onClick={() => navigate('my-appointments')} className='py-2 px-4 hover:text-primary cursor-pointer'>Meus Agendamentos</p>
                <p onClick={() => setToken(false)} className='py-2 px-4 hover:text-primary cursor-pointer'>Sair</p>
              </div>
            </div>
          </div>
        ) : (
          <button
            onClick={() => navigate('/login')}
            className='bg-primary text-white py-3 px-8 rounded-full font-light hover:bg-primary-dark'
          >
            Login
          </button>
        )}
      </div>
    </div>
  );
};

export default NavBar;