function MostRecentProductItem({ imgSrc, title, priceRange }) {
  return (
    <div className="popular_product">
      <img
        src={imgSrc}
        alt={title}
      />
      <div className="product_info">
        <p>{title}</p>
        <p className="product_price_home">{priceRange}</p>
      </div>
    </div>
  );
}
export default MostRecentProductItem;
