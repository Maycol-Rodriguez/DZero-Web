import { NavLink, Outlet } from 'react-router-dom';
import Logo from '../assets/Logo-Dzero.svg';

export const Layout = () => {
  return (
    <div className='md:flex md:min-h-screen'>
      <aside className='md:w-1/4 bg-primary px-5 py-10'>
        <img src={Logo} alt='logo' className='logo react w-1/2 mx-auto my-16' />
        <nav className='space-y-4'>
          <NavLink
            to='/'
            className={({ isActive }) =>
              `${
                isActive ? 'active bg-tertiary font-bold' : ''
              } text-center transition-all text-white block rounded-xl text-xl p-2 hover:bg-[#09d6c2]`
            }
          >
            Reportes
          </NavLink>
          <NavLink
            to='/proceso'
            className={({ isActive }) =>
              `${
                isActive ? 'active bg-tertiary font-bold' : ''
              } text-center transition-all text-white block rounded-xl text-xl p-2 hover:bg-[#09d6c2]`
            }
          >
            Procesos
          </NavLink>
          <NavLink
            to='/finalizados'
            className={({ isActive }) =>
              `${
                isActive ? 'active bg-tertiary font-bold' : ''
              } text-center transition-all text-white block rounded-xl text-xl p-2 hover:bg-[#09d6c2]`
            }
          >
            Finalizados
          </NavLink>
        </nav>
      </aside>
      <main className='md:w-3/4 p-10 md:h-screen overflow-scroll bg-gray-100'>
        <Outlet />
      </main>
    </div>
  );
};
