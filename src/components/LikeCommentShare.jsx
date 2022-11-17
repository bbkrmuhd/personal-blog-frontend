import React, {useEffect, useState}from 'react'
import { Link } from 'react-router-dom'
import { FaRegComment,FaRegHeart, FaHeart, FaRegShareSquare } from 'react-icons/fa'
import {loadJSON} from '../services/LoadJSON'
import {saveJSON} from '../services/SaveJSON'
import {config} from '../config/environment'


const LikeCommentShare = ({ postSlug }) => {
    const [like, setLike] = useState(JSON.parse(localStorage.getItem('has_like')) || false)
    const [post, setPost] = useState(null)


    useEffect(() => {
        const getPost = async () => {
          const response = await fetch(`${config.base_url}get/comments/likes/${postSlug}`)
                            .then((res) => res.json())
         const { post } = response
         setPost(post)
         setLike(like)
        }

        getPost()

    }, [like, postSlug])



    const handleLike = async () => {
        return await fetch(`${config.base_url}post/like/${postSlug}`,{
                    method: 'PUT',
                    headers: {"Content-Type": "application/json"},
                }).then((res) => res.json())

    }

    const handleUnLike = async () => {
        return  await fetch(`${config.base_url}post/unlike/${postSlug}`, {
                    method: 'DELETE',
                    headers: {"Content-Type": "application/json"}, 
                }).then((res) => res.json())
    }


    const onLike = () => {
        if (!like) {
            handleLike().then((data) => {
                const { post } = data
                setPost({...post, likes: post.likes})
                saveJSON('has_like', true)
                // localStorage.setItem(key, JSON.stringify(value))
                setLike(like => !like)
            }
            ).catch((err) => {
                console.log(err)
               })  
               
        } else {
            handleUnLike().then((data) => {
                const { post } = data
                setPost({...post, likes: post.likes})
                saveJSON('has_like', false)
                // localStorage.setItem(key, JSON.stringify(value))
                setLike(like => !like)
           }
           ).catch((err) => {
            console.log(err)
           })
        }
    }



  return (
    <div className='sm:mt-32 sm:h-[16rem] flex sm:flex-col gap-6 sm:text-2xl fixed w-full justify-around bottom-0  sm:sticky sm:justify-start sm:w-auto sm:top-32 sm:bottom-32 py-3 sm:py-4 sm:px-2 sm:rounded-lg bg-white sm:bg-gray-100 text-gray-800 bg-opacity-90 z-10 dark:bg-gray-800 dark:text-white'>
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

export default LikeCommentShare