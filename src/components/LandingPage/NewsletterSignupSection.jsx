

function NewsletterSignupSection() {
  return (
    <>
    <div className="flex flex-row flex-wrap items-center justify-center bg-customGreen py-20 gap-10">
      <div className="flex flex-col text-center flex-1 items-start gap-10 mx-20 sm:mx-0 sm:text-center md:mx-20 md:text-start">
        <h1 className="text-4xl font-bold" style={{color: 'rgba(251, 221, 187, 1)'}}>
        Get notified when we update!
        </h1>
        <p>
        Get notified when we add new items to our specials menu, update our price list or have promos!
        </p>
      </div>
      <div className="flex flex-row flex-1 mx-20 ">
        <form action="#" method="post" className="flex flex-row flex-wrap gap-2 justify-evenly">
          <label htmlFor="getNotified">
            <input type="email" name="getNotified" id="getNotified" placeholder="Email" className="bg-white p-3 w-80 rounded"/>
          </label>
          <button style={{backgroundColor: 'rgba(251, 221, 187, 1)'}} className="btn btn-wide text-black rounded">Submit</button>
        </form>
      </div>
    </div>
    </>
  )
}

export default NewsletterSignupSection