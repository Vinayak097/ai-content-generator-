
import { Search } from 'lucide-react'
import React from 'react'

function SearchSection({onSearchInput}:any) {
  return (
    <div className='p-10  bg-gradient-to-br from-purple-500 via-purple-700 flex flex-col justify-center items-center to-blue-600'>
        <h2>Browse all Template </h2>
        <p>What would you like to create today? </p>
        <div className='flex shadow-sm rounded-md items-center bg-transparent hover:shadow-md '>
            <Search className='ml-2 text-white '>               
            </Search>
            <input onChange={(e)=>{onSearchInput(e.target.value)}} type="text" placeholder='Search...'  className='p-2 rounded-md bg-transparent outline-none '/>


        </div>
        
    </div>
  )
}

export default SearchSection