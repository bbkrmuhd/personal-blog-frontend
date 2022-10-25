import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { DataTable } from '../../components'
import Fetch from '../../hooks/Fetch'
import { baseUrl } from '../../components/baseUrl'

const AdminPosts = () => {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  

  const onSubmit = (e) => {
    e.preventDefault()
    }
    useEffect(() => {
      try {
        async function getPosts(){
          setLoading(true)
          const response = await fetch(
              `${baseUrl}posts/list`)
              .then((response) => response.json())

          let { posts, prev_url, next_url} = response
          setPosts(posts)
          setLoading(false)
      }

      getPosts()

      } catch (error) {
        setError(error)
      }
      console.log("i run")
      

    } , [])

  const handleDeletePost = async(post_slug) => {
    return await fetch(
          `${baseUrl}post/delete/${post_slug}`, {
        method: 'DELETE',        
      }).then(response => response.json())


  } 

  const onDeletePost = (post_slug) => {
      console.log(post_slug)
      handleDeletePost(post_slug).then(() => {
          const updatedPosts = posts.filter((
              post) =>  post.slug !== post_slug)
          setPosts(updatedPosts)

      }
      )
  }

    return (
      <div className='sm:m-5 sm:mx-10'>
        <div className='flex items-center justify-between '>
      
          <form onSubmit={onSubmit} className="flex items-center rounded-lg shadow-md bg-gray-100 h-18 w-2/4">
          <input className='py-1 w-4/5 sm:py-2 text-sm sm:text-base text-gray-700 shadow-sm rounded-lg focus:border-cyan-500 focus:outline-none focus:ring-cyan-500' type="search" />
            <button className="sm:py-2 sm:px-4 text-xs sm:text-base text-gray-700 hover:text-cyan-700 font-semibold border-none" type="submit" value="search">Search</button>
          </form>
          
        

          <div>
          <Link to='write'><button className='py-2 px-2 sm:px-6 text-gray-700 bg-gray-100 rounded-lg text-xs sm:text-base shadow-md hover:bg-gray-200 hover:text-cyan-700'>Create Post</button></Link> 
          </div>

        </div>
        <DataTable data={posts} onDeletePost={onDeletePost} loading={loading} />
  

      </div>
    )
  }

  export default AdminPosts