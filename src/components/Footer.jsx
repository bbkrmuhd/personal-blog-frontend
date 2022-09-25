import React from 'react'
import {AiOutlineLinkedin, AiOutlineTwitter, AiOutlineGithub} from 'react-icons/ai'




const Subscribe = () => {
  return (
    <div className='p-8 my-2 sm:my-4 flex items-center justify-between drop-shadow-sm'>
        <div className='w-3/6'>
            <h1 className='text2xl text-slate-700 tracking-wide sm:text-3xl '>Subscribe to my news Later to get latest updates and news</h1>
        </div>
        <div>
        <form className='flex gap-2' action="">
            <input className='border rounded-lg sm:px-6 text-gray-800 bg-gray-100 border-gray-500 focus:border-cyan-500 focus:ring-cyan-500' placeholder='Enter Your Email' type="email" />
            <label htmlFor=""></label>
            <button className='px-4 py-2  bg-cyan-700 text-white sm:px-6 hover:bg-cyan-900 transition-all rounded-lg'>Subscribe</button>
        </form>

        </div>
       

    </div>
  )
}

const Footer = () => {
  return (
    
<footer className="container mx-auto p-4  bg-white border-t border-cyan-700 rounded-lg shadow-md my-4 flex flex-col sm:my-6  md:p-6 dark:bg-gray-800">
    <div className='md:flex md:items-center md:justify-between mx-2 sm:mx-6'>
    <div className='text-2xl text-cyan-700'>SadiqCodes</div>
    <ul className='flex items-center justify-center space-x-4'>
                    <li className='text-3xl text-gray-500 hover:text-cyan-700 transition-all '><AiOutlineTwitter/></li>
                    <li className='text-3xl text-gray-500 hover:text-cyan-700'><AiOutlineLinkedin/></li>
                    <li className='text-3xl text-gray-500 hover:text-cyan-700'><AiOutlineGithub/></li>
                    <li></li>
                </ul>
   
        
    </div>

    <Subscribe />
    <div className='md:flex md:items-center md:justify-between sm:mx-6'>
    <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2022 <a href="" className="hover:underline">SadiqCodes™</a>. All Rights Reserved.
    </span>
    <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-500 hover:text-cyan-700 dark:text-gray-400 sm:mt-0">
        <li>
            <a href="#" className="mr-4 hover:underline md:mr-6 ">About</a>
        </li>
        <li>
            <a href="#" className="mr-4 hover:underline md:mr-6">Privacy Policy</a>
        </li>
        <li>
            <a href="#" className="mr-4 hover:underline md:mr-6">Licensing</a>
        </li>
        <li>
            <a href="#" className="hover:underline">Contact</a>
        </li>
    </ul>
 
           
        
    </div>
</footer>

  )
}

export default Footer