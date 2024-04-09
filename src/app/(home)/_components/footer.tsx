import { siteConfig } from '@/lib/siteConfig'
import React from 'react'

const Footer = () => {
  return (
    <div className='text-center p-8 sm:p-10 md:p-16  flex flex-col gap-20'>
      <div className='flex flex-col gap-4 text-xl'>
      <p >{siteConfig.footer.name} {siteConfig.footer.position}</p>
      <p >{siteConfig.footer.phone}    {siteConfig.footer.email}</p>
      <p >{siteConfig.footer.address}</p>
      </div>
     <p className='text-lg sm:text-3xl md:text-5xl w-full'>
      {siteConfig.footer.title}
      </p> 
      
    </div>
  )
}

export default Footer