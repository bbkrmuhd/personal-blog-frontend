
import React from 'react'
import { Link } from 'react-router-dom'
import {Categories, Featured, Footer, ForYou, H1, LatestPosts, NavBar, Pagination, Button} from '../components'

const Home = () => {

  return (
    <>   
    <NavBar /> 
    <section className='container mx-auto flex my-10 px-4'>
      <div className='hidden flex-none md:block w-1/4 lg:px-4 my-4'>
        <div className='w-full sticky'>
        <div className=''><H1 text='Categories'/></div>
        <Categories />

        </div>
       
      </div>
      <div className='flex-auto min-h-screen sm:px-8'>
      <div className='flex items-center justify-between my-2 sm:my-4'>
       <H1 text='Article Of The Day'/>
        <div>
        <Link to="/posts"> <Button text='View More'/></Link>
        </div>
        </div>

      <Featured/>
      <ForYou />
      <div className='text-center my-10'>
        <Pagination />

      </div>
      </div>
      <div className='hidden flex-none lg:flex flex-col w-1/4 sm:px-4 my-4'>
     <H1 text='Latest Posts'/>
           <LatestPosts />
      </div>
     
      
    </section>
    <Footer />
    
 
    </>
    
  )
}

export default Home