
import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import {Categories, Featured, Footer, ForYou, H1, LatestPosts, NavBar, Pagination, Button} from '../components'

const Home = () => {

  return (
      <div className='flex-auto min-h-screen sm:px-4'>
      <div className='flex items-center justify-between my-2 sm:my-4'>
       <H1 text='Article Of The Day'/>
        <div>
        <Link to="/posts"> <Button text='View More'/></Link>
        </div>
        </div>
      <Featured/>
      <ForYou />
      </div>
    
  )
}

export default Home