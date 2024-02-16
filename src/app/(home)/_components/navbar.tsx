import React from 'react'
import { siteConfig } from '@/lib/siteConfig'
import Link from 'next/link'
const Navbar = () => {
  return (
    <header> 
        <nav  className=" flex py-5 border-b-2 border-red-600 sm:px-10 px-4">
            <ul className='flex gap-10 '>
                {siteConfig.navbar.map((item, index) => {
                    return (
                        <li key={index}>
                            <Link href={item.link}>{item.name}</Link>
                        </li>
                    )
                })}
            </ul>
        </nav>
    </header>
  )
}

export default Navbar