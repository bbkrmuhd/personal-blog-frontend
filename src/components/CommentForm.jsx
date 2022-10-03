import React, { useState }from 'react'

const CommentForm = ({ handleSubmit, labelText, initialText="", hasCancelButton=false, handleCancel}) => {
    const [text, setText] = useState(initialText)
    const isDisabled = text.length === 0

    const onSubmit = (e) => {
        e.preventDefault()
        handleSubmit(text)
        setText("")
    }
  return (
      <form onSubmit={onSubmit}  className='flex flex-col sm:flex-row items-start justify-center sm:gap-4 p-4 bg-white border border-gray-200 shadow-sm w-full rounded-lg'>
        <div className='flex items-start gap-2 sm:w-4/5'>
        <img className='w-10 sm:w-12 transform hover:scale-105' src="https://avatars.githubusercontent.com/u/68012668?v=4" alt="" />
        <div className='w-full'>
        <textarea name="comment" 
            id="comment" 
            value={text} 
            onChange={(e) =>  
            setText(e.target.value) }
            placeholder='Add a comment'
             className='border-1 border-gray-200 focus:border-cyan-700 focus:ring-cyan-700 w-full sm:h-28 rounded-md'>
        </textarea>
        </div>
        </div>
        
      
        <div className='flex justify-end w-full mt-2 sm:mt-0 sm:justify-start sm:w-auto sm:flex-col gap-2'>
        <button className='bg-cyan-700 text-white  px-2 py-1 sm:px-4 sm:py-2 text-xs rounded-md hover:bg-cyan-800 hover:drop-shadow-md' 
        disabled={isDisabled} >{labelText}
        </button>
        {hasCancelButton &&  (
            <button className='bg-gray-200 text-gray-900 px-2 py-1 sm:px-4 sm:py-2 text-xs rounded-md hover:bg-gray-300 hover:drop-shadow-md' 
            onClick={handleCancel} >Cancel
            </button>
        )}
        </div>          
</form>

  )
}

export default CommentForm