import { GithubIcon, InstagramIcon, LinkedinIcon } from 'lucide-react'
import React from 'react'
import { MCD_YELLOW } from '../constant/constant'

const Footer = () => {
  return (
    <div className='bg-black text-white w-full flex flex-col justify-center items-center py-15 gap-5'>
      <div className='flex gap-5'>
        {/* Logo */}
        <GithubIcon color = {MCD_YELLOW}/>
        <LinkedinIcon color = {MCD_YELLOW}/>
        <InstagramIcon color = {MCD_YELLOW}/>
      </div>
      <div className='flex gap-3'>
        {/* Privacy Policy */}
        <button className='cursor-pointer'>Privacy Policy</button>
        <span>|</span>
        <span className='cursor-pointer'>Contact Us</span>
      </div>
      <div className='flex gap-5 font-extralight'>
        {/* Contact Us */}
        <p>Copyright@2026</p>
        <p>Ling Lee Hom</p>
        <p>leehom2004@gmail.com</p>
      </div>
    </div>
  )
}

export default Footer