import { Button } from '@/components/ui/button'
import { useUser } from '@clerk/clerk-react'
import { db } from './../../../config/index'
import { CarListing } from './../../../config/schema'
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

const MyListing = () => {

  const {user} = useUser();

  // useEffect(() => {

  //   user && GetUserCarListing();

  // }, [user])




  // const GetUserCarListing = async() => {
  //   const result = await db.select().from(CarListing)
  //   .leftJoin(CarListing,eq(CarListing.id))
  //   .where(eq(CarListing.id))
    

  //   console.log(result)

  // }



  return (
    <div className='mt-6'>
       <div className='flex justify-between items-center'>
              <h2 className='font-bold text-4xl'>My Listing</h2>
              <Link to={"/addListing"}>
              <Button>+ Add New Listing</Button>
              </Link>
            </div>
    </div>
  )
}

export default MyListing
