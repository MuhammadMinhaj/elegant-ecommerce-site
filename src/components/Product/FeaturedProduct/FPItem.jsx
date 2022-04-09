import {
  AddShoppingCart as ShoppingCart,
  FavoriteBorderOutlined as HeartIcon,
  Link as DetailLink,
  Star,
  StarHalf
} from '@mui/icons-material';

function FeaturedProductItem({
  title, imgSrc, discount, price
}) {
  return (
    <div className="product-outer">
      <a className="product-top" href="/">
        <div className="product-image">
          <img src={imgSrc} alt="product-tile" />
          <div className="inner-wrapper">
            <div className="discount-row">
              <span className="discount">
                {discount}
                {' '}
                OFF
              </span>
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
        <h4 className="product-title">{title}</h4>
        <div className="product-rating">
          <Star />
          <Star />
          <Star />
          <Star />
          <StarHalf />
        </div>
        <h3 className="product-price">
          {price}
        </h3>
      </div>
    </div>
  );
}

export default FeaturedProductItem;
