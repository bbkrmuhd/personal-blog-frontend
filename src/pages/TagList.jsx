import React, {useLayoutEffect} from 'react'
import Fetch from '../hooks/Fetch';
import { MdDateRange } from 'react-icons/md';
import {RiHeartLine} from 'react-icons/ri'
import {FaRegComments} from 'react-icons/fa'
import {H1, Button, Pagination} from '../components'
import { Link } from 'react-router-dom';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import ToDate from '../components/ToDate';



const TagListData = ({ post }) => {
  
  return (
    <div className='min-h-56 my-4 sm:my-6 shadow-md shadow-gray-200'>
    <div className='flex flex-col gap-6 rounded-lg h-full '>
      <div className='flex flex-col sm:flex-row gap-2 h-full'>
          <div className='flex-none h-44 w-auto sm:h-auto sm:w-48 relative'>
            <Link to={`/post/detail/${post.slug}`}><img className='inset-0 absolute w-full h-full object-cover transition-all hover:scale-105' src="https://images.pexels.com/photos/4350767/pexels-photo-4350767.jpeg?auto=compress&cs=tinysrgb&w=800" alt="post image" loading='lazy' /></Link>
          </div>
          <div className='flex-auto p-2'>
              <div className='flex flex-col gap-2 h-full items-start justify-between'>
                <div className='flex flex-col gap-2'>
                  <div className='flex items-center gap-1 text-gray-500 text-xs'>
                      <img className='w-10 sm:w-12 transition-all duration-150 hover:scale-105' src="https://avatars.githubusercontent.com/u/68012668?v=4" alt="" />
                      <p>by <span className='font-bold text-gray-900'>{post.author}</span></p>-
                      <p>5 min read</p>
               </div>
               <div className='flex flex-col gap-2'>
               <Link to={`/post/detail/${post.slug}`}> <h2 className='font-bold sm:text-xl text-justify text-slate-900 hover:text-cyan-700 capitalize cursor-pointer'>{post.title}</h2></Link>
                  <p className='text-slate-700 text-xs sm:text-sm leading-4 truncate-featured'>{post.body}Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore doloribus, velit odit possimus corrupti veritatis nostrum, optio liberoVelit.....</p>
              </div>
              </div>
              <div className='flex flex-col gap-2 w-full'>
              <div className='flex gap-2 flex-wrap'>
                {post.tags && post.tags.map((tag => (
                <Link to={`/posts/tag/${tag.slug}`}><Button text={`#${tag.name}`} textSize='[10px]'/></Link>
                )))}
              </div>

              <div className='flex items-center text-gray-500 text-xs w-full justify-between'>

                <div className='flex items-center gap-1 hover:text-cyan-700'>
                <span><MdDateRange/></span><ToDate date={post.created_on}/>
                </div>

                <div className='flex items-center gap-2'>
                <p className='flex items-center gap-2 hover:text-red-500 '>
                <RiHeartLine />
                <span className='text-xs'>{post.likes_count}</span>

                </p>
                <p className='flex items-center gap-2 hover:text-cyan-500  '>
                <FaRegComments />
                <span className='text-xs'>{post.comments_count}</span>
                </p>
                </div>

                </div>


              </div>
            

              </div>
          </div>

      </div>

    </div>
  </div>

  )
}


const TagList = () => {
    let { tagSlug } = useParams()
    const { pathname } = useLocation();

    useLayoutEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <div className='flex-auto min-h-screen sm:px-4 my-4'>
          <H1 text={`#${tagSlug}`}/>
        <Fetch
          url={`tags/${tagSlug}`}
          renderSuccess={({ data: { posts } }) => (
            <>
            {posts.map(post => (
            <TagListData key={post.id} post={post} />
            ))}
            
           {posts && (<div className='text-center my-10'>
              <Pagination />
            </div>
            )
            }
          </>
            )}
          />
        </div>
    )
}

export default TagList