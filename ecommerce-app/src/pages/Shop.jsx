import React from "react";
import Layout from "../layout/Layout";
import InnerBanner from "../components/InnerBanner";
import ProductCard from "../components/ProductCard";
import { MenCollection } from "../Data/MenCollection";
import { WomenCollection } from "../Data/WomenCollection";

const Shop = () => {

    const allProducts = [...MenCollection ,...WomenCollection];

    return (
        
        <Layout>
            <InnerBanner
                title="Shop Sneakers"
                homepage="Home"
                innerpage="Shop"
            />

            <section className="px-6 py-16 md:px-10 lg:px-16">
                <div className="mx-auto">
                    <div className="mb-10">
                        <p className="text-sm font-semibold uppercase tracking-widest text-gray-500">
                            Our Collection
                        </p>
                        <h2 className="mt-2 text-3xl font-bold md:text-4xl">
                            Shop All Sneakers
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        {allProducts.map((product) => (
                            <ProductCard
                                key={product.id}
                                product={product}
                            />
                        ))}
                    </div>
                </div>
            </section>

        </Layout>
    );
};

export default Shop;
