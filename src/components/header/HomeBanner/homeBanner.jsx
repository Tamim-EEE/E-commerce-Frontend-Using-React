import React from "react";
import Slider from "react-slick";

const HomeBanner = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  };

  return (
    <div className="homeBannerSection">
      <Slider {...settings}>
        <div className="item">
          <img
            src="	https://cdn.kaykraft.com/wp-content/uploads/2024/09/for-web-slide-3-1.jpg"
            alt=""
            className="w-100"
          />
        </div>
        <div className="item">
          <img
            src="	https://cdn.kaykraft.com/wp-content/uploads/2024/06/Teal-blue-scaled.jpg"
            alt=""
            className="w-100"
          />
        </div>
        <div className="item">
          <img
            src="	https://cdn.kaykraft.com/wp-content/uploads/2024/06/white.jpg"
            alt=""
            className="w-100"
          />
        </div>
        <div className="item">
          <img
            src="	https://cdn.kaykraft.com/wp-content/uploads/2024/10/DSC_5227.jpg-fb.jpg"
            alt=""
            className="w-100"
          />
        </div>
      </Slider>
    </div>
  );
};

export default HomeBanner;
