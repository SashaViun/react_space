import Slider from "react-slick";
import './RocketCarousel.css'
import RocketCard from "../RocketCard/RocketCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function MultipleItems() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <RocketCard rocketIndex={0}/> 
        <RocketCard rocketIndex={1}/> 
        <RocketCard rocketIndex={0}/> 
      </Slider>
    </div>
  );
}

export default MultipleItems;