import React from 'react'
import Home from './home/Home'
import { Routes, Route } from 'react-router-dom'
import Categories from './category/Categories'
import SignUp from './components/SignUp'
import Contactt from './contact/Contactt'
function App() {
  return (
    <>

      <div className='dark:bg-slate-900 dark:text-white'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/category' element={<Categories />} />
          <Route path='/contact' element={<Contactt />} />
          <Route path='/signup' element={<SignUp />} />
        </Routes>
      </div>
    </>
  )
}

export default App
