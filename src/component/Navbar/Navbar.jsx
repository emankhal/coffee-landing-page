import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import icone from '../../assets/icone.PNG'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { MdLanguage } from 'react-icons/md';
import ModernTranslate from '../../ModernTranslate';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar navbar-dark navbar-expand-lg text-capitalize w-100 px-lg-5 position-fixed top-0 start-0 z-3 py-2 transition-all ${scrolled ? 'bg-navbar-scrolled shadow-sm' : 'bg-transparent py-2'}`}>
      <div className="container-fluid">
        <Link className="navbar-brand d-flex align-items-center gap-2 fw-bold fs-3 text-uppercase" to="/">
          <img
            src={icone}
            alt="Coffee Logo"
            className="navbar-logo"
            style={{ width: scrolled ? '65px' : '80px', objectFit: 'contain', transition: 'width 0.3s' }}
          />
        </Link>

        <button
          className="navbar-toggler border-0 shadow-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
          <ul className="navbar-nav mb-2 mb-lg-0 fw-medium align-items-center gap-lg-3">
            <li className="nav-item">
              <Link className="nav-link active nav-link-custom" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link nav-link-custom" smooth to="/#Special-Coffee">
                Coffee
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link nav-link-custom" to="/bakery">Bakery</Link>
            </li>
            <li className="nav-item">
              <div
                onClick={() => window.changeLanguage()}
                className="flex items-center justify-center w-10 h-10 hover:bg-gray-100 rounded-full cursor-pointer transition-all"
              >
                <MdLanguage size={24} className="text-white" />
                
                <ModernTranslate />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}