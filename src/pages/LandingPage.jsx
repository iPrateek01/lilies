import Header from '../components/Header'
import HeroSection from '../components/HeroSection'
import SpecialMealsSection from '../components/SpecialMealsSection'
import NewsletterSignupSection from '../components/NewsletterSignupSection'
import Footer from '../components/Footer'

function LandingPage() {
  return (
    <>
    <div className='scrollbar-hide h-screen'>
      <Header />
      <HeroSection />
      <SpecialMealsSection />
      <NewsletterSignupSection />
      <Footer />
    </div>
    </>
  )
}

export default LandingPage