import React from 'react'

import YouCanHelp from '../static/img/youcanhelp.png'

function VolunteerBanner() {
  return (
    <div className='relative'>
        {/* <h2 className='text-4xl uppercase my-5 font-bold text-primary-2'>Volunteer</h2> */}
        <img src={YouCanHelp} alt="volunteer Picture" className='h-full w-full' />
        <button className='bg-primary-2 text-white text-xl xl:text-6xl md:px-10 md:py-3 md:absolute md:bottom-5 md:right-5 xl:bottom-20 xl:right-20 my-5'>Learn More</button>
    </div>
  )
}

export default VolunteerBanner