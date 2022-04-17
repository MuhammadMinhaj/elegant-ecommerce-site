import CartDrawer from '../Cart/CartDrawer';
import Footer from '../Footer/NewFooter';
import Header from '../Header/Header';
import UserLoginModal from '../User/Login/LoginModal';
import UserSignupModal from '../User/Signup/SignupModal';
import WishlistDrawer from '../User/WishList/WishListDrawer';

function Layout({ children }) {
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
export default Layout;
