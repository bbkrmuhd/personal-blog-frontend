import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { ClipLoader } from 'react-spinners'
import { H1, Pagination } from '../components'
import { config } from '../config/environment'
import { ForYouPost as CategoryPost } from '../components/ForYou'




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
                `${config.base_url}category/${categoryName}`)
                .then((response) => response.json())
  
            let { posts } = response
                setLoading(false)
                setPosts(posts)
        }
  
        getPosts()
  
        } catch (error) {
          setError(error)
        }
        
  
      } , [categoryName])
  return (
    <div className='flex-auto min-h-screen sm:px-4'>
    <div className='flex items-center justify-between my-2 sm:my-4'>
     <H1 text={`Category: ${categoryName} `}/>
      </div>
      <div>
        
        {loading ? <ClipLoader/>
        :
             <div className='grid grid-cols-1 lg:grid-cols-2  gap-4 sm:gap-6 my-5 w-full'>
            {posts.map(post => (
    
            <CategoryPost key={post.id} post={post} />
           
            ))}
            </div>
        
        }
      </div>
    </div>
  )
}

export default Category