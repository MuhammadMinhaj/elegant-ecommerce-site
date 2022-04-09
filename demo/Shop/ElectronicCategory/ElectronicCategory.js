import React from 'react';
// import "./styles.css";
// import required modules
import { FreeMode } from 'swiper';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import ElectronicCategoryData from '../../../Data/ElectronicCategoryData/ElectronicCategoryData';
import './ElectronicCategory.css';

function ElectronicCategory() {
  return (
    <div>
      <div className="container">
        <div className="ElectronicCategory MostPopularForMan_inner_area">
          <h4>ELECTRONIC CATEGORY</h4>
          <Swiper
            slidesPerView={5}
            spaceBetween={30}
            freeMode
            pagination={{
              clickable: true
            }}
            modules={[FreeMode]}
            className="mySwiper"
          >
            <div className="container">
              <div className="electronic_category">
                {ElectronicCategoryData.map((item) => (
                  <div key={item?.id}>
                    <SwiperSlide>
                      <div className="electronic_category_inner">
                        <img src={item?.img} alt="" />
                        <p>{item?.name}</p>
                        <p className="product_item">{item?.product}</p>
                      </div>
                    </SwiperSlide>
                  </div>
                ))}
              </div>
            </div>
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default ElectronicCategory;
