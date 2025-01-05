import { UserButton, useUser } from "@clerk/clerk-react"
import { Button } from "./ui/button"
import { Link } from "react-router-dom"




const Header = () => {

 
  const {user, isSignedIn} = useUser()

  return (
    <div className="flex justify-between items-center p-5 shadow-sm">
      <img src='/logo.svg' height={100} width={150} />
      
      <ul className="hidden md:flex gap-16" >
        <li className="font-medium hover:scale-125 cursor hover:text-primary">Home</li>
        <li className="font-medium hover:scale-125 cursor hover:text-primary">Search</li>
        <li className="font-medium hover:scale-125 cursor hover:text-primary">New</li>
        <li className="font-medium hover:scale-125 cursor hover:text-primary">Preowned</li>
      </ul>

     {isSignedIn?
     <div className="flex items-center gap-5">
      <UserButton/> 
      <Link to={"/p"}>
      <Button>Submit Listing</Button>
      </Link>
     </div>
    : 
 
    <Button>Submit Listing</Button>}
   
    </div>
 )
}

export default Header

// import { UserButton, useUser } from '@clerk/clerk-react'
// import React from 'react'
// import { Button } from './ui/button';
// import { Link } from 'react-router-dom';

// const Header = () => {
//   const {user, isSignedIn} = useUser();


//   return (
//     <div className='flex justify-between items-center mt-5 mx-10'>
//       <img src="/logo.svg" width={200} height={150} />
//       <ul className='flex gap-5 text-[20px] font-semibold'>
//         <li className='hover:scale-125 cursor-pointer  shadow-xl'>Home</li>
//         <li className='hover:scale-125 cursor-pointer  shadow-xl'>Search</li>
//         <li className='hover:scale-125 cursor-pointer  shadow-xl'>New</li>
//         <li className='hover:scale-125 cursor-pointer  shadow-xl'>PreOwned</li>
//       </ul>


//       {
//         isSignedIn?
//         <div className='flex gap-6'>
//           <UserButton/>
//           <Link to={"/p"}>
//           <Button>Submit Listing</Button>
//           </Link>
//         </div>
//         :
//         <Button>Submit Listing</Button>
//       }
//     </div>
//   )
// }

// export default Header
