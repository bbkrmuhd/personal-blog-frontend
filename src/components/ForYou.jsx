import React from 'react'
import Button from './Button'
import {RiHeartLine} from 'react-icons/ri'
import {FaRegComments} from 'react-icons/fa'
import {MdDateRange} from 'react-icons/md'
import Fetch from '../hooks/Fetch'
import H1 from './H1'
import ToDate from './ToDate'
import { Link } from 'react-router-dom'




 const ForYouPost = ({ post: { author, title , created_on, body, comments_count, likes_count, slug } }) => {



  return (
    <div className='shadow-md rounded-lg'>
       <Link to={`/post/detail/${slug}`} ><div className='h-40 rounded-lg bg-cover transition-all hover:scale-105 hover:translate-y-1 ' style={{'backgroundImage': 'url(https://images.pexels.com/photos/4145355/pexels-photo-4145355.jpeg?auto=compress&cs=tinysrgb&w=800)'}}>

    </div>
    </Link>
    <div className='flex flex-col my-5 gap-2 px-2'>
        <div>
         <Link to={`/post/detail/${slug}`} > <h2 className='font-bold text-justify text-gray-900 hover:text-cyan-700' >{title}</h2></Link> 
        </div>
        <div>
            <p className='text-[10px] text-justify text-gray-700'>{body}</p>

        </div>
        <div></div>
        <div className='flex items-center justify-between mt-3'>
            <div className='flex items-center gap-1 text-gray-500 text-xs'>
            <img className='w-10 hover:scale-105' src="https://avatars.githubusercontent.com/u/68012668?v=4" alt="" />
            <div className='flex flex-col gap-1'>
                <div className='flex items-center gap-1'>
                <p>by <span className='font-bold text-gray-900'>{author}</span></p>-
                 <p>5 min read</p>
                </div>  
                <div className='text-xs flex items-center gap-1'><span><MdDateRange/></span><ToDate date={created_on} /></div>
                </div>

            </div>
            <div className='flex items-center gap-2'>
                <p className='flex items-center gap-2 hover:text-red-500'>
                <RiHeartLine />
                <span className='text-xs'>{likes_count}</span>

                </p>
                <p className='flex items-center gap-2 hover:text-cyan-500'>
                <FaRegComments />
                <span className='text-xs'>{comments_count}</span>
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
        <div className='grid grid-cols-1 md:grid-cols-2  gap-4 sm:gap-6 my-5'>

        <Fetch
            url="posts/list"
            renderSuccess={({ data: { posts } }) => (
            posts.map(post => (
        <ForYouPost key={post.id} post={post} />
        ))
        )}
        />
         

        </div>
        </div>

    </div>
  )
}

export default ForYou