import Footer from '../Footer/Footer';
import Navbar from '../Header/Navbar/Navbar';
import TopMenu from '../Header/TopMenu';
import NewHeader from '../NewHeader/Header';

function Layout({ children }) {
  return (
    <>

      <NewHeader />
      <TopMenu />
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
export default Layout;
