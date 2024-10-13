import { Link } from "react-router-dom"

function HeroSection() {
  return (
    <>
    <div className='flex flex-row items-center justify-center bg-customGreen py-16 px-24'>
      <div className="flex flex-col md:flex-1 gap-8 items-center lg:items-start text-wrap">
        <h1 className=' text-white text-center lg:text-start text-7xl'>
          Order <span style={{color: 'rgba(251, 221, 187, 1)'}}>food</span> anytime, anywhere
        </h1>
        <h2 className='text-center lg:text-start'>
          Browse from our list of specials to place your order and have food delivered to you in no time. Affordable, tasty and fast.
        </h2>
        <img src="./assets/Badges2.png" alt="" />
        <Link to="/dashboard">
        <button className="btn btn-wide text-black text-xl mx-3" style={{backgroundColor: 'rgba(226, 184, 135, 1)'}}>Order Now</button>
        </Link>
      </div>
      <div className="hidden lg:flex lg:flex-row lg:justify-end lg:flex-1">
        <img src="./assets/1.png" alt="" className="w-1/2 h-auto"/>
      </div>
    </div>
    </>
  )
}

export default HeroSection