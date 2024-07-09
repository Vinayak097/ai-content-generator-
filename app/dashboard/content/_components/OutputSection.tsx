import React from 'react'
import '@toast-ui/editor/dist/toastui-editor.css';

import { Editor } from '@toast-ui/react-editor';
import { Copy } from 'lucide-react';
import { Button } from '@/components/ui/button';
function OutputSection() {
  return (
    <div>
      <div className='border rounded-md  flex justify-between  p-2'>
        <h1 className='text-xl'>Result</h1>
        <Button ><Copy></Copy><span className='pl-1'>Copy</span></Button>
      </div>
       <Editor
    initialValue="hello react editor world!"
   
    height="470px"
    initialEditType="markdown"
    useCommandShortcut={true}
  />
    </div>
  )
}

export default OutputSection