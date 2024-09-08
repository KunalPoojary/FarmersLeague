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
    <>
      <div className="relative top-[72px]">
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
            <div className="min-h-[100%] bg-cover">
              <img src={image1} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-cover">
              <img src={image2} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-cover">
              <img src={image3} />
            </div>
          </SwiperSlide>
        </Swiper>
        <div class="z-500 text-center w-[100%]">
          <div class="container">
            <h1 class="text-white">Unwind at Pursell Farms</h1>
            <p class="home-hero-pagination">
              <span class="do-not-shrink">Surrounded by beautiful</span>{" "}
              <span
                data-js="home-hero-pagination"
                class="home-hero-pagination-list swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal"
              >
                <span class="home-hero-pagination-item" tabindex="0">
                  scenery,
                  <div class="home-hero-pagination-underline">
                    <div class="home-hero-pagination-line"></div>
                  </div>
                </span>
                <span
                  class="home-hero-pagination-item swiper-pagination-bullet-active"
                  tabindex="0"
                  aria-current="true"
                >
                  experiences,
                  <div class="home-hero-pagination-underline">
                    <div class="home-hero-pagination-line"></div>
                  </div>
                </span>
                and
                <span class="home-hero-pagination-item" tabindex="0">
                  spaces.
                  <div class="home-hero-pagination-underline">
                    <div class="home-hero-pagination-line"></div>
                  </div>
                </span>
              </span>
            </p>
            <div class="home-hero-pagination-line"></div>
          </div>
        </div>
      </div>
    </>
  );
};
export default heroslider;
