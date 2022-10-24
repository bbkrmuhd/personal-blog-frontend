
import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import {Categories, Featured, Footer, ForYou, H1, LatestPosts, NavBar, Pagination, Button} from '../components'

const Home = () => {

  return (
      <div className='flex-auto min-h-screen sm:px-4'>
      <div className='flex items-center justify-between my-2 sm:my-4'>
       <H1 text='Featured Article'/>
        <div>
        <Link to="/posts?page=1"> <Button text='View More' textSize='md'/></Link>
        </div>
        </div>
      <Featured/>
      <ForYou />
      </div>
    
  )
}

export default Home