"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import Link from "next/link";

export default function Banner() {
  return (
    <div className="banner">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        loop={true}
        spaceBetween={30}
        slidesPerView={1}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="slide-item banner-1"></div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="slide-item banner-2"></div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="slide-item banner-3"></div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="slide-item banner-4"></div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="slide-item banner-5"></div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="slide-item banner-6"></div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="slide-item banner-7"></div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="slide-item banner-8"></div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="slide-item banner-9"></div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="slide-item banner-10"></div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
