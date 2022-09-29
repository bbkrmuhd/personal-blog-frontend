import React from 'react'
import { Link } from 'react-router-dom'
import {MdDateRange} from 'react-icons/md'
import ToDate from './ToDate'
import Fetch from '../hooks/Fetch'




export const LatestPostsList = ({ post }) => {
  return (
    <div className='flex flex-col h-32 gap-6 bg-gray-50 rounded-lg shadow-sm shadow-gray-200 my-4'>
        <div className='flex flex-auto gap-2 '>
            <div className='flex-none w-20 relative'>
            <Link to={`/post/detail/${post.slug}`}>    <img className='inset-0 absolute w  -full h-full object-cover rounded-l-lg transition-all hover:scale-105' src="https://images.pexels.com/photos/3912477/pexels-photo-3912477.jpeg?auto=compress&cs=tinysrgb&w=800" alt="post image" loading='lazy' /></Link>
            </div>
            <div className='flex-auto p-2'>
                <div className='flex flex-col h-full gap-2 justify-between'>
                  <div className=''>
                  <div className='flex items-center gap-1 text-gray-500 hover:text-gray-700 text-[10px] mb-2'>
                        <img className='w-8 transform hover:scale-105' src="https://avatars.githubusercontent.com/u/68012668?v=4" alt="" />
                        <p>by <span className='font-bold text-gray-900'>{post.author}</span></p>-
                        <p>5 min read</p>
                 </div>
               
                 <Link to={`/post/detail/${post.slug}`}>  <h2 className='font-bold text-sm text-black hover:text-cyan-700 capitalize'>{post.title}</h2></Link>
                  
                  </div>
              
                <div className='text-xs flex items-center gap-1 text-gray-500'><span><MdDateRange/></span><ToDate date={post.update_on}/></div>

                </div>
            </div>

        </div>
      </div>
  )
}


const LatestPosts = () => {
  return (
  <Fetch
      url="posts/updated"
      renderSuccess={({ data: { posts } }) => (
        posts.map(post => (
        <LatestPostsList key={post.title} post={post} />
        ))
    )}
  />
  )
}
export default LatestPosts