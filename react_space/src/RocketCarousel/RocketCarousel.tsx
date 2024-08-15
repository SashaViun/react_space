import Slider from "react-slick";
import RocketCard from "../RocketCard/RocketCard";
import './RocketCarousel.css'

function RocketCarousel() {
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
      };
  return (
    <div className="container">
      <Slider {...settings}>
        <RocketCard rocketIndex={0} />
        <RocketCard rocketIndex={1} />
        <RocketCard rocketIndex={2}/>
      </Slider>
    </div>
  );
}

export default RocketCarousel;
