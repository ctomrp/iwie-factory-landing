import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Dropdown from '../utils/Dropdown';
import s from '../css/factory.module.css'
import iwieAgroLogo from '/logoW.png'

function Header() {

  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const trigger = useRef(null);
  const mobileNav = useRef(null);

  // close the mobile menu on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!mobileNav.current || !trigger.current) return;
      if (!mobileNavOpen || mobileNav.current.contains(target) || trigger.current.contains(target)) return;
      setMobileNavOpen(false);
    };
    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  });

  // close the mobile menu if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!mobileNavOpen || keyCode !== 27) return;
      setMobileNavOpen(false);
    };
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  });

  return (
    <header className={`absolute w-full z-30 ${s.navbar}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Site branding */}
          <div className="shrink-0 mr-4">
            {/* Logo */}
            <Link to="/" className="block" aria-label="Cruip">
              <img className="h-16" src={iwieAgroLogo}></img>
            </Link>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">
            {/* Desktop menu links */}
            <ul className="flex grow justify-end flex-wrap items-center">
              <li>
                <Link
                  to="/"
                  className="text-gray-300 hover:text-gray-200 px-4 py-2 flex items-center transition duration-150 ease-in-out"
                >
                  Servicios 
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-300 hover:text-gray-200 px-4 py-2 flex items-center transition duration-150 ease-in-out"
                >
                  Contacto
                </Link>
              </li>
            </ul>
          </nav>

          {/* Mobile menu */}
          <div className="md:hidden">
            {/* Hamburger button */}
            <button
              ref={trigger}
              className={`hamburger ${mobileNavOpen && "active"}`}
              aria-controls="mobile-nav"
              aria-expanded={mobileNavOpen}
              onClick={() => setMobileNavOpen(!mobileNavOpen)}
            >
              <span className="sr-only">Menu</span>
              <svg
                className="w-6 h-6 fill-current text-gray-300 hover:text-gray-200 transition duration-150 ease-in-out"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect y="4" width="24" height="2" rx="1" />
                <rect y="11" width="24" height="2" rx="1" />
                <rect y="18" width="24" height="2" rx="1" />
              </svg>
            </button>

            {/*Mobile navigation */}
            <nav
              id="mobile-nav"
              ref={mobileNav}
              className="absolute top-full z-20 left-0 w-full px-4 sm:px-6 overflow-hidden transition-all duration-300 ease-in-out"
              style={
                mobileNavOpen
                  ? { maxHeight: mobileNav.current.scrollHeight, opacity: 1 }
                  : { maxHeight: 0, opacity: 0.8 }
              }
            >
              <ul className="bg-gray-800 px-4 py-2">
                <li>
                  <Link
                    to="/about"
                    className="flex text-gray-300 hover:text-gray-200 py-2"
                  >
                    Sobre nosotros
                  </Link>
                </li>
                <li>
                  <Link
                    to="/servicios"
                    className="flex text-gray-300 hover:text-gray-200 py-2"
                  >
                    Servicios
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="flex text-gray-300 hover:text-gray-200 py-2"
                  >
                    Contacto
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;