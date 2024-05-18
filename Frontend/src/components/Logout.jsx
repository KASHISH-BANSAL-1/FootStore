import React from 'react'
import { useAuth } from '../context/AuthProvider'

function Logout() {
    const [authUser, setAuthuser] = useAuth(); 
    const handleLogout =()=>{
      try {
        setAuthuser({
            ...authUser,
            user:null
        })
        localStorage.removeItem("Users")
        alert("Logout Successfully")
        setTimeout(()=>{
          window.location.reload();
        },1000)
        
      } catch (error) {
        console.log(error.msg)
      }
    }
  return (
    <div>
      <button className='px-3 py-2 bg-red-500 text-white cursor-pointer rounded-md' onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Logout

