import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay } from "swiper/modules";
import image1 from "../images/651c1773a89236329c8b6ce8_home-hero_placeholder-01.jpg";
import image2 from "../images/66aba88de7e07f5a9fca5ad4_Pursell Farms.jpg";
import image3 from "../images/66aba9131fbe1660753b5f1f_Farmlinks Golf Course.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";

import "../css/heroslider.css";
const heroslider = () => {
  return (
    <div className="w-full h-[100svh] relative overflow-hidden">
      <div className="absolute inset-[0%]">
        <Swiper
          loop={true}
          effect={"fade"}
          autoplay={{
            delay: 10000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, EffectFade]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="home-hero-image-wrap">
              {/* "min-h-[100%] bg-cover" */}
              <img src={image1} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="home-hero-image-wrap ">
              <img src={image2} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="home-hero-image-wrap ">
              <img src={image3} />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="z-50 text-center w-full pb-28 absolute inset-x-0 bottom-0">
        <div className="w-full mx-auto pt-0 px-[3.5vw] block relative">
        <h1 className="text-white text-[6rem] font-vitruv max-[991]:text-[5rem] max-md:text-[3rem]">Welcome to FarmWise</h1>
        <p className="text-white text-3xl max-[991]:text-2xl max-md:text-xl">
          <span className="block font-vitruv"> Your Partner in Agricultural Excellence!</span>
        </p>
        </div>
      </div>
    </div>
  );
};
export default heroslider;
