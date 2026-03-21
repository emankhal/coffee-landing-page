import React from 'react'
import img1 from "../../assets/beans.PNG"
import img2 from "../../assets/beans2.PNG"

export default function Explor() {
  return (
   
    <div style={{ backgroundColor: "#E2D9C8" }} className='py-5'>
      
      <div className="container">
       
        <div className="row align-items-center justify-content-between g-4">
          
          
          <div className="col-4 col-md-3 text-center d-none d-md-block">
            <div className="img-wrapper">
              <img src={img2} alt="beans" className='img-fluid object-fit-contain' style={{maxHeight: '200px'}} />
            </div>
          </div>

        
          <div className="col-12 col-md-6 text-start d-flex flex-column align-items-center px-4">
            <h3 className="fw-bold mb-4 text-dark w-100">Check Out Our Best Coffee Beans</h3>
            <div className="button w-100">
                <button className="btn btn-dark rounded-pill px-3 fs-6 py-2 shadow-sm text-uppercase">
              Explore Now
            </button>
            </div>
          </div>

        
          <div className="col-4 col-md-3 text-center d-none d-md-block">
            <div className="img-wrapper">
              <img src={img1} alt="beans" className='img-fluid object-fit-contain' style={{maxHeight: '200px'}} />
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}