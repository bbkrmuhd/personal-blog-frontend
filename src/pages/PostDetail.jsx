import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { NavBar, Footer, H1, LatestPosts, ReadNext, ToDate, Comments, LikeCommentShare } from '../components'
import { MdDateRange } from 'react-icons/md'
import Fetch from '../hooks/Fetch'


const PostDetailData = ({ post: {author, title, body, update_on} }) => {
  let p = [1,2,3,4,5,6,7,8,9,0,11,22,33,44,55,666,577,573]
  return (
    <>  
    <div className='flex items-center gap-2 text-gray-500 text-xs '>
          <img className='w-12 hover:scale-105 transition-all hover:translate-y-1' src="https://avatars.githubusercontent.com/u/68012668?v=4" alt="" />
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
        {p.map(p => (
          <p className='text-justify' key={p}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam ad impedit animi accusantium, reiciendis nostrum cupiditate nisi eos, suscipit earum nam. Ad quia molestiae repellat veritatis aliquid, mollitia vero unde!</p>
        ))}
    </>

  )
}








const PostDetail = () => {
  let read = [2,2,2,]

  let { postSlug } = useParams()
  console.log(postSlug)

  return (
    <>   
    <NavBar /> 
    <section className='container mx-auto sm:flex my-10 relative'>
      <div className='absolute sm:flex-none sm:min-w-32 sm:my-4 sm:px-4 sm:flex sm:justify-end sm:relative '>
        <LikeCommentShare postSlug={postSlug} />
      </div>
      <div className='flex-auto min-h-screen px-4 sm:px-12 my-4'>
        <Fetch url={`/post/detail/${postSlug}`}
          renderSuccess={({ data: { post } }) => (
            <>
              <PostDetailData post={post}/>
              {post && <Comments postSlug={postSlug}/>}

              {post && (
                <>
                <H1 text='Read Next'/>
                <div className='my-10 grid grid-flow-row grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
                  {read.map(r => (
                      <ReadNext/>
                  ))}
                </div>
                </>
              )}
              </>
          )}/>
      </div>

      <div className='hidden flex-none lg:flex flex-col w-1/4 sm:px-4 my-4'>
      <H1 text='Popular Articles'/>
           <LatestPosts />
      </div>
    </section>
    
    <Footer />

    </>
  )
}

export default PostDetail