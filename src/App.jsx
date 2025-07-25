
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
// import CompanyLogo from './components/CompanyLogo'
import PurposeSectiion from './components/PurposeSectiion'
import FeaturesSection from './components/FeaturesSection'
import ScheduleSection from './components/ScheduleSection'
import MonitorSection from './components/MonitorSection'
import TrainingSection from './components/TrainingSection'
import ServicesSection from './components/ServicesSection'
import TestimonialsSection from './components/TestimonialSection'
import NewsLetterSection from './components/NewsLetterSection'
import Footer from './components/Footer'

function App() {

  return (
    <main className='relative min-h-screen overflow-x-hidden'>
      <div className="absolute -top-28 -left-28 w-[500px] h-[500px] bg-gradient-to-tr from-blue-700/20 to-yellow-400/20 rounded-full blur-[80px] -z-10"></div>
      <div className='overflow-hidden'>
        <Navbar />
        <Hero />
        {/* <CompanyLogo/> */}
        <PurposeSectiion/>
        <FeaturesSection/>
        <ScheduleSection/>
        <MonitorSection/>
        <TrainingSection/>
        <ServicesSection/>
        <TestimonialsSection/>
        <NewsLetterSection/>
        <Footer/>
      </div>
    </main>
  )
}

export default App
