import React from 'react'
import { Template } from './TempletSection'
import Image from 'next/image'
function TempletCard(item:Template) {
  return (
    <div className='shadow-lg p-4 flex border flex-col gap-2 hover:scale-105 transition-all'>
        <Image
        src={item.icon}
        width={50}
        height={50}
        alt='icon'>
        </Image>
        <h2 className='font-medium text-lg'>{item.name}</h2>
        <p className='text-gray-500'>{item.desc}</p>

        
        
    </div>
  )
}

export default TempletCard