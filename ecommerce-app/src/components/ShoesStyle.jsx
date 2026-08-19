import React from 'react'
import { Link } from 'react-router-dom'

const ShoesStyle = () => {

  const shoesStyle = [
    {
      id: 1,
      title: "Sneakers That Move With You, Comfortable, Durable, And Always In Style.",
      image:
        "https://images.openai.com/static-rsc-4/K2F-jzNFq1mN4YxujEjICQkdbiHrmtIU9eOqB7spyTmQhPpTl87tJS1-bFS4Y24aaKqGYhGT8AYcyD6YHPuo3X4iu3XXIZxme7yWFokkD89UJdtsW-lltn0k00tKABEmq0pBN8jZmnJGY3h_5HKMiEjXyDzqp9Dwtm2DpyoFvmctvFLGmiQ6evyelebo1XGD?purpose=fullsize",
      link: "/",
    },
    {
      id: 2,
      title: "Fresh Drops, Iconic Silhouettes, Sneakers That Speak Before You Do.",
      image:
        "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=800",
      link: "/",
    },
    {
      id: 3,
      title: "Style Meets Performance In Every Step You Take.",
      image:
        "https://images.unsplash.com/photo-1556906781-9a412961c28c?w=800",
      link: "/",
    },
  ];

  return (
    <div className="relative overflow-hidden px-10 pt-27">
      <div className="grid grid-cols-3 gap-8">
        {shoesStyle.map((item, index)=>(
          <div className="w-full h-190 relative overflow-hidden rounded-4xl group">
            {/* Image */}
            <img src={item.image} alt={item.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"/>
            {/* Black Overlay */}
            <div className="absolute inset-0 bg-black/40"></div>
            {/* Content */}
            <div className="relative z-10 flex h-full items-end px-6 py-6">
              <div>
                <h4 className="text-white text-4xl leading-12 font-bold mb-8">
                  {item.title}
                </h4>
                <Link to={item.link} className="group relative inline-flex items-center justify-center px-8 py-5 overflow-hidden rounded-2xl bg-amber-50 text-lg font-semibold text-(--primary-color)">
                  {/* Text Animation */}
                  <span className="relative z-10 h-6 overflow-hidden">
                    <span className="flex flex-col transition-transform duration-500 ease-[cubic-bezier(.76,0,.24,1)] group-hover:-translate-y-1/2">
                      <span className="flex h-6 items-center justify-center">
                        Find Your Fit
                      </span>
                      <span className="flex h-6 items-center justify-center">
                        Find Your Fit
                      </span>
                    </span>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ShoesStyle
