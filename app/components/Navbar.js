import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className='flex justify-around items-center bg-[#dfdfdf] max-[350px]:flex-col'>
      <div className="logo text-4xl font-bold font-sans">iChat</div>
      <ul className='flex gap-7 text-3xl items-center'>
        <li className='hover:text-red-600 cursor-pointer'><Link href={"/"}>Home</Link></li>
        <li className='hover:text-red-600 cursor-pointer'><Link href={"/Chat"}>Chat</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar
