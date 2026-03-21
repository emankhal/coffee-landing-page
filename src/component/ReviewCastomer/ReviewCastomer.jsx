import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import './ReviewCastomer.css';
import img from "../../assets/customers.PNG"

export default function ReviewCastomer() {
  const reviews = [
    { id: 1, name: "Ahmed Ali", text: ", dolor sit amet, consectetur adipisicing elit,Lorem ipsum  amet, consectetur adipisicin ipsum dolor sit   dolor sit amet, consectetur adipisicing elit,!", rating: 5 },
    { id: 2, name: "Sara Ahmed", text: "  amet, consectetur adipisicing elit,Lorem ipsum dolor sit  adipisic sit   dolor sit amet, consectetur adipisicing elit,.", rating: 4 },
    { id: 3, name: "John Doe", text: "ipsum dolor sit amet, consectetur adipisicing  dolor sit amet, consectetur adipisicing elit,Lorem ipsum  amet, consectetur adipisicing elit,Lorem ipstur adipisicing elit, epresso!", rating: 5 },
    { id: 4, name: "Mona Hassan", text: "QuickLorem ipsum dolor sit amet, consectetur adipisicing ,Lorem ipsum dolor sitpsum dolor sit  adipisicingr sit   dolor sit amet, consectetur adipisicing elit,ns. Perfect!", rating: 5 },
  ];

  return (
    <div className="py-5 bg-light overflow-hidden"  style={{backgroundColor:"#F1F0EE"}}>
      <h3 className="text-center mb-5  text-uppercase w-md-25 w-100 m-auto">Come and Join<br/> our happy customers</h3>
      <Swiper
        modules={[Pagination, Autoplay]}
        centeredSlides={true}
        slidesPerView={1.2}
        spaceBetween={30}
        loop={true}
        autoplay={{ delay: 4000 }}
        pagination={{ clickable: true }}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="review-swiper py-2 py-md-5 w-100 w-md-75 m-auto"
       
      >
        {reviews.map((rev) => (
          <SwiperSlide key={rev.id}>
           <div className="container-md ">
             <div className="review-card card border-0 shadow-sm rounded-4 p-4 text-center " style={{backgroundColor:"#E2D9C8"}}>
              <div className="header d-flex flex-column flex-md-row align-items-center justify-align-content-lg-around gap-4 mb-4">
                <div className="quote-icon mb-3">
                <img src={img} alt="custoner" />
              </div>
              <div className="name text-start ">
                <h5 className='fs-5'>{rev.name}</h5>
                <p style={{fontSize:"13px"}}>Entrepreneur</p>
              </div>
              <div className="rating mb-3">
                {[...Array(rev.rating)].map((_, i) => (
                  <span key={i} style={{color: '#FFD700'}}>★</span>
                ))}
              </div>

              </div>
              
              <p className="review-text mb-4 italic">"{rev.text}"</p>
              
              
              
              
            </div>
           </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}