import React, {useState} from 'react';
import ReactDOM from "react-dom";
import MDEditor, { commands }  from "@uiw/react-md-editor";
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'


const Write = () => {
    const [value, setValue] = useState("")

  return (
    <>
      <MDEditor
          value={value}
          onChange={setValue}
        />
    </>
    
  )
}

export default Write