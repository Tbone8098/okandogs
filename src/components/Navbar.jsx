import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Modal from './Modal'

import Donate from '../static/img/svg/donate.svg'

function Navbar() {
  const [modal, setModal] = useState(false)

  const modalHandler = () => {
    setModal(false)
  }

  const modalContent = () => {
    return (
      <div className='w-full flex flex-col gap-3'>
        <div className='flex justify-evenly'>
          <img className='w-14' src={Donate} alt="" />
        </div>
        <Link onClick={() => setModal(false)} className='border rounded-lg hover:bg-primary-1 w-full' to=''>Home</Link>
        <Link onClick={() => setModal(false)} className='border rounded-lg hover:bg-primary-1 w-full' to=''>Adopt a Dog</Link>
        <Link onClick={() => setModal(false)} className='border rounded-lg hover:bg-primary-1 w-full' to=''>Volunteer</Link>
        <Link onClick={() => setModal(false)} className='border rounded-lg hover:bg-primary-1 w-full' to=''>Foster</Link>
        <Link onClick={() => setModal(false)} className='border rounded-lg hover:bg-primary-1 w-full' to=''>Ways to Give</Link>
        <Link onClick={() => setModal(false)} className='border rounded-lg hover:bg-primary-1 w-full' to=''>About Us</Link>
      </div>
    )
  }

  return (
    <>
      {
        modal &&
        <Modal
          content={modalContent()}
          title="Menu"
          returnHandler={modalHandler}
        />
      }
      <div className='hidden md:flex w-full justify-center my-3'>
        <ul className='flex w-4/6 justify-evenly border-b-2 border-black p-3'>
          <li><Link to="">Home</Link></li>
          <li><Link to="">Adopt a Dog</Link></li>
          <li><Link to="">Volunteer</Link></li>
          <li><Link to="">Foster</Link></li>
          <li><Link to="">Ways to Give</Link></li>
          <li><Link to="">About Us</Link></li>
        </ul>
      </div>
      <div className='md:hidden absolute top-0 left-0 mx-5 mt-2'>
        <button className='btn bg-white' onClick={() => setModal(true)}>Menu</button>
      </div>
    </>
  )
}

export default Navbar