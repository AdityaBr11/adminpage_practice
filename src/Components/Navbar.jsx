import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <div className="flex justify-between px-10 items-center bg-slate-900 text-white h-[60px] text-lg">
        <div>
            <Link to='/'>
            <h1 className='cursor-pointer scale-105 duration-200'>Home</h1>
            </Link>
        </div>

        <div className='flex gap-8'>
            <h1 className='cursor-pointer scale-105 duration-200'>Add Products</h1>
            <Link to='/All'>
            <h1 className='cursor-pointer scale-105 duration-200'>All Products</h1>
            </Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar
