import MostRecentPItem from './MostRecentPItem';

function MostRecentProduct() {
  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="inner_most_popular">
              <h5>Most Popular</h5>
              <MostRecentPItem imgSrc="https://demo.xpeedstudio.com/marketov2/shoe/wp-content/uploads/sites/15/2018/10/6-min.jpg" title="ASUS Laptop Inspire 2016 2QF-621XPL" priceRange="$110.00 - $ 240.00" />

              <MostRecentPItem imgSrc="https://demo.xpeedstudio.com/marketov2/shoe/wp-content/uploads/sites/15/2018/10/2-min-1-100x100.jpg" title="Notebook BIgscreen Z51-70 40K6009" priceRange="$110.00 - $ 240.00" />

              <MostRecentPItem imgSrc="https://demo.xpeedstudio.com/marketov2/shoe/wp-content/uploads/sites/15/2018/10/1-min-100x100.jpg" title="Notebook BIgscreen Z51-70 40K6004" priceRange="$110.00 - $ 240.00" />
            </div>
          </div>

          <div className="col-lg-4">
            <div className="inner_most_popular">
              <h5>Recent Product</h5>
              <MostRecentPItem imgSrc="https://demo.xpeedstudio.com/marketov2/shoe/wp-content/uploads/sites/15/2018/10/2-min-1-100x100.jpg" title="Notebook BIgscreen Z51-70 40K6009" priceRange="$110.00 - $ 240.00" />

              <MostRecentPItem imgSrc="https://demo.xpeedstudio.com/marketov2/shoe/wp-content/uploads/sites/15/2018/10/1-min-100x100.jpg" title="Notebook BIgscreen Z51-70 40K6004" priceRange="$110.00 - $ 240.00" />

              <MostRecentPItem imgSrc="https://demo.xpeedstudio.com/marketov2/shoe/wp-content/uploads/sites/15/2018/10/6-min.jpg" title="ASUS Laptop Inspire 2016 2QF-621XPL" priceRange="$110.00 - $ 240.00" />
            </div>
          </div>

          <div className="col-lg-4">
            <div className="inner_most_popular">
              <h5>Most Selling</h5>
              <MostRecentPItem imgSrc="https://demo.xpeedstudio.com/marketov2/shoe/wp-content/uploads/sites/15/2018/10/6-min.jpg" title="ASUS Laptop Inspire 2016 2QF-621XPL" priceRange="$110.00 - $ 240.00" />
              <MostRecentPItem imgSrc="https://demo.xpeedstudio.com/marketov2/shoe/wp-content/uploads/sites/15/2018/10/2-min-1-100x100.jpg" title="Notebook BIgscreen Z51-70 40K6009" priceRange="$110.00 - $ 240.00" />
              <MostRecentPItem imgSrc="https://demo.xpeedstudio.com/marketov2/shoe/wp-content/uploads/sites/15/2018/10/1-min-100x100.jpg" title="Notebook BIgscreen Z51-70 40K6004" priceRange="$110.00 - $ 240.00" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default MostRecentProduct;
