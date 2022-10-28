import React from 'react'
import { Link } from 'react-router-dom'
import {MdDateRange} from 'react-icons/md'
import ToDate from './ToDate'
import Fetch from '../hooks/Fetch'
// import {ImageUrl} from './ImageUrl'
import { minutesRead } from '../services/MinutesRead'
import { ImageUrl } from './ImageUrl'




export const LatestPostsList = ({ post }) => {
  return (
    <div className='flex flex-col min-h-32 gap-6 bg-gray-50 rounded-lg shadow-sm shadow-gray-200 my-4 max-w-70 dark:bg-gray-800 dark:shadow-gray-700' >
        <div className='flex gap-2'>
            <div className='flex-none w-1/4 relative'>
            <Link to={`/post/detail/${post.slug}`}>    <img className='inset-0 absolute w-full h-full object-cover rounded-l-lg transition-all hover:scale-105' src={`${ImageUrl}${post?.image}`} alt="post image" loading='lazy' /></Link>
            </div>
                <div className='flex flex-col h-full gap-2 justify-between p-2'>
                  <div className='flex items-center gap-1 text-gray-500 hover:text-gray-700 text-[10px] mb-2 dark:text-gray-100'>
                  <Link to="/about">       <img className='w-8 transform hover:scale-105 border rounded-full' src="https://avatars.githubusercontent.com/u/68012668?v=4" alt="" /></Link>
                        <p>by <span className='font-bold text-gray-900 dark:text-gray-200'>{post.author}</span></p>-
                        <p>{`${minutesRead(post.body_html)} min read`}</p>
                 </div>
               
                 <Link to={`/post/detail/${post.slug}`}><h2 className='font-bold text-sm text-black hover:underline hover:text-cyan-700 capitalize max-w-[200px] truncate-line-clamp dark:text-white'>{post.title}</h2></Link>              
                <div className='text-xs flex items-center gap-1 text-gray-500 dark:text-gray-100'><span><MdDateRange/></span><ToDate date={post.update_on}/></div>

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