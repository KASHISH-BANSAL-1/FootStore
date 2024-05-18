import React, { useEffect, useState } from 'react'
import Card from './Card'
import {Link} from 'react-router-dom'
import axios from 'axios'
function Category() {
    const [shoe,setShoe]= useState([]);
    useEffect(()=>{
        const getShoe = async()=>{
            try {
               const res = await axios.get("http://localhost:4000/shoe")
               console.log(res.data)
               setShoe(res.data)
            } catch (error) {
                console.log(error)
            }
        }
        getShoe();
    },[])
  return (
    <>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 '>
        <div className='mt-28 items-center justify-center text-center'>
            <h1 className='text-2xl font-semibold md:text-4xl'>We are delighted to have you <span className='text-pink-500'> Here! :)</span> </h1>
            <p className='mt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat facilis neque reprehenderit dicta distinctio fugiat natus nostrum, amet enim veniam, obcaecati eum qui consectetur itaque vitae perferendis iste sit earum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente fugiat similique quod nam, eveniet quos totam nihil corrupti dolorem voluptate reprehenderit repellat necessitatibus tempore. Odio fuga aliquam officia exercitationem quo?</p>
           <Link to='/'> <button className='bg-pink-500 text-white px-4 py-2 mt-6 rounded-md hover:bg-pink-700 duration-200'>Back</button></Link>
        </div>
        <div className='mt-12 grid grid-cols-1 md:grid-cols-4 '>
            {
                shoe.map((item)=>(
                    <Card key={item.id} item={item}/>
                ))
            }
        </div>
    </div>
     
    </>
  )
}

export default Category
