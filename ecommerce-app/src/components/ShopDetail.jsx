import React, { useState } from "react";
import ProductCard from "../components/ProductCard";
import { MenCollection } from "../Data/MenCollection";
import { WomenCollection } from "../Data/WomenCollection";
import { KidsCollection } from "../Data/KidsCollection";

const ShopDetail = () => {

    const [activeCategory, setActiveCategory] = useState("All");
    const [activePrice, setActivePrice] = useState("All");

    const categoryMap = {
        All: "All",
        Men: "Men's sneakers",
        Women: "Women's sneakers",
        Kid: "Kid's sneakers",
    };

    const allProducts = [
        ...MenCollection,
        ...WomenCollection,
        ...KidsCollection,
    ];

    const filteredProducts = allProducts.filter((product) => {
        const matchesCategory = activeCategory === "All" || product.category === categoryMap[activeCategory];

        const price = Number(product.price.replace("$", ""));

        let matchesPrice = true;

        if (activePrice === "under100") {
            matchesPrice = price < 100;
        } else if (activePrice === "100to200") {
            matchesPrice = price >= 100 && price <= 200;
        } else if (activePrice === "over200") {
            matchesPrice = price > 200;
        }

        return matchesCategory && matchesPrice;
    });

    return (
        <div className="px-4 py-12 md:px-8 lg:px-16">
            <div className="mx-auto grid grid-cols-1 gap-8 lg:grid-cols-[240px_minmax(0,1fr)]">
                {/* LEFT SIDEBAR */}
                <aside className="h-fit rounded-[28px] border border-[#efe4d9] bg-[#f9f5f1] p-5 shadow-[0_20px_45px_rgba(33,29,25,0.07)] ring-1 ring-white/60 backdrop-blur-sm lg:sticky lg:top-6 lg:p-6">
                    <div className="mb-6 flex items-center justify-between gap-3">
                        <div>
                            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#8b7665]">Browse</p>
                            <h2 className="mt-2 text-2xl font-bold text-[#1b1b1b]">Filters</h2>
                        </div>
                        <button
                            type="button"
                            onClick={() => {
                                setActiveCategory("All");
                                setActivePrice("All");
                            }}
                            className="rounded-full border border-[#e3d6ca] bg-white px-3 py-1.5 text-xs font-medium text-[#4d413a] transition hover:border-[#cbb7a4] hover:text-[#1b1b1b]"
                        >
                            Clear
                        </button>
                    </div>
                    <div>
                        <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.16em] text-[#7b675a]">Categories</h3>
                        <div className="space-y-2.5">
                            {["All", "Men", "Women", "Kid"].map((category) => {
                                const isActive = activeCategory === category;

                                return (
                                    <button
                                        key={category}
                                        type="button"
                                        onClick={() => setActiveCategory(category)}
                                        className={`flex w-full items-center justify-between rounded-2xl border px-3 py-2.5 text-left text-sm font-medium transition ${isActive
                                                ? "border-[#2d2017] bg-[#2d2017] text-white shadow-[0_10px_20px_rgba(45,32,23,0.18)]"
                                                : "border-[#efe4d9] bg-white text-[#3a312b] hover:border-[#d9c7b5] hover:bg-[#fbf7f4]"
                                            }`}
                                    >
                                        <span>{category}</span>
                                        <span className={`h-2.5 w-2.5 rounded-full border ${isActive ? "border-white bg-white" : "border-[#c7b3a2] bg-transparent"
                                            }`} />
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                    <div className="mt-8 border-t border-[#e9dfd5] pt-6">
                        <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.16em] text-[#7b675a]">Price Range</h3>
                        <div className="space-y-2.5">
                            {[
                                { label: "All Prices", value: "All" },
                                { label: "Under $100", value: "under100" },
                                { label: "$100 – $200", value: "100to200" },
                                { label: "Over $200", value: "over200" },
                            ].map((price) => {
                                const isActive = activePrice === price.value;

                                return (
                                    <button
                                        key={price.value}
                                        type="button"
                                        onClick={() => setActivePrice(price.value)}
                                        className={`flex w-full items-center justify-between rounded-2xl border px-3 py-2.5 text-left text-sm font-medium transition ${isActive
                                                ? "border-[#2d2017] bg-[#2d2017] text-white shadow-[0_10px_20px_rgba(45,32,23,0.18)]"
                                                : "border-[#efe4d9] bg-white text-[#3a312b] hover:border-[#d9c7b5] hover:bg-[#fbf7f4]"
                                            }`}
                                    >
                                        <span>{price.label}</span>
                                        <span className={`h-2.5 w-2.5 rounded-full border ${isActive ? "border-white bg-white" : "border-[#c7b3a2] bg-transparent"
                                            }`} />
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                </aside>
                {/* RIGHT PRODUCTS */}
                <div className="min-w-0">
                    <div className="mb-8">
                        <p className="text-sm font-semibold uppercase tracking-widest text-gray-500">
                            Our Collection
                        </p>
                        <h2 className="mt-2 text-3xl font-bold md:text-4xl">
                            Shop All Sneakers
                        </h2>
                        <p className="mt-2 text-sm text-gray-500">
                            Showing {filteredProducts.length} products
                        </p>
                    </div>
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
                        {filteredProducts.map((product) => (
                            <ProductCard
                                key={product.id}
                                product={product}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
};

export default ShopDetail