import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useQuery, useMutation, useQueryClient } from 'react-query';
import Comment from './Comment'
import CommentForm from './CommentForm'
import H1 from './H1'
import Pagination from './Pagination';
import { config } from '../config/environment'



const Comments = ({ postSlug }) => {
    const [pageNumber, setPageNumber] = useState(1)
    const [activeComment, setActiveComment] = useState(null)
    const queryClient = useQueryClient()
    
    const {data} = useQuery(['comments', postSlug, pageNumber],
    async () => {
        const res = await axios.get(`${config.base_url}comments/get/${postSlug}?page=${pageNumber}`)
        return res.data
    },{
      keepPreviousData: true
    }
    )
    const parentComments = data?.comments && data.comments.filter((comment) => comment.reply_comment_id == null)

    const getReplies = comment_id => {
        return data?.comments.filter((replies) => replies.reply_comment_id === comment_id)
        .sort((a, b) => new Date(a.created_on).getTime() - new Date(b.created_on).getTime())
    } 

    const {mutate:addComment, isLoading: addCommentLoading} = useMutation(
        ({ formData, postSlug }) =>
          axios.post(`${config.base_url}comment/create/${postSlug}`, formData)
            .then((response) => {
              return response.data;
            })
            .catch((error) => {
              throw error;
            }),
        {
          onSuccess: (data) => {
            queryClient.setQueryData(['comments', postSlug, pageNumber], (oldComments) => [data.comment, ...oldComments]);
            setActiveComment(null)
          },
          onError: (error) => {
            console.log("On Error:", error);
          }
        }
      );

      
    const onAddComment = (text, comment_id) => {
        const formData = {"comment": text, comment_id}
          addComment({formData, postSlug})  
    };


    const  {mutate:deleteComment, isLoading: deleteCommentLoading}  = useMutation(
       (comment_id)  => axios.delete(`${config.base_url}comment/delete/${comment_id}`),
       {
        onSuccess: (_, comment_id) => {
            queryClient.setQueryData(['comments', postSlug, pageNumber], (oldComments) => oldComments.filter(comment => comment.id  != comment_id))
        }
       }
    )

    const onDeleteComment = (comment_id) => {
        deleteComment(comment_id)
    };

    const  {mutate:updateComment, isLoading: updateCommentLoading}  = useMutation(
        ({ formData, comment_id }) =>
          axios.put(`${config.base_url}comment/update/${comment_id}`, formData)
            .then((response) => {
              return response.data;
            })
            .catch((error) => {
              throw error;
            }),
        {
          onSuccess: (data) => {
            queryClient.invalidateQueries(['comments', postSlug])
            queryClient.setQueryData(['comments', postSlug, pageNumber], (oldComments) => {
              oldComments.map((commentToUpdate) => {
                if (commentToUpdate.id === data.comment.id) {
                  return { ...commentToUpdate, body: data.comment.body };
                }
                return commentToUpdate;
              })
                setActiveComment(null)
            })
          },
          onError: (error) => {
            console.log("On Error:", error);
          },
        }
      );

    const onUpdateComment = (text, comment_id) => {
        const formData = { "comment": text, comment_id };
        updateComment({ formData, comment_id });
      };
 


  return (
    <div id='comments' className='p-4 sm:p-6 rounded-lg border border-gray-200 shadow-sm my-5 sm:my-10 dark:border-gray-700'>
    <div>
        <H1 text='Comment Form' />
        <CommentForm labelText='Add Comment'  
        handleSubmit={onAddComment} 
        addCommentLoading={addCommentLoading} 
        deleteCommentLoading={deleteCommentLoading} 
        updateCommentLoading={updateCommentLoading}/>
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
     <Pagination setPageNumber={setPageNumber} data={data}/>
    </div>
  )
}

export default Comments