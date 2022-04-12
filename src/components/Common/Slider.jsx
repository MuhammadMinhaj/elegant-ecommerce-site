import {
  A11y, Navigation, Pagination, Scrollbar
} from 'swiper';
import { Swiper } from 'swiper/react';

function Slider({ children }) {
  return (
    <Swiper
      spaceBetween={30}
      hashNavigation={{
        watchState: true
      }}
      pagination={{
        clickable: true
      }}
      navigation
      modules={[Navigation, Pagination, Scrollbar, A11y]}
    >
      {children}
    </Swiper>
  );
}
export default Slider;
