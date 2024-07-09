import { Search } from 'lucide-react'
import React from 'react'

function Header() {
  return (
    <div className='p-5 shodow-sm border-b-2 flex justify-between  items-center'>
        <div className='flex  gap-2  items-center p-2 border rounded-md min-w-2 max-w-md'>
            <Search></Search>
            <input type="text"  className='outline-none min-w-2 ' placeholder='Search...' />
        </div>       

        <div className=''>
            <h2 className='bg-purple-700 p-1 rounded-full  text-xs text-white '> join Membership just for 9.99$/m</h2>

        </div>

    </div>
  )
}

export default Header