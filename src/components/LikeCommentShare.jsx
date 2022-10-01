import React, {useEffect, useState}from 'react'
import { Link } from 'react-router-dom'
import { FaRegComment,FaRegHeart, FaHeart, FaRegShareSquare } from 'react-icons/fa'
import { baseUrl } from './baseUrl'


const LikeCommentShare = ({ postSlug }) => {
    const [like, setLike] = useState(false)
    const [post, setPost] = useState(null)


    useEffect(() => {
        const getPost = async () => {
          const response = await fetch(`${baseUrl}get/comments/likes/${postSlug}`)
                            .then((res) => res.json())
         const { post } = response
         setPost(post)
         setLike(post.has_like)
        }

        getPost()

    }, [like, postSlug])



    const handleLike = async () => {
        return await fetch(`${baseUrl}post/like/${postSlug}`,{
                    method: 'PUT',
                    headers: {"Content-Type": "application/json"},
                }).then((res) => res.json())

    }

    const handleUnLike = async () => {
        return  await fetch(`${baseUrl}post/unlike/${postSlug}`, {
                    method: 'DELETE',
                    headers: {"Content-Type": "application/json"}, 
                }).then((res) => res.json())
    }


    const onLike = () => {
        if (!like) {
            handleLike().then((data) => {
                const { post } = data
                setPost({...post, likes: post.likes})
                setLike(like => !like)
            }
            ).catch((err) => {
                console.log(err)
               })  
               
        } else {
            handleUnLike().then((data) => {
                const { post } = data
                setPost({...post, likes: post.likes})
                setLike(like => !like)
           }
           ).catch((err) => {
            console.log(err)
           })
        }
    }



  return (
    <div className='mt-32 h-[15rem] flex flex-col gap-6 text-2xl sticky top-32 py-6 px-4 rounded-lg bg-gray-100 text-gray-800'>
        <div className='flex flex-col items-center gap-2'>
           <p className={`${!like ? "hover:text-red-500": "text-red-500"}`} onClick={onLike}>{!like ? <FaRegHeart />: <FaHeart/>}</p>
            <p className='text-xs '>{post && post.likes}</p>
        </div>
        <div className='flex flex-col items-center gap-2'>
         <a href='#comments' className='hover:text-cyan-500'> <FaRegComment /></a>
            <p className='text-xs '>{post && post.comments}</p>
        </div>
        <div className='flex flex-col items-center gap-2'>
           <p className='hover:text-purple-500'> <FaRegShareSquare /></p>
            <p className='text-xs '>22</p>

        </div>
    </div>
  )
}

export default LikeCommentShare