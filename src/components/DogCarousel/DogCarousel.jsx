import React from 'react'

import { dogs } from "../../data/data";
import Style from './style.module.css'

function DogCarousel() {

  return (
    <div className='flex justify-center my-[2em]'>
      <div className='flex flex-col md:w-3/5 mx-5'>
        <div className='flex my-[3em] justify-evenly flex-wrap gap-1 gap-y-[4em]'>
          {
            dogs.map((item, idx) => {
              return (
                <div className={'border border-black rounded-lg h-20 w-32 sm:h-20 md:h-44 md:w-52 flex items-end shadow justify-center ' + Style.background} key={idx}>
                  <img className='h-[130%] object-fit' src={item.photo} alt={item.alt} />
                </div>
              )
            })
          }
        </div>
        <button className='self-end text-xl'>View All</button>
      </div>
    </div>
  )
}

export default DogCarousel