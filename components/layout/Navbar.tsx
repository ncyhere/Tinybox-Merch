import Cart from '@components/cart';
import Promobar from '@components/layout/Promobar';

const Navbar = () => (
  <div className="fixed z-10 w-full">
    <Promobar />
    <nav className="flex items-center justify-between w-full grid-cols-3 px-2 py-4 bg-white shadow">
      <a href="#" className="text-xl font-bold justify-self-center">
        Tinybox Merch
      </a>
      <Cart />
    </nav>
  </div>
);

export default Navbar;
