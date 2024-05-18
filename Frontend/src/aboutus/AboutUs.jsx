import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import ContactUs from '../components/ContactUs'
import Aboutus from '../components/Aboutus'


function AboutUs() {
  return (
    <>
    <NavBar/>
    <div className='h-64 md:h-96'>
        <Aboutus/>
    </div>
    <Footer/>
      
    </>
  )
}

export default AboutUs
