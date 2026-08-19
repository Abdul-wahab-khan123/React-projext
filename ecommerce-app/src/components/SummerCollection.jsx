import React from 'react'
import { Link } from 'react-router-dom'
import { MenCollection } from '../Data/MenCollection'
import ProductCard from '../components/ProductCard'

const SummerCollection = () => {
    return (
        <div className="relative overflow-hidden px-10 pt-27">
            <div className="relative z-10 text-center mb-10">
                <span className='text-lg font-semibold bg-(--secondary-color) text-(--primary-color) py-2 px-4 rounded-lg mb-6 inline-block'>
                    Summer
                </span>
                <h2 className='Recoleta text-7xl font-black text-(--primary-color) mb-6'>
                    Summer Collection
                </h2>
                <p className='text-lg font-medium text-(--text-color)'>
                    Discover the latest additions to our collection, featuring the newest <br></br> designs and styles.
                </p>
            </div>
            <div className="grid grid-cols-3 gap-10">
                {MenCollection.slice(6, 12).map((men) => (
                    <ProductCard
                        key={men.id}
                        product={men}
                    />
                ))}
            </div>
            <div className="text-center mt-20">
                <Link to="" className="group relative inline-flex items-center justify-center w-fit px-10 py-7 overflow-hidden rounded-3xl bg-(--secondary-color) text-xl font-semibold text-(--primary-color) border-2 border-(--light-color)">
                    <span className="relative z-10 h-6 overflow-hidden">
                        <span className="flex flex-col transition-transform duration-500 ease-[cubic-bezier(.76,0,.24,1)] group-hover:-translate-y-1/2">
                            <span className="flex h-6 items-center justify-center">
                                See More Collection
                            </span>
                            <span className="flex h-6 items-center justify-center">
                                See More Collection
                            </span>
                        </span>
                    </span>
                </Link>
            </div>
        </div>
    )
}

export default SummerCollection
