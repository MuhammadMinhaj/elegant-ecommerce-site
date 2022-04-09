import Footer from '../Footer/Footer';
import TopMenu from '../Header/TopMenu';

function Layout({ children }) {
  return (
    <>
      <TopMenu />
      {children}
      <Footer />
    </>
  );
}
export default Layout;
