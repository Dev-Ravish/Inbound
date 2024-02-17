import React from 'react'
import { siteConfig } from '@/lib/siteConfig'
import Link from 'next/link'
const Navbar = () => {
  return (
    <header className='w-full text-lg'> 
        <nav  className=" flex py-5 sm:px-10 px-4 ">
            <ul className='flex gap-10 '>
                {siteConfig.navbar.map((item, index) => {
                    return (
                        <li key={index}>
                            <Link href={item.link} className='text-xl md:text-2xl'>{item.name}</Link>
                        </li>
                    )
                })}
            </ul>
        </nav>
    </header>
  )
}

export default Navbar