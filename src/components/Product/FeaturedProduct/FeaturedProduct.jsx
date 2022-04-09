import {
  AddShoppingCart as ShoppingCart,
  FavoriteBorderOutlined as HeartIcon,
  Link as DetailLink,
  Star,
  StarHalf
} from '@mui/icons-material';
import Slider from 'react-slick';
import FPItem from './FPItem';

function FeaturedProduct({ title }) {
  const settings = {
    dots: true,
    nav: true,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className="featured-list">
      <h2 className="featured-title">
        {' '}
        {title}
        {' '}
      </h2>
      <Slider {...settings}>
        <div className="product-outer">
          <a className="product-top" href="/">
            <div className="product-image">
              <img src="/images/product-one.jpg" alt="product-tile" />
              <div className="inner-wrapper">
                <div className="discount-row">
                  <span className="discount">40% OFF</span>
                </div>
                <div className="button-list">
                  <button type="button">
                    <HeartIcon />
                  </button>
                  <button type="button">
                    <ShoppingCart />
                  </button>
                  <button type="button">
                    <DetailLink />
                  </button>
                </div>
              </div>
            </div>
            <div className="product-quick-view">
              <p>Quickview</p>
            </div>
          </a>
          <div className="product-body">
            <h4 className="product-title">Black Grey Headset</h4>
            <div className="product-rating">
              <Star />
              <Star />
              <Star />
              <Star />
              <StarHalf />
            </div>
            <h3 className="product-price">$39.00</h3>
          </div>
        </div>

        <FPItem title="Baseballl Bat" imgSrc="/images/category-two.jpg" discount="30%" price="$39.00" />
        <FPItem title="Black Grey Headset" imgSrc="/images/category-three.jpg" discount="30%" price="$39.00" />
        <FPItem title="Baseballl Bat" imgSrc="/images/category-four.jpg" discount="30%" price="$39.00" />
        <FPItem title="Black Grey Headset" imgSrc="/images/category-five.jpg" discount="30%" price="$39.00" />
        <FPItem title="Baseballl Bat" imgSrc="/images/category-six.jpg" discount="30%" price="$39.00" />
      </Slider>
    </div>
  );
}

export default FeaturedProduct;
