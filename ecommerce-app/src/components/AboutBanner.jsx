import { RiArrowRightSLine } from "react-icons/ri";
import { Link } from "react-router-dom";


const AboutBanner = () => {
  return (
    <>
      <div className="w-full relative overflow-hidden bg-[url(https://images.unsplash.com/photo-1519931127525-6b6a7619a003?q=80&w=1023&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-cover bg-repeat bg-center px-15 pt-60 pb-40">
          <h1 className='Recoleta text-8xl font-extrabold text-white mb-10'>
              About Sneakers
          </h1>
          <ul className='flex items-center gap-2 text-white'>
              <li><Link to="/" className='text-base'>Home</Link></li>
              <li className='text-2xl'><RiArrowRightSLine /></li>
              <li className='text-base'>About</li>
          </ul>
      </div>
    </>
  )
}

export default AboutBanner