// import OldFooter from '../Footer/Footer';
// import Navbar from '../Header/Navbar/Navbar';
// import TopMenu from '../Header/TopMenu';
import CartDrawer from '../Cart/CartDrawer';
import Footer from '../Footer/NewFooter';
import NewHeader from '../NewHeader/Header';

function Layout({ children }) {
  return (
    <>

      <NewHeader />
      <CartDrawer />
      {/* <TopMenu />
      <Navbar /> */}
      {children}
      {/* <OldFooter /> */}
      <Footer />

    </>
  );
}
export default Layout;
