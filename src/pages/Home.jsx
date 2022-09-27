
import React from 'react'
import { Link } from 'react-router-dom'
import {Categories, Featured, Footer, ForYou, H1, LatestPosts, NavBar, Pagination, Button} from '../components'

const Home = () => {

  return (
    <>   
    <NavBar /> 
    <section className='container mx-auto flex my-10'>
      <div className='hidden flex-none sm:block w-72 my-4'>
        <div className='w-full sticky'>
        <div className='ml-4'><H1 text='Categories'/></div>
        <Categories />

        </div>
       
      </div>
      <div className='flex-auto min-h-screen border-x sm:px-8'>
      <div className='flex items-center justify-between px-4 my-2 sm:my-4'>
       <H1 text='Article Of The Day'/>
    <div>
    <Link to="/posts/list">  <Button text='View More'/></Link>
    </div>
    </div>

      <Featured/>
      <ForYou />
      <div className='text-center my-10'>
        <Pagination />

      </div>
      </div>
      <div className='hidden flex-none sm:flex flex-col w-72 sm:pl-4 my-4'>
     <H1 text='Latest Posts'/>
           <LatestPosts />
      </div>
     

      
      
    </section>
    <Footer />
    
 
    </>
    
  )
}

export default Home