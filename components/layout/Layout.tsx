import Footer from './Footer';
import Navbar from './Navbar';

const Layout = ({ children }) => {
  return (
    <div className="relative grid w-full min-h-screen grid-cols-1">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
