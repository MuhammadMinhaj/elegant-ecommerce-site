import 'pure-react-carousel/dist/react-carousel.es.css';
import React from 'react';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
// import "./styles.css";
// import required modules
import { Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// Import Swiper styles
import { Swiper, SwiperSlide } from 'swiper/react';

const MainSlider = [
  {
    id: 1,
    name: 'TOP SMARTPHONES',
    title: 'Performance Wonderful',
    price: 899,
    details:
      'A ornare aliquam laoreet adipiscing vestibul integer malesuada ullamcorper suspeid. A ornare aliquam laoreet adipiscing vestibul.',
    img: 'https://t3.ftcdn.net/jpg/02/29/38/78/240_F_229387809_UT2jcqMaiguTNWz9HreOnUgeNfGU860T.jpg'
  },
  {
    id: 1,
    name: 'SMART WATCHES',
    title: 'Health CareMonitor.',
    price: 899,
    details:
      'A ornare aliquam laoreet adipiscing vestibul integer malesuada ullamcorper suspeid. A ornare aliquam laoreet adipiscing vestibul.',
    img: 'https://t3.ftcdn.net/jpg/01/48/00/62/240_F_148006279_Ta4xEeoysQptY3RE8KMtlUd2WR6AZuqs.jpg'
  },
  {
    id: 1,
    name: 'TOP SMARTPHONES',
    title: 'Performance Wonderful',
    price: 899,
    details:
      'A ornare aliquam laoreet adipiscing vestibul integer malesuada ullamcorper suspeid. A ornare aliquam laoreet adipiscing vestibul.',
    img: 'https://t3.ftcdn.net/jpg/02/29/38/78/240_F_229387809_UT2jcqMaiguTNWz9HreOnUgeNfGU860T.jpg'
  }
];
function Slider() {
  return (
    <div className="container_1">
      <div className="hero-banner">
        <Swiper
          spaceBetween={30}
          hashNavigation={{
            watchState: true
          }}
          pagination={{
            clickable: true
          }}
            // navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          {MainSlider.map((item) => (
            <div ky={item?.id} className="main_slider">
              <SwiperSlide data-hash="slide1">
                <div className="inner_main_slider">
                  <div className="main_slider_text">
                    <h5>{item?.name}</h5>
                    <h2>{item?.title}</h2>
                    <p>{item?.details}</p>
                    <button type="button">
                      $
                      {item?.price}
                      {' '}
                      | buy now
                    </button>
                  </div>
                  <div className="main_slider_img">
                    <img src={item?.img} alt="" />
                  </div>
                </div>
              </SwiperSlide>
            </div>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Slider;
