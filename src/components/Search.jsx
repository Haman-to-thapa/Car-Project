import React, { useState } from 'react'
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
import { Link } from 'react-router-dom'


const Search = () => {

  const [cars , setCars] = useState();
  const [make, setMake] = useState();
  const [price, setPrice] = useState();


  return (
    <div className='w-[60%]  bg-white md:flex-row md:flex flex-col gap-10 items-center rounded-md md:rounded-full px-5 p-2'>
    <Select onValueChange={(value) => setCars(value) }>
  <SelectTrigger className="w-full outline-none md:border-none shadow-none text-lg">
    <SelectValue placeholder="Cars" />
  </SelectTrigger>
  <SelectContent> 
    <SelectItem value="New">New</SelectItem>
    <SelectItem value="Used">Used</SelectItem>
    <SelectItem value="Certified Pre-Owned">Certified Pre-Owned</SelectItem>
  </SelectContent>
</Select>  

<Separator orientation="vertical"  className='hidden md:block'/>

<Select onValueChange={(value) => setMake(value)}>
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

<Select onValueChange={(value) => setPrice(value)}>
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
  <Link to={"/search?cars="+cars+"$make="+make+"$price="+price}>
<CiSearch className='text-[50px] bg-primary rounded-full p-3 text-white hover:scale-125 cursor-pointer transition-all'/>
</Link>
</div>
    </div>
  )
}

export default Search
