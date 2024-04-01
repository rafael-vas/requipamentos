import "./style.css";

import { register } from "swiper/element/bundle";
register();

import {Swiper, SwiperSlide} from 'swiper/react'

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import banner from "../../assets/banner-orcamento.jpg";

export function Banner() {
  return (
    <>
      <Swiper slidesPerView={1} pagination={{ clickable: true }} navigation>
        <SwiperSlide>
          <img
            className="slide-item"
            src={banner}
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="slide-item"
            src={banner}
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="slide-item"
            src={banner}
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
