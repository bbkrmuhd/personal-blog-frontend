import React from 'react'
import { useLocation } from 'react-router-dom'
import { ClipLoader } from 'react-spinners'
import { H1, Pagination } from '../components'
import { ForYouPostSkeleton } from '../components/Skeleton'
import { ForYouPost as CategoryPost } from '../components/ForYou'
import { useCategoryData } from '../hooks/FetchData'



const Category = () => {
    const arr = Array(4).fill(5)
    const categoryName = useLocation().pathname.split("/")[2].toLowerCase()
    const {isLoading, data, error, isError} = useCategoryData(categoryName)

  return (
    <div className='flex-auto min-h-screen sm:px-4'>
    <div className='flex items-center justify-between my-2 sm:my-4'>
     <H1 text={`Category: ${categoryName} `}/>
      </div>
      <div>
        
        {isLoading ? <div className='grid grid-cols-1 lg:grid-cols-2  gap-4 sm:gap-6 my-5 w-full'>
  {arr.map(post => (
    <ForYouPostSkeleton/>
  ))}
</div>
        :
             <div className='grid grid-cols-1 lg:grid-cols-2  gap-4 sm:gap-6 my-5 w-full'>
            {data?.data.posts.map(post => (
    
            <CategoryPost key={post.id} post={post} />
           
            ))}
            </div>
        }
      </div>
    </div>
  )
}

export default Category