import { Carousel } from "react-bootstrap";
import img1 from "../../assets/coffee1.PNG";
import img2 from "../../assets/img2.JPG";
import img3 from "../../assets/img3.WEBP";
import icone1 from "../../assets/icon1.PNG";
import icone2 from "../../assets/icon2.PNG";
import icone3 from "../../assets/icon3.PNG";
import SpicialCoffee from "../SpicialCoffe/SpicialCoffee";
import SpicialDessert from "../SpicalDessert/SpicialDessert";
import Explor from "../Explor/Explor";
import ReviewCastomer from "../ReviewCastomer/ReviewCastomer";
import Subscribe from "../Subscribe/Subscribe";
import Footer from "../Footer/Footer";

function Slider() {
  const sliderImages = [img1, img2, img3];
  const features = [
    { id: 1, icon: icone1, title: "Hot Coffee" },
    { id: 2, icon: icone2, title: "Iced Coffee" },
    { id: 3, icon: icone3, title: "Bakery" },
    { id: 4, icon: icone3, title: "Desserts" },
  ];

  return (
    <div>

      <div className="position-relative w-100 vh-100 overflow-hidden">
        <Carousel controls={false} indicators={true} fade>
          {sliderImages.map((image, index) => (
            <Carousel.Item key={index} interval={2000}>
           
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

        {/* النص الثابت فوق السلايدر */}
        <div className="position-absolute top-50 start-50 translate-middle text-center text-white w-75" style={{ zIndex: 2 }}>
          <h1 className="display-2 fw-bold mb-4 shadow-sm">Welcome To Our Coffee Shop</h1>
          <p className="lead fs-4 mb-4 mx-auto" style={{ maxWidth: '700px' }}>
            Discover the perfect blend of flavor and ambiance at our coffee shop.
            Indulge in expertly crafted brews, cozy atmosphere.
          </p>
          <div className="d-flex justify-content-center gap-3 flex-wrap">
            <button className="btn btn-outline-light btn-lg px-5 py-3 rounded-pill hover-effect">Explore Our Menu</button>
            <button className="btn btn-light btn-lg px-5 py-3 rounded-pill">Book a Table</button>
          </div>
        </div>
      </div>


      <div className="container-fluid bg-warning-subtle py-4">
        <div className="row justify-content-center g-4">
          {features.map((item) => (
            <div key={item.id} className="col-6  col-md-2">
              <div className="content d-flex flex-column align-items-center text-center p-3 transition-hover">
                <div className="img-container mb-3" style={{ width: '60px' }}>
                  <img src={item.icon} alt={item.title} className="img-fluid w-100" />
                </div>
                <h5 className="fw-bold text-dark text-uppercase small">{item.title}</h5>
              </div>
            </div>
          ))}
        </div>
      </div>
      <SpicialCoffee/>
      <SpicialDessert/>
      <Explor/>
      <ReviewCastomer/>
      <Subscribe/>
      <Footer/>
    </div>
  );
}

export default Slider;