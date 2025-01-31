import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { ClerkProvider } from '@clerk/clerk-react'

import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router'
import Home from './Home'
import Profile from './Profile/Profile'
import AddListing from './add-listing/AddListing'
import SearchByCategory from './search/[category]'
import SearchByOptions from './search'

const router = createBrowserRouter([
 
      {path:"/",
        element:<Home/>
      },
      {
        path:"/profile",
        element: <Profile/> 
      },
      {
        path:"/addListing",
        element:<AddListing/>
      },
    {
      path:"/search",
      element : <SearchByOptions/>
    },
      {
        path:'/search/:category',
        element: <SearchByCategory/>
      }
    
  
])

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
    <RouterProvider router={router} />
    </ClerkProvider>
  </StrictMode>,
)
