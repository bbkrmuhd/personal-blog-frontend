import React, {useLayoutEffect} from 'react'
import { Link, useParams, useLocation } from 'react-router-dom'
import { NavBar, Footer, H1, LatestPosts, ReadNext, Comments, LikeCommentShare } from '../components'
import { MdDateRange } from 'react-icons/md'
import { usePostDetailData } from '../hooks/FetchData'
import { minutesRead, toDate } from '../services/services'
import { PostDetailDataSkeleton } from '../components/Skeleton'
import { LikeCommentShareSkeleton } from '../components/Skeleton'
import { LatestPostsListSkeleton } from '../components/Skeleton'
import MDEditor from "@uiw/react-md-editor";

const PostDetailData = ({ post: {author, title, body, body_html, update_on, image}}) => {
  
  return (
    <>  
    <div className='flex items-center gap-2 text-gray-500 text-xs dark:text-gray-100'>
    <Link to="/about">   <img className='w-12 hover:scale-105 transition-all hover:translate-y-1 border rounded-full' src="https://avatars.githubusercontent.com/u/68012668?v=4" alt="" /></Link>
          <div className='flex flex-col gap-1'>
              <div className='flex items-center gap-2'>
              <p>by <span className='font-bold text-gray-900 dark:text-gray-200'>{author}</span></p>-
              <p>{`${minutesRead(body_html)} min read`}</p>
              </div>  
              <div className='text-xs flex items-center gap-2'><span className='capitalize'>last updated</span><span><MdDateRange/></span><span>{toDate(update_on)}</span></div>
              </div>

          </div>
        <H1 text={`${title}`} size={5}/>
        <div className='my-3 sm:my-5'>
          <img className='rounded-lg inset-0 w-full h-full object-cover max-h-72 sm:max-h-[28rem]' src={image}  alt="Post Image" />
        </div>
        <MDEditor.Markdown source={body} className="px-1 sm:px-2  dark:bg-gray-900" />      
        </>

  )
}








const PostDetail = () => {
  let { postSlug } = useParams()
  const { pathname } = useLocation();
  const {isLoading, data, error, isError} = usePostDetailData(postSlug)

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);


  if (isLoading){

    return (
      <>
      <div className='relative sm:h-full'>
      <div className='absolute h-2 sm:flex-none sm:min-w-32 sm:my-4 sm:px-4 sm:flex sm:justify-end sm:relative '>
        <LikeCommentShareSkeleton/>
      </div>
      </div>
      <div className='flex-auto max-w-4xl min-h-screen px-4 sm:px-12 my-4'>
            <PostDetailDataSkeleton/>
      </div>
          <div className='hidden flex-none lg:flex flex-col w-1/4 sm:px-4 my-4'>
      <H1/>
         <LatestPostsListSkeleton/>
     </div>
      </>
    )
  }

  if (isError) {
    return <div>{error.message}</div>
  }


  return (
    <>   
      <div className='relative sm:h-full'>
      <div className='absolute h-2 sm:flex-none sm:min-w-32 sm:my-4 sm:px-4 sm:flex sm:justify-end sm:relative '>
        <LikeCommentShare postSlug={postSlug} />
      </div>

      </div>
      
      <div className='flex-auto max-w-4xl min-h-screen px-4 sm:px-12 my-4'>
            <PostDetailData post={data?.data.post}/>
              {data?.data.post && <Comments postSlug={postSlug}/>}

              {data?.data.post && (
                <>
                <H1 text='Read Next' size={5}/>
                <div className='my-10 grid grid-flow-row grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
                  {data?.data.related.map(rPost => (
                      <ReadNext key={rPost.id} post={rPost}/>
                  ))}
                </div>
                </>
              )}
      </div>

      <div className='hidden flex-none lg:flex flex-col w-1/4 sm:px-4 my-4'>
      <H1 text='Latest Posts'/>
        <LatestPosts />
      </div>
    </>
  )

}

export default PostDetail