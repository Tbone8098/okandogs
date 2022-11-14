import React from 'react'

import Logo from '../static/img/logo.png'
import Instagram from '../static/img/svg/instagram.svg'
import Facebook from '../static/img/svg/facebook.svg'

function Footer() {
    return (
        <div className='md:grid grid-cols-3 mt-10'>
            <div></div>
            <div className='flex flex-col items-center gap-3'>
                <img className='w-72' src={Logo} alt="logo" />
                <div>
                    <p>© 2022 - OKANDOGS - All Rights Reserved</p>
                    <p>Okandogs is a 501(c)3 organization. Tax-ID number 84-3829266.</p>
                </div>
            </div>
            <div className='flex flex-col items-center justify-end'>
                <p className='font-bold text-2xl w-fit'>Follow Us</p>
                <div className='flex gap-3 my-5'>
                    <img src={Instagram} alt="instagram" />
                    <img src={Facebook} alt="facebook" />
                </div>
                <p></p>
            </div>
        </div>
    )
}

export default Footer