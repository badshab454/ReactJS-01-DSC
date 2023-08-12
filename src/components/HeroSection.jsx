const HeroSection = () => {
  return (
    <>
      <div className="container">
        <div className="hero-section">
          <div className="hero-content">
            <h1>YOUR FEET DESERVE THE BEST</h1>
            <p>
              YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
              SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH
              OUR SHOES.
            </p>
            <div className="hero-button">
              <button>
                <a href="#">Shop Now</a>
              </button>
              <button className="category">
                <a href="#">Category</a>
              </button>
            </div>
            <p>Also Available On</p>
            <div className="branding-img">
              <a href="#">
                <img src="./images/flipkart.png" alt="flipkart" />
              </a>
              <a href="#">
                <img src="./images/amazon.png" alt="amazon" />
              </a>
            </div>
          </div>
          <div className="hero-image">
            <img src="./images/shoe_image.png" alt="shoe" />
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
