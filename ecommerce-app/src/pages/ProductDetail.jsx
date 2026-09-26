import React, { useState } from 'react'
import Layout from '../Layout/Layout'
import InnerBanner from '../components/InnerBanner'
import { Link, useParams, useNavigate } from "react-router-dom";
import { MenCollection } from "../Data/MenCollection";
import { WomenCollection } from "../Data/WomenCollection";
import { KidsCollection } from "../Data/KidsCollection";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";
import { useCart } from "../context/CartContext";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedSize, setSelectedSize] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [sizeError, setSizeError] = useState("");
  const sizes = [7, 8, 9, 10, 11, "?..."];
  const { cartItems, setCartItems } = useCart();

  const allProducts = [
    ...MenCollection,
    ...WomenCollection,
    ...KidsCollection,
  ];

  const product = allProducts.find(
    (item) => item.id === Number(id)
  );

  if (!product) {
    return (
      <div className="h-dvh px-20 py-30 text-(--primary-color) flex items-center justify-center flex-col">
        <span className='text-lg font-semibold bg-(--secondary-color) text-(--primary-color) py-2 px-4 rounded-lg mb-8 inline-block'>
          Product unavailable
        </span>
        <h1 className="Recoleta text-6xl font-bold mb-9">
          WE COULDN'T FIND THAT PAIR.
        </h1>
        <Link to="/shop" className="group relative inline-flex items-center justify-center px-12 py-5 overflow-hidden rounded-2xl bg-(--primary-color) text-lg font-semibold text-(--secondary-color)">
          {/* Text Animation */}
          <span className="relative z-10 h-6 overflow-hidden">
            <span className="flex flex-col transition-transform duration-500 ease-[cubic-bezier(.76,0,.24,1)] group-hover:-translate-y-1/2">
              <span className="flex h-6 items-center justify-center">
                Browse the collection
              </span>
              <span className="flex h-6 items-center justify-center">
                Browse the collection
              </span>
            </span>
          </span>
        </Link>
      </div>
    );
  };

  const addProductToCart = () => {
    if (!selectedSize) {
      setSizeError("Please select a size first.");
      return;
    }
    setSizeError("");
    const existingProduct = cartItems.find(
      (item) =>
        item.id === product.id &&
        item.size === selectedSize
    );
    if (existingProduct) {
      const updatedCart = cartItems.map((item) =>
        item.id === product.id && item.size === selectedSize
          ? {
            ...item,
            quantity: item.quantity + quantity,
          }
          : item
      );
      setCartItems(updatedCart);
    } else {
      const cartProduct = {
        ...product,
        size: selectedSize,
        quantity: quantity,
      };
      setCartItems([...cartItems, cartProduct]);
    }
    navigate("/cart");
  };

  return (
    <Layout>
      <InnerBanner title="Product Detail" homepage="Home" innerpage="Product Detail" />
      <div className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <Link to="/shop" className="mb-8 inline-flex items-center gap-2 text-sm font-semibold uppercase text-(--light-color) transition-colors hover:text-(--primary-color) hover:underline">
            <FaArrowLeft /> Back to shop
          </Link>
          <div className="grid gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-center lg:gap-15">
            <div className="group relative lg:aspect-[5/6] overflow-hidden rounded-[2rem] bg-[#e8ded4] shadow-[0_24px_60px_rgba(52,38,23,0.12)] sm:aspect-[5/6]">
              <img src={product.image} alt={product.title} className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" />
              <span className="absolute left-5 top-5 text-base font-semibold bg-[#fff] text-(--primary-color) px-5 py-2 rounded-full ">
                Curated For You
              </span>
            </div>
            <div className="max-w-xl text-(--primary-color)">
              <p className="text-base font-semibold bg-[#ded0c1] text-(--primary-color) px-5 py-2 rounded-full mb-5 w-fit">
                {product.category}
              </p>
              <h1 className="Recoleta text-5xl font-bold sm:text-7xl mb-6">{product.title}</h1>
              <div className="mb-7 flex items-center gap-5">
                <p className="text-3xl font-bold">{product.price}</p>
                <span className="h-1 w-1 rounded-full bg-(--light-color)" aria-hidden="true" />
                <p className="text-sm font-semibold text-(--text-color)">Free shipping included</p>
              </div>
              <p className="mb-9 max-w-lg text-lg text-(--text-color)">{product.description}</p>
              <div className="mb-9">
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-(--primary-color)">
                    Select Size
                  </h3>
                  {selectedSize && (
                    <span className="text-sm text-gray-500">
                      Selected: {selectedSize}
                    </span>
                  )}
                </div>
                <div className="flex flex-wrap gap-2">
                  {sizes.map((size) => (
                    <button key={size} type="button" onClick={() => { setSelectedSize(size); setSizeError("") }} className={`h-12 w-12 rounded-lg border   font-semibold transition ${selectedSize === size ? "border-black bg-(--primary-color) text-white" : "border-gray-300 bg-white text-black hover:border-black"}`}>
                      {size}
                    </button>
                  ))}
                  {sizeError && (
                    <p className="mt-3 text-sm font-semibold text-red-500">
                      {sizeError}
                    </p>
                  )}
                </div>
              </div>
              <div className="mb-9">
                <h3 className="text-lg font-semibold text-(--primary-color) mb-3">
                  Quantity
                </h3>
                <div className="flex items-center gap-3">
                  <button type="button" onClick={() => { if (quantity > 1) setQuantity(quantity - 1) }} className="h-12 w-12 rounded-lg border text-xl font-semibold transition border-black bg-(--primary-color) text-white hover:border-black hover:bg-(--primary-color)">
                    -
                  </button>
                  <div className="text-lg font-semibold h-12 w-32 rounded-lg border transition border-gray-300 flex items-center justify-center">
                    {quantity}
                  </div>
                  <button type="button" onClick={() => setQuantity(quantity + 1)} className="h-12 w-12 rounded-lg border text-xl font-semibold transition border-black bg-(--primary-color) text-white hover:border-black hover:bg-(--primary-color)">
                    +
                  </button>
                </div>
              </div>
              <div className="mb-8 border-y border-[#d9cec2] py-5">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-base font-semibold">Available now</span>
                  <span className="text-base text-(--text-color)">Ready to ship in 1-2 days</span>
                </div>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                <button onClick={addProductToCart} className="group relative inline-flex items-center justify-center w-full px-10 py-7 overflow-hidden rounded-3xl bg-(--secondary-color) text-xl font-semibold text-(--primary-color)">
                  <span className="relative z-10 h-6 overflow-hidden">
                      <span className="flex flex-col transition-transform duration-500 ease-[cubic-bezier(.76,0,.24,1)] group-hover:-translate-y-1/2">
                          <span className="flex h-6 items-center justify-center">
                              Add to Cart <FaArrowRight className="ml-3 transition-transform" />
                          </span>
                          <span className="flex h-6 items-center justify-center">
                              Add to Cart <FaArrowRight className="ml-3 transition-transform" />
                          </span>
                      </span>
                  </span>
                </button>
                <Link to={product.Buylink || "/"} className="group relative inline-flex items-center justify-center w-full px-10 py-7 overflow-hidden rounded-3xl bg-(--primary-color) text-xl font-semibold text-(--secondary-color)">
                  <span className="relative z-10 h-6 overflow-hidden">
                      <span className="flex flex-col transition-transform duration-500 ease-[cubic-bezier(.76,0,.24,1)] group-hover:-translate-y-1/2">
                          <span className="flex h-6 items-center justify-center">
                              Buy Now <FaArrowRight className="ml-3 transition-transform" />
                          </span>
                          <span className="flex h-6 items-center justify-center">
                              Buy Now <FaArrowRight className="ml-3 transition-transform" />
                          </span>
                      </span>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default ProductDetail
