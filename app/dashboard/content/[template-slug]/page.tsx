
import Templet from '@/app/(data)/Templet'
import React from 'react'
import FormSection from '../_components/FormSection'


interface PORPS{
    params:{
        'template-slug':string
    }
}
function CreateContent(props:PORPS) {
    const selectedTemplate:any=Templet.find((item=>item.slug==props.params['template-slug']))

  return (
    <div>
        <FormSection selectedTemplate={selectedTemplate} ></FormSection>
    </div>
  )
}

export default CreateContent