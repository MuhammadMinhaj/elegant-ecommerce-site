import Footer from '../Footer/Footer';
import Navbar from '../Header/Navbar/Navbar';
import TopMenu from '../Header/TopMenu';

function Layout({ children }) {
  return (
    <>
      <TopMenu />
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
export default Layout;
