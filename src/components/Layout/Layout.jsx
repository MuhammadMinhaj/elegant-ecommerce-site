// import OldFooter from '../Footer/Footer';
// import Navbar from '../Header/Navbar/Navbar';
// import TopMenu from '../Header/TopMenu';
import CartDrawer from '../Cart/CartDrawer';
import Footer from '../Footer/NewFooter';
import NewHeader from '../NewHeader/Header';
import UserLoginModal from '../User/Login/LoginModal';
import UserSignupModal from '../User/Signup/SignupModal';
import WishlistDrawer from '../User/WishList/WishListDrawer';

function Layout({ children }) {
  return (
    <>

      <NewHeader />
      <CartDrawer />
      <UserLoginModal />
      <UserSignupModal />
      <WishlistDrawer />
      {/* <TopMenu />
      <Navbar /> */}
      {children}
      {/* <OldFooter /> */}
      <Footer />

    </>
  );
}
export default Layout;
