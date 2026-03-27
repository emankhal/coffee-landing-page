import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './Navbar.css';
import icone from '../../assets/icone.PNG'
export default function Navbar() {
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'ar' : 'en';
    i18n.changeLanguage(newLang);
    // ضبط اتجاه الصفحة: RTL للعربي و LTR للإنجليزي
    document.documentElement.dir = newLang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = newLang;
  };

  return (
    <nav className="navbar navbar-dark navbar-expand-lg text-capitalize w-100 px-lg-5 position-absolute top-0 start-0 z-3 py-4 bg-transparent">
      <div className="container-fluid">

        {/* اللوجو - بيترجم برضه لو حبيتي */}
        <Link className="navbar-brand d-flex align-items-center gap-2 fw-bold fs-3 text-uppercase" to="/">
          {/* الأيقونة - اللوجو */}
          <img
            src={icone}
            alt="Coffee Logo"
            style={{ width: '80px' ,objectFit: 'contain' }}
          />
        </Link>

        {/* زرار الموبايل */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse  justify-content-end" id="navbarSupportedContent" >
          {/* اللينكات */}
          <ul className="navbar-nav  mb-2 mb-lg-0 fw-medium align-items-center">
            <li className="nav-item">
              <Link className="nav-link active" to="/">{t('nav_home')}</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/coffee">{t('nav_coffee')}</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/bakery">{t('nav_bakery')}</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">{t('nav_about')}</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/login">{t('nav_login')}</Link>
            </li>

            {/* زرار تغيير اللغة - حطيته جوه الـ list عشان يفضل متنظم */}
            <li className="nav-item ms-lg-4 mt-3 mt-lg-0">
              <button
                onClick={toggleLanguage}
                className="btn btn-outline-light btn-sm rounded-pill px-3 fw-bold"
                style={{ transition: 'all 0.3s' }}
              >
                {t('lang_name')}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}