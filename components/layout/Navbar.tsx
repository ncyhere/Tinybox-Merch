import Cart from '@components/cart';

const Navbar = () => (
  <nav className="fixed z-10 flex items-center justify-between w-full grid-cols-3 px-2 py-4 bg-white shadow">
    <a href="#" className="text-xl font-bold justify-self-center">
      Tinybox Merch
    </a>
    <Cart />
  </nav>
);

export default Navbar;
