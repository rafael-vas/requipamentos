import { Card } from "../Card";

import "./style.css";

import { Swiper, SwiperSlide } from "swiper/react";

import { ToastContainer } from "react-toastify";

export function CardList({ list, swiperOn, highlight = false, handleAddCount }) {
  return (
    <>
      {swiperOn ? (
        <Swiper
          slidesPerView={window.innerWidth < 500 ? 2 : 4}
          spaceBetween={window.innerWidth < 500 ? 10 : 20}
          pagination={{ clickable: true }}
          navigation
        >
          {list.map(({ id, name, code, description, category, imgSrc, maker }) => {
            return (
              <SwiperSlide key={id + code}>
                <Card
                  handleAddCount={handleAddCount}
                  highlight={highlight}
                  key={id + code}
                  id={id}
                  name={name}
                  code={code}
                  description={description}
                  category={category}
                  imgSrc={imgSrc}
                  maker={maker}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      ) : (
        <ul className="card-list">
          {list.map(({ id, name, code, description, category, imgSrc, maker }) => {
            return (
              <Card
                handleAddCount={handleAddCount}
                key={id + code}
                id={id}
                name={name}
                code={code}
                description={description}
                category={category}
                imgSrc={imgSrc}
                maker={maker}
              />
            );
          })}
        </ul>
      )}

      <ToastContainer
        position="bottom-right"
        draggable
        closeOnClick
        newestOnTop={false}
        progressClassName="toast-bar"
      />
    </>
  );
}
