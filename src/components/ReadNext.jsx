import React from 'react'
import {RiHeartLine} from 'react-icons/ri'
import {FaRegComments} from 'react-icons/fa'
import {MdDateRange} from 'react-icons/md'

const ReadNext = () => {
  return (
      <div className='flex flex-col'>
          <div className=''>
            <img className='inset-0 w-full h-full' src="https://images.pexels.com/photos/4144179/pexels-photo-4144179.jpeg?auto=compress&cs=tinysrgb&w=800" alt="" />
          </div>
          <div className=''>

          </div>
          <div className='flex items-center justify-between mt-3'>
            <div className='flex items-center gap-1 text-gray-500 text-xs'>
            <img className='w-10' src="https://avatars.githubusercontent.com/u/68012668?v=4" alt="" />
            <div className='flex flex-col gap-1'>
                <div className='flex items-center gap-1'>
                <p>by <span className='font-bold text-gray-900'>Ameer</span></p>-
            <p>5 min read</p>
                </div>  
                <div className='text-xs flex items-center gap-1'><span><MdDateRange/></span><p>Sep 3 2022</p></div>
                </div>          

            </div>
            <div className='flex items-center gap-2'>
                <p className='flex items-center gap-2'>
                <RiHeartLine />
                <span className='text-xs'>11</span>

                </p>
                <p className='flex items-center gap-2 '>
                <FaRegComments />
                <span className='text-xs'>50</span>
                </p>
            </div>
            

        </div>

        </div>
  )
}

export default ReadNext