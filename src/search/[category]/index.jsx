import Header from '@/components/Header';
import Search from '@/components/Search';
import React from 'react'

const SearchByCategory = () => {
  return (
    <div>
     <Header/>

     <div className='p-10 bg-black flex justify-center'>
      <Search/>
     </div>
    </div>
  )
}

export default SearchByCategory;
