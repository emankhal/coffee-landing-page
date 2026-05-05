import { Carousel, Modal, Button, Form } from 'react-bootstrap';
import { FaFacebook, FaInstagram, FaXTwitter, FaLinkedin } from "react-icons/fa6";
import img1 from "../../assets/coffee1.PNG";
import img2 from "../../assets/img2.JPG";
import img3 from "../../assets/img3.WEBP";
import icone1 from "../../assets/icon1.PNG";
import icone2 from "../../assets/icon2.PNG";
import icone3 from "../../assets/icon3.PNG";
import beans1 from "../../assets/beans.PNG"
import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import './Home.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useFormik } from 'formik';

export default function Home() {
  const coffeeSwiperRef = useRef(null);
  const dessertSwiperRef = useRef(null);
  const sliderImages = [img1, img2, img3];
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const features = [
    { id: 1, icon: icone1, title: 'feat_hot' },
    { id: 2, icon: icone2, title: 'feat_iced' },
    { id: 3, icon: icone3, title: 'feat_bakery' },
    { id: 4, icon: icone3, title: 'feat_dessert' },
  ];
  const [coffeeProducts, setCoffeeProducts] = useState([]);
  const [dessertProducts, setDessertProducts] = useState([]);
  const [reviewsData, setReviewsData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios.get("/api/products/category/coffee")
      .then((response) => {
        setCoffeeProducts(response.data?.data || []);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching coffee products:", error);
        setCoffeeProducts([]);
        setLoading(false);
      });
  }, []);
  useEffect(() => {
    axios.get("/api/products/category/dessert").then((response) => {
      setDessertProducts(response.data?.data || [])

    }).catch((error) => {
      console.error("Error fetching dessert products:", error);
      setDessertProducts([]);
    })
  }, [])
  useEffect(() => {
    axios.get("/api/reviews").then((response) => {
      setReviewsData(response.data?.data || []);
    }).catch((error) => {
      console.error("Error fetching reviews:", error);
    })

  }, [])
  const initialValues = { email: '' };
  const reserveInitialValues = { full_name: '', email: '', phone: '', reservation_date: '', reservation_time: '', guests: '', tables_count: '' };
  const formik = useFormik({
    initialValues,
    validateOnChange: false,
    validateOnBlur: true,
    onSubmit: (values) => {
      axios.post("/api/newsletter", { email: values.email })
        .then((response) => {
          alert(t('subscribe_success'));
          formik.resetForm();
        })
        .catch((error) => {
          console.error("Subscription error:", error);
          alert(t('subscribe_error'));
        });
    },
  });


  const reserveFormik = useFormik({
    initialValues: reserveInitialValues,
    validateOnChange: false,
    validateOnBlur: true,
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      try {
        const response = await axios.post("/api/reservations", values);
        console.log(response);
        console.log("Reservation successful:", response.data);
        alert(t('reservation_success'));
        resetForm();
        handleClose();
      } catch (error) {
        console.error("Reservation error:", error);
        alert(t('reservation_error'));
      } finally {
        setSubmitting(false);
      }
    },
  });
  console.log(reserveFormik.values);







  return (
    <>

      {/* 1. Hero Section (Carousel) */}
      <section className="position-relative w-100 vh-100">
        {/* السلايدر (Carousel) */}
        <Carousel controls={false} indicators={true} fade>
          {sliderImages.map((image, index) => (
            <Carousel.Item key={index} interval={2000}>
              {/* Overlay - الطبقة السوداء الشفافة */}
              <div
                className="position-absolute w-100 h-100 top-0 start-0"
                style={{ backgroundColor: 'rgba(0,0,0,0.5)', zIndex: 1 }}
              ></div>
              <img
                className="d-block w-100 vh-100"
                src={image}
                alt={`slide-${index}`}
                style={{ objectFit: 'cover' }}
              />
            </Carousel.Item>
          ))}
        </Carousel>


        <div
          className="position-absolute top-50 start-50 translate-middle text-center text-white w-75"
          style={{ zIndex: 2 }}
        >

          <h1 className="display-2 fw-bold mb-4 shadow-sm">
           Welcome To Our Coffee Shop
          </h1>


          <p className="lead fs-4 mb-4 mx-auto" style={{ maxWidth: '700px' }}>
            Discover the perfect blend of flavor and ambiance at our coffee shop. Indulge in expertly crafted brews, cozy atmosphere.
          </p>


          <div className="d-flex justify-content-center gap-3 flex-wrap">
            <button className="btn btn-outline-light btn-lg px-5 py-3 rounded-pill hover-effect">
              Explore Our Menu
            </button>
            <Button
              className="btn-book-table border-0 fw-bold px-5 py-3 rounded-pill shadow-sm "
              style={{ backgroundColor: '#6F4E37', color: '#fff' }}
              onClick={handleShow}
            >
             Book a Table
            </Button>
            <Form onSubmit={reserveFormik.handleSubmit}>
              <Modal show={show} onHide={handleClose} centered>
                <Modal.Header closeButton className="border-0 pb-0">
                  <Modal.Title className="fw-bold" style={{ color: '#6F4E37' }}>
                    Reserve Your Table
                  </Modal.Title>
                </Modal.Header>

                <Modal.Body className="pt-4">
                  {/* الصف الأول: الاسم والإيميل */}
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <Form.Group controlId="formName">
                        <Form.Label className="small fw-bold text-muted">Full Name</Form.Label>
                        <Form.Control
                          name="full_name"
                          type="text"
                          placeholder="e.g. Mohamed"
                          className="rounded-3 border-secondary-subtle"
                          onChange={reserveFormik.handleChange}
                          onBlur={reserveFormik.handleBlur}
                          value={reserveFormik.values.full_name}
                        />
                      </Form.Group>
                    </div>
                    <div className="col-md-6 mb-3">
                      <Form.Group controlId="formEmail">
                        <Form.Label className="small fw-bold text-muted">Email Address</Form.Label>
                        <Form.Control
                          name="email"
                          type="email"
                          placeholder="name@example.com"
                          className="rounded-3 border-secondary-subtle"
                          onChange={reserveFormik.handleChange}
                          onBlur={reserveFormik.handleBlur}
                          value={reserveFormik.values.email}
                        />
                      </Form.Group>
                    </div>
                  </div>

                  {/* الصف الثاني: الهاتف وعدد الطاولات */}
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <Form.Group controlId="formPhone">
                        <Form.Label className="small fw-bold text-muted">Phone Number</Form.Label>
                        <Form.Control
                          name="phone"
                          type="tel"
                          placeholder="01xxxxxxxxx"
                          className="rounded-3 border-secondary-subtle"
                          onChange={reserveFormik.handleChange}
                          onBlur={reserveFormik.handleBlur}
                          value={reserveFormik.values.phone}
                        />
                      </Form.Group>
                    </div>
                    <div className="col-md-6 mb-3">
                      <Form.Group controlId="formTables">
                        <Form.Label className="small fw-bold text-muted">Number of Tables</Form.Label>
                        <Form.Control
                          name="tables_count"
                          type="number"
                          min="1"
                          max="10"
                          className="rounded-3 border-secondary-subtle"
                          onChange={reserveFormik.handleChange}
                          onBlur={reserveFormik.handleBlur}
                          value={reserveFormik.values.tables_count}
                        />
                      </Form.Group>
                    </div>
                  </div>

                  {/* الصف الثالث: الأشخاص، الوقت، التاريخ */}
                  <div className="row">
                    <div className="col-md-4 mb-3">
                      <Form.Label className="small fw-bold text-muted">Guests</Form.Label>
                      <Form.Select
                        name="guests"
                        className="rounded-3 border-secondary-subtle"
                        onChange={reserveFormik.handleChange}
                        onBlur={reserveFormik.handleBlur}
                        value={reserveFormik.values.guests}
                      >
                        
                        
                        <option value="1">1 Person</option>
                        <option value="2">2 People</option>
                        <option value="4">4 People</option>
                        <option value="Large Group">Large Group</option>
                      </Form.Select>
                    </div>
                    <div className="col-md-4 mb-3">
                      <Form.Group controlId="formTime">
                        <Form.Label className="small fw-bold text-muted">Time</Form.Label>
                        <Form.Control
                          name="reservation_time"
                          type="time"
                          className="rounded-3 border-secondary-subtle"
                          onChange={reserveFormik.handleChange}
                          onBlur={reserveFormik.handleBlur}
                          value={reserveFormik.values.reservation_time}
                        />
                      </Form.Group>
                    </div>
                    <div className="col-md-4 mb-3">
                      <Form.Group controlId="formDate">
                        <Form.Label className="small fw-bold text-muted">Date</Form.Label>
                        <Form.Control
                          name="reservation_date"
                          type="date"
                          className="rounded-3 border-secondary-subtle"
                          onChange={reserveFormik.handleChange}
                          onBlur={reserveFormik.handleBlur}
                          value={reserveFormik.values.reservation_date}
                        />
                      </Form.Group>
                    </div>
                  </div>

                </Modal.Body>

                <Modal.Footer className="border-0 pt-0 pb-4 justify-content-center">
                  <Button
                    variant="outline-secondary"
                    onClick={handleClose}
                    className="px-4 rounded-pill"
                  >
                    Cancel
                  </Button>
                  <Button
                    type="submit"
                    onClick={reserveFormik.handleSubmit}
                    className="px-5 rounded-pill border-0"
                    style={{ backgroundColor: '#6F4E37' }}
                  >
                    Reserve
                  </Button>
                </Modal.Footer>
              </Modal>
            </Form>
          </div>
        </div>
      </section>

      {/* 2. Features Bar */}
      <section className="container-fluid bg-warning-subtle py-4">
        <div className="row justify-content-center g-4">
          {features.map((item) => (
            <div key={item.id} className="col-6 col-md-2">
              <div className="content d-flex flex-column align-items-center text-center p-3 transition-hover">
                <div className="img-container mb-3" style={{ width: '60px' }}>
                  <img src={item.icon} alt={item.title} className="img-fluid w-100" />
                </div>
                {/* هنا العنوان هيظهر باللغة المختارة */}
                <h5 className="fw-bold text-dark text-uppercase small">
                  {item.title}
                </h5>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- 1. قسم القهوة Special Coffee --- */}
      <div className='py-5 px-3 bg-light' id='Special-Coffee'>
        <h3 className='text-center mb-5 text-uppercase fw-bold' style={{ letterSpacing: '2px' }}>
          Our Special Coffee
        </h3>

        <div className="container position-relative px-md-5">
          {coffeeProducts && coffeeProducts.length > 0 ? (
            <Swiper

              key={`swiper-count-${coffeeProducts.length}`}
              loop={true}
              modules={[Navigation, Pagination, Autoplay]}
              pagination={{ clickable: true }}
              autoplay={coffeeProducts.length > 3 ? { delay: 3000 } : false}

              breakpoints={{
                0: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
              className="pb-5"
              onBeforeInit={(swiper) => {
                coffeeSwiperRef.current = swiper;
              }}
              spaceBetween={20}
              slidesPerView={1}
            >
              {coffeeProducts.map((product) => (
                <SwiperSlide key={product.id}>
                  <div className="card border-0 shadow-sm h-100 custom-card">
                    <div className="position-relative card-img-container" style={{ height: '220px', overflow: 'hidden', backgroundColor: '#f8f9fa' }}>
                      <img
                        src={product.image}
                        className="card-img-top w-100 h-100"
                        alt={product.name}
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover', // ده بيخلي الصورة تظهر كاملة بدون قص
                          objectPosition: 'center',
                        }}
                      />
                      <div className="rating-badge">
                        <i className="fas fa-star me-1"></i>4.8
                      </div>
                    </div>

                    <div className="card-body d-flex flex-column p-3">
                      {/* باقي الكود بتاعك كما هو */}
                      <div className="d-flex justify-content-between align-items-start mb-2 text-start">
                        <div>
                          <h5 className="card-title fw-bold mb-0">{product.name}</h5>
                          <small className="text-muted">{product.type}</small>
                        </div>
                        <span className="price-tag fw-bold text-brown">
                          ${Number(product.price).toFixed(2)}
                        </span>
                      </div>
                      {/* تحديد عدد سطور الوصف عشان الكروت تبقى طول واحد */}
                      <p className="card-text small text-muted mb-3 text-start" style={{
                        display: '-webkit-box',
                        WebkitLineClamp: '2',
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden',
                        height: '40px'
                      }}>
                        {product.description}
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
          ) : (
            /* لو لسه بيلود */
            <div className="text-center p-5">
              <div className="spinner-border text-brown" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
              <p className="mt-2">Loading Coffee Menu...</p>
            </div>
          )}

          {/* أزرار التنقل */}
          <button
            onClick={() => coffeeSwiperRef.current?.slidePrev()}
            className="btn rounded-circle shadow-sm position-absolute d-none d-md-flex align-items-center justify-content-center swiper-nav-btn prev-btn"
            style={{ width: '45px', height: '45px', backgroundColor: 'white', top: '50%', left: '0', transform: 'translateY(-50%)' }}
          >
            ‹
          </button>

          <button
            onClick={() => coffeeSwiperRef.current?.slideNext()}
            className="btn rounded-circle shadow-sm position-absolute d-none d-md-flex align-items-center justify-content-center swiper-nav-btn next-btn"
            style={{ width: '45px', height: '45px', backgroundColor: 'white', top: '50%', right: '0', transform: 'translateY(-50%)' }}
          >
            ›
          </button>
        </div>
      </div>

      {/* --- 2. قسم الحلويات Special Dessert --- */}
      <div className="px-4 bg-light pb-5">
        <h3 className="text-center mb-5 text-uppercase fw-bold pt-5">
          Our Special Dessert
        </h3>

        <div className="container position-relative px-md-5">
          {dessertProducts && dessertProducts.length > 0 ? (
            <>
              <Swiper
                key={`dessert-swiper-${dessertProducts.length}`}

                onSwiper={(swiper) => {
                  dessertSwiperRef.current = swiper;
                }}

                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={20}
                slidesPerView={1}
                loop={dessertProducts.length > 3}

                pagination={{ clickable: true }}
                autoplay={dessertProducts.length > 3 ? { delay: 3000, disableOnInteraction: false } : false}

                breakpoints={{
                  640: { slidesPerView: 2, loop: dessertProducts.length > 2 },
                  1024: { slidesPerView: 4, loop: dessertProducts.length > 5 },
                }}
                className="pb-5"
              >
                {dessertProducts.map((product, index) => (
                  <SwiperSlide key={`${product.id}-${index}`}>
                    <div className="card border-0 shadow-sm custom-card h-100">
                      <div className="position-relative card-img-container" style={{ height: '180px', overflow: 'hidden' }}>
                        <img
                          src={product.image}
                          className="w-100 h-100"
                          alt={product.name}
                          style={{ objectFit: 'cover' }}
                        />
                        <div className="rating-badge">
                          <i className="fas fa-star me-1"></i>4.8
                        </div>
                      </div>
                      <div className="card-body p-3 bg-white d-flex flex-column">
                        <div className="d-flex justify-content-between align-items-start mb-2 text-start">
                          <div style={{ maxWidth: '70%' }}>
                            <h6 className="fw-bold mb-0 text-truncate">{product.name}</h6>
                            <small className="text-muted">{product.type}</small>
                          </div>
                          <span className="price-tag small fw-bold text-brown">
                            ${Number(product.price).toFixed(2)}
                          </span>
                        </div>
                        <p className="card-text small text-muted mb-3 text-start" style={{ height: '40px', overflow: 'hidden' }}>
                          {product.description.length > 60
                            ? product.description.substring(0, 57) + '...'
                            : product.description}
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
                onClick={() => dessertSwiperRef.current?.slidePrev()} // تأكد من الاسم هنا
                className="btn rounded-circle shadow-sm position-absolute d-none d-md-flex align-items-center justify-content-center swiper-nav-btn prev-btn"
                style={{ width: '45px', height: '45px', backgroundColor: 'white', top: '50%', left: '0', transform: 'translateY(-50%)' }}
              >
                ‹
              </button>
              <button
                onClick={() => dessertSwiperRef.current?.slideNext()} // وتأكد من الاسم هنا أيضاً
                className="btn rounded-circle shadow-sm position-absolute d-none d-md-flex align-items-center justify-content-center swiper-nav-btn next-btn"
                style={{ width: '45px', height: '45px', backgroundColor: 'white', top: '50%', right: '0', transform: 'translateY(-50%)' }}
              >
                ›
              </button>
            </>
          ) : (
            <div className="text-center p-5">
              <div className="spinner-border text-brown" role="status"></div>
            </div>
          )}
        </div>
      </div>
      {/* Section Explore Dessert (Beans) */}
      <div style={{ backgroundColor: "#E2D9C8" }} className="py-5">
        <div className="container">
          <div className="row align-items-center justify-content-between g-4">

            <div className="col-4 col-md-3 text-center d-none d-md-block">
              <div className="img-wrapper">
                {/* <img src={beans2} alt="beans" className="img-fluid" /> */}
              </div>
            </div>

            <div className="col-12 col-md-6 text-center text-md-start d-flex flex-column align-items-center px-4">
              <h3 className="fw-bold mb-4 text-dark w-100">
                Check Out Our Best Coffee Beans
              </h3>
              <div className="w-100 text-center text-md-start">
                <button className="btn btn-dark rounded-pill px-4 fs-6 py-2 shadow-sm text-uppercase">
                  Explore Now
                </button>
              </div>
            </div>

            <div className="col-4 col-md-3 text-center d-none d-md-block">
              <div className="img-wrapper">
                {/* <img src={beans1} alt="beans" className="img-fluid" /> */}
              </div>
            </div>

          </div>
        </div>
      </div>
      {/*section Review dessert*/}

      < div className="py-5 bg-light overflow-hidden" style={{ backgroundColor: "#F1F0EE" }}>
        <div className="container">
          < h3 className="text-center mb-5 text-uppercase w-md-25 w-100 m-auto" >
            Come and Join< br /> Our Happy Customers
          </h3 >

          <Swiper

            key={`reviews-swiper-${reviewsData.length}`}
            modules={[Navigation, Pagination, Autoplay]}
            loop={true}
            loopedSlides={reviewsData.length}

            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}

            spaceBetween={30}
            slidesPerView={1}

            pagination={{ clickable: true }}

            breakpoints={{
              768: {
                slidesPerView: 2,
              },

              1024: {
                slidesPerView: 3,
              }
            }}
            className="pb-5"
          >
            {reviewsData.map((rev) => (
              <SwiperSlide key={rev.id}>
                <div className="container-md h-100">
                  <div className="review-card card border-0 shadow-sm rounded-4 p-4 text-center h-100"
                    style={{ backgroundColor: "#E2D9C8", minHeight: "300px" }}>

                    <div className="header d-flex flex-column flex-md-row align-items-center justify-content-around gap-3 mb-4">
                      <div className="quote-icon">
                        <img
                          src={rev.image}
                          alt={rev.name}
                          className="rounded-circle shadow-sm"
                          style={{ width: "70px", height: "70px", objectFit: "cover", border: "3px solid white" }}
                        />
                      </div>
                      <div className="name text-md-start text-center">
                        <h5 className='fs-5 mb-0 fw-bold'>{rev.name}</h5>
                        <p className="text-muted mb-0" style={{ fontSize: "13px" }}>{rev.job_title}</p>
                      </div>
                      <div className="rating">
                        {[...Array(5)].map((_, i) => (
                          <span key={i} style={{ color: i < rev.rating ? '#FFD700' : '#ccc' }}>★</span>
                        ))}
                      </div>
                    </div>

                    <p className="review-text mb-0 fst-italic" style={{ color: "#4A4A4A", lineHeight: "1.6" }}>
                      "{rev.comment}"
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div >

      {/*section subscribe dessert*/}
      < div className='section p-3 overflow-hidden' >
        <div className="row align-items-center text-center">
          <div className="img-r col-md-3 d-none d-md-block position-relative">
            <img src={beans1} alt="beans left" className="img-fluid" style={{ transform: 'scaleX(-1)' }} />
          </div>

          <div className="col-12 col-md-6">

            <h2 className='fw-bold mb-3 text-dark display-6'>
              Subscribe to Our Newsletter
            </h2>


            <p className='mb-4 text-muted px-lg-5'>
              Get the latest updates on our products and promotions directly to your inbox.
            </p>
            <form className='w-100' onSubmit={formik.handleSubmit}>
              <div
                className="input-group mb-3 shadow-sm mx-auto rounded"
                style={{ maxWidth: '500px' }}
              >
                <input
                  type="email"
                  name="email"
                  className="form-control border-0 p-3"
                  placeholder="Enter your email"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                />
                <button
                  className="btn btn-dark px-4 text-uppercase fw-bold"
                  type="submit"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
          <div className="img-l col-md-3 d-none d-md-block">
            <img src={beans1} alt="beans right" className="img-fluid" />
          </div>

        </div>
      </div >
      {/*section footer */}
      < footer className="footer-section p-3 " >
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
              <h6 className="footer-title">FOLLOW US</h6>
              <div className="d-flex gap-3 social-icons">
                <div className="d-flex gap-3">
                  <a href="https://facebook.com" className="text-light"><FaFacebook size={25} /></a>
                  <a href="https://instagram.com" className="text-light"><FaInstagram size={25} /></a>
                  <a href="https://x.com" className="text-light"><FaXTwitter size={25} /></a>
                  <a href="https://linkedin.com" className="text-light"><FaLinkedin size={25} /></a>
                </div>
              </div>
            </div>

          </div>

          {/* الحقوق */}
          <div className="footer-bottom mt-5 pt-4  border-top border-secondary text-center">
            <p className="small mb-0 opacity-50">
              &copy; {new Date().getFullYear()} Coffee Shop. All rights reserved.
            </p>
          </div>
        </div>
      </footer >








    </>
  );
}