import Link from 'next/link'
import React from 'react'

function Header() {
  return (
    <div>
        <header className='flex h-20 items-center justify-around bg-blue-900'>
        <div>
          <h1 className='text-2xl'>Portfolio</h1>
        </div>
        <div>
          <ul className='flex gap-6 text-1xl'>
            <li><Link href={"/"}>Home</Link></li>
            <li><Link href={"/Skills"}>Skills</Link></li>
            <li>Contact</li>
            <li>Career</li>
          </ul>
        </div>
      </header>
    </div>
  )
}

export default Header