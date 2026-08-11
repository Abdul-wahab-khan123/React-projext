import React from 'react'
import { Link } from 'react-router-dom'
import { MenCollection } from '../Data/MenCollection'
import ProductCard from '../components/ProductCard'

const NewlyCollection = () => {

    return (
        <div className="relative overflow-hidden px-10 py-27">
            <div className="relative z-10 text-center mb-10">
                <span className='text-lg font-semibold bg-(--secondary-color) text-(--primary-color) py-2 px-4 rounded-lg mb-6 inline-block'>
                    New Arrivals
                </span>
                <h2 className='Recoleta text-7xl font-black text-(--primary-color) mb-6'>
                    Newly Dropped Collection
                </h2>
                <p className='text-lg font-medium text-(--text-color)'>
                    Discover the latest additions to our collection, featuring the newest <br></br> designs and styles.
                </p>
            </div>
            <div className="grid grid-cols-3 gap-10">
                {MenCollection.slice(0, 6).map((men) => (
                    <ProductCard
                    key={men.id}
                    product={men}
                    />
                ))}
            </div>
        </div>
    )
}

export default NewlyCollection
