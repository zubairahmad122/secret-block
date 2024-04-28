import { navItems } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaLinkedinIn, FaXTwitter } from 'react-icons/fa6'
import { PiInstagramLogoFill } from 'react-icons/pi'
import { TiSocialFacebook } from 'react-icons/ti'

const Footer = () => {
  return (
    <footer className='max-w-[1440px]  mx-auto px-5 md:px-[70px] lg:px-[100px] xll:px-[146px]'>
           <div className="flex relative pt-10 pb-[49px] z-40 items-center max-xsm:flex-col gap-10 justify-between w-full h-full">
        <Link href="/">
          <Image src="/logo.svg" width={215} height={31} className="w-[215px] h-[31px]" alt="Logo" />
        </Link>
        <ul className="flex items-center gap-10">
          {navItems?.map((item) => (
            <li key={item.id} className="sm-text">
              <Link href={"/"}>{item.title}</Link>
            </li>
          ))}
        </ul>
      </div>
           <div className="flex relative pt-[23px] border-t border-[#FFFFFF0D] pb-[38px] z-40 items-center max-xsm:flex-col-reverse gap-10 justify-between w-full h-full">
            <p className='text-[16px] font-light text-[#FFFFFF70] font-montserrat'>© 2024. All right reserved.</p>
            <div className='flex items-center gap-1'>
              <Link href="/" className='p-[10px] rounded-full fot-hov text-white flex'>
              <PiInstagramLogoFill size={20} />
              </Link>
              <Link href="/" className='p-[10px] rounded-full fot-hov text-white flex'>
              <TiSocialFacebook size={20} />
              </Link>
              <Link href="/" className='p-[10px] rounded-full fot-hov text-white flex'>
              <FaXTwitter  size={20} />
              </Link>
              <Link href="/" className='p-[10px] rounded-full fot-hov text-white flex'>
              <FaLinkedinIn size={20} />
              
              </Link>
            </div>
           </div>
    </footer>
  )
}

export default Footer