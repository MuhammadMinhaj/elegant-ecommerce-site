import MainFooter from '@/components/footer/main-footer';
import Header from '@/components/header';
import UserLoginModal from '@/components/login-modal';
import UserSignupModal from '@/components/signup-modal';
import WishlistDrawer from '@/components/wish-list-drawer';
import CartDrawer from '../cart/cart-drawer';

function MainLayout({ children }) {
  return (
    <>
      <Header />
      <CartDrawer />
      <UserLoginModal />
      <UserSignupModal />
      <WishlistDrawer />
      {children}
      <MainFooter />
    </>
  );
}
export default MainLayout;
