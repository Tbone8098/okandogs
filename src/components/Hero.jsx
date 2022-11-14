import React from 'react'

import HeroDog from '../static/img/herodog.png'

import Logo from '../static/img/logo.png'

function Hero() {
    return (
        <div className='bg-primary-1 flex flex-col items-center'>
            <div className='hidden md:grid grid-cols-3 w-full p-5'>
                <div className='w-24'>
                    <img src={Logo} alt="logo" className='w-full h-full' />
                </div>
            </div>
            <div className='flex md:hidden'>

            </div>
            <div className='mt-10 md:mt-0'>
                <h1 className="text-5xl md:text-8xl text-black font-f1 font-bold uppercase">Okandogs</h1>
                <p className='font-f1 text-white text-xl'>Saving Washington Dogs Since 2014</p>
            </div>
            <div className='flex h-full items-end'>
                <img src={HeroDog} alt="Hero Dog" className='w-full h-full' />
            </div>
        </div>
    )
}

export default Hero