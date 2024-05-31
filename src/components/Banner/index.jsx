import "./style.css";

import { register } from "swiper/element/bundle";
register();

import {Swiper, SwiperSlide} from 'swiper/react'

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import bannerDesktop from "../../assets/banner-1-desktop.jpg";
import bannerMobile from "../../assets/banner-1-mobile.jpg";

export function Banner() {
  return (
    <>
      <Swiper slidesPerView={1} pagination={{ clickable: true }} navigation>
        <SwiperSlide>
        <picture>
          <source media="(max-width: 768px)" srcSet={bannerMobile} />
          <source media="(min-width: 769px)" srcSet={bannerDesktop} />
          <img
            className="slide-item"
            src={bannerDesktop}
            alt="Imagem"
          />
        </picture>

        </SwiperSlide>
        <SwiperSlide>
        <picture>
          <source media="(max-width: 768px)" srcSet={bannerMobile} />
          <source media="(min-width: 769px)" srcSet={bannerDesktop} />
          <img
            className="slide-item"
            src={bannerDesktop}
            alt="Imagem"
          />
        </picture>
        </SwiperSlide>
        <SwiperSlide>
        <picture>
          <source media="(max-width: 768px)" srcSet={bannerMobile} />
          <source media="(min-width: 769px)" srcSet={bannerDesktop} />
          <img
            className="slide-item"
            src={bannerDesktop}
            alt="Imagem"
          />
        </picture>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
