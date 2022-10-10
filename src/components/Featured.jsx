import React from 'react'
import { Link } from 'react-router-dom'
import Fetch from '../hooks/Fetch'
import Button from './Button'
import {ImageUrl} from './ImageUrl'





const FeaturedPost = ({ post: {slug, title, body, image } }) => {
  return (
 
    <div className='max-h-96 sm:my-5 rounded-lg bg-cover bg-no-repeat bg-center flex drop-shadow-xl drop-shadow-gray-300 bg-gradient-to-t from-black/75 via-black/0' style={{'backgroundImage': `url(${ImageUrl}${image})`}}>

        <div className='flex flex-col gap-4 p-4 sm:basis-1/2 justify-between'>
          <div className='w-full'>
          <h1 className=' text-2xl sm:text-4xl text-white tracking-wide font-bold leading-6 my-10 truncate-featured'>{title}</h1>
        <p className='text-gray-300 text-xs sm:text-sm leading-4'>{body}</p>
          </div>
       <div>
        <Link to={`/post/detail/${slug}`}><Button text='Read Now' bgColor='' textColor='white' /></Link>
       </div>
        </div>
        <div>
        </div>
    </div>
  )
}


const Featured = () => {
  return (
    <Fetch
    url="/posts/featured"
    renderSuccess={({data}) => (
      <FeaturedPost post={data}/>
    )}
/>
   
  )
}

export default Featured