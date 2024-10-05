

function SpecialMealsSection() {
  return (
    <>
    <div className="flex flex-col flex-wrap items-center text-center py-20 bg-customGreen text-wrap gap-20">
      <div className="flex flex-col items-center gap-10 max-w-xl">
        <h1 className="text-white text-4xl font-bold">
          Special Meals of the day!
        </h1>
        <p>
          Check our specials of the day and get discounts on all our meals and swift delivery to whatever locatin within India.
        </p>
      </div>
      <div className="flex flex-row  items-center flex-wrap justify-evenly gap-10">
        <div className="flex flex-col items-center max-w-64 mx-24 gap-5">
          <img src="./assets/4.png" alt="" className="max-w-60"/>
          <h1 style={{color:'rgba(251, 221, 187, 1)'}} className="font-bold">
            Stir fry Pasta
          </h1>
          <p>Stir fry pasta yada yada yada because of Sesan </p>
        </div>
        <div className="flex flex-col items-center max-w-64 mx-24 gap-5">
          <img src="./assets/5.png" alt="" className="max-w-60"/>
          <h1 style={{color:'rgba(251, 221, 187, 1)'}} className="font-bold">Meat Balls</h1>
          <p>Stir fry pasta yada yada yada because of Sesan</p>
        </div>
        <div className="flex flex-col items-center max-w-64 mx-24 gap-5">
          <img src="./assets/6.png" alt="" className="max-w-60" />
          <h1 style={{color:'rgba(251, 221, 187, 1)'}} className="font-bold">Burger Meal</h1>
          <p>Stir fry pasta yada yada yada because of Sesan</p>
        </div>
        
      </div>
    </div>
    </>
  )
}

export default SpecialMealsSection