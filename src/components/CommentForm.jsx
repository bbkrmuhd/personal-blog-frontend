import React, { useState }from 'react'

const CommentForm = ({ handleSubmit, labelText, initialText="", handleCancelButton=false, handleCancel}) => {
    const [text, setText] = useState(initialText)
    const isDisabled = text.length === 0

    const onSubmit = (e) => {
        e.preventDefault()
        handleSubmit(text)
        setText("")
    }
  return (
    <form onSubmit={onSubmit}>
        <div>
        <div>
        <textarea name="comment" 
            id="comment" 
            cols="30" 
            rows="3" 
            value={text} 
            onChange={(e) =>  
            setText(e.target.value) }
             className=''>
        </textarea>
        </div>
        <div>
        <button className='bg-cyan-700 text-white px-4 py-2 text-sm rounded-lg hover:bg-cyan-800 ' 
        disabled={isDisabled} >{labelText}</button>
        {handleCancelButton &&  (
            <button className='bg-gray-700 text-white px-4 py-2  text-sm rounded-lg hover:bg-cyan-800 ' 
            disabled={isDisabled} 
            onClick={handleCancel} >Cancel</button>
        )}
        </div>

        </div>            

</form>
  )
}

export default CommentForm