import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
 
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-section">
      <div className="container py-5">
        <div className="row g-4">
          
         
          <div className="col-lg-2 col-md-12 mb-4">
            <Link to="/" className="footer-logo text-decoration-none">COFFEE</Link>
          </div>

         
          <div className="col-lg-2 col-md-4 col-6">
            <h6 className="footer-title">PRIVACY</h6>
            <ul className="list-unstyled footer-links">
              <li><Link to="/terms">Terms of use</Link></li>
              <li><Link to="/privacy">Privacy policy</Link></li>
              <li><Link to="/cookies">Cookies</Link></li>
            </ul>
          </div>

         
          <div className="col-lg-2 col-md-4 col-6">
            <h6 className="footer-title">SERVICES</h6>
            <ul className="list-unstyled footer-links">
              <li><Link to="/shop">Shop</Link></li>
              <li><Link to="/order">Order ahead</Link></li>
              <li><Link to="/menu">Menu</Link></li>
            </ul>
          </div>

         
          <div className="col-lg-2 col-md-4 col-6">
            <h6 className="footer-title">ABOUT US</h6>
            <ul className="list-unstyled footer-links">
              <li><Link to="/locations">Find a location</Link></li>
              <li><Link to="/about">About us</Link></li>
              <li><Link to="/story">Our story</Link></li>
            </ul>
          </div>

        
          <div className="col-lg-2 col-md-4 col-6">
            <h6 className="footer-title">INFORMATION</h6>
            <ul className="list-unstyled footer-links">
              <li><Link to="/plans">Plans & pricing</Link></li>
              <li><Link to="/sell">Sell your products</Link></li>
              <li><Link to="/jobs">Jobs</Link></li>
            </ul>
          </div>

         
          <div className="col-lg-2 col-md-4 col-12">
            <h6 className="footer-title">SOCIAL MEDIA</h6>
            <div className="d-flex gap-3 social-icons">
              <a href="https://x.com" target="_blank" rel="noreferrer"><i className="fa-brands fa-x-twitter"></i></a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer"><i className="fa-brands fa-instagram"></i></a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer"><i className="fa-brands fa-facebook-f"></i></a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer"><i className="fa-brands fa-linkedin-in"></i></a>
            </div>
          </div>

        </div>

     
        <div className="footer-bottom mt-5 pt-4 border-top border-secondary text-center">
            <p className="small mb-0 opacity-50">&copy; {currentYear} Coffee Co. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}