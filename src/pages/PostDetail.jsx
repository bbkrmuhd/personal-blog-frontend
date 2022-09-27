import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { NavBar, Footer, H1, LatestPosts, ReadNext, ToDate } from '../components'
import { MdDateRange } from 'react-icons/md'
import Fetch from '../hooks/Fetch'


const PostDetailData = ({ post: {author, title, body, update_on} }) => {
  return (
    <>
    <div className='flex items-center gap-2 text-gray-500 text-xs'>
          <img className='w-12' src="https://avatars.githubusercontent.com/u/68012668?v=4" alt="" />
          <div className='flex flex-col gap-1'>
              <div className='flex items-center gap-2'>
              <p>by <span className='font-bold text-gray-900'>{author}</span></p>-
              <p>5 min read</p>
              </div>  
              <div className='text-xs flex items-center gap-2'><span><MdDateRange/></span><ToDate date={update_on} /></div>
              </div>

          </div>
        <H1 text={`${title}`}/>
        <p>{body}</p>
    </>

  )
}





const PostDetailFetch = ({ postSlug }) => {

  return (
   <Fetch url={`/post/detail/${postSlug}`}
   renderSuccess={({ data: { post } }) => (
    <PostDetailData post={post}/>
  )}/>
  )
}



const PostDetail = () => {
  let read = [2,2,2,]

  let { postSlug } = useParams()
  console.log(postSlug)

  return (
    <>   
    <NavBar /> 
    <section className='container mx-auto flex my-10 relative'>
      <div className='flex-none w-32 my-4'>
      </div>
      <div className='flex-auto min-h-screen border-x sm:px-8 my-4'>
      <PostDetailFetch postSlug={postSlug} />
      </div>

      <div className='flex-none flex flex-col w-80 sm:pl-4 my-4'>
       <H1 text='Popular Articles'/>
            <LatestPosts />
      </div>
      

      
      
    </section>
    <section className='container mx-auto max-w-5xl'>
      <div className=''>
      <H1 text='Read Next'/>
      <div className='my-10 grid grid-flow-row grid-cols-1 sm:grid-col-2 md:grid-cols-3 gap-6'>
        {read.map(r => (
            <ReadNext/>
        ))}
      </div>

      </div>
    </section>
    <Footer />

    </>
  )
}

export default PostDetail