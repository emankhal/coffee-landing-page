import React from 'react'
import "./Subscribe.css"
import img1 from "../../assets/beans.PNG"

export default function Subscribe() {
    return (
        <div className='section py-5 px-1 overflow-hidden ' >
            <div className="row align-items-center text-center">
                
            
                <div className=" img-r col-md-3 d-none d-md-block position-relative    ">
                    <img src={img1} alt="beans left" className="img-fluid" style={{transform: 'scaleX(-1)'}} />
                </div>

               
                <div className="col-12 col-md-6">
                    <h2 className='fw-bold mb-3 text-dark display-6'>Subscribe to Our Newsletter</h2>
                    <p className='mb-4 text-muted px-lg-5'>Get the latest updates on our products and promotions directly to your inbox.</p>
                    
                    <div className="input-group mb-3 shadow-sm mx-auto rounded" style={{maxWidth: '500px'}}>
                        <input 
                            type="email" 
                            className="form-control border-0 p-3" 
                            placeholder="Enter your email" 
                        />
                        <button className="btn btn-dark px-4 text-uppercase fw-bold" type="button">
                            Subscribe
                        </button>
                    </div>
                </div>

              
                <div className="img-l col-md-3 d-none d-md-block">
                    <img src={img1} alt="beans right" className="img-fluid"  />
                </div>

            </div>
        </div>
    )
}