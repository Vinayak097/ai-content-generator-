"use client"
import {
    ClerkProvider,
    SignInButton,
    SignedIn,
    SignedOut,
    UserButton
  } from '@clerk/nextjs'
import { Button } from '../../components/ui/button'
import React from 'react'
import { useUser } from '@clerk/nextjs'
function Navbar() {
    const user=useUser();
  return (
    <div className='p-2 shadow-md'>
      <div className={` w-fit  rounded-md hover:opacity-50 cursor-pointer ${user? "  p-0":"bg-red-200 p-2"}`}> 
      <SignedOut >
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>

      </div>
        
      
         
       

        
    </div>
  )
}

export default Navbar