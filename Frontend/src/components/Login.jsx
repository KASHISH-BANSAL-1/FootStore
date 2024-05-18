import React from 'react'
import {Link} from 'react-router-dom'
import { useForm } from "react-hook-form"
import axios from 'axios'
function Login() {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()
    
      const onSubmit = async(data) => {
        const userInfo = {
            email: data.email,
            password: data.password
        } 
        await axios.post("http://localhost:4000/login", userInfo)
        .then((res)=>{
            console.log(res.data)
            if(res.data){
                alert("Login Successfully")
                
            }
            document.getElementById('my_modal_3').close();
            setTimeout(()=>{
                    window.location.reload();
                    localStorage.setItem("Users",JSON.stringify( res.data.user))

            },1000);
            
        })
        .catch((err)=>{
            console.log(err);
            alert(err.response.data.msg)
        })
      }
    return (
        <div>
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box">
                    <form onSubmit={handleSubmit(onSubmit)} method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
                  
                    <h1 className="font-bold text-lg">Login</h1>
                        <div className='mt-4 space-y-2'>
                            <span>Email</span> <br />
                            <input
                             type="email" 
                             placeholder='Enter your Email' 
                             className='w-80 px-3 py-1 border rounded-md outline-none'
                             {...register("email", { required: true })} 
                             />
                             {errors.email && <span className='text-red-500 text-sm'>This field is required</span>}
                            
                        </div>
                        <div className='mt-4 space-y-2'>
                            <span>Password</span> <br />
                            <input type="password" placeholder='Enter your Password' className='w-80 px-3 py-1 border rounded-md outline-none'
                            {...register("password", { required: true })} />
                            {errors.password && <span className='text-red-500 text-sm'>This field is required</span>}
                            
                        </div>
                        <div className='flex justify-around mt-4'>
                            <button className='bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-300 duration-200'>Login</button>
                            <p>Don't have an account? <Link to= "/signup" className='underline text-blue-500 hover:text-blue-600 cursor-pointer'>SignUp</Link></p>
                        </div>
                        </form>
                </div>
            </dialog>
        </div>
    )
}

export default Login
