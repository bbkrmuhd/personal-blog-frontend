import React from 'react'
import {RiHeartLine} from 'react-icons/ri'
import {FaRegComments} from 'react-icons/fa'
import {MdDateRange} from 'react-icons/md'
import { Link } from 'react-router-dom'

const ReadNext = ({ }) => {
  return (
      <div className='flex sm:flex-col rounded-md shadow-sm shadow-gray-300'>
          <div className='relative w-2/4 sm:w-auto'>
            <img className='inset-0 absolute w-full h-full object-cover' src="https://images.pexels.com/photos/4144179/pexels-photo-4144179.jpeg?auto=compress&cs=tinysrgb&w=800" alt="" />
          </div>
          
          <div className='flex flex-col items-center justify-between p-1 sm:p-2 w-full'>
          <div className='flex flex-col gap-2 mb-2 sm:mt-2 px-2 '>
              <Link to={`/post/detail/`}><p className='font-bold text-justify text-sm sm:text-base text-slate-900 hover:text-cyan-700 capitalize cursor-pointer truncate-line-clamp'></p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</Link>
          </div>
          <div className='flex items-end sm:items-center justify-between w-full'>
          <div className='flex items-center gap-1 text-gray-500 text-xs sm:text-[10px]'>
            <img className='w-10' src="https://avatars.githubusercontent.com/u/68012668?v=4" alt="" />
            <div className='flex flex-col gap-1'>
                <div className='flex items-center gap-1'>
                <p>by <span className='font-bold text-gray-900'>Ameer</span></p>-
                   <p>5 min read</p>
                </div>  
                <div className='flex items-center gap-1'><span><MdDateRange/></span><p>Sep 3 2022</p></div>
                </div>          

            </div>
            <div className='flex items-center gap-2 sm:gap-1 sm:text-[10px] text-xs text-gray-500'>
                <p className='flex items-center gap-2 sm:gap-1'>
                <RiHeartLine />
                <span className=''>11</span>

                </p>
                <p className='flex items-center gap-2 sm:gap-1 '>
                <FaRegComments />
                <span className=''>50</span>
                </p>
            </div>
          </div>
           
         </div>

        </div>
  )
}

export default ReadNext