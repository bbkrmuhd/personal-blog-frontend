import React, { useState, useLayoutEffect } from 'react'
import Button from './Button'
import { useLocation } from 'react-router-dom'
import {RiHeartLine} from 'react-icons/ri'
import {FaRegComments} from 'react-icons/fa'
import {MdDateRange} from 'react-icons/md'
import H1 from './H1'
import { Link } from 'react-router-dom'
import { getText, minutesRead, toDate} from '../services/services'
import {useForYou} from '../hooks/FetchData'




 export const ForYouPost = ({ post: { author, title , created_on, body_html, comments_count, likes_count, slug, image } }) => {


  return (
    <div className='shadow-md flex sm:flex-col rounded-lg dark:bg-gray-800'>
       <Link to={`/post/detail/${slug}`}>
        <div className='w-28 h-full sm:h-40 sm:w-full rounded-lg bg-center bg-no-repeat bg-cover transition-all hover:scale-105 hover:translate-y-1 ' style={{'backgroundImage': `url(${image})`}}>
        </div>
        </Link>
      <div className='flex flex-col my-5 gap-2 px-2 w-full'>
        <div className='flex flex-col gap-2'>
         <Link to={`/post/detail/${slug}`} > <h2 className='font-bold text-gray-900 hover:text-cyan-700 hover:underline truncate-line-clamp dark:text-white' >{title}</h2></Link> 
         <p className='text-sm leading-4 text-gray-700 max-w-[200px] sm:max-w-full truncate-line-clamp dark:text-gray-400'>{getText(body_html)}</p>
        </div>
        <div className='flex items sm:items-center justify-between sm:gap-2 mt-3 md:flex-row md:gap-0'>
            <div className='flex items-center gap-1 text-gray-500 text-[8px] sm:text-[10px] dark:text-gray-100'>
            <Link to="/about"> <img width='40px' className='hover:scale-105 border rounded-full' src="https://avatars.githubusercontent.com/u/68012668?v=4" alt="avatar" /></Link>
            <div className='flex flex-col gap-1'>
                <div className='flex items-center gap-1'>
                <p>by <span className='font-bold text-gray-900 dark:text-gray-200'>{author}</span></p>-
                 <p>{`${minutesRead(body_html)} min read`}</p>
                </div>  
                <div className='text-[8px] sm:text-[8px] flex items-center gap-1'><span><MdDateRange/></span>{toDate(created_on)}</div>
                </div>
            </div>
            <div className='flex items-center gap-2 text-[10px] sm:text-xs dark:text-gray-100'>
                <p className='flex items-center gap-2 hover:text-red-500'>
                <RiHeartLine />
                <span className=''>{likes_count}</span>

                </p>
                <p className='flex items-center gap-2 hover:text-cyan-500'>
                <FaRegComments />
                <span className=''>{comments_count}</span>
                </p>
            </div>
        </div>
    </div>

</div>
  )
}


const ForYou = () => {
    let topics = ['Javascript', 'React', 'Django', 'Python', 'SQL', 'Postgres' ]
    const pathname = useLocation().search

    const {isLoading, data, error, isError} = useForYou()


    if (isLoading){
      return <h1>Loading..</h1>
    }

    if (isError) {
      return <div>{error.message}</div>
    }

    useLayoutEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);


  return (
    <div className='my-10'>
        <div className=''>
       <H1 text='Topic Match For You' />
        <div className='flex items-center flex-wrap gap-4'>
            {topics.map(topic => (
              <Link to={`/posts/tag/${topic.toLowerCase()}`}><Button key={topic} text={topic} textColor='gray' textSize='sm'/></Link>
            ))}    
        </div>
        <div>


        <div className='grid grid-cols-1 lg:grid-cols-2  gap-4 sm:gap-6 my-5 w-full'>
            {data?.data.posts.map(post => (
              <ForYouPost key={post.slug} post={post} />
            ))}
          </div>

         

        </div>
        </div>

    </div>
  )
}

export default ForYou