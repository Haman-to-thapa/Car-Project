import React from 'react'
import { Button } from './components/ui/button'
import { SignInButton } from '@clerk/clerk-react'

const Home = () => {
  return (

    <div>
      <SignInButton mode='modal' forceRedirectUrl='/'>
    <Button>Sign In </Button>
    </SignInButton>
    </div>
  )
}

export default Home
Home