import React from 'react'
import { NavBar, Footer, H1, LatestPosts, ReadNext } from '../components'
import { MdDateRange } from 'react-icons/md'

const PostDetail = () => {
  let posts = [1,2,2,2,2,2,2,]
  let read = [2,2,2,]
  return (
    <>   
    <NavBar /> 
    <section className='container mx-auto flex my-10 relative'>
      <div className='flex-none w-32 my-4 '>
      </div>
      <div className='flex-auto min-h-screen border-x sm:px-8 my-4'>
      <div className='flex items-center gap-2 text-gray-500 text-xs'>
            <img className='w-12' src="https://avatars.githubusercontent.com/u/68012668?v=4" alt="" />
            <div className='flex flex-col gap-1'>
                <div className='flex items-center gap-2'>
                <p>by <span className='font-bold text-gray-900'>Ameer</span></p>-
                <p>5 min read</p>
                </div>  
                <div className='text-xs flex items-center gap-2'><span><MdDateRange/></span><p>Sep 3 2022</p></div>
                </div>

            </div>
          <H1 text=' Lorem ipsum, dolor s libero, minima qu assumenda dignissimos, consectetur ad veritatis. Sed rerum non veritatis?'/>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos, tenetur temporibus? Eaque quasi molestiae tenetur expedita aperiam possimus recusandae provident quos dolorem. Ratione asperiores cum aperiam iusto modi nulla saepe?</p>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat architecto sequi aliquid minus repellat! Vitae iusto impedit tempore explicabo accusantium labore eum at maiores expedita. Natus eum at tempore officiis?</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos, tenetur temporibus? Eaque quasi molestiae tenetur expedita aperiam possimus recusandae provident quos dolorem. Ratione asperiores cum aperiam iusto modi nulla saepe?</p>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat architecto sequi aliquid minus repellat! Vitae iusto impedit tempore explicabo accusantium labore eum at maiores expedita. Natus eum at tempore officiis?</p>
         
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos, tenetur temporibus? Eaque quasi molestiae tenetur expedita aperiam possimus recusandae provident quos dolorem. Ratione asperiores cum aperiam iusto modi nulla saepe?</p>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat architecto sequi aliquid minus repellat! Vitae iusto impedit tempore explicabo accusantium labore eum at maiores expedita. Natus eum at tempore officiis?</p>
         


      </div>
      <div className='flex-none flex flex-col w-80 sm:pl-4 my-4'>
       <H1 text='Popular Articles'/>
       {posts.map(p => (
            <LatestPosts />

       ))}
   
      </div>
      

      
      
    </section>
    <section className='container mx-auto max-w-5xl'>
      <div className=''>
      <H1 text='Read Next'/>
      <div className='my-10 grid grid-flow-row grid-cols-1 sm:grid-col-2 md:grid-cols-3 gap-6'>
        {read.map(r => (
            <ReadNext/>
        ))}
   
      </div>

      </div>
    </section>
    <Footer />

    </>
  )
}

export default PostDetail