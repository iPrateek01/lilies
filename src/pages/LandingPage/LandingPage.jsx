import Header from '../../components/LandingPage/Header'
import HeroSection from '../../components/LandingPage/HeroSection'
import SpecialMealsSection from '../../components/LandingPage/SpecialMealsSection'
import NewsletterSignupSection from '../../components/LandingPage/NewsletterSignupSection'
import Footer from '../../components/LandingPage/Footer'

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