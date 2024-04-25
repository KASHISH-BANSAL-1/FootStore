import React from 'react'
import list from "../../public/list.json"

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import Card from './Card';

function Featured() {
  const filterData = list.filter((data) => data.category === "Best Seller")
  // console.log(filterData)

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <>
      <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 mt-9'>
        <div>
          <h1 className='font-semibold text-xl pb-2 '>Best Sellers</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat numquam libero eveniet velit quis labore eaque repellat maiores ipsum nam, dolorem molestias ratione quasi eligendi quam, dignissimos minus consequatur. Modi?</p>
        </div>

        <div >
          <Slider {...settings}>
            {filterData.map((item)=>(
              <Card item ={item} key={item.id}/>
            ))}
          </Slider>
        </div>
      </div>
    </>
  )
}

export default Featured


//props-> way to pass data from parent component to child component