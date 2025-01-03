import React from 'react'
import Search from './Search'
import { Fullscreen } from 'lucide-react'

const Hero = () => {
  return (
    <div>
    <div className='flex flex-col items-center p-10 py-20 gap-6 max-h-[650ox] w-full bg-[#eef0fc] '>
      <h2 className='text-lg'>Find cars for sale and for rent near you</h2>
      <h2 className='text-[60px] font-bold'>Find Your Dream Car</h2>
      <Search/>

      <img src="https://png.pngtree.com/png-vector/20231023/ourmid/pngtree-tesla-model-3-red-transparent-background-png-image_10337019.png" width={700}  className=''/>
    </div>
    </div>
  )
}

export default Hero
