import React from 'react'
import Data from './Shared/Data'
import { Link } from 'react-router-dom'

const Category = () => {
  return (
    <div className='mt-40 '>

    <h2 className='font-bold text-3xl text-center mb-6'>Browse By Type</h2>
    <div className='grid grid-cols-3  sm:grid-cols-4 gap-6 md:grid-cols-6 lg:grid-cols-9 m-20'>
    {Data.Category.map((category, index) => (
      <Link to={"/search/"+category.name}>
      <div key={index} className='border rounded-xl p-3 items-center flex flex-col hover:shadow-md cursor-pointer'>
        <img src={category.icon} width={35} height={35} />
        <h2>{category.name}</h2>
      </div>
      </Link>
    ))}

    </div>
    </div>
  
  )
}

export default Category
