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
      <form onSubmit={onSubmit}  className='flex items-start justify-center sm:gap-4 p-4 bg-white border border-gray-200 shadow-sm w-full rounded-lg'>
      <div> <img className='w-12 transform hover:scale-105' src="https://avatars.githubusercontent.com/u/68012668?v=4" alt="" />
      </div> 
        <div className='w-2/3'>
        <textarea name="comment" 
            id="comment" 
            value={text} 
            onChange={(e) =>  
            setText(e.target.value) }
            placeholder='Add a comment'
             className='border-1 border-gray-200 focus:border-cyan-700 focus:ring-cyan-700 w-full sm:h-28 rounded-md'>
        </textarea>
        </div>
        <div className='flex flex-col gap-2'>
        <button className='bg-cyan-700 text-white px-4 py-2 text-xs rounded-md hover:bg-cyan-800 hover:drop-shadow-md' 
        disabled={isDisabled} >{labelText}
        </button>
        {hasCancelButton &&  (
            <button className='bg-gray-200 text-gray-900 px-4 py-2 text-xs rounded-md hover:bg-gray-300 hover:drop-shadow-md' 
            disabled={isDisabled} 
            onClick={handleCancel} >Cancel
            </button>
        )}
        </div>          
</form>

  )
}

export default CommentForm