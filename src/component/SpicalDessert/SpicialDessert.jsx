import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import './SpicialDessert.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import img1 from "../../assets/Group 9.PNG";
import img2 from "../../assets/Rectangle 7.PNG";
import img3 from "../../assets/Rectangle 7 (2).PNG";

export default function SpicialDessert() {
    const images = [img1, img2, img3, img1, img2, img3, img1, img2, img3, img1];


    const [swiperInstance, setSwiperInstance] = useState(null);

    return (
        <div className=' px-4 bg-light pb-5'>
            <h3 className='text-center mb-5 text-uppercase fw-bold'>our special dessert</h3>
            <div className="container position-relative px-md-5 ">

                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    spaceBetween={20}
                    slidesPerView={1}
                    loop={true}

                    onSwiper={(swiper) => setSwiperInstance(swiper)}
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 2500 }}
                    breakpoints={{
                        640: { slidesPerView: 2 },
                        1024: { slidesPerView: 5 },
                    }}
                    className="pb-5"
                >
                    {images.map((img, index) => (
                        <SwiperSlide key={index}>
                            <div className="card border-0 shadow-sm custom-card h-auto">
                                <div className="position-relative card-img-container">
                                    <img src={img} className="card-img-top" alt="coffee" />
                                    <div className="rating-badge">
                                        <i className="fas fa-star me-1"></i>4.8
                                    </div>
                                </div>

                                <div className="card-body p-3 bg-white ">
                                    <div className="d-flex justify-content-between align-items-start mb-2">
                                        <div>
                                            <h6 className="fw-bold mb-0">Caramel Latte</h6>
                                            <small className="text-muted">Espresso Mix</small>
                                        </div>
                                        <span className="price-tag small">$12.00</span>
                                    </div>

                                    <p className="card-text small text-muted mb-3">
                                        Fresh Arabica beans with caramel.
                                    </p>

                                    <button className="btn btn-dark w-75 m-auto rounded-pill btn-sm py-2 fw-bold shadow-sm">
                                        Add
                                    </button>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>


                <button
                    onClick={() => swiperInstance?.slidePrev()}
                    className=" my-button my-button-r position-absolute top-50  translate-middle-y z-3 btn  rounded-circle d-flex align-items-center justify-content-center shadow-sm hover-effect" style={{ width: '45px', height: '45px', transition: 'all 0.3s' }}
                >
                    <span>&lt;</span>
                </button>

                <button
                    onClick={() => swiperInstance?.slideNext()}
                    className=" my-button my-button-l position-absolute top-50  translate-middle-y z-3 btn  rounded-circle d-flex align-items-center justify-content-center shadow-sm hover-effect"

                    style={{ width: '45px', height: '45px', transition: 'all 0.3s' }}
                >
                    <span>&gt;</span>
                </button>

            </div>
        </div>
    );
}