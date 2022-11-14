import React from 'react'

import ContactUs from '../static/img/svg/contactUs.svg'
import Phone from '../static/img/svg/phone.svg'
import Phone2 from '../static/img/svg/phone2.svg'
import Donate from '../static/img/svg/donate.svg'

function FloatingIcons() {

  const style = "w-16"

  return (
    <div className='fixed top-[3em] right-14 hidden md:block z-20'>
      <div className='flex flex-col gap-3'>
        <img className={style} src={Donate} alt="donate" />
        {/* <img className={style} src={Phone} alt="contact us" /> */}
        <img className={style} src={Phone2} alt="contact us" />
        {/* <img className={style} src={ContactUs} alt="contact us" /> */}
      </div>
    </div>
  )
}

export default FloatingIcons