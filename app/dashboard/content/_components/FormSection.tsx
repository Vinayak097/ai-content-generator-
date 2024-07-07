"use client"
import { Template } from '@/app/_compenents/TempletSection'
import React from 'react'


interface POPS{
    selectedTemplate:Template
}

function FormSection(selectedTemplate:POPS) {
    console.log(selectedTemplate?.selectedTemplate?.name)
  return (
    <div>
        {selectedTemplate?.selectedTemplate?.name}
    </div>
  )
}

export default FormSection