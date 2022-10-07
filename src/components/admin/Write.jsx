import React, {useState} from 'react';
import ReactDOM from "react-dom";
import MDEditor, { commands }  from "@uiw/react-md-editor";
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'


const Write = () => {
    const [value, setValue] = useState("")
    console.log(value)

  return (
    <>
    <div className="container md:overflow-hidden overflow-auto md:hover:overflow-auto">
    <MDEditor
        value={value}
        onChange={setValue}
      />
      </div>


    <div className='container'>
    <ReactMarkdown children={value} remarkPlugins={[remarkGfm]} />
    </div>
    </>
    
  )
}

export default Write