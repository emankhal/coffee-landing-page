import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import './SpicialCoffe.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import img1 from "../../assets/coffee1.png.PNG";
import img2 from "../../assets/img2.JPG";

export default function SpicialCoffee() {
    const images = [img1, img2, img1, img2, img1];
    const [swiperInstance, setSwiperInstance] = useState(null);

    return (
        <div className='py-5 px-3 bg-light'>
            <h3 className='text-center mb-5 text-uppercase fw-bold' style={{letterSpacing: '2px'}}>Our Special Coffee</h3>

            <div className="container position-relative px-md-5">
                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    spaceBetween={20}
                    slidesPerView={1.2}
                    loop={true}
                    onSwiper={(swiper) => setSwiperInstance(swiper)}
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 2500 }}
                    breakpoints={{
                        640: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                    className="pb-5"
                >
                    {images.map((img, index) => (
                        <SwiperSlide key={index}>
                            <div className="card border-0 shadow-sm h-100 custom-card">
                                <div className="position-relative card-img-container">
                                    <img src={img} className="card-img-top" alt="coffee" />
                                    <div className="rating-badge">
                                        <i className="fas fa-star me-1"></i>4.8
                                    </div>
                                </div>

                                <div className="card-body d-flex flex-column p-3">
                                    <div className="d-flex justify-content-between align-items-start mb-2">
                                        <div>
                                            <h5 className="card-title fw-bold mb-0">Caramel Latte</h5>
                                            <small className="text-muted">Espresso with Milk</small>
                                        </div>
                                        <span className="price-tag">$12.00</span>
                                    </div>

                                    <p className="card-text small text-muted mb-3">
                                        Experience the rich blend of Arabica beans with a touch of creamy caramel.
                                    </p>

                                    <div className="mt-auto">
                                        <button className="btn btn-dark w-100 rounded-pill btn-sm py-2 fw-bold shadow-sm">
                                            Add to Order
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                <button
                    onClick={() => swiperInstance?.slidePrev()}
                    className="my-button my-button-l d-none d-md-flex position-absolute top-50 translate-middle-y z-3 btn rounded-circle shadow-sm"
                    style={{ width: '45px', height: '45px', backgroundColor: 'white' }}
                >
                    <span>&lt;</span>
                </button>

                <button
                    onClick={() => swiperInstance?.slideNext()}
                    className="my-button my-button-r d-none d-md-flex position-absolute top-50 translate-middle-y z-3 btn rounded-circle shadow-sm"
                    style={{ width: '45px', height: '45px', backgroundColor: 'white' }}
                >
                    <span>&gt;</span>
                </button>
            </div>
        </div>
    );
}