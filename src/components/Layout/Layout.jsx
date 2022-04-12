// import OldFooter from '../Footer/Footer';
// import Navbar from '../Header/Navbar/Navbar';
// import TopMenu from '../Header/TopMenu';
import Footer from '../Footer/NewFooter';
import NewHeader from '../NewHeader/Header';

function Layout({ children }) {
  return (
    <>

      <NewHeader />
      {/* <TopMenu />
      <Navbar /> */}
      {children}
      {/* <OldFooter /> */}
      <Footer />

    </>
  );
}
export default Layout;
