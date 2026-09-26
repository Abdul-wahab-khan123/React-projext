import { NavLink } from "react-router-dom";
import { FaRegCircleUser } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { useCart } from "../context/CartContext";

const Navbar = () => {

  const { cartItems } = useCart();

  const cartCount = cartItems.reduce((total, item) => {
    return total + item.quantity;
  }, 0);

  const links = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/About' },
    { name: 'Shop', path: '/Shop' },
    { name: 'Faqs', path: '/Faq' },
    { name: 'Contact', path: '/Contact' }
  ];

  return (
    <>
      <div className="w-full absolute py-5 px-25 z-10">
        <nav className='flex items-center justify-between'>
          <div>
            <img src="/public/logo.png" alt="logo" className="w-30" />
          </div>
          <ul className='flex items-center gap-8'>
            {links.map((link) => (
              <li key={link.name}>
                <NavLink to={link.path} className="group relative text-lg text-white transition-all duration-500 ease-out hover:text-white">
                  <span className=" absolute right-0 -top-1 h-0.5 w-full origin-right scale-x-0 bg-white transition-transform duration-500 ease-out group-hover:scale-x-100 group-hover:origin-right group-focus-within:scale-x-100"></span>
                  {link.name}
                  <span className=" absolute left-0 -bottom-1 h-0.5 w-full origin-left scale-x-0 bg-white transition-transform duration-500 ease-out group-hover:scale-x-100 group-hover:origin-left group-focus-within:scale-x-100"></span>
                </NavLink>
                {/* <NavLink to={link.path} className="group relative inline-flex h-7 overflow-hidden">
                  <span className="relative flex flex-col transition-transform duration-700 ease-[cubic-bezier(.76,0,.24,1)] group-hover:-translate-y-7">
                    <span className="h-7 leading-7 text-lg text-white">
                      {link.name}
                    </span>
                    <span className="h-7 leading-7 text-lg text-white">
                      {link.name}
                    </span>
                  </span>
                </NavLink> */}
              </li>
            ))}
          </ul>
          <div className='flex items-center gap-4'>
            <FaRegCircleUser className='text-white text-2xl' />
            <FaRegHeart className='text-white text-2xl' />
            <div className="relative">
              <FiShoppingCart className='text-white text-2xl' />
              {cartCount > 0 && (
                <span className="absolute -right-2 -top-2 flex h-5 min-w-5 items-center justify-center rounded-full bg-red-700 px-1 text-xs font-bold text-white">
                  {cartCount}
                </span>
              )}
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar

