import React from "react";
import { Link } from "react-router-dom";
import { FaEnvelope } from "react-icons/fa";

const Footer = () => {
  const categories = [
    { id: 1, name: "Men", link: "/men" },
    { id: 2, name: "Women", link: "/women" },
    { id: 3, name: "Kids", link: "/kids" },
    { id: 4, name: "Collections", link: "/collections" },
    { id: 5, name: "Brands", link: "/brands" },
  ];

  const legalLinks = [
    { id: 1, name: "Privacy Policy", link: "/privacy" },
    { id: 2, name: "Terms & Conditions", link: "/terms" },
    { id: 3, name: "Refund Policy", link: "/refund" },
    { id: 4, name: "Shipping Policy", link: "/shipping" },
  ];

  const helpLinks = [
    { id: 1, name: "Contact Us", link: "/contact" },
    { id: 2, name: "FAQs", link: "/faq" },
    { id: 3, name: "Track Order", link: "/orders" },
    { id: 4, name: "Customer Support", link: "/support" },
  ];

  return (
    <footer className="bg-[#1d160f] px-20 pt-20">

      <div className="grid grid-cols-2 gap-10">
        <div>
          <h2 className="Recoleta text-white text-3xl font-bold mb-5">
            LOGO HERE
          </h2>
          <p className="text-base text-gray-300 w-4/6 mb-20">
            Premium sneakers designed to bring comfort, confidence,
            and timeless style to every step.
          </p>
          <h4 className="Recoleta text-white text-2xl mb-6">
            Subscribe to Newsletter
          </h4>
          <div className="flex items-center max-w-lg p-1 bg-[#342617] border border-[#4a392b] rounded-2xl">
            <input type="email" placeholder="Enter your email" className="flex-1 bg-transparent px-3 text-base text-white placeholder:text-gray-400 outline-none" />
            <button to="" className="group relative inline-flex items-center justify-center px-8 py-4 overflow-hidden rounded-xl bg-(--secondary-color) text-lg font-semibold text-(--primary-color)">
                <span className="relative z-10 h-6 overflow-hidden">
                    <span className="flex flex-col transition-transform duration-500 ease-[cubic-bezier(.76,0,.24,1)] group-hover:-translate-y-1/2">
                        <span className="flex h-6 items-center justify-center">
                            Subscribe
                        </span>
                        <span className="flex h-6 items-center justify-center">
                            Subscribe
                        </span>
                    </span>
                </span>
            </button>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-8">
          {/* categories */}
          <div>
            <h3 className="Recoleta text-white text-2xl mb-6">
              Categories
            </h3>
            <ul className="space-y-3 text-base text-gray-300">
              {categories.map((item) => (
                <li key={item.id}>
                  <Link to={item.link} className="group relative transition-all duration-500 ease-out hover:text-white">
                    {item.name}
                  {/* Hover Line */}
                    <span className=" absolute left-0 -bottom-1 h-0.5 w-full origin-left scale-x-0 bg-white transition-transform duration-500 ease-out group-hover:scale-x-100 group-hover:origin-left group-focus-within:scale-x-100">
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* legalLinks */}
          <div>
            <h3 className="Recoleta text-white text-2xl mb-6">
              Legal
            </h3>
            <ul className="space-y-3 text-base text-gray-300">
              {legalLinks.map((item) => (
                <li key={item.id}>
                  <Link to={item.link} className="group relative transition-all duration-500 ease-out hover:text-white">
                    {item.name}
                    {/* Hover Line */}
                    <span className=" absolute left-0 -bottom-1 h-0.5 w-full origin-left scale-x-0 bg-white transition-transform duration-500 ease-out group-hover:scale-x-100 group-hover:origin-left group-focus-within:scale-x-100">
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* Help */}
          <div>
            <h3 className="Recoleta text-white text-2xl mb-6">
              Help
            </h3>
            <ul className="space-y-3 text-base text-gray-300">
              {helpLinks.map((item) => (
                <li key={item.id}>
                  <Link to={item.link} className="group relative transition-all duration-500 ease-out hover:text-white">
                    {item.name}
                    {/* Hover Line */}
                    <span className=" absolute left-0 -bottom-1 h-0.5 w-full origin-left scale-x-0 bg-white transition-transform duration-500 ease-out group-hover:scale-x-100 group-hover:origin-left group-focus-within:scale-x-100">
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      {/* Bottom Footer */}
      <div className="border-t border-white/10 mt-18 py-6 flex items-center justify-between">
        <p className="text-base text-gray-400">
          © 2026 Here. All rights reserved.
        </p>
        <div className="flex gap-4">
          <Link to="/" className="text-base text-gray-400 bg-[#342617] py-2 px-4 rounded-4xl">Facebook</Link>
          <Link to="/" className="text-base text-gray-400 bg-[#342617] py-2 px-4 rounded-4xl">Instagram</Link>
          <Link to="/" className="text-base text-gray-400 bg-[#342617] py-2 px-4 rounded-4xl">Twitter</Link>
          <Link to="/" className="text-base text-gray-400 bg-[#342617] py-2 px-4 rounded-4xl">LinkedIn</Link>
        </div>
      </div>

    </footer>
  );
};

export default Footer;