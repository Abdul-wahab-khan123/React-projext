import { Link } from 'react-router-dom'

const AboutStory = () => {
    return (
        <div className="px-6 py-16 sm:px-10 sm:py-24 lg:px-15">
            <div className="mx-auto grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
                <div>
                    <span className='text-lg font-semibold bg-(--secondary-color) text-(--primary-color) py-2 px-4 rounded-lg mb-6 inline-block'>
                        Our Story
                    </span>
                    <h2 className='Recoleta text-7xl font-black text-(--primary-color) mb-6'>
                        Made for the way you move.
                    </h2>
                    <p className='text-lg font-medium text-(--text-color) mb-8'>
                        We believe the right pair of sneakers can change how you feel,
                        wherever the day takes you. Our collection brings together
                        thoughtful design, everyday comfort, and a confident sense of
                        style.
                    </p>
                    <Link to="/" className="group relative inline-flex items-center justify-center px-12 py-5 overflow-hidden rounded-2xl bg-(--primary-color) text-lg font-semibold text-(--secondary-color)">
                        {/* Text Animation */}
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
                <div className="overflow-hidden rounded-3xl">
                    <img src="https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=800" alt="A pair of stylish sneakers" className="h-150 w-full object-cover transition-transform duration-700 hover:scale-105" />
                </div>
            </div>
        </div>
    );
};

export default AboutStory
