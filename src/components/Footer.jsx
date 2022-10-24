import { Tooltip } from 'flowbite-react'
import React from 'react'
import {AiOutlineLinkedin, AiOutlineTwitter, AiOutlineGithub} from 'react-icons/ai'




const Subscribe = () => {
  return (
    <div className='p-2 sm:p-6 my-2 sm:my-4 flex flex-col sm:flex-row items-center gap-2 sm:gap-0 justify-between drop-shadow-sm'>
        <div className='w-full sm:w-3/6'>
            <h1 className='text-slate-700 tracking-wide sm:text-3xl '>Subscribe to my news latter to get latest updates and news</h1>
        </div>
        <div>
        <form className='sm:flex sm:gap-2' action="">
            <input className='border rounded-lg px-6 text-gray-800 bg-gray-100 border-gray-500 focus:border-cyan-500 focus:ring-cyan-500' placeholder='Enter Your Email' type="email" />
            <label htmlFor=""></label>
            <button className='my-2 sm:my-0 py-1 px-2 sm:py-2  bg-cyan-700 text-white sm:px-6 hover:bg-cyan-900 transition-all rounded-lg'>Subscribe</button>
        </form>
        </div>
    </div>
  )
}

const Footer = () => {
  return (
<section className='mx-4'>
<footer className="container mx-auto">
    <div className='p-4 bg-white border-t border-cyan-700 rounded-lg shadow-md my-4 flex flex-col md:p-6 dark:bg-gray-800'>
    <div className=' flex items-center justify-between mx-2 sm:mx-6 '>
    <a href='/' className='sm:text-2xl text-cyan-700'>SadiqBlogs</a>
    <ul className='flex items-center justify-center space-x-4'>
    <Tooltip content="Twitter" >      <a href="https://twitter.com/sadiqcodes" target="_blank"> <li className='text-3xl text-gray-500 hover:text-cyan-700 transition-all '><AiOutlineTwitter/></li></a></Tooltip>
    <Tooltip content="LinkedIn" >       <a href="https://www.linkedin.com/in/abubakar-muhammad-sadiq/" target="_blank"> <li className='text-3xl text-gray-500 hover:text-cyan-700'><AiOutlineLinkedin/></li></a></Tooltip>
    <Tooltip content="Github" >       <a href="https://github.com/bbkrmuhd" target="_blank">   <li className='text-3xl text-gray-500 hover:text-cyan-700'><AiOutlineGithub/></li></a></Tooltip>
   
    </ul>
    </div>

    <Subscribe />
    <div className='flex flex-col sm:flex-row items-center justify-between sm:mx-6'>
    <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2022 <a href="" className="hover:underline">SadiqCodes™</a>. All Rights Reserved.
    </span>
    <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-500 hover:text-cyan-700 dark:text-gray-400 sm:mt-0">
        <li>
            <a href="/about" className="mr-4 hover:underline md:mr-6 ">About</a>
        </li>
        <li>
            <a href="/privacy" className="mr-4 hover:underline md:mr-6">Privacy Policy</a>
        </li>
        <li>
            <a href="/license" className="mr-4 hover:underline md:mr-6">Licensing</a>
        </li>
        <li>
            <a href="/contact" className="hover:underline">Contact</a>
        </li>
    </ul>
 
           
        
    </div>
    </div>
    
</footer>
</section>


  )
}

export default Footer