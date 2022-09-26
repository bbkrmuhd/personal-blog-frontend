import React from 'react'
import Button from './Button'
import {RiHeartLine} from 'react-icons/ri'
import {FaRegComments} from 'react-icons/fa'
import {MdDateRange} from 'react-icons/md'
import H1 from './H1'




 const ForYouPost = () => {
  return (
    <div className='shadow-md rounded-lg'>
    <div className='h-40 rounded-lg bg-cover' style={{'backgroundImage': 'url(https://images.pexels.com/photos/4145355/pexels-photo-4145355.jpeg?auto=compress&cs=tinysrgb&w=800)'}}>

    </div>
    <div className='flex flex-col my-5 gap-2 px-2'>
        <div>
            <h2 className='font-bold text-justify text-black'>Lorem ipsum dolor sit amet consectetur adipisicing elit</h2>
        </div>
        <div>
            <p className='text-[10px] text-justify text-gray-700'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas perferendis sapiente quia. Dignissimos numquam facere itaque ill....</p>

        </div>
        <div></div>
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

</div>
  )
}


const ForYou = () => {
    let topics = ['Javascript', 'React', 'Django', 'Python', 'SQL', 'Postgres' ]

  return (
    <div className='my-10'>
        <div className=''>
       <H1 text='Topic Match For You' />
        <div className='flex items-center flex-wrap gap-4'>
            {topics.map(topic => (
                <Button text={topic} textColor='gray' textSize='xs'/>
            ))}    
        </div>
        <div className='grid grid-flow-row grid-cols-1 sm:grid-cols-2 gap-6 my-5'>

        {topics.map(topic => (
              <ForYouPost />
            ))}   
         

        </div>
        </div>

    </div>
  )
}

export default ForYou