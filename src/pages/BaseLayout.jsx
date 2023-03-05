import React from 'react'
import { Outlet } from 'react-router-dom'
import {NavBar, Footer} from '../components'

const BaseLayout = () => {
  return (
    <>   
    <NavBar /> 
    <section className='container mx-auto sm:flex my-10 px-4 sm:px-0 relative min-h-[50vh]'>
      <Outlet/>
    </section>
    <Footer /> 
    </>
  )
}

export default BaseLayout