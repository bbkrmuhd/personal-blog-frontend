import React,{useState}from 'react'
import MDEditor, { commands }  from "@uiw/react-md-editor";

const AdminCreatePost = () => {
    const [data, setData] = useState({"title": "", "body": ""})
    const [value, setValue] = useState("")
  return (
    <div className='h-full'>
        <div className='flex flex-col gap-2 w-[80%] mx-auto shadow-sm p-4 sm:p-6 shadow-gray-200'>
                <div className='flex gap-2 items-center text-gray-700 my-2'>
                <label htmlFor="title">Title:</label>
                <input id='title' type="text" className='py-1 text-gray-700 shadow-sm  rounded-lg focus:border-cyan-700 focus:outline-none focus:ring-cyan-500'/>
                </div>
                <div className='flex gap-2 items-center text-gray-700 my-2'>
                <label htmlFor="title">Tags:</label>
                <input id='title' type="text" className='py-1 text-gray-700 shadow-sm  rounded-lg focus:border-cyan-700 focus:outline-none focus:ring-cyan-500'/>
                </div>
                <div className='text-gray-700 my-2'>
                <MDEditor
                  value={value}
                  onChange={setValue}
                />
              </div>
                
        </div>
    </div>
  )
}

export default AdminCreatePost