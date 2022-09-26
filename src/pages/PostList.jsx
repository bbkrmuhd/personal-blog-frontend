import React from 'react'
import FetchData from '../hooks/FetchData';
import { MdDateRange } from 'react-icons/md';
import {RiHeartLine} from 'react-icons/ri'
import {FaRegComments} from 'react-icons/fa'
import {NavBar, Categories, Featured, ForYou, LatestPosts, H1, Footer, Button} from '../components'
import { Link } from 'react-router-dom';





const PostListData = ({ post }) => {
  return (
   
    <div className='max-h-56 my-4 sm:my-6 h-56 shadow-md shadow-gray-200'>
    <div className='flex flex-col flex-none gap-6 rounded-lg h-full '>
      <div className='flex gap-2 h-full'>
          <div className='flex-none w-48 relative'>
            <Link to='/post/detail'><img className='inset-0 absolute w-full h-full object-cover transform hover:scale-105' src="https://images.pexels.com/photos/4350767/pexels-photo-4350767.jpeg?auto=compress&cs=tinysrgb&w=800" alt="post image" loading='lazy' /></Link>
          </div>
          <div className='flex-auto p-2'>
              <div className='flex flex-col gap-2 h-full items-start justify-between'>
                <div className='flex flex-col gap-2'>
                  <div className='flex items-center gap-1 text-gray-500 text-xs'>
                      <img className='w-12' src="https://avatars.githubusercontent.com/u/68012668?v=4" alt="" />
                      <p>by <span className='font-bold text-gray-900'>Ameer</span></p>-
                      <p>5 min read</p>
               </div>
               <div className='flex flex-col gap-2'>
                  <h2 className='font-bold text-justify text-slate-900'>Lorem ipsum, dolor sit amet consectetur adipisicing elit....</h2>
                  <p className='text-slate-700 text-xs sm:text-sm leading-4 '>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore doloribus, velit odit possimus corrupti veritatis nostrum, optio liberoVelit.....</p>
              </div>
              <div className='flex gap-2 flex-wrap'>
                <Button text='#javascript' textSize='[10px]'/>
              </div>
              </div>
              <div className='text-xs flex items-center text-gray-500 justify-between w-full'>
                <div className='flex items-center gap-1'>
                <span><MdDateRange/></span><p>Sep 3 2022</p>

                </div>
               
                <div className='flex items-center gap-2'>
                <p className='flex items-center gap-2'>
                <RiHeartLine />
                <span className='text-xs'>11</span>

                </p>
                <p className='flex items-center gap-2 '>
                <FaRegComments />
                <span className='text-xs'>50</span>
                </p>
            </div>
                </div>

              </div>
          </div>

      </div>

    </div>
  </div>
  )
}


const PostList = () => {
  let posts = [2,2,2,2,2,2,2]

  return (
    <>   
    <NavBar /> 
    <section className='container mx-auto flex my-10 relative'>
      <div className='flex-none w-72 my-4 '>
        <div className='ml-4'><H1 text='Categories'/></div>
        <Categories />
      </div>
      <div className='flex-auto min-h-screen border-x sm:px-8 my-4'>
          <H1 text='All Posts'/>
          <div>
          {posts.map((post) => (
        <PostListData />
          ))}

          

          </div>

      </div>
      <div className='flex-none flex flex-col w-72 sm:pl-4 my-4'>
       <H1 text='Updated Posts'/>

        {posts.map(post => (
           <LatestPosts />
        ))}
       

      </div>
      

      
      
    </section>
    <Footer />

    </>
  
  )
}

export default PostList
// renderSuccess={({data}) => (
//     <PostListData posts={data}/>)}