import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../img/logo.png';

function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);

      if (!mobile) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <nav className="bg-black text-white w-full py-[20px]">
      <div className="w-[90%] mx-auto">
        <div className="flex items-center justify-between">

          {/* Logo */}
          <div className="flex items-center gap-[10px]">
            <img
              src={logo}
              alt="logo"
              className="w-[100px] max-[1060px]:w-[60px] max-[768px]:w-[50px] max-[220px]:w-[40px]"
            />
            <h1 className="text-[24px] font-bold text-[#FFC107] font-['Arial'] max-[1060px]:text-[20px] max-[768px]:text-[16px] max-[220px]:text-[13px]">
              Time School
            </h1>
          </div>

          {/* Burger icon */}
          {isMobile && (
            <div
              onClick={toggleMenu}
              className="w-[25px] h-[20px] flex flex-col justify-between items-center cursor-pointer z-[100] max-[220px]:h-[15px]"
            >
              <span
                className={`h-[3px] w-full bg-[#FFC107] rounded-[2px] transition-transform duration-300 ease-in-out ${
                  isMenuOpen ? 'rotate-45 translate-y-[8px] max-[220px]:translate-y-[5px]' : ''
                } max-[220px]:h-[2px]`}
              ></span>
              <span
                className={`h-[3px] w-full bg-[#FFC107] rounded-[2px] transition-opacity duration-300 ease-in-out ${
                  isMenuOpen ? 'opacity-0' : 'opacity-100'
                } max-[220px]:h-[2px]`}
              ></span>
              <span
                className={`h-[3px] w-full bg-[#FFC107] rounded-[2px] transition-transform duration-300 ease-in-out ${
                  isMenuOpen ? '-rotate-45 -translate-y-[8px] max-[220px]:-translate-y-[5px]' : ''
                } max-[220px]:h-[2px]`}
              ></span>
            </div>
          )}

          {/* Overlay */}
          {isMobile && isMenuOpen && (
            <div
              className="fixed inset-0 bg-black bg-opacity-50 z-[80]"
              onClick={toggleMenu}
            ></div>
          )}

          {/* Menu */}
          <ul
            className={`${
              isMobile
                ? `fixed top-0 right-0 h-screen w-full bg-black flex flex-col justify-center items-center gap-[30px] z-[90] transition-all duration-300 ${
                    isMenuOpen ? 'right-0' : 'right-[-100%]'
                  }`
                : 'flex items-center gap-[20px]'
            }`}
          >
            {[
              { to: '/', text: 'Bosh sahifa' },
              { to: '/courses', text: 'Kurslar' },
              { to: '/results', text: 'Natijalar' },
              { to: '/form', text: "Ro'yhatdan o'tish" },
            ].map(({ to, text }) => (
              <li
                key={to}
                onClick={isMobile ? toggleMenu : null}
                className="text-[20px] font-bold font-['Arial'] max-[1060px]:text-[13px] hover:text-[#FFC107] transition-colors duration-200"
              >
                <Link to={to}>{text}</Link>
              </li>
            ))}

            <li onClick={isMobile ? toggleMenu : null}>
              <button
                className="border-2 border-[#FFC107] text-white font-bold text-[15px] py-[10px] px-[20px] rounded-[5px] hover:bg-[#FFC107] hover:text-black bg-transparent max-[1060px]:text-[10px] max-[1060px]:py-[5px] max-[1060px]:px-[10px]"
                onClick={() => (window.location.href = 'tel:+998952004422')}
              >
                +998 95 200 44 22
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
