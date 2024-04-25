import React from 'react'

function Card({item}) {
    // console.log(item)
  return (
    <>
    <div className='mt-4 my-3 p-3'>
    <div className="card w-92 bg-base-100 shadow-xl my-6  hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border ">
  <figure><img src={item.img} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">
      {item.name}
      <div className="badge badge-secondary">{item.category}</div>
    </h2>
    <p>{item.desc}</p>
    <div className="card-actions flex justify-between">
      <div className="badge badge-outline">Rs.{item.price}</div> 
<div className="badge badge-outline px-2 py-1 rounded-full border-[2px] cursor-pointer hover:bg-pink-500 hover:text-white duration-150" style={{ padding: '0.5rem 1rem' }}>Buy Now</div>
    </div>
  </div>
</div>
    </div>
      
    </>
  )
}

export default Card
