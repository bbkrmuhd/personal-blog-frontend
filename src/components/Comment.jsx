import React from 'react'
import CommentForm from './CommentForm';

const Comment = ({ comment, 
                  replies, 
                  authorID, 
                  onDeleteComment,
                  activeComment, 
                  onUpdateComment,
                  setActiveComment, 
                  reply_id = null,
                  onAddComment}) => {
    
    const timeOut = 60000 * 10000;
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
    <div className='px-4 py-2  my-2'>
      {!isEditing && <p> {comment.body} </p>}
      {isEditing && <CommentForm labelText='Update' 
                    handleSubmit={(text) => onUpdateComment(text, comment.id)}
                    initialText={comment.body}
                    handelCancelButton
                    handleCancel={() => setActiveComment(null)}
                    setActiveComment={setActiveComment}/>}
       
        <p>{comment.created_on}</p>
        <div className='flex gap-1'>
           {canReply &&  <button className='bg-gray-200 text-gray-900  text-xs px-2 py-1 rounded-md hover:bg-gray-300' 
           onClick={() => setActiveComment({id: comment.id, type: "replying"})}>reply</button>}
           {canModerate &&  <button className='bg-gray-200 text-gray-900   text-xs px-2 py-1 rounded-md hover:bg-gray-300 ' 
           onClick={() => setActiveComment({id: comment.id, type: "editing"})}>edit</button>}
           {canModerate &&  <button className='bg-gray-200 text-gray-900 text-xs px-2 py-1 rounded-md hover:bg-gray-300' 
           onClick={() => onDeleteComment(comment.id)} >delete</button>}
    
        </div>
    </div>
    <div>
      {isReplying && (
        <CommentForm labelText='Reply' 
        handleSubmit={(text) => onAddComment(text, replyId)} 
        setActiveComment={setActiveComment}/>
      )}
    </div>
    <div className='ml-20'>
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