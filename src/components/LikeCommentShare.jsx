import React, {useState}from 'react'
import axios from 'axios'
import { useQuery, useMutation, useQueryClient } from 'react-query'
import { FaRegComment,FaRegHeart, FaHeart, FaRegShareSquare } from 'react-icons/fa'
import {config} from '../config/environment'

const LikeCommentShare = ({ postSlug }) => {
    const queryClient = useQueryClient()
    const [like, setLike] = useState(JSON.parse(localStorage.getItem('has_like_' + postSlug)) || false)

    const {data: post} = useQuery(['likes', postSlug], async() => {
        const res = await axios.get(`${config.base_url}get/comments/likes/${postSlug}`)
        return res.data.post
    },{
        initialData: JSON.parse(localStorage.getItem('post_' + postSlug))
    })

    const likeMutation = useMutation(
        () =>  axios.put(`${config.base_url}post/like/${postSlug}`)
        .then((res) => res.data),
        {
            onSuccess: (data) => {
                queryClient.setQueryData(['likes', postSlug], data.post)
                localStorage.setItem('post_' + postSlug, JSON.stringify(data.post))
                setLike(true)
                localStorage.setItem('has_like_' + postSlug, JSON.stringify(true))
            },
            onError: (err) => {
                console.log(err)
            }
        }
    );

    const unlikeMutation = useMutation(
        () => axios.delete(`${config.base_url}post/unlike/${postSlug}`)
        .then((res) => res.data),
        {
            onSuccess: (data) => {
                queryClient.setQueryData(['likes', postSlug], data.post)
                localStorage.setItem('post_' + postSlug, JSON.stringify(data.post))
                setLike(false)
                localStorage.setItem('has_like_' + postSlug, JSON.stringify(false))
            },
            onError: (err) => {
                console.log(err)
            }
        }
    );

    const onLike = () => {
        if (!like) {
            likeMutation.mutate()
        } else {
            unlikeMutation.mutate()
        }
    }


  return (
    <div className='sm:mt-32 sm:h-[16rem] flex sm:flex-col gap-6 sm:text-2xl fixed w-full justify-around bottom-0 left-0 sm:sticky sm:justify-start sm:w-auto sm:top-32 sm:bottom-32 py-3 sm:py-4 sm:px-2 sm:rounded-lg bg-white sm:bg-gray-100 text-gray-800 bg-opacity-90 z-10 dark:bg-gray-800 dark:text-white'>
        <div className='flex flex-col items-center '>
           <p className={`${!like ? "hover:text-red-600 hover:bg-red-100 p-2 rounded-full": "text-red-600  p-2 "}`} onClick={onLike}>{!like ? <FaRegHeart />: <FaHeart/>}</p>
            <p className='text-xs'>{post && post.likes}</p>
        </div>
        <div className='flex flex-col items-center '>
         <a href='#comments' className='hover:text-cyan-600 hover:bg-cyan-100 p-2 rounded-full'> <FaRegComment /></a>
            <p className='text-xs '>{post && post.comments}</p>
        </div>
        <div className='flex flex-col items-center '>
           <p className='hover:text-purple-600 hover:bg-purple-100 p-2 rounded-full'> <FaRegShareSquare /></p>
            <p className='text-xs '>22</p>

        </div>
    </div>
  )
}

export default LikeCommentShare;