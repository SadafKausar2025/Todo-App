import React from 'react'

const Navbar = () => {
  return (
    <div>
        <nav className='flex justify-around bg-violet-900 text-white py-2'>
            <div className="logo">
                <span className='font-bold text-xl mx-9'>iTask</span>
                </div>
            <ul className='flex gap-10 mx-9'>
                <li className='cursor-pointer hover:font-bold transition-all'>Home</li>
                <li className='cursor-pointer hover:font-bold transition-all'>YourTask</li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar
