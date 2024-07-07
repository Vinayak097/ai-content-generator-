
"use client"

import React, { useState } from 'react'
import SearchSection from '../_compenents/SearchSection'
import TempletSection from '../_compenents/TempletSection'

function page() {
  const [userInput, setUserInput] = useState<string | undefined>()
  return (
    <div>
      <SearchSection onSearchInput={(value:string)=>setUserInput(value)}></SearchSection>
      <TempletSection userInput={userInput?userInput:""} ></TempletSection>
      
    </div>
    
  )
}

export default page