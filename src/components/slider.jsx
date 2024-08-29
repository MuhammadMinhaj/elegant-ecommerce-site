'use client';
import { A11y, Navigation, Pagination, Scrollbar } from 'swiper';
import { Swiper } from 'swiper/react';

function Slider({ children, isNotArrow }) {
  return (
    <Swiper
      spaceBetween={30}
      autoplay
      hashNavigation={{
        watchState: true
      }}
      pagination={{
        clickable: true
      }}
      navigation={!isNotArrow}
      modules={[Navigation, Pagination, Scrollbar, A11y]}
    >
      {children}
    </Swiper>
  );
}
export default Slider;
