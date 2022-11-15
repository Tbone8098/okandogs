import React from 'react'
import DogCarousel from '../components/DogCarousel/DogCarousel'
import FloatingIcons from '../components/FloatingIcons'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import Mission from '../components/Mission'
import PictureWidget from '../components/PictureWidget'
import VolunteerBanner from '../components/VolunteerBanner'


import { takeEm } from '../data/data'
import AboutUs from '../components/AboutUs'
import ContactUs from '../components/ContactUs'
import Footer from '../components/Footer'

function LandingPage() {
  return (
    <div className='h-screen'>
        <FloatingIcons />
        <Hero />
        <Navbar />
        <DogCarousel />
        <Mission />
        <div className='flex flex-col md:flex-row justify-evenly mx-[2em] gap-2'>
            <PictureWidget photoInfo={takeEm[0]} />
            <PictureWidget photoInfo={takeEm[1]} />
            <PictureWidget photoInfo={takeEm[2]} />
        </div>
        <VolunteerBanner />
        <AboutUs />
        <ContactUs />
        <Footer />
        
    </div>
  )
}

export default LandingPage