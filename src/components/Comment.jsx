import React from 'react'
import CommentForm from './CommentForm';
import {RiReplyAllFill} from 'react-icons/ri'
import {MdDelete, MdEdit} from 'react-icons/md'
import ToTime from './ToTime';


const Comment = ({ comment, 
                  replies, 
                  authorID, 
                  onDeleteComment,
                  activeComment, 
                  onUpdateComment,
                  setActiveComment, 
                  reply_id = null,
                  onAddComment}) => {
    
    const timeOut = 60 * 60 ;
    const moderateTimeValid = new Date() - new Date(comment.created_on) > timeOut
    const canReply = Boolean(authorID)
    const canModerate = comment.author_id == authorID && !moderateTimeValid

    const isReplying = activeComment && 
      activeComment.type == "replying" 
      && activeComment.id == comment.id


    const isEditing = activeComment && 
      activeComment.type == "editing" && 
      activeComment.id == comment.id
      
    const replyId = reply_id ? reply_id : comment.id 


  return (
    <>
    <div className='p-4 my-4 flex flex-col sm:gap-4 bg-white border border-gray-200 shadow-sm w-full rounded-lg'>
      <div className='flex items-center justify-between'>
        <div className='flex items-center gap-2 text-gray-500 text-xs'>
                      <img className='w-12 transition-all duration-150 hover:scale-105' src="https://avatars.githubusercontent.com/u/68012668?v=4" alt="" />
                      <p className='font-bold text-gray-900'>Ameer</p>-
                      <ToTime date={comment.created_on}/>
                    
        </div>
        <div className='flex items-center gap-2 font-bold'>
      
          {canReply &&  <button className='flex items-center gap-2 text-cyan-700 hover:text-cyan-900 text-sm '
           onClick={() => setActiveComment({id: comment.id, type: "replying"})}>  <span><RiReplyAllFill/></span>Reply</button>}
            
       
        {canModerate &&  <button  className='flex items-center gap-2 text-gray-700 hover:text-gray-900 text-sm text-bold'
           onClick={() => setActiveComment({id: comment.id, type: "editing"})}> <span><MdEdit/></span> Edit</button>}
         
     
        {canModerate &&  <button className='flex items-center gap-2 text-red-700 hover:text-red-900 text-sm text-bold'
           onClick={() => onDeleteComment(comment.id)} >   <span><MdDelete/></span>Delete</button>}
           
      </div>
      </div>
      {!isEditing && <p className='py-1 sm:py-2 text-gray-900'> {comment.body} </p>}
      {isEditing && <CommentForm labelText='Update' 
                    handleSubmit={(text) => onUpdateComment(text, comment.id)}
                    initialText={comment.body}
                    hasCancelButton={true}
                    handleCancel={() => setActiveComment(null)}
                    setActiveComment={setActiveComment}/>}
    </div>
    <div>
      {isReplying && 
        <CommentForm labelText='Reply' 
        handleSubmit={(text) => onAddComment(text, replyId)}
        hasCancelButton={true}
        handleCancel={() => setActiveComment(null)} 
        setActiveComment={setActiveComment}/>
      }
    </div>
    <div className='ml-16'>
    {replies.length > 0 && (
        replies.map((reply) => (
            <Comment key={reply.id} comment={reply} replies={[]} 
            authorID={reply.author_id} 
            reply_id={comment.id} 
            onAddComment={onAddComment}
            activeComment={activeComment}
            onUpdateComment={onUpdateComment}
            setActiveComment={setActiveComment} 
            onDeleteComment={onDeleteComment}
            />
        ))
    )}
    </div>
    </>
    
  )
}

export default Comment