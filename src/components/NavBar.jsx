import { Tooltip } from 'flowbite-react'
import {AiOutlineLinkedin, AiOutlineTwitter, AiOutlineGithub, AiOutlineSearch } from 'react-icons/ai'
import {MdDarkMode} from 'react-icons/md'
import {HiSun} from 'react-icons/hi'
import { Link } from 'react-router-dom'
import { useEffect, useLayoutEffect, useState } from 'react'
import Categories from './Categories'
import H1 from './H1'
import {BsArrowBarRight, BsArrowBarLeft} from 'react-icons/bs'
import { useStateContext } from '../contexts/ContextProvider'

const NavBar = () => {
    const [checked, setChecked] = useState(false)
    const {active, setActive} = useStateContext()
   

    const activeNav = 'bg-white h-full w-full absolute left-0 z-10 transition duration-300 ease' 
    const unActiveNav = "transform -translate-x-full transition-all duration-75 absolute left-0"
    
    const  onClick  = () => {
        setActive(active => !active)
    }

    const setUnActive = () => {
        setActive(false)
    }


    useLayoutEffect(() => {
        if (localStorage.getItem('color-theme') === 'dark' 
        || (!('color-theme' in localStorage) 
        && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark');
            document.documentElement.setAttribute("data-color-mode", "dark")
            localStorage.setItem('color-theme', 'dark');
            setChecked(true)
        } else {
            document.documentElement.classList.remove('dark')
            localStorage.setItem('color-theme', 'light');
            document.documentElement.setAttribute("data-color-mode", "light")
            setChecked(false)
        }
    }, [])

    const onChange = () => {
                if (document.documentElement.classList.contains('dark')) {
                    document.documentElement.classList.remove('dark');
                    localStorage.setItem('color-theme', 'light');
                    document.documentElement.setAttribute("data-color-mode", "light")
                    setChecked(false)
                    
                } else {
                    document.documentElement.classList.add('dark');
                    localStorage.setItem('color-theme', 'dark');
                    document.documentElement.setAttribute("data-color-mode", "dark")
                    setChecked(true)
                  
                    }
    }

  return (
    <div className='container mx-auto border-b px-4 dark:border-b-gray-700'>
        <div className='flex flex-col w-full gap-2 sm:flex-row items-center justify-between py-4'>
        <div className='flex items-center space-x-4 bg-gray-50 w-full sm:w-auto dark:bg-gray-800 sm:dark:bg-gray-900 rounded-lg border sm:border-0 sm:bg-white justify-between sm:justify-start dark:border-gray-700 sticky'>
            <div className=' text-cyan-700 dark:text-cyan-500 flex items-center gap-1'>
            <span className='sm:hidden transition duration-75 eases text-2xl' onClick={onClick}>{active ? <BsArrowBarLeft/> : <BsArrowBarRight/>}</span>
            <Link to='/'><div className='sm:text-2xl font-bold'>Avid Pythonista</div></Link> 
            </div>

                <form>   
            <label htmlFor="default-search" className="text-sm font-medium text-gray-900 sr-only dark:text-gray-300">Search</label>
         <div className="relative">
                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                    <span className='w-3 h-3 text-gray-500 dark:text-gray-400'><AiOutlineSearch/></span>
            </div>
            <input type="search" id="default-search" disabled={true} className="block p-2 px-7  w-full text-xs text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-cyan-500 focus:border-cyan-500 dark:bg-gray-800 dark:border-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-cyan-500 dark:focus:border-cyan-500" placeholder="Search blog" required/>
            <button type="submit" className="text-white absolute  right-1 bottom-1 bg-cyan-700 hover:bg-cyan-800 focus:ring-1 focus:outline-none focus:ring-cyan-300 font-medium rounded-md text-xs px-2 pt-1 pb-1.5 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800 dark:text-gray-200">Search</button>
            </div>
            </form>
        </div>
                <ul className='flex bg-gray-50 rounded-lg border sm:border-0 items-center justify-around sm:justify-center pl-4 sm:gap-4 sm:p-0 sm:m-0 sm:bg-white w-full sm:w-auto dark:bg-gray-800 sm:dark:bg-gray-900 dark:border-gray-700'>
                    <li>
                        <label  htmlFor="small-toggle" className="inline-flex relative items-center cursor-pointer mt-2">
                        <input onClick={() => onChange()} defaultChecked={checked} type="checkbox" value="" id="small-toggle" className="sr-only peer"/>
                        <div className='text-md absolute left-0 text-gray-100'><HiSun/></div>

                        <div className="w-9 h-5 bg-gray-200 ring-2 ring-gray-300 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-cyan-700 dark:peer-focus:ring-cyan-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-gray-400 after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:z-10 after:bg-white after:border-gray-400 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-gray-500 dark:ring-cyan-700"></div>
                        <div className='text-lg absolute right-0 text-gray-500'><MdDarkMode/></div>
                        </label>
                         
                    </li>
                    <Tooltip content="Twitter" ><a href="https://twitter.com/sadiqcodes"  target="_blank" aria-label='Twitter'  > <li className='text-3xl text-gray-500 hover:text-cyan-700 transition-all dark:text-cyan-600 dark:hover:text-gray-400'><AiOutlineTwitter/></li></a></Tooltip>
                    <Tooltip content="LinkedIn" ><a href="https://www.linkedin.com/in/abubakar-muhammad-sadiq/" target="_blank" aria-label='LinkedIn'> <li className='text-3xl text-gray-500 hover:text-cyan-700 dark:text-cyan-600 dark:hover:text-gray-400'><AiOutlineLinkedin/></li></a></Tooltip>
                    <Tooltip content="Github" ><a href="https://github.com/bbkrmuhd" target="_blank" aria-label='GitHub'>   <li className='text-3xl text-gray-500 hover:text-cyan-700 dark:text-cyan-600 dark:hover:text-gray-400'><AiOutlineGithub/></li></a></Tooltip>
                
                    <li></li>
                </ul>
        </div>

        <div className={`dark:bg-gray-900 ${active ? activeNav : unActiveNav}`}>
            <div className='mx-4 h-1/2'>
                <div>
                <div className='px-2'>
                    <H1 text={"Categories"}/>
                </div>
                <Categories setUnActive={setUnActive}/>

                </div>
                <div className='my-4'>
                 <Link to='/login' onClick={setUnActive} ><button className='px-6 py-2 bg-cyan-600 text-white rounded-md hover:drop-shadow-md'>Login</button></Link>   
                </div>

            </div>

        </div>

    </div>
  )
}

export default NavBar