import React from 'react'
import {RiHeartLine} from 'react-icons/ri'
import {FaRegComments} from 'react-icons/fa'
import {MdDateRange} from 'react-icons/md'
import { Link } from 'react-router-dom'
import { minutesRead, toDate} from '../services/services'


const ReadNext = ({post: {title, author,slug, body_html, likes_count, comments_count, created_on}}) => {
  return (
      <div className='flex sm:flex-col rounded-md shadow-sm shadow-gray-300 dark:shadow-gray-700 dark:bg-gray-800'>
          <div className='flex flex-col items-center justify-between p-1 sm:p-2 w-full h-full'>
          <div className='flex flex-col gap-2 mb-2 sm:mt-2 px-2 w-full'>
            

            <Link to={`/post/detail/${slug}`}><p className='font-bold text-left text-sm sm:text-base text-slate-900 hover:text-cyan-700 capitalize cursor-pointer truncate-line-clamp hover:underline dark:text-white'>
                {title}
                </p>
              </Link>
             
          </div>
          <div className='flex items-end sm:items-center justify-between w-full'>
          <div className='flex items-center gap-1 text-gray-500 text-xs sm:text-[10px] dark:text-gray-100'>
          <Link to="/about">    <img className='w-10' src="https://avatars.githubusercontent.com/u/68012668?v=4" alt="" /></Link>
            <div className='flex flex-col gap-1'>
                <div className='flex items-center gap-1'>
                <p>by <span className='font-bold text-gray-900 dark:text-gray-200'>{author}</span></p>-
                <p>{`${minutesRead(body_html)} min read`}</p>
                </div>  
                <div className='flex items-center gap-1'><span><MdDateRange/></span>{toDate(created_on)}</div>
                </div>          

            </div>
            <div className='flex items-center gap-2 sm:gap-1 sm:text-[10px] text-xs text-gray-500 dark:text-white'>
                <p className='flex items-center gap-2 sm:gap-1'>
                <RiHeartLine />
                <span className=''>{likes_count}</span>

                </p>
                <p className='flex items-center gap-2 sm:gap-1 '>
                <FaRegComments />
                <span className=''>{comments_count}</span>
                </p>
            </div>
          </div>
           
         </div>

        </div>
  )
}

export default ReadNext