import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { ClipLoader } from 'react-spinners'
import { H1, Pagination, ToDate } from '../components'
import { baseUrl } from '../components/baseUrl'
import {ImageUrl} from '../components/ImageUrl'
import {RiHeartLine} from 'react-icons/ri'
import {FaRegComments} from 'react-icons/fa'
import {MdDateRange} from 'react-icons/md'
import { Link } from 'react-router-dom'




const Category = () => {
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const categoryName = useLocation().pathname.split("/")[2].toLowerCase()

    useEffect(() => {
        try {
            
          async function getPosts(){
            setLoading(true)
            const response = await fetch(
                `${baseUrl}category/${categoryName}`)
                .then((response) => response.json())
  
            let { posts, prev_url, next_url} = response
            setTimeout(()=> {
                setLoading(false)
                setPosts(posts)

            }, 500)
          
           
        }
  
        getPosts()
  
        } catch (error) {
          setError(error)
        }
        
  
      } , [categoryName])
  return (
    <div className='flex-auto min-h-screen sm:px-4'>
    <div className='flex items-center justify-between my-2 sm:my-4'>
     <H1 text={` ${categoryName} `}/>
      </div>
      <div>
        
        {loading ? <ClipLoader/>
        :
        <>
             <div className='grid grid-cols-1 lg:grid-cols-2  gap-4 sm:gap-6 my-5 w-full'>
            {posts.map(post => (
    
            <CategoryPost key={post.id} post={post} />
           
            ))}
             </div>
             {posts && (<div className=' text-center my-10'>
            <Pagination />

          </div>
          )
          }
            </>
        
        }
      </div>
    </div>
  )
}

export default Category







const CategoryPost = ({ post: { author, title , created_on, body, comments_count, likes_count, slug, image } }) => {


  return (
    <div className='shadow-md flex sm:flex-col rounded-lg'>
       <Link to={`/post/detail/${slug}`}>
        <div className='w-28 h-full sm:h-40 sm:w-full rounded-lg bg-center bg-no-repeat bg-cover transition-all hover:scale-105 hover:translate-y-1 ' style={{'backgroundImage': `url(${ImageUrl}${image})`}}>
        </div>
        </Link>
      <div className='flex flex-col my-5 gap-2 px-2'>
        <div>
         <Link to={`/post/detail/${slug}`} > <h2 className='font-bold text-gray-900 hover:text-cyan-700 hover:underline truncate-line-clamp' >{title}Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere rem quasi iure officiis commodi quia voluptates fugiat quaerat animi dolore, excepturi corporis similique nam ipsam et cupiditate ratione nostrum laudantium.</h2></Link> 
         <p className='text-sm text-justify text-gray-700 truncate-line-clamp'>{body}</p>
        </div>
        <div className='flex items sm:items-center justify-between sm:flex-col sm:gap-2 mt-3 md:flex-row md:gap-0'>
            <div className='flex items-center gap-1 text-gray-500 text-[8px] sm:text-[10px]'>
            <img className='w-10 hover:scale-105' src="https://avatars.githubusercontent.com/u/68012668?v=4" alt="" />
            <div className='flex flex-col gap-1'>
                <div className='flex items-center gap-1'>
                <p>by <span className='font-bold text-gray-900'>{author}</span></p>-
                 <p>5 min read</p>
                </div>  
                <div className='text-[8px] sm:text-[8px] flex items-center gap-1'><span><MdDateRange/></span><ToDate date={created_on} /></div>
                </div>
            </div>
            <div className='flex items-center gap-2 text-[10px] sm:text-xs'>
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
