import React from "react";

import { LuTruck } from "react-icons/lu";
import { LuHeadphones } from "react-icons/lu";
import { PiPackage } from "react-icons/pi";
import { LuRotateCcw } from "react-icons/lu";
import { BsGlobe2 } from "react-icons/bs";
import { GoShieldCheck } from "react-icons/go";

const ShippingInfo = () => {
  const features = [
    {
      icon: <LuTruck size={28} />,
      title: "Fast Dropshipping",
      text: "Quick order processing and reliable shipping directly to your customers.",
    },
    {
      icon: <LuHeadphones size={28} />,
      title: "24/7 Support",
      text: "Our support team is available around the clock whenever you need help.",
    },
    {
      icon: <PiPackage size={28} />,
      title: "Safe Packaging",
      text: "Every order is carefully packed to help products arrive safely and securely.",
    },
    {
      icon: <LuRotateCcw size={28} />,
      title: "Easy Returns",
      text: "Simple and smooth return support for eligible orders and customer concerns.",
    },
  ];

  return (
    <div className="bg-[#f8f7f4] py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className='text-lg font-semibold bg-(--secondary-color) text-(--primary-color) py-2 px-4 rounded-lg mb-6 inline-block'>
            Reliable Dropshipping Service
          </span>
          <h2 className="Recoleta text-6xl sm:text-4xl lg:text-6xl font-bold text-(--primary-color) leading-tight">
            Shipping Made Simple, <br />Fast & Reliable
          </h2>
          <p className="mt-5 text-gray-600 text-base sm:text-lg leading-7">
            From order processing to final delivery, we make dropshipping
            easier with dependable shipping, secure packaging and customer
            support whenever you need it.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((item, index) => (
            <div key={index} className="group bg-white border border-gray-200 rounded-2xl p-7 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
              <div className="w-14 h-14 rounded-2xl bg-(--primary-color) text-white flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <h3 className="Recoleta text-xl font-bold text-(--primary-color) mb-3">
                {item.title}
              </h3>
              <p className="text-gray-600 leading-7 text-sm sm:text-base">
                {item.text}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-10 bg-(--primary-color) text-white rounded-3xl px-6 py-8 md:px-10 md:py-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
              <BsGlobe2 size={25} />
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-bold mb-2">
                Worldwide Dropshipping Support
              </h3>
              <p className="text-gray-300 max-w-2xl leading-7">
                Sell with confidence using reliable fulfillment and delivery
                support designed for modern ecommerce businesses.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3 bg-white text-black px-5 py-3 rounded-xl font-semibold">
            <GoShieldCheck size={21} />
            Trusted Delivery
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShippingInfo;