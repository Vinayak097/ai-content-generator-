"use client"
import Templet from '@/app/(data)/Templet'
import { Template } from '@/app/_compenents/TempletSection'
import React, { useState } from 'react'
import Image from 'next/image'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'


interface POPS{
    selectedTemplate:Template|undefined
    userFormInput:any
}

function FormSection({selectedTemplate ,userFormInput}:POPS){   
  const [form,setform]=useState<any>()

  
  const onSubmit=(e:any)=>{
    e.preventDefault();
    console.log(form);
    userFormInput(form)
  }
  const handleOnchange=(e:any)=>{
    const {name,value}=e.target;    
    setform({...form,[name]:value})
    
  }
  
  return (
   
    <div className='p-5 shadow-md border rounded-lg'>
       
        {/* @ts-ignore */}
        <Image src={selectedTemplate?.icon}
        alt="icon" 
        width={70}
        height={70}>

        </Image>

        <h2 className='font-bold text-2xl mb-2 text-violet-600'> {selectedTemplate?.name} </h2>
        <p className='text-gray-500 text-sm'>{selectedTemplate?.desc}</p>
        <form action="" onSubmit={(data)=>{onSubmit(data)}}>
          {selectedTemplate?.form?.map((item,index)=>(
            <div key={index}>
              <label htmlFor="">{item.label}</label>
              {item.field=='input'?<Input name={item.name} required={item?.required} onChange={(e)=>{handleOnchange(e)}}></Input>:
              <Textarea name={item.name} onChange={(e)=>{handleOnchange(e)}}></Textarea>}
            </div>
          ))}
          <Button className='w-full mt-4 py-6'>Generate Content</Button>
        </form>
    </div>
  )
}

export default FormSection