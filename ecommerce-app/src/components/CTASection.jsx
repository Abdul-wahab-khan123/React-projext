import React from "react";
import { Link } from "react-router-dom";

const CTASection = () => {
    return (
        <section className="px-10 py-20">
            <div className="relative overflow-hidden rounded-4xl">
                <img src="/public/cta.png" alt="Build Your Style" className="absolute w-full h-full object-cover" />
                <div className="relative z-10 text-center p-56">
                    <h2 className="Recoleta text-7xl leading-20 text-white font-bold max-w-6xl m-auto mb-14">
                        Build Your Style With Confdent Steps By Wearing Our Sneakers.
                    </h2>
                    <div className="text-center">
                        <Link to="" className="group relative inline-flex items-center justify-center w-fit px-15 py-6 overflow-hidden rounded-3xl bg-(--secondary-color) text-xl font-semibold text-(--primary-color)">
                            <span className="relative z-10 h-6 overflow-hidden">
                                <span className="flex flex-col transition-transform duration-500 ease-[cubic-bezier(.76,0,.24,1)] group-hover:-translate-y-1/2">
                                    <span className="flex h-6 items-center justify-center">
                                        Shop Now
                                    </span>
                                    <span className="flex h-6 items-center justify-center">
                                        Shop Now
                                    </span>
                                </span>
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CTASection;