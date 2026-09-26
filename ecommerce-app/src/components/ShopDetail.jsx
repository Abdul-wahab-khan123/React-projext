
import React, { useRef, useState } from "react";
import ProductCard from "../components/ProductCard";
import FilterPanel from "../components/FilterPanel";
import { MenCollection } from "../Data/MenCollection";
import { WomenCollection } from "../Data/WomenCollection";
import { KidsCollection } from "../Data/KidsCollection";
import { FaXmark } from "react-icons/fa6";

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
            {isFilterOpen && (
                <div className="fixed inset-0 z-50 lg:hidden">
                    {/* Dark Background */}
                    <div className="absolute inset-0 bg-black/50" onClick={() => setIsFilterOpen(false)} />
                    {/* Filter Drawer */}
                    <div className="absolute right-0 top-0 h-full w-[85%] max-w-sm overflow-y-auto bg-white p-6 shadow-xl">
                        {/* Drawer Header */}
                        <div className="mb-8 flex items-center justify-end">
                            <button type="button" onClick={() => setIsFilterOpen(false)} className="flex h-10 w-10 items-center justify-center rounded-full border text-2xl bg-(--primary-color) text-(--secondary-color)">
                                <FaXmark />
                            </button>
                        </div>
                        {/* FILTERS WILL GO HERE */}
                        <aside className="h-fit block lg:hidden">
                            <FilterPanel
                                searchQuery={searchQuery}
                                setSearchQuery={setSearchQuery}
                                activeCategory={activeCategory}
                                setActiveCategory={setActiveCategory}
                                activePrice={activePrice}
                                setActivePrice={setActivePrice}
                                setCurrentPage={setCurrentPage}
                            />
                        </aside>
                    </div>
                </div>
            )}
            <div className="mx-auto grid grid-cols-1 gap-8 lg:grid-cols-[300px_minmax(0,1fr)]">
                {/* LEFT SIDEBAR */}
                <button type="button" onClick={() => setIsFilterOpen(!isFilterOpen)} aria-expanded={isFilterOpen} className="flex w-full items-center justify-between rounded-lg border border-gray-300 px-4 py-3 font-semibold lg:hidden">
                    <span>Filters</span>
                    <span>{isFilterOpen ? "−" : "+"}</span>
                </button>
                <aside className="h-fit rounded-[28px] border border-[#efe4d9] bg-[#f9f5f1] p-5 shadow-[0_20px_45px_rgba(33,29,25,0.07)] ring-1 ring-white/60 backdrop-blur-sm lg:sticky lg:top-6 lg:p-6 hidden lg:block">
                    <FilterPanel
                        searchQuery={searchQuery}
                        setSearchQuery={setSearchQuery}
                        activeCategory={activeCategory}
                        setActiveCategory={setActiveCategory}
                        activePrice={activePrice}
                        setActivePrice={setActivePrice}
                        setCurrentPage={setCurrentPage}
                    />
                </aside>
                {/* RIGHT PRODUCTS */}
                <div ref={productsTopRef} className="min-w-0">
                    <div className="mb-8">
                        <span className='text-lg font-semibold bg-(--secondary-color) text-(--primary-color) py-2 px-4 rounded-lg mb-6 inline-block'>
                            Our Collection
                        </span>
                        <div className="lg:flex items-center justify-between">
                            <h2 className="text-5xl font-bold">
                                Shop All Sneakers
                            </h2>
                            <div className="lg:flex items-center justify-between gap-4">
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