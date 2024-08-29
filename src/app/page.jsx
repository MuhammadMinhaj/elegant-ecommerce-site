import BecomeADistributor from './_components/become-a-distributor';
import BecomeASeller from './_components/become-a-seller';
import BusinessToBusiness from './_components/business-to-business';
import ClientTestimonials from './_components/client-testimonials';
import DropShippingWork from './_components/dropshipping-work';
import FeatureStrip from './_components/feature-strip';
import FeaturedProducts from './_components/featured-products';
import Partners from './_components/partners';
import RecentRatesSalesProduct from './_components/recent-rates-sales-product';
import Slider from './_components/slider';
import TopCategory from './_components/top-category';

export default function HomePage() {
  return (
    <main className="homepage-main">
      <Slider />
      <FeatureStrip />
      <TopCategory />
      <FeaturedProducts />
      <BusinessToBusiness />
      <DropShippingWork />
      <BecomeASeller />
      <BecomeADistributor />
      <ClientTestimonials />
      <Partners />
      <RecentRatesSalesProduct />
    </main>
  );
}
