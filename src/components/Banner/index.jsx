import "./style.css";

import {Swiper, SwiperSlide} from 'swiper/react'

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
