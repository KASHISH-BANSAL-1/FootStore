import React from 'react'
import Home from './home/Home'
import { Routes, Route, Navigate } from 'react-router-dom'
import Categories from './category/Categories'
import SignUp from './components/SignUp'
import Contactt from './contact/Contactt'
import AboutUs from './aboutus/AboutUs'
import { useAuth } from './context/AuthProvider'
function App() {
  const [AuthUser,setAuthUser] = useAuth()
  console.log(AuthUser)
  return (
    <>

      <div className='dark:bg-slate-900 dark:text-white'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/category' element={AuthUser?<Categories/>:<SignUp/>} />
          <Route path='/contact' element={<Contactt/>} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/about' element={<AboutUs/>}/>
        </Routes>
      </div>
    </>
  )
}

export default App
