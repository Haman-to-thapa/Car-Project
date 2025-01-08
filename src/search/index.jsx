import React from 'react'
import { useSearchParams } from 'react-router-dom'

const SearchByOptions = () => {
  const [searchParam] = useSearchParams();

  const cars = searchParam.get('cars');
  const make = searchParam.get('make')
  const price = searchParam.get('price')


  console.log(cars, make , price)


  return (
    <div>
      search
    </div>
  )
}

export default SearchByOptions
