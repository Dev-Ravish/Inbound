import { siteConfig } from '@/lib/siteConfig'
import React from 'react'

const Footer = () => {
  return (
    <div className='text-center p-8 sm:p-10 md:p-16 flex justify-center items-center text-lg sm:text-2xl md:text-3xl'>{siteConfig.footer.title}</div>
  )
}

export default Footer