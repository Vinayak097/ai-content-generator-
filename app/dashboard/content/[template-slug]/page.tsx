"use client"

import Templet from '@/app/(data)/Templet'
import React from 'react'
import FormSection from '../_components/FormSection'
import { Template } from '@/app/_compenents/TempletSection'
import OutputSection from '../_components/OutputSection'
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'


interface PORPS{
    params:{
        'template-slug':string
      }
}

function CreateContent(props:PORPS){

  function GernarateContent(fordata:any){
    
  }
 

  const selectedTemplate:Template|undefined=Templet.find((item=>item.slug==props.params['template-slug']));
  console.log("finds lug ",selectedTemplate);
  return (
    <div className='p-3 '>
      <Link href="/dashboard">
      <Button className=''>
        <ArrowLeft className=''></ArrowLeft>Back</Button></Link>
    <div className='grid mt-2 md:grid-cols-3 grid-cols-1 gap-2 '>
        <FormSection userFormInput={(v:any)=>GernarateContent(v)} selectedTemplate={selectedTemplate} ></FormSection>
        <div className='h-full col-span-2  '><OutputSection ></OutputSection></div>
        
    </div>
    </div>
  )
}

export default CreateContent;