import React from 'react'
import { Link } from 'react-router-dom'

import './Navbar.css'
export default function Navbar() {
  return (
    <nav className="navbar navbar-dark navbar-expand-lg text-capitalize w-100 px-5 position-absolute top-0 start-0 z-3 py-4 bg-transparent">
      <div className="container-fluid d-flex justify-content-between align-items-center">
        
    
        <Link className="navbar-brand fw-bold fs-3" to="/">Coffe</Link>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 fw-medium">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/coffee">Coffee</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/bakery">Bakery</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
            <li className="nav-item ms-lg-3">
              <Link className="nav-link " to="/login">Login</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}