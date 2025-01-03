import { Separator } from '@radix-ui/react-select'
import React from 'react'
import { BsFillFuelPumpFill } from "react-icons/bs";
import { IoIosSpeedometer } from "react-icons/io";
import { FaGear } from "react-icons/fa6";
import { FaRegEnvelopeOpen } from "react-icons/fa6";



const CarItems = ({car}) => {
  return (
    <div className='rounded-xl bg-white hover:shadow-2xl cursor-pointer'>
      <h2 className='absolute m-2 bg-green-500 px-2 rounded-full text-sm text-white'>New</h2>
      <img src={car?.image} width={'100%'} height={250} />
      <div>
        <h2 className='font-bold text-black text-lg mb-2'>{car.name}</h2>
        <Separator/>
        <div  className='grid grid-cols-3 mt-5'>
          <div className='flex flex-col items-center mb-10'>
          <BsFillFuelPumpFill className='text-lg mb-2'/>
          <h2>{car.miles} Miles</h2>
          </div>
          <div className='flex flex-col items-center'> 
          <IoIosSpeedometer className='text-lg mb-2'/>
          <h2> {car.fuelType}Speed</h2>
          </div>
          <div className='flex flex-col items-center'>
          <FaGear className='text-lg mb-2'/>
          <h2>{car.gearType} Gear</h2>
          </div>
        </div>
        <Separator className='my-2'/>
        <div className='flex items-center justify-between'>
          <h2 className='text-xl font-bold'>${car.price}</h2>
          <h2 className='text-primary text-sm flex gap-2 items-center'>
          <FaRegEnvelopeOpen />
            View Details</h2>
        </div>
      </div>
    </div>
  )
}

export default CarItems
