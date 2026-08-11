import React from 'react'

const ProductCard = ({ product }) => {
  return (
    <div>
        <div className="w-full h-130 relative overflow-hidden rounded-4xl">
            <img src={product.image} alt={product.title} className="absolute inset-0 w-full h-full object-cover" />
        </div>
        <div className="flex items-center justify-between mt-8 mb-8">
            <h3 className="text-5xl font-bold text-(--primary-color)">{product.price}</h3>
            <span className="text-base font-semibold bg-[#ded0c1] text-(--primary-color) px-5 py-2 rounded-full">
                {product.category}
            </span>
        </div>
        <h4 className="text-3xl font-semibold text-(--primary-color) mb-3">
            {product.title}
        </h4>
        <p className="text-lg font-medium text-(--light-color) mb-8">
            {product.description}
        </p>
        <div className="flex items-center justify-start gap-8">
            <button to={product.Addlink} className="group relative inline-flex items-center justify-center w-full px-10 py-7 overflow-hidden rounded-3xl bg-(--secondary-color) text-xl font-semibold text-(--primary-color)">
                {/* Text Animation */}
                <span className="relative z-10 h-6 overflow-hidden">
                    <span className="flex flex-col transition-transform duration-500 ease-[cubic-bezier(.76,0,.24,1)] group-hover:-translate-y-1/2">
                        <span className="flex h-6 items-center justify-center">
                            Add to Cart
                        </span>
                        <span className="flex h-6 items-center justify-center">
                            Add to Cart
                        </span>
                    </span>
                </span>
            </button>
            <button to={product.Buylink} className="group relative inline-flex items-center justify-center w-full px-10 py-7 overflow-hidden rounded-3xl bg-(--light-color) text-xl font-semibold text-(--secondary-color)">
                {/* Text Animation */}
                <span className="relative z-10 h-6 overflow-hidden">
                    <span className="flex flex-col transition-transform duration-500 ease-[cubic-bezier(.76,0,.24,1)] group-hover:-translate-y-1/2">
                        <span className="flex h-6 items-center justify-center">
                            Buy Now
                        </span>
                        <span className="flex h-6 items-center justify-center">
                            Buy Now
                        </span>
                    </span>
                </span>
            </button>
        </div>
    </div>
  )
}

export default ProductCard
