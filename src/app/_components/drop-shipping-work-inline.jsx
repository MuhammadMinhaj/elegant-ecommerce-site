import 'pure-react-carousel/dist/react-carousel.es.css';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

function DropShippingWork() {
  return (
    <section className="drop-shipping">
      <div className="section-upper">
        <h3> How does dropshipping work? </h3>
        <p>
          No more upfornt inventory costs. No more upfornt inventory costs, No more upfornt
          inventory costs
        </p>
      </div>
      <div className="dropshipping-column">
        <div className="row">
          <div className="col-sm-3">
            <div className="step-column">
              <div className="step-image">
                <img src="/images/step-one.png" alt="step-one" />
              </div>
              <div className="step-info">
                <h3>Step One</h3>
                <p>Your customer place an order from online store.</p>
              </div>
            </div>
          </div>

          <div className="col-sm-3">
            <div className="step-column">
              <div className="step-image">
                <img src="/images/step-two.png" alt="step-one" />
              </div>
              <div className="step-info">
                <h3>Step Two</h3>
                <p>Your customer place an order from online store.</p>
              </div>
            </div>
          </div>

          <div className="col-sm-3">
            <div className="step-column">
              <div className="step-image">
                <img src="/images/step-three.png" alt="step-one" />
              </div>
              <div className="step-info">
                <h3>Step Three</h3>
                <p>Your customer place an order from online store.</p>
              </div>
            </div>
          </div>

          <div className="col-sm-3">
            <div className="step-column">
              <div className="step-image">
                <img src="/images/step-four.png" alt="step-one" />
              </div>
              <div className="step-info">
                <h3>Step Four</h3>
                <p>Your customer place an order from online store.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="adv-column">
        <div className="row">
          <div className="col-sm-7">
            <h3>
              Big Sale 30% <br /> Trending Camera 2019
            </h3>
            <p>Price $99.97</p>

            <a className="bottom-link" href="/">
              Pre - Order Now
            </a>
          </div>
          <div className="col-sm-5">
            <div className="big-sale">
              <img src="/images/category-four.png" alt="big-sale" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DropShippingWork;
