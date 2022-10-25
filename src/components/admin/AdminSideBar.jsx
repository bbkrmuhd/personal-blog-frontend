import React from 'react'
import {BiCategory} from 'react-icons/bi'
import { Link, NavLink } from 'react-router-dom'
import {MdOutlineArticle} from 'react-icons/md'
import { FaRegComment } from 'react-icons/fa'

const AdminSideBar = () => {
    let p  =  [1]
    const activeLink = 'w-full px-4 py-2 my-2 sm:text-xl rounded-xl flex items-center gap-2 lg:gap-4 bg-gray-200 text-cyan-700 shadow-inner'
    const normalLink = 'w-full px-4 py-2 my-2 sm:text-xl rounded-xl flex items-center gap-2 lg:gap-4 hover:bg-gray-200 text-gray-900 hover:text-cyan-700 backdrop-hue-rotate-0'
  return (
    <div className='flex-none sm:flex flex-col items-center px-1 sm:px-6  w-14 md:w-56 lg:w-72 border-r md:overflow-hidden overflow-auto md:hover:overflow-auto my-5'>
        {p.map(pp => (
        <NavLink key={pp} to='posts' onClick={() => {}}  className={({ isActive}) => isActive ? activeLink : normalLink}>
                 <MdOutlineArticle/>
                <p className='hidden sm:block'>Articles</p>
         </NavLink>

        ))}
        <NavLink to='category' onClick={() => {}}  className={({ isActive}) => isActive ? activeLink : normalLink}>
          
          <BiCategory />
        <p className='hidden sm:block'>Category</p>
      </NavLink>
          <NavLink to='comments' onClick={() => {}}  className={({ isActive}) => isActive ? activeLink : normalLink}>
          
          <FaRegComment />
        <p className='hidden sm:block'>Comments</p>
      </NavLink>
      <NavLink to='tags' onClick={() => {}}  className={({ isActive}) => isActive ? activeLink : normalLink}>
          
          <MdOutlineArticle/>
        <p className='hidden sm:block'>Tags</p>
      </NavLink>
    </div>
  )
}

export default AdminSideBar