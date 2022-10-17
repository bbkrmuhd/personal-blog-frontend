import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { ClipLoader } from 'react-spinners'
import { H1 } from '../components'
import { baseUrl } from '../components/baseUrl'

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
        :posts.map(post => (
            <p key={post.id}>{post.title}</p>
        ))}
      </div>
    </div>
  )
}

export default Category