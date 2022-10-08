import React from 'react'
import { Outlet } from 'react-router-dom'
import { LatestPosts, Categories, NavBar, Footer, H1 } from '../components'

const Layout = () => {
  return (
    <>   
    <NavBar /> 
    <section className='container mx-auto sm:flex my-10 px-4 relative'>
      <div className='hidden flex-none md:block w-[22%] lg:px-4 my-4'>
        <div className='w-full sticky'>
        <div className=''><H1 text='Categories'/></div>
        <Categories />
        </div>
      </div>

      <Outlet/>
      
      <div className='hidden flex-none lg:flex flex-col w-[25%] sm:px-4 my-4'>
        <H1 text='Latest Posts'/>
           <LatestPosts />
      </div>
    </section>
    <Footer /> 
    </>
  )
}

export default Layout