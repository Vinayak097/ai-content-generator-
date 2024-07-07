
import React, { useEffect, useState } from 'react'
import Templet from '../(data)/Templet'
import TempletCard from './TempletCard'

export interface Template{
    name:string,
    desc:string,
    icon:string,
    category:string,
    slug:string,
    aiPrompt:string,
    form?:FORM[]
}
type FORM={
    label:string,
    field:string,
    name:string,
    required?:boolean
}
function TempletSection({userInput}:{userInput:string}) {
  const [templetList,setTempletList]=useState(Templet);
  useEffect(() => {
    console.log(typeof userInput)
    if(userInput){
      let filterdata=Templet.filter(item=>(item.name.toLowerCase().includes(userInput.toLowerCase())))
      console.log("length of filter data " , filterdata.length)
      setTempletList(filterdata);
    }else{
      console.log("userinput empyt",userInput)
      setTempletList(Templet);
    }
  
    
  }, [userInput])
  

  
  return (
    <div className='grid grid-col-2 md:grid-cols-3 lg:grid-cols-4 gap-5 m-2 '>
        {templetList?.map((item:Template,index:number)=>(
            <TempletCard key={index} {...item}></TempletCard>
        ))}
        
    </div>
  )
}

export default TempletSection