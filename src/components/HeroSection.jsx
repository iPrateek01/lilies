

function HeroSection() {
  return (
    <>
    <div className='flex flex-row justify-center  items-center bg-customGreen py-16'>
      <div className="flex flex-col flex-1 gap-8  items-start text-wrap px-28">
        <h1 className=' text-white text-7xl'>
          Order <span style={{color: 'rgba(251, 221, 187, 1)'}}>food</span> anytime, anywhere
        </h1>
        <h2 className=''>
          Browse from our list of specials to place your order and have food delivered to you in no time. Affordable, tasty and fast.
        </h2>
        <img src="./assets/Badges2.png" alt="" />
        <a href="/dashboard">
        <button className="btn btn-wide text-black text-xl mx-3" style={{backgroundColor: 'rgba(226, 184, 135, 1)'}}>Order Now</button>
        </a>
      </div>
      <div className="flex flex-row justify-center flex-1">
        <img src="./assets/1.png" alt="" className="hidden lg:block lg:w-1/2 lg:h-auto"/>
      </div>
    </div>
    </>
  )
}

export default HeroSection