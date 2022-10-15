import React,{useState, useContext}from 'react'
import MDEditor, { commands }  from "@uiw/react-md-editor";
import { baseUrl } from '../../components/baseUrl';
import { AuthContext } from '../../contexts/ContextProvider';
import { useLocation } from 'react-router-dom';
import { H1 } from '../../components';

const AdminCreatePost = () => {
    const state = useLocation().state
    const tags = state?.tags ? state.tags.map(tag => tag.name) : ""
    const [data, setData] = useState({"category": state?.category.name || "", "tags": tags, "title": state?.title || ""})
    const [imageFile, setImageFile] = useState(null)
    const [postBody, setPostBody] = useState(state?.body || "")

    const { currentUser } = useContext(AuthContext)
    console.log(currentUser?.access_token)
    const token ="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTY2NTY5NjMwMiwianRpIjoiN2JlZTE0ZDgtOWE3Mi00YTZmLWE2ZDQtZWZmM2ZjZTlhYjU2IiwidHlwZSI6ImFjY2VzcyIsInN1YiI6ImJia3JtdWhkc2FkZGlxQGdtYWlsLmNvbSIsIm5iZiI6MTY2NTY5NjMwMiwiY3NyZiI6ImE2ZDhiOGUxLTBhZTYtNGI0Mi1iNmU2LTUxMzMwODk5YzYyMSIsImV4cCI6MTY2NjMwMTEwMn0.wYVFHsfrbXiV9L5L4jhRMQ_TRQUvBV7CIqDIkRjYwP0"




    const handleChange = e => {
      console.log(e.target.name, e.target.value)
      setData(prev => ({...prev, [e.target.name]: e.target.value}))
    }

    const addPost = async() => {
      const formData = new FormData();
      const  {category, tags, title} = data
      formData.append("category", category)
      formData.append("tags", tags)
      formData.append("title", title)
      formData.append("photo", imageFile)
      formData.append("body", postBody)
      try {
       state 
        ? await fetch(`${baseUrl}post/update/${state.slug}`, {
          method: "PUT",
          body: formData,
          headers: {
            Authorization : `Bearer ${token}`
          }
        }).then(response => console.log(response))

        : await fetch(`${baseUrl}post/create`, {
          method: "POST",
          body: formData,
          headers: {
            Authorization : `Bearer ${token}`
          }
        }).then(response => console.log(response))
        
      } catch (error) {
        console.log(error);
      }
    }

    const handleSubmit = e => {
      e.preventDefault()
      addPost()
      state ? ""
      :
      (setData({"category": "", "tags": "", "title": ""}),
      setImageFile(null),
      setPostBody("")
      )
    }

  return (
    <div className='h-full'>
     
        <div className='flex flex-col gap-2 sm:w-[80%] sm:mx-auto shadow-sm p-4 sm:p-6 shadow-gray-200'>
        <div className='flex items-center justify-between'>
          <div><H1 text={state ? "Editing" :  "New Post"} /></div>
          <button onClick={handleSubmit} className='sm:my-2 py-2 px-6 text-gray-700 bg-gray-100 rounded-lg text-sm sm:text-base shadow-md hover:bg-gray-200 hover:text-cyan-700'>Publish</button></div>
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4'>
          <div className='flex flex-col gap-4 text-gray-700 my-2'>
                <label htmlFor="category" className='bg-gray-100 px-2 py-1 rounded-sm shadow'>Category:</label>
                <input id='category'name='category' type="text" value={data.category} onChange={handleChange} placeholder="name of category" className='py-1 text-gray-700 shadow-sm  rounded-lg focus:border-cyan-700 focus:outline-none focus:ring-cyan-500'/>
                </div>
                
                <div className='flex flex-col gap-4 text-gray-700 my-2'>
                <label htmlFor="tags" className='bg-gray-100 px-2 py-1  rounded-sm shadow'>Tags:</label>
                <input id='tags' name='tags' type="text" value={data.tags} onChange={handleChange}  placeholder="comma separated name of tags" className='py-1 text-gray-700 shadow-sm  rounded-lg focus:border-cyan-700 focus:outline-none focus:ring-cyan-500'/>
                </div>
                <div className='flex flex-col gap-4 text-gray-700 my-2'>
                <label htmlFor="title" className='bg-gray-100 px-2 py-1  rounded-sm shadow'>Title:</label>
                <input id='title' name='title' type="text" value={data.title} onChange={handleChange} placeholder="title of the article" className=' py-1 text-gray-700 shadow-sm  rounded-lg focus:border-cyan-700 focus:outline-none focus:ring-cyan-500'/>
                </div>
                <div className='flex flex-col gap-2 text-gray-700 my-2'>
                <label htmlFor="image" className='bg-gray-100 px-2 py-1  rounded-sm shadow'>Image:</label>
                <input type="file" name="image" id="image" onChange={e => setImageFile(e.target.files[0])}  />
                </div>
          </div>
           
               
                <div className='text-gray-700 my-2'>
                 <MDEditor
                  value={postBody}
                  onChange={setPostBody}
                  textareaProps={{
                    placeholder: "Please enter Markdown text"
                  }}
                  height={500}
                />
              </div>
                
        </div>
    </div>
  )
}

export default AdminCreatePost