import { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./WeekSlider.css";

export const WeekSlider: FC = () => {
  return (
    <section className="week-slider">
      <h2 className="week-slider__title">Best works of the week</h2>

      <Swiper
        modules={[Navigation, Pagination]}
        navigation={{
          nextEl: ".week-slider__arrow--next",
          prevEl: ".week-slider__arrow--prev",
        }}
        pagination={{
          el: ".week-slider__progress",
          type: "progressbar",
        }}
        slidesPerView="auto"
        spaceBetween={40}
        className="week-slider__swiper"
      >
        {[
          { img: "/img/Grid 8.png", name: "Color" },
          { img: "/img/Grid 2.png", name: "After the night" },
          { img: "/img/grid 1.png", name: "Tommorow" },
          { img: "/img/Cat1.png", name: "Geometry" },
          { img: "/img/Grid 5.png", name: "Spring" },
          { img: "/img/Grid 3.png", name: "Vinyl mood" },
          { img: "/img/Grid 4.png", name: "Pulse lines" },
          { img: "/img/Grid 6.png", name: "Cat form" },
          { img: "/img/grid 1.png", name: "Noir face" },
          { img: "/img/Grid 7.png", name: "Heatwave" },
        ].map((item, index) => (
         <SwiperSlide key={index} className="week-slider__card">
<div className="week-slider__image-wrapper">
  <img src={item.img} alt={item.name} className="week-slider__image" />
</div>

  <p className="week-slider__year">1900–1322</p>
  <h3 className="week-slider__name">{item.name}</h3>
</SwiperSlide>
        ))}
      </Swiper>

      <button className="week-slider__arrow week-slider__arrow--prev">‹</button>
      <button className="week-slider__arrow week-slider__arrow--next">›</button>

      <div className="week-slider__progress swiper-pagination"></div>
    </section>
  );
};

export default WeekSlider;
