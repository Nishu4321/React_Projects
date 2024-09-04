import style from "./Hero.module.css";
const Hero = () => {
  return (
    <main className={`${style.hero}`}>
      <div className={`${style.hero_content}`}>
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>
          YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.
        </p>

        <div className={`${style.hero_btn}`}>
          <button className={`${style.secondary_btn}`}>Shop Now </button>
          <button className={`${style.secondary_btn}`}>Category</button>
        </div>

        <div className="shopping">
          <p>Also Available On</p>

          <div className={`${style.brand_icons}`}>
            <img src="/Project/images/amazon.png" />
            <img src="/Project/images/flipkart.png" alt="flipkart-logo" />
          </div>
        </div>
      </div>
      <div className={`${style.hero_image}`}>
        <img src="/Project/images/hero-image.png" alt="hero-image" />
      </div>
    </main>
  );
};

export default Hero;
