import React, {useLayoutEffect} from 'react'
import { Link, useParams, useLocation } from 'react-router-dom'
import { NavBar, Footer, H1, LatestPosts, ReadNext, ToDate, Comments, LikeCommentShare } from '../components'
import { MdDateRange } from 'react-icons/md'
import Fetch from '../hooks/Fetch'
import { ImageUrl } from '../components/ImageUrl'
import { minutesRead } from '../services/MinutesRead'
import MDEditor from "@uiw/react-md-editor";

const PostDetailData = ({ post: {author, title, body, body_html, update_on, image} }) => {
  return (
    <>  
    <div className='flex items-center gap-2 text-gray-500 text-xs '>
          <img className='w-12 hover:scale-105 transition-all hover:translate-y-1' src="https://avatars.githubusercontent.com/u/68012668?v=4" alt="" />
          <div className='flex flex-col gap-1'>
              <div className='flex items-center gap-2'>
              <p>by <span className='font-bold text-gray-900'>{author}</span></p>-
              <p>{`${minutesRead(body_html)} min read`}</p>
              </div>  
              <div className='text-xs flex items-center gap-2'><span><MdDateRange/></span><ToDate date={update_on} /></div>
              </div>

          </div>
        <H1 text={`${title}`}/>
        <div className='my-3 sm:my-5'>
          <img className='rounded-lg inset-0 w-full h-full object-cover max-h-72 sm:max-h-[28rem]' src={`${ImageUrl}${image}`}  alt="Post Image" />
        </div>
        <MDEditor.Markdown source={body} style={{ padding: "14px" }} />
        </>

  )
}








const PostDetail = () => {
  let read = [2,2,2,]

  let { postSlug } = useParams()
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>   
    <NavBar /> 
    <section className='container mx-auto sm:flex my-10'>
      <div className='relative sm:h-full'>
      <div className='absolute h-2 sm:flex-none sm:min-w-32 sm:my-4 sm:px-4 sm:flex sm:justify-end sm:relative '>
        <LikeCommentShare postSlug={postSlug} />
      </div>

      </div>
      
      <div className='flex-auto max-w-4xl min-h-screen px-4 sm:px-12 my-4'>
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
                      <ReadNext post={post}/>
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