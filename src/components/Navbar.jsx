import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <>
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
        <p className='btn bg-white'>Menu</p>
      </div>
    </>
  )
}

export default Navbar