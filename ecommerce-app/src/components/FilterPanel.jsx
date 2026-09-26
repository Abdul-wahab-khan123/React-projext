import React from "react";

const FilterPanel = ({
    searchQuery,
    setSearchQuery,
    activeCategory,
    setActiveCategory,
    activePrice,
    setActivePrice,
    setCurrentPage,
}) => {

    return (

        <>
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
        </>

    );
};

export default FilterPanel;