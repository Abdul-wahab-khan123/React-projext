
import React, { useRef, useState } from "react";
import ProductCard from "../components/ProductCard";
import { MenCollection } from "../Data/MenCollection";
import { WomenCollection } from "../Data/WomenCollection";
import { KidsCollection } from "../Data/KidsCollection";

const ShopDetail = () => {

    const [activeCategory, setActiveCategory] = useState("All");
    const [activePrice, setActivePrice] = useState("All");
    const [searchQuery, setSearchQuery] = useState("");
    const [sortBy, setSortBy] = useState("default");
    const [currentPage, setCurrentPage] = useState(1);
    const [isFilterOpen, setIsFilterOpen] = useState(false);

    const allProducts = [
        ...MenCollection,
        ...WomenCollection,
        ...KidsCollection,
    ];

    const filteredProducts = allProducts.filter((product) => {

        const matchesCategory = activeCategory === "All" || product.category === `${activeCategory}'s sneakers`;

        const price = Number(product.price.replace("$", ""));

        let matchesPrice = true;

        if (activePrice === "under100") {
            matchesPrice = price < 100;
        } else if (activePrice === "100to200") {
            matchesPrice = price >= 100 && price <= 200;
        } else if (activePrice === "over200") {
            matchesPrice = price > 200;
        }

        // 3. Search filter
        const matchesSearch = product.title
            .toLowerCase()
            .includes(searchQuery.trim().toLowerCase());

        // Product ko teeno filters pass karne honge
        return matchesCategory && matchesPrice && matchesSearch;
    });

    const sortedProducts = [...filteredProducts].sort((a, b) => {
        if (sortBy === "priceLow") {
            return Number(a.price.replace("$", "")) -
                Number(b.price.replace("$", ""));
        }

        if (sortBy === "priceHigh") {
            return Number(b.price.replace("$", "")) -
                Number(a.price.replace("$", ""));
        }

        if (sortBy === "nameAZ") {
            return a.title.localeCompare(b.title);
        }

        return 0;
    });

    const productsPerPage = 12;
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;

    const currentProducts = sortedProducts.slice(
        indexOfFirstProduct,
        indexOfLastProduct
    );

    const totalPages = Math.ceil(
        sortedProducts.length / productsPerPage
    );

    const visiblePages = 5;
    const startPage = Math.floor((currentPage - 1) / visiblePages) * visiblePages + 1;
    const endPage = Math.min(startPage + visiblePages - 1, totalPages);

    const productsTopRef = useRef(null);
    const goToPage = (page) => {
        setCurrentPage(page);
        productsTopRef.current?.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    };

    return (
        <div className="px-12 py-18">
            <div className="mx-auto grid grid-cols-1 gap-8 lg:grid-cols-[300px_minmax(0,1fr)]">
                {/* LEFT SIDEBAR */}
                <button type="button" onClick={() => setIsFilterOpen(!isFilterOpen)} aria-expanded={isFilterOpen} aria-controls="shop-filters" className="flex w-full items-center justify-between rounded-lg border border-gray-300 px-4 py-3 font-semibold lg:hidden">
                    <span>Filters</span>
                    <span>{isFilterOpen ? "−" : "+"}</span>
                </button>
                <aside  id="shop-filters" className={`h-fit rounded-[28px] border border-[#efe4d9] bg-[#f9f5f1] p-5 shadow-[0_20px_45px_rgba(33,29,25,0.07)] ring-1 ring-white/60 backdrop-blur-sm lg:sticky lg:top-6 lg:p-6 ${ isFilterOpen ? "block" : "hidden"} lg:block`}>
                    <div className="mb-6 flex items-center justify-between gap-3">
                        <div>
                            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#8b7665]">Browse</p>
                            <h2 className="mt-2 text-2xl font-bold text-[#1b1b1b]">Filters</h2>
                        </div>
                        <button type="button" onClick={() => { setActiveCategory("All"); setActivePrice("All"); setSearchQuery(""); }}
                            className="rounded-full border border-[#e3d6ca] bg-white px-3 py-1.5 text-xs font-medium text-[#4d413a] transition hover:border-[#cbb7a4] hover:text-[#1b1b1b]">
                            Clear
                        </button>
                    </div>
                    <div className="mb-8">
                        <h3 className="mb-4 text-sm font-semibold uppercase tracking-widest text-[#7b675a]">Search Products</h3>
                        <input type="search" placeholder="Search sneakers..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none focus:border-black" />
                    </div>
                    <div className="mt-8 border-t border-[#e9dfd5] pt-6">
                        <h3 className="mb-4 text-sm font-semibold uppercase tracking-widest text-[#7b675a]">Categories</h3>
                        <div className="space-y-2.5">
                            {["All", "Men", "Women", "Kid"].map((category) => {
                                const isActive = activeCategory === category;
                                return (
                                    <button key={category} type="button" onClick={() => setActiveCategory(category)}
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
                        <h3 className="mb-4 text-sm font-semibold uppercase tracking-widest text-[#7b675a]">Price Range</h3>
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
                <div ref={productsTopRef} className="min-w-0">
                    <div className="mb-8">
                        <span className='text-lg font-semibold bg-(--secondary-color) text-(--primary-color) py-2 px-4 rounded-lg mb-6 inline-block'>
                            Our Collection
                        </span>
                        <div className="flex items-center justify-between">
                            <h2 className="text-5xl font-bold">
                                Shop All Sneakers
                            </h2>
                            <div className="flex items-center justify-between gap-4">
                                <p className="text-base text-gray-500">
                                    {sortedProducts.length === 0
                                        ? "Showing 0 products"
                                        : `Showing ${indexOfFirstProduct + 1}–${Math.min(
                                            indexOfLastProduct,
                                            sortedProducts.length
                                        )} of ${sortedProducts.length} products`}
                                </p>
                                <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} className="rounded-2xl border border-[#2d2017] bg-[#2d2017] text-white shadow-[0_10px_20px_rgba(45,32,23,0.18) px-4 py-3 text-sm font-medium outline-none focus:border-black">
                                    <option value="default">Sort By: Default</option>
                                    <option value="priceLow">Price: Low to High</option>
                                    <option value="priceHigh">Price: High to Low</option>
                                    <option value="nameAZ">Name: A–Z</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    {currentProducts.length === 0 ? (
                        <div className="py-20 text-center">
                            <h2 className="mb-3 text-2xl font-bold">
                                No Products Found
                            </h2>
                            <p className="mb-6 text-gray-500">
                                Try changing your search or filters.
                            </p>
                            <button type="button" onClick={() => { setSearchQuery(""); setActiveCategory("All"); setActivePrice("All"); setCurrentPage(1); }} className="group relative inline-flex items-center justify-center px-12 py-5 overflow-hidden rounded-2xl bg-(--primary-color) text-lg font-semibold text-(--secondary-color)">
                                <span className="relative z-10 h-6 overflow-hidden">
                                    <span className="flex flex-col transition-transform duration-500 ease-[cubic-bezier(.76,0,.24,1)] group-hover:-translate-y-1/2">
                                        <span className="flex h-6 items-center justify-center">
                                            Clear Filters
                                        </span>
                                        <span className="flex h-6 items-center justify-center">
                                            Clear Filters
                                        </span>
                                    </span>
                                </span>
                            </button>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
                            {currentProducts.map((product) => (
                                <ProductCard key={product.id} product={product} />
                            ))}
                        </div>
                    )}
                </div>
            </div>

            {totalPages > 1 && (
                <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
                    <button type="button" disabled={currentPage === 1} onClick={() => goToPage(currentPage - 1)} className="rounded-lg border px-4 py-2 disabled:cursor-not-allowed disabled:opacity-40">
                        Previous
                    </button>
                    {startPage > 1 && (
                        <>
                            <button type="button" onClick={() => goToPage(1)} className="rounded-lg border px-4 py-2 hover:bg-gray-100">
                                1
                            </button>
                            <span className="px-1">...</span>
                        </>
                    )}
                    {Array.from(
                        { length: endPage - startPage + 1 }, (_, index) => startPage + index).map((page) => (
                            <button key={page} type="button" onClick={() => goToPage(page)} className={`rounded-lg border px-4 py-2 ${currentPage === page
                                ? "bg-black text-white"
                                : "bg-white text-black hover:bg-gray-100"
                                }`}
                            >
                                {page}
                            </button>
                        ))}
                    {endPage < totalPages && (
                        <>
                            <span className="px-1">...</span>
                            <button
                                type="button"
                                onClick={() => goToPage(totalPages)}
                                className="rounded-lg border px-4 py-2 hover:bg-gray-100"
                            >
                                {totalPages}
                            </button>
                        </>
                    )}
                    <button type="button" disabled={currentPage === totalPages} onClick={() => goToPage(currentPage + 1)}
                        className="rounded-lg border px-4 py-2 disabled:cursor-not-allowed disabled:opacity-40">
                        Next
                    </button>
                </div>
            )};
        </div>
    )
};

export default ShopDetail;