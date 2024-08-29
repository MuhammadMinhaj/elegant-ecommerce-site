import UserLoginModal from '@/components/login-modal';
import UserSignupModal from '@/components/signup-modal';
import WishlistDrawer from '@/components/wish-list-drawer';
import CartDrawer from '../cart/cart-drawer';
import Footer from '../footer/footer';
import Header from '../header';

function MainLayout({ children }) {
  return (
    <>
      <Header />
      <CartDrawer />
      <UserLoginModal />
      <UserSignupModal />
      <WishlistDrawer />
      {children}
      <Footer />
    </>
  );
}
export default MainLayout;
