import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useQuery, useMutation, useQueryClient } from 'react-query';
import Comment from './Comment'
import CommentForm from './CommentForm'
import H1 from './H1'
import { config } from '../config/environment'



const Comments = ({ postSlug }) => {
    // const [comments, setComments] = useState([])
    const [activeComment, setActiveComment] = useState(null)
    const queryClient = useQueryClient()
    
    const {data: comments} = useQuery(['comments', postSlug],
    async () => {
        const res = await axios.get(`${config.base_url}comments/get/${postSlug}`)
        return res.data.comments
    }
    )
    const parentComments = comments && comments.filter((comment) => comment.reply_comment_id == null)

    const getReplies = comment_id => {
        return comments.filter((replies) => replies.reply_comment_id === comment_id)
        .sort((a, b) => new Date(a.created_on).getTime() - new Date(b.created_on).getTime())
    } 


    //   const addCommentMutation = useMutation(({formData, postSlug}) => {
    //     axios.post(`${config.base_url}comment/create/${postSlug}`, formData)
    //     .then(response => {
    //         return response.data
    //     })
    //   },
    //   {
    //     onSuccess: (data) => {
    //         console.log("Data received on add comment success:", data);
    //         queryClient.setQueryData(['comments', postSlug], (oldComments) => [data.comment, ...oldComments]);
    //         setActiveComment(null)
    //     }
    //   }
    //   )

    const addCommentMutation = useMutation(
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
            console.log("On Success data:", data);
            queryClient.setQueryData(['comments', postSlug], (oldComments) => [data.comment, ...oldComments]);
            setActiveComment(null)
          },
          onError: (error) => {
            console.log("On Error:", error);
          }
        }
      );

      
    const onAddComment = (text, comment_id) => {
        const formData = {"comment": text, comment_id}
        addCommentMutation.mutate({formData, postSlug})  
    };

    const handleDeleteComment = async(comment_id) => {
       return await fetch(
            `${config.base_url}comment/delete/${comment_id}`, {
          method: 'DELETE',        
        }).then(response => response.json())
    } 

    const deleteCommentMutation = useMutation(
       (comment_id)  => axios.delete(`${config.base_url}comment/delete/${comment_id}`),
       {
        onSuccess: (_, comment_id) => {
            queryClient.setQueryData(['comments', postSlug], (oldComments) => oldComments.filter(comment => comment.id  != comment_id))
        }
       }
    )

    const onDeleteComment = (comment_id) => {
        deleteCommentMutation.mutate(comment_id)
    };

    const updateCommentMutation = useMutation(
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
            console.log("On Success data:", data);
            queryClient.setQueryData(['comments', postSlug], (oldComments) => {
                oldComments.map((commentToUpdate) => {
                    if (commentToUpdate.id == data.comment.id){
                        return { ...commentToUpdate, body: data.comment };
                    }
                    return commentToUpdate
                })
                setActiveComment(null)
            })
          },
          onError: (error) => {
            console.log("On Error:", error);
          },
          optimisticUpdates: false
        }
      );

    const onUpdateComment = (text, comment_id) => {
        const formData = { "comment": text, comment_id };
        updateCommentMutation.mutate({ formData, comment_id });
      };
 


  return (
    <div id='comments' className='p-4 sm:p-6 rounded-lg border border-gray-200 shadow-sm my-5 sm:my-10 dark:border-gray-700'>
    <div>
        <H1 text='Comment Form' />
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