
import React from 'react'
import {Categories, Featured, Footer, ForYou, H1, LatestPosts, NavBar, Pagination} from '../components'

const Home = () => {
  let posts = [1,2 , 3, 4, 5]

  return (
    <>   
    <NavBar /> 
    <section className='container mx-auto flex my-10'>
      <div className='flex-none w-72 my-4'>
        <div className='w-full sticky'>
        <div className='ml-4'><H1 text='Categories'/></div>
        <Categories />

        </div>
       
      </div>
      <div className='flex-auto min-h-screen border-x sm:px-8'>
      <Featured/>
      <ForYou />
      <div className='text-center my-10'>
        <Pagination />

      </div>
      </div>
      <div className='flex-none flex flex-col w-72 sm:pl-4 my-4'>
     <H1 text='Latest Posts'/>

        {posts.map(post => (
           <LatestPosts />
        ))}
       

      </div>
     

      
      
    </section>
    <Footer />
    
 
    </>
    
  )
}

export default Home