
import { Carousel } from "react-bootstrap";
import { FaFacebook, FaInstagram, FaXTwitter, FaLinkedin } from "react-icons/fa6";
import img1 from "../../assets/coffee1.png";
import img2 from "../../assets/img2.jpg";
import img3 from "../../assets/img3.webp";
import img4 from "../../assets/Group 9.png";
import img5 from "../../assets/Rectangle 7.png";
import img6 from "../../assets/Rectangle 7 (2).png";
import icone1 from "../../assets/icon1.png";
import icone2 from "../../assets/icon2.png";
import icone3 from "../../assets/icon3.png";
import beans1 from "../../assets/beans.png";
import beans2 from "../../assets/beans2.png";
import customers from "../../assets/customers.png";
import { useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import './Home.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css';
import { Link } from 'react-router-dom';
import { useTranslation } from "react-i18next";

export default function Home() {
  const { t } = useTranslation();
  const sliderImages = [img1, img2, img3];
  const images = [img4, img5, img6, img4, img5, img6, img4, img5, img6, img4];
  const [swiperInstance, setSwiperInstance] = useState(null);

  const features = [
    { id: 1, icon: icone1, title: t('feat_hot') },
    { id: 2, icon: icone2, title: t('feat_iced') },
    { id: 3, icon: icone3, title: t('feat_bakery') },
    { id: 4, icon: icone3, title: t('feat_dessert') },
  ];
  const reviews = [
    { id: 1, name: "Ahmed Ali", text: ", dolor sit amet, consectetur adipisicing elit,Lorem ipsum  amet, consectetur adipisicin ipsum dolor sit   dolor sit amet, consectetur adipisicing elit,!", rating: 5 },
    { id: 2, name: "Sara Ahmed", text: "  amet, consectetur adipisicing elit,Lorem ipsum dolor sit  adipisic sit   dolor sit amet, consectetur adipisicing elit,.", rating: 4 },
    { id: 3, name: "John Doe", text: "ipsum dolor sit amet, consectetur adipisicing  dolor sit amet, consectetur adipisicing elit,Lorem ipsum  amet, consectetur adipisicing elit,Lorem ipstur adipisicing elit, epresso!", rating: 5 },
    { id: 4, name: "Mona Hassan", text: "QuickLorem ipsum dolor sit amet, consectetur adipisicing ,Lorem ipsum dolor sitpsum dolor sit  adipisicingr sit   dolor sit amet, consectetur adipisicing elit,ns. Perfect!", rating: 5 },
  ];
  const currentYear = new Date().getFullYear();


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

        {/* المحتوى الثابت فوق السلايدر */}
        <div
          className="position-absolute top-50 start-50 translate-middle text-center text-white w-75"
          style={{ zIndex: 2 }}
        >
          {/* العنوان - مترجم */}
          <h1 className="display-2 fw-bold mb-4 shadow-sm">
            {t('hero_title')}
          </h1>

          {/* الوصف - مترجم */}
          <p className="lead fs-4 mb-4 mx-auto" style={{ maxWidth: '700px' }}>
            {t('hero_desc')}
          </p>

          {/* الأزرار - مترجمة */}
          <div className="d-flex justify-content-center gap-3 flex-wrap">
            <button className="btn btn-outline-light btn-lg px-5 py-3 rounded-pill hover-effect">
              {t('btn_explore')}
            </button>
            <button className="btn btn-light btn-lg px-5 py-3 rounded-pill">
              {t('btn_book')}
            </button>
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

      {/*section spicial coffee*/}
      <div className='py-5 px-3 bg-light'>
        {/* العنوان مترجم */}
        <h3 className='text-center mb-5 text-uppercase fw-bold' style={{ letterSpacing: '2px' }}>
          {t('sec_special_coffee')}
        </h3>

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
                        {/* اسم القهوة ونوعها - يفضل برضه تضيفيهم في الترجمة */}
                        <h5 className="card-title fw-bold mb-0">{t('coffee_name')}</h5>
                        <small className="text-muted">{t('coffee_type')}</small>
                      </div>
                      <span className="price-tag">$12.00</span>
                    </div>

                    <p className="card-text small text-muted mb-3">
                      {t('coffee_desc')}
                    </p>

                    <div className="mt-auto">
                      {/* زرار الإضافة مترجم */}
                      <button className="btn btn-dark w-100 rounded-pill btn-sm py-2 fw-bold shadow-sm">
                        {t('btn_add_order')}
                      </button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* أزرار التنقل - هتفضل شغالة بـ swiperInstance */}
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
      {/*section spicial dessert*/}
      <div className='px-4 bg-light pb-5'>
        {/* العنوان مترجم */}
        <h3 className='text-center mb-5 text-uppercase fw-bold'>
          {t('sec_special_dessert')}
        </h3>

        <div className="container position-relative px-md-5">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            loop={true}
            // تأكدي من استخدام instance مختلف إذا كان هناك أكثر من Swiper في نفس الصفحة
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
                    <img src={img} className="card-img-top" alt="dessert" />
                    <div className="rating-badge">
                      <i className="fas fa-star me-1"></i>4.8
                    </div>
                  </div>

                  <div className="card-body p-3 bg-white">
                    <div className="d-flex justify-content-between align-items-start mb-2">
                      <div>
                        {/* اسم الحلوى ونوعها مترجم */}
                        <h6 className="fw-bold mb-0">{t('dessert_name')}</h6>
                        <small className="text-muted">{t('dessert_type')}</small>
                      </div>
                      <span className="price-tag small">$12.00</span>
                    </div>

                    <p className="card-text small text-muted mb-3">
                      {t('dessert_desc')}
                    </p>

                    {/* زرار الإضافة مترجم */}
                    <button className="btn btn-dark w-75 m-auto d-block rounded-pill btn-sm py-2 fw-bold shadow-sm">
                      {t('btn_add')}
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* أزرار التنقل (تلقائياً سيعكس السهم اتجاهه في الـ RTL) */}
          <button
            onClick={() => swiperInstance?.slidePrev()}
            className="my-button my-button-r position-absolute top-50 translate-middle-y z-3 btn rounded-circle d-flex align-items-center justify-content-center shadow-sm hover-effect"
            style={{ width: '45px', height: '45px', transition: 'all 0.3s', backgroundColor: 'white' }}
          >
            <span>&lt;</span>
          </button>

          <button
            onClick={() => swiperInstance?.slideNext()}
            className="my-button my-button-l position-absolute top-50 translate-middle-y z-3 btn rounded-circle d-flex align-items-center justify-content-center shadow-sm hover-effect"
            style={{ width: '45px', height: '45px', transition: 'all 0.3s', backgroundColor: 'white' }}
          >
            <span>&gt;</span>
          </button>
        </div>
      </div>

      {/*section explore dessert*/}
      <div style={{ backgroundColor: "#E2D9C8" }} className='py-5'>
        <div className="container">
          <div className="row align-items-center justify-content-between g-4">

            {/* الصورة الأولى - بتظهر في اليسار في الـ LTR واليمين في الـ RTL */}
            <div className="col-4 col-md-3 text-center d-none d-md-block">
              <div className="img-wrapper">
                <img src={beans2} alt="beans" className='img-fluid object-fit-contain' style={{ maxHeight: '200px' }} />
              </div>
            </div>

            {/* المحتوى النصي */}
            <div className="col-12 col-md-6 text-start d-flex flex-column align-items-center px-4">
              {/* العنوان مترجم */}
              <h3 className="fw-bold mb-4 text-dark w-100">
                {t('beans_section_title')}
              </h3>

              <div className="button w-100">
                {/* زرار الاستكشاف مترجم */}
                <button className="btn btn-dark rounded-pill px-3 fs-6 py-2 shadow-sm text-uppercase">
                  {t('btn_explore_now')}
                </button>
              </div>
            </div>

            {/* الصورة الثانية - بتظهر في اليمين في الـ LTR واليسار في الـ RTL */}
            <div className="col-4 col-md-3 text-center d-none d-md-block">
              <div className="img-wrapper">
                <img src={beans1} alt="beans" className='img-fluid object-fit-contain' style={{ maxHeight: '200px' }} />
              </div>
            </div>

          </div>
        </div>
      </div>
      {/*section Review dessert*/}

      <div className="py-5 bg-light overflow-hidden" style={{ backgroundColor: "#F1F0EE" }}>
        {/* العنوان مترجم مع دعم السطر الجديد <br /> */}
        <h3 className="text-center mb-5 text-uppercase w-md-25 w-100 m-auto">
          {t('reviews_title_part1')}<br /> {t('reviews_title_part2')}
        </h3>

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
              <div className="container-md">
                <div className="review-card card border-0 shadow-sm rounded-4 p-4 text-center" style={{ backgroundColor: "#E2D9C8" }}>
                  <div className="header d-flex flex-column flex-md-row align-items-center justify-align-content-lg-around gap-4 mb-4">
                    <div className="quote-icon mb-3">
                      <img src={customers} alt="customer" />
                    </div>
                    <div className="name text-start">
                      <h5 className='fs-5'>{rev.name}</h5>
                      {/* المسمى الوظيفي مترجم */}
                      <p style={{ fontSize: "13px" }}>{t('customer_job')}</p>
                    </div>
                    <div className="rating mb-3">
                      {[...Array(rev.rating)].map((_, i) => (
                        <span key={i} style={{ color: '#FFD700' }}>★</span>
                      ))}
                    </div>
                  </div>

                  {/* نص التقييم - يفضل أن يكون في مصفوفة reviews نفسها أو مترجم هنا */}
                  <p className="review-text mb-4 italic">"{t('rev_1_text')}"</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/*section subscribe dessert*/}
      <div className='section py-5 px-1 overflow-hidden'>
        <div className="row align-items-center text-center">

          {/* صورة الحبوب على اليسار (تنعكس في الـ RTL لتصبح يميناً) */}
          <div className="img-r col-md-3 d-none d-md-block position-relative">
            <img src={beans1} alt="beans left" className="img-fluid" style={{ transform: 'scaleX(-1)' }} />
          </div>

          <div className="col-12 col-md-6">
            {/* العنوان مترجم */}
            <h2 className='fw-bold mb-3 text-dark display-6'>
              {t('subscribe_title')}
            </h2>

            {/* الوصف مترجم */}
            <p className='mb-4 text-muted px-lg-5'>
              {t('subscribe_desc')}
            </p>

            <div className="input-group mb-3 shadow-sm mx-auto rounded" style={{ maxWidth: '500px' }}>
              <input
                type="email"
                className="form-control border-0 p-3"

                placeholder={t('email_placeholder')}
              />
              {/* زرار الاشتراك مترجم */}
              <button className="btn btn-dark px-4 text-uppercase fw-bold" type="button">
                {t('btn_subscribe')}
              </button>
            </div>
          </div>

          {/* صورة الحبوب على اليمين */}
          <div className="img-l col-md-3 d-none d-md-block">
            <img src={beans1} alt="beans right" className="img-fluid" />
          </div>

        </div>
      </div>
      {/*section footer */}
      <footer className="footer-section">
        <div className="container py-5">
          <div className="row g-4">

            {/* اللوجو */}
            <div className="col-lg-2 col-md-12 mb-4">
              <Link to="/" className="footer-logo text-decoration-none">COFFEE</Link>
            </div>

            {/* قسم الخصوصية */}
            <div className="col-lg-2 col-md-4 col-6">
              <h6 className="footer-title">{t('footer_privacy_title')}</h6>
              <ul className="list-unstyled footer-links">
                <li><Link to="/terms">{t('footer_terms')}</Link></li>
                <li><Link to="/privacy">{t('footer_privacy')}</Link></li>
                <li><Link to="/cookies">{t('footer_cookies')}</Link></li>
              </ul>
            </div>

            {/* قسم الخدمات */}
            <div className="col-lg-2 col-md-4 col-6">
              <h6 className="footer-title">{t('footer_services_title')}</h6>
              <ul className="list-unstyled footer-links">
                <li><Link to="/shop">{t('footer_shop')}</Link></li>
                <li><Link to="/order">{t('footer_order')}</Link></li>
                <li><Link to="/menu">{t('footer_menu')}</Link></li>
              </ul>
            </div>

            {/* قسم من نحن */}
            <div className="col-lg-2 col-md-4 col-6">
              <h6 className="footer-title">{t('footer_about_title')}</h6>
              <ul className="list-unstyled footer-links">
                <li><Link to="/locations">{t('footer_locations')}</Link></li>
                <li><Link to="/about">{t('footer_about')}</Link></li>
                <li><Link to="/story">{t('footer_story')}</Link></li>
              </ul>
            </div>

            {/* قسم المعلومات */}
            <div className="col-lg-2 col-md-4 col-6">
              <h6 className="footer-title">{t('footer_info_title')}</h6>
              <ul className="list-unstyled footer-links">
                <li><Link to="/plans">{t('footer_plans')}</Link></li>
                <li><Link to="/sell">{t('footer_sell')}</Link></li>
                <li><Link to="/jobs">{t('footer_jobs')}</Link></li>
              </ul>
            </div>

            {/* التواصل الاجتماعي */}
            <div className="col-lg-2 col-md-4 col-12">
              <h6 className="footer-title">{t('footer_social_title')}</h6>
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
          <div className="footer-bottom mt-5 pt-4 border-top border-secondary text-center">
            <p className="small mb-0 opacity-50">
              &copy; {new Date().getFullYear()} {t('footer_rights')}
            </p>
          </div>
        </div>
      </footer>








    </>
  );
}