
import React from 'react'
import { FileClock, Home, Settings, WalletCards } from 'lucide-react'
import Image from 'next/image'
function SideNav() {
    const items=[{
        name:"home",
        icon:Home,
        path:"/dashbord"
        
    },
    {
        name:"History",
        icon:FileClock,
        path:"/dashbord/history"
        
    },
    {
        name:"Billing",
        icon:WalletCards,
        path:"/dashbord/billing"
        
    },
    {
        name:"Settings",
        icon:Settings,
        path:"/dashbord/setting"
        
    }
    ]
  return (
    <div className='h-screen bg- p-5 '>
        <div><Image
        src={'/logo.svg'}
        width={100}
        height={100}
        alt="logo">

        </Image>

        </div>
        <hr className='my-6 border' ></hr>
        

        <div className='flex flex-col gap-2 mt-10  text-xl'>
            {items.map((bar,index)=>(
                <div key={index} className='hover:bg-purple-800 hover:text-white flex gap-2 border p-2 rounded-md '>
                    <bar.icon></bar.icon>
                    <h2>{bar.name}</h2>                    
                </div>
            ))}
        </div>
    </div>
  )
}

export default SideNav