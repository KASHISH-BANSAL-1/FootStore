import React from 'react'
import Home from '../home/Home'
import NavBar from '../components/NavBar'
import Category from '../components/Category'
import Footer from '../components/Footer'
function Categories() {
    // console.log(list)
  return (
    <>
      <NavBar/>
        <div className='min-h-screen'>
        <Category/>
        </div>
        <Footer/>
    </>
  )
}

export default Categories
