import { Tooltip } from 'flowbite-react'
import {AiOutlineLinkedin, AiOutlineTwitter, AiOutlineGithub, AiOutlineSearch} from 'react-icons/ai'
import {MdDarkMode} from 'react-icons/md'
import {BsSunFill} from 'react-icons/bs'
import {HiSun} from 'react-icons/hi'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className='container mx-auto border-b px-4'>
        <div className='flex flex-col w-full gap-2 sm:flex-row items-center justify-between py-4 static top-0'>
        <div className='flex items-center space-x-4 bg-gray-50 rounded-lg border sm:border-0 sm:bg-white w-full justify-between sm:justify-start'>
            <Link to='/'><div className='text-2xl text-cyan-700'>SC</div></Link> 
                <form>   
            <label htmlFor="default-search" className="text-sm font-medium text-gray-900 sr-only dark:text-gray-300">Search</label>
         <div className="relative">
                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                    <span className='w-3 h-3 text-gray-500 dark:text-gray-400'><AiOutlineSearch/></span>
            </div>
            <input type="search" id="default-search" className="block p-2 px-7  w-full text-xs text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-cyan-500 focus:border-cyan-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-cyan-500 dark:focus:border-cyan-500" placeholder="Search blog" required/>
            <button type="submit" className="text-white absolute  right-1 bottom-1 bg-cyan-700 hover:bg-cyan-800 focus:ring-1 focus:outline-none focus:ring-cyan-300 font-medium rounded-md text-xs px-2 pt-1 pb-1.5 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800">Search</button>
            </div>
            </form>
            </div>
            
                <ul className='flex bg-gray-50 rounded-lg border sm:border-0 items-center justify-around sm:justify-center sm:space-x-4 sm:p-0 sm:m-0 sm:bg-white w-full sm:w-auto'>
                    <li>
                        <label htmlFor="small-toggle" className="inline-flex relative items-center cursor-pointer mt-2">
                        <input type="checkbox" value="" id="small-toggle" className="sr-only peer"/>
                        <span className='text-md absolute left-0 text-gray-100'><HiSun/></span>

                        <div className="w-9 h-5 bg-gray-200 ring-2 ring-gray-300 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-cyan-700 dark:peer-focus:ring-cyan-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:z-10 after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-gray-500"></div>
                        <span className='text-lg absolute right-0 text-gray-500'><MdDarkMode/></span>
                        </label>
                         
                    </li>
                    <Tooltip content="Twitter" > <li className='text-3xl text-gray-500 hover:text-cyan-700 transition-all '><AiOutlineTwitter/></li></Tooltip>
                    <Tooltip content="Linkedin" > <li className='text-3xl text-gray-500 hover:text-cyan-700'><AiOutlineLinkedin/></li></Tooltip>
                    <Tooltip content="Github" > <li className='text-3xl text-gray-500 hover:text-cyan-700'><AiOutlineGithub/></li></Tooltip>
                    <li></li>
                </ul>
        </div>

    </div>
  )
}

export default NavBar