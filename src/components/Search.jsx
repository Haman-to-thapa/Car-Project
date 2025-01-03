import React from 'react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Separator } from '@radix-ui/react-select'
import { CiSearch } from "react-icons/ci"
import Data from './Shared/Data'


const Search = () => {
  return (
    <div className='w-[60%]  bg-white md:flex-row md:flex flex-col gap-10 items-center rounded-md md:rounded-full px-5 p-2'>
    <Select>
  <SelectTrigger className="w-full outline-none md:border-none shadow-none text-lg">
    <SelectValue placeholder="Cars" />
  </SelectTrigger>
  <SelectContent> 
    <SelectItem value="light">New</SelectItem>
    <SelectItem value="dark">Old</SelectItem>
  </SelectContent>
</Select>
<Separator orientation="vertical"  className='hidden md:block'/>

<Select>
  <SelectTrigger className="w-full outline-none shadow-none md:border-none text-lg">
    <SelectValue placeholder="Cars Make" />
  </SelectTrigger>
  <SelectContent>
    {Data.CarMakes.map((maker,index) => (
       <SelectItem key={maker.name} value={maker.name}>{maker.name}</SelectItem>
    )
        
      
    )}
   
  </SelectContent>
</Select>

<Separator orientation="vertical"/>

<Select>
  <SelectTrigger className="w-full outline-none text-lg shadow-none md:border-none">
    <SelectValue placeholder="Pricing" />
  </SelectTrigger>
  <SelectContent>
    {Data.Pricing.map((price, index) => (
      <SelectItem key={price.amount} value={price.amount}>{price.amount}</SelectItem>
    
    ))}
    
  </SelectContent>
</Select>
<div>
<CiSearch className='text-[50px] bg-primary rounded-full p-3 text-white hover:scale-125 cursor-pointer transition-all'/>
</div>
    </div>
  )
}

export default Search
