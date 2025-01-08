import { UserButton, useUser } from "@clerk/clerk-react"

import { Link } from "react-router-dom"
import { Button } from "./ui/button"




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
      <Link to={"/profile"}>
      <Button>Submit Listing</Button>
      </Link>
     </div>
    : 
 
    <Button>Submit Listing</Button>}
   
    </div>
 )
}

export default Header
