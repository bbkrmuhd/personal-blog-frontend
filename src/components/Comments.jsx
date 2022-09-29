import React, { useEffect, useState } from 'react'
import Comment from './Comment'
import CommentForm from './CommentForm'



const Comments = ({ postSlug }) => {
    const [comments, setComments] = useState([])
    const [activeComment, setActiveComment] = useState(null)



    const parentComments = comments.filter((comment) => comment.reply_comment_id == null)

    const getReplies = comment_id => {
        return comments.filter((replies) => replies.reply_comment_id === comment_id)
        .sort((a, b) => new Date(a.created_on).getTime() - new Date(b.created_on).getTime())
    } 

    useEffect(() => {
        async function getComment(postSlug){
            const response = await fetch(
                `http://127.0.0.1:5000/api/v1/comments/get/${postSlug}`)
                .then((response) => response.json())
            

            const { comments, prev_url, next_url} = response
            setComments(comments)
        }
        getComment(postSlug)
    } , [postSlug])


    const handleAddComment =  async (formData, slug) => {
      return   await fetch(
            `http://127.0.0.1:5000/api/v1/comment/create/${slug}`, {
          method: 'POST',
          headers: {"Content-Type": "application/json"},
          body: JSON.stringify(formData)
        
        }).then(response => response.json())

      }

      
    const onAddComment = (text, comment_id) => {
        const formData = {"comment": text, comment_id}
        console.log(formData)
        handleAddComment(formData, postSlug).then(({comment}) =>  {
            setComments([comment, ...comments])
            setActiveComment(null)
        }    
        ).catch((e) => console.log(e))
       
  
    }
    const handleDeleteComment = async(comment_id) => {
       return await fetch(
            `http://127.0.0.1:5000/api/v1/comment/delete/${comment_id}`, {
          method: 'DELETE',        
        }).then(response => response.json())


    } 

    const onDeleteComment = (comment_id) => {
        console.log(comment_id)
        handleDeleteComment(comment_id).then(() => {
            const updatedComments = comments.filter((
                comment) =>  comment.id !== comment_id)
            setComments(updatedComments)

        }
        )
    }

    const handleUpdateComment = async(formData, comment_id) => {
        return await fetch(
            `http://127.0.0.1:5000/api/v1/comment/update/${comment_id}`, {
          method: 'PUT',
          headers: {"Content-Type": "application/json"},
          body: JSON.stringify(formData)        
        }).then(response => response.json())
    } 

    const onUpdateComment = (text, comment_id) => {
        const formData = {"comment": text, comment_id}
        console.log(comment_id)
        handleUpdateComment(formData, comment_id).then(({ comment }) => {
            const updatedComments = comments.map((commentToUpdate) => {
                if (commentToUpdate.id === comment.id){ 
                   return {...commentToUpdate, body: text}
                }
                return commentToUpdate
            })
            setComments(updatedComments)
            setActiveComment(null)
        }
        )
    }

 


  return (
    <div className=''>
    <div>
        <p>comment form</p>
        <CommentForm labelText='Add Comment'  handleSubmit={onAddComment}/>

    </div>
    {parentComments && parentComments.map(parentComment => (
        <Comment key={parentComment.id} 
        comment={parentComment} 
        replies={getReplies(parentComment.id)} 
        authorID={parentComment.author_id}
        onAddComment={onAddComment}
        activeComment={activeComment}
        onDeleteComment={onDeleteComment}
        onUpdateComment={onUpdateComment}
        setActiveComment={setActiveComment}
        />
    ))}
    </div>
  )
}

export default Comments