import React from 'react'
import { Link } from 'react-router-dom'


const MostRecommend = () => {
    const mostCommen = [
        {
            id: 1,
            title: "Sneakers",
            image: "https://public.readdy.ai/ai/img_res/3c44f444ab920ad7be43da191a509703.jpg",
            className: "row-span-2",
            width: "w-full",
            height: "h-250",
            btnName: "View all sneakers",
            link: "/",
        },
        {
            id: 2,
            title: "Sneakers",
            image: "https://images.pexels.com/photos/4029473/pexels-photo-4029473.jpeg",
            className: "",
            width: "w-full",
            height: "h-120",
            btnName: "View all sneakers",
            link: "/",
        },
        {
            id: 3,
            title: "Sneakers",
            image: "https://assets.lummi.ai/assets/QmWXNNJAvrwx986FXxkwpGCrmDFiyTaxkuHC9ejfqazKwJ?auto=format&w=1500",
            className: "",
            width: "w-full",
            height: "h-120",
            btnName: "View all sneakers",
            link: "/",
        },
        {
            id: 4,
            title: "Trending Now",
            image: "https://assets.myntassets.com/h_200%2Cw_200%2Cc_fill%2Cg_auto/h_1440%2Cq_75%2Cw_1080/v1/assets/images/2025/OCTOBER/4/E6EMK5Op_305d248c889446e5b4e31c9e0eeb467a.jpg",
            className: "col-span-2",
            width: "w-full",
            height: "h-180",
            btnName: "Explore Shop",
            link: "/",
        },
    ];
    return (
        <div className="relative overflow-hidden px-10 py-30">
            <div className="relative z-10 text-center mb-10">
                <span className='text-lg font-semibold bg-(--secondary-color) text-(--primary-color) py-2 px-4 rounded-lg mb-6 inline-block'>
                    Most Recommend
                </span>
                <h2 className='Recoleta text-7xl font-black text-(--primary-color) mb-6'>
                    Most Recommend Collections For You
                </h2>
                <p className='text-lg font-medium text-(--text-color)'>
                    Discover the latest additions to our collection, featuring the newest <br></br> designs and styles.
                </p>
            </div>
            <div className="grid grid-cols-2 gap-8">
                {mostCommen.map((item, index) => (
                    <div className={`${item.className}`}>
                        <div className={`${item.width} ${item.height} relative overflow-hidden rounded-4xl group`}>
                            <img src={item.image} alt={item.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110" />
                            <div className="relative z-10 flex h-full items-end px-10 py-10">
                                <div>
                                    <h4 className="text-white text-5xl leading-12 font-bold mb-6 Recoleta">
                                        {item.title}
                                    </h4>
                                    <Link to={item.link} className="group relative inline-flex items-center justify-center px-8 py-5 overflow-hidden rounded-2xl bg-white text-lg font-semibold text-(--primary-color)">
                                        <span className="relative z-10 h-6 overflow-hidden">
                                            <span className="flex flex-col transition-transform duration-500 ease-[cubic-bezier(.76,0,.24,1)] group-hover:-translate-y-1/2">
                                                <span className="flex h-6 items-center justify-center">
                                                    {item.btnName}
                                                </span>
                                                <span className="flex h-6 items-center justify-center">
                                                    {item.btnName}
                                                </span>
                                            </span>
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default MostRecommend
