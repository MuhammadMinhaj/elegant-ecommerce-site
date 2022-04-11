import TopCategoriesData from '../../Data/TopCategoriesData/TopCategoriesData';

function TopCategory() {
  return (
    <div className="top-categories">
      <div className="container">
        <h3 className="category-title">Top Categories</h3>
        <div className="row py-3">
          {TopCategoriesData.map((item) => (
            <div key={item?.id} className="col-lg-2 col-md-3  col-sm-6">
              <div className="category_image text-center">
                <img src={item.img} alt="" />
                <div className="category-text">
                  <h3>{item?.name}</h3>
                  <p>{item?.product}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TopCategory;
