import React, { useLayoutEffect, useState } from 'react'
import Fetch from '../hooks/Fetch';
import { MdDateRange } from 'react-icons/md';
import {RiHeartLine} from 'react-icons/ri'
import {FaRegComments} from 'react-icons/fa'
import {H1, Button, Pagination } from '../components'
import { Link } from 'react-router-dom';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import ToDate from '../components/ToDate';
import { ImageUrl } from '../components/ImageUrl';
import {getText} from '../services/GetText'
import { minutesRead } from '../services/MinutesRead';


export const PostListData = ({ post }) => {

  return (
    <div className='min-h-56 my-4 sm:my-6 shadow-sm shadow-gray-200 dark:shadow-gray-700 dark:bg-gray-800'>
    <div className='flex flex-col gap-6 rounded-lg h-full '>
      <div className='flex flex-col sm:flex-row gap-2 h-full'>
          <div className='flex-none h-44 w-auto sm:h-auto sm:w-48 relative'>
            <Link to={`/post/detail/${post.slug}`}><img className='inset-0 absolute w-full h-full object-cover transition-all hover:scale-105' src={`${ImageUrl}${post.image}`} alt="post image" loading='lazy' /></Link>
          </div>
          <div className='flex-auto p-2'>
              <div className='flex flex-col gap-2 h-full items-start justify-between'>
                <div className='flex flex-col gap-2'>
                  <div className='flex items-center gap-1 text-gray-500 text-xs dark:text-gray-100'>
                     <Link to="/about"> <img className='w-10 sm:w-12 transition-all duration-150 hover:scale-105 border rounded-full' src="https://avatars.githubusercontent.com/u/68012668?v=4" alt="" /></Link>
                      <p>by <span className='font-bold text-gray-900 dark:text-gray-100'>{post.author}</span></p>-
                      <p>{`${minutesRead(post.body_html)} min read`}</p>
               </div>
               <div className='flex flex-col gap-2'>
               <Link to={`/post/detail/${post.slug}`}> <h2 className='font-bold sm:text-xl text-slate-900 hover:text-cyan-700 hover:underline capitalize cursor-pointer dark:text-white'>{post.title}</h2></Link>
                  <p className='text-slate-700 text-sm leading-4 truncate-featured dark:text-gray-500'>{getText(post.body_html)}</p>
              </div>
              </div>
              <div className='flex flex-col gap-2 w-full'>
              <div className='flex gap-2 flex-wrap'>
                {post.tags && post.tags.map((tag => (
                 <Link to={`/posts/tag/${tag.slug}`}><Button text={`#${tag.name}`} textSize='xs'/></Link>
                )))}
              </div>

              <div className='flex items-center text-gray-500 text-xs w-full justify-between dark:text-gray-100'>

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


const PostList = () => {
  const initialNum = Number(useLocation().search.split("=")[1])
  const pathname = useLocation().search
  const [pageNum , setPageNum] = useState(initialNum)
  const [prevUrl, setPrevUrl] = useState(null)
  const [nextUrl, setNextUrl] = useState(null)

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  
  return (
      <div className='flex-auto min-h-screen sm:px-4 my-4'>
        <H1 text='All Posts'/>
      <Fetch
        url={`posts/list?page=${pageNum}`}
        renderSuccess={({ data: { posts, next_url, prev_url } }) => (
          <>
          {setPrevUrl(prev_url)}{setNextUrl(next_url)}
          {posts.map(post => (
          <PostListData key={post.id} post={post} />
          ))}
          
         {posts && (<div className='text-center my-10'>
            <Pagination pageNum={pageNum} prevUrl={prevUrl} nextUrl={nextUrl} setPageNum={setPageNum}/>

          </div>
          )
          }
        </>
          )}
        />
      </div>
  )
}
export default PostList