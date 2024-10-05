

function HeroSection() {
  return (
    <>
    <div className='flex flex-row justify-around  items-center bg-customGreen py-20'>
      <div className="flex flex-col flex-1 gap-8  items-start text-wrap px-28">
        <h1 className=' text-white text-7xl'>
          Order <span style={{color: 'rgba(251, 221, 187, 1)'}}>food</span> anytime, anywhere
        </h1>
        <h2 className=''>
          Browse from our list of specials to place your order and have food delivered to you in no time. Affordable, tasty and fast.
        </h2>
        <img src="./assets/Badges2.png" alt="" />
      </div>
      <div className="flex flex-row justify-center flex-1">
        <img src="./assets/1.png" alt="" className="w-1/2 sm:w-1/4 md:w-1/3 lg:w-1/2 h-auto"/>
      </div>
    </div>
    </>
  )
}

export default HeroSection