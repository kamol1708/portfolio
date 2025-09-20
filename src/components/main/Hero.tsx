import heroImg from "../../assets/backgroundSushi.svg";
import heroImg2 from "../../assets/cakehero.jpg";
import heroImg3 from "../../assets/pastaHero.jpg";
import orange from "../../assets/004-orange-juice.svg";
import brocolli from "../../assets/003-broccoli.svg";
import fish from "../../assets/005-fish.svg";
import bakery from "../../assets/006-dough.svg";
import meat from "../../assets/002-beef.svg";
import pasta from "../../assets/001-pasta.svg";
import sweet from "../../assets/007-cupcake.svg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Hero() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    // arrows: true,
  }
  return (
    <div className="hero-container">
      <Slider {...settings}> 
        <div className="hero">
          <div className="left-side">
            <h1 className="hero-text">
              <span className="hero-title-line">All You Need For</span>
              <span className="hero-title-accent">Perfect Breakfast</span>
            </h1>
            <p className="hero-para">
              Start your day with the finest ingredients for a nutritious and delicious breakfast. 
              We provide fresh, high-quality products to make your mornings special.
            </p>
            <div className="hero-buttons">
              <button className="cta-button primary">
                Buy Now
                <span className="button-hover-effect"></span>
              </button>
              <button className="cta-button secondary">
                See More
                <span className="button-icon">→</span>
              </button>
            </div>
          </div>
          
          <div className="right-side">
            <div className="hero-image-container">
              <img src={heroImg} alt="Delicious breakfast items" className="hero-main-image" />
              <div className="floating-element floating-element-1"></div>
              <div className="floating-element floating-element-2"></div>
              <div className="floating-element floating-element-3"></div>
            </div>
          </div>
        </div>
        <div className="hero">
          <div className="left-side">
            <h1 className="hero-text">
              <span className="hero-title-line">Delight in Every</span>
              <span className="hero-title-accent">Sweet Bite</span>
            </h1>
            <p className="hero-para">
              Indulge in our delectable sweets and treats, crafted to satisfy your cravings.
              From cakes to pastries, we have something for every sweet tooth.
            </p>
            <div className="hero-buttons">
              <button className="cta-button primary">
                Buy Now
                <span className="button-hover-effect"></span>
              </button>
              <button className="cta-button secondary">
                See More
                <span className="button-icon">→</span>
              </button>
            </div>
          </div>
          
          <div className="right-side">
            <div className="hero-image-container">
              <img src={heroImg2} alt="Delicious breakfast items" className="hero-main-image" />
              <div className="floating-element floating-element-1"></div>
              <div className="floating-element floating-element-2"></div>
              <div className="floating-element floating-element-3"></div>
            </div>
          </div>
        </div>
        <div className="hero">
          <div className="left-side">
            <h1 className="hero-text">
              <span className="hero-title-line">Taste the Authentic</span>
              <span className="hero-title-accent">Italian Pasta</span>
            </h1>
            <p className="hero-para">
              Experience the rich flavors of Italy with our authentic pasta selection.
              Perfect for any meal, our pasta is made from the finest ingredients.
            </p>
            <div className="hero-buttons">
              <button className="cta-button primary">
                Buy Now
                <span className="button-hover-effect"></span>
              </button>
              <button className="cta-button secondary">
                See More
                <span className="button-icon">→</span>
              </button>
            </div>
          </div>
          
          <div className="right-side">
            <div className="hero-image-container">
              <img src={heroImg3} alt="Delicious breakfast items" className="hero-main-image" />
              <div className="floating-element floating-element-1"></div>
              <div className="floating-element floating-element-2"></div>
              <div className="floating-element floating-element-3"></div>
            </div>
          </div>
        </div>
      </Slider>
      <div className="hero-bottom">
        <div className="categories-container">
          <div className="category-item">
            <div className="category-icon">
              <img src={orange} alt="Fruits" />
              <div className="icon-hover-effect"></div>
            </div>
            <p className="category-name">Fruits</p>
          </div>
          
          <div className="category-item">
            <div className="category-icon">
              <img src={brocolli} alt="Vegetables" />
              <div className="icon-hover-effect"></div>
            </div>
            <p className="category-name">Vegetables</p>
          </div>
          
          <div className="category-item">
            <div className="category-icon">
              <img src={fish} alt="Semi-Finished" />
              <div className="icon-hover-effect"></div>
            </div>
            <p className="category-name">Semi-Finished</p>
          </div>
          
          <div className="category-item">
            <div className="category-icon">
              <img src={bakery} alt="Bakery" />
              <div className="icon-hover-effect"></div>
            </div>
            <p className="category-name">Bakery</p>
          </div>
          
          <div className="category-item">
            <div className="category-icon">
              <img src={meat} alt="Meat" />
              <div className="icon-hover-effect"></div>
            </div>
            <p className="category-name">Meat</p>
          </div>
          
          <div className="category-item">
            <div className="category-icon">
              <img src={pasta} alt="Pasta" />
              <div className="icon-hover-effect"></div>
            </div>
            <p className="category-name">Pasta</p>
          </div>
          
          <div className="category-item">
            <div className="category-icon">
              <img src={sweet} alt="Sweets" />
              <div className="icon-hover-effect"></div>
            </div>
            <p className="category-name">Sweets</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;