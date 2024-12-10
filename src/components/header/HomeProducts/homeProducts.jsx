import { Button } from "@mui/material";
import banner1 from "../../../assets/images/banner1.jpg";
import { IoIosArrowRoundForward } from "react-icons/io";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";
import ProductCart from "./productCart";

const HomeProducts = () => {
  return (
    <div className="homeProducts">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <div className="cursor">
              <img className="banner" src={banner1} alt="" />
            </div>
          </div>

          <div className="col-md-9">
            <div className="d-flex align-items-center">
              <div className="info">
                <h3 className="mb-0">BEST SELLER</h3>
                <p className="para">
                  Do not miss the current offers until the end of October.
                </p>
              </div>

              <Button className="view-button ms-auto">
                view all &nbsp; <IoIosArrowRoundForward />
              </Button>
            </div>

            <div className="product-row mt-3">
              <Swiper
                slidesPerView={4}
                navigation={true}
                modules={[Navigation]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <ProductCart />
                </SwiperSlide>
                <SwiperSlide>
                  <ProductCart />
                </SwiperSlide>
                <SwiperSlide>
                  <ProductCart />
                </SwiperSlide>
                <SwiperSlide>
                  <ProductCart />
                </SwiperSlide>
                <SwiperSlide>
                  <ProductCart />
                </SwiperSlide>
                <SwiperSlide>
                  <ProductCart />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>

          
        </div>
      </div>

    </div>
  );
};

export default HomeProducts;
