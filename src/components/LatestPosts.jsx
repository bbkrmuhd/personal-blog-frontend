import React from 'react'
import {MdDateRange} from 'react-icons/md'

const LatestPosts = ({ post }) => {
    
  return (
    <div className='max-h-32 my-4'>
      <div className='flex flex-col gap-6 bg-gray-50 rounded-lg shadow-sm shadow-gray-200'>
        <div className='flex gap-2'>
            <div className='flex-none w-20 relative'>
                <img className='inset-0 absolute w-full h-full object-cover rounded-l-lg' src="https://images.pexels.com/photos/3912477/pexels-photo-3912477.jpeg?auto=compress&cs=tinysrgb&w=800" alt="post image" loading='lazy' />
            </div>
            <div className='flex-auto p-2'>
                <div className='flex flex-col gap-2'>
                <div className='flex items-center gap-1 text-gray-500 hover:text-gray-700 text-[10px]'>
                        <img className='w-8 transform hover:scale-105' src="https://avatars.githubusercontent.com/u/68012668?v=4" alt="" />
                        <p>by <span className='font-bold text-gray-900'>Ameer</span></p>-
                        <p>5 min read</p>
                 </div>
                 <div>
                    <h2 className='font-bold text-justify text-sm text-black hover:text-cyan-700'>Lorem ipsum, dolor sit amet consectetur adipisicing elit....</h2>
                </div>
                <div className='text-xs flex items-center gap-1 text-gray-500'><span><MdDateRange/></span><p>Sep 3 2022</p></div>

                </div>
            </div>

        </div>
      </div>
    </div>
  )
}

export default LatestPosts