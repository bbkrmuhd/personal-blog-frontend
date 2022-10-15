import React from 'react'
import { AiFillMedicineBox } from 'react-icons/ai'
import { Link, NavLink } from 'react-router-dom'
import {MdOutlineArticle} from 'react-icons/md'
import { FaRegComment } from 'react-icons/fa'

const AdminSideBar = () => {
    let p  =  [1]
    const activeLink = 'w-full px-4 py-2 my-2 sm:text-xl rounded-xl flex items-center gap-2 lg:gap-4 bg-gray-200 text-cyan-700 shadow-inner'
    const normalLink = 'w-full px-4 py-2 my-2 sm:text-xl rounded-xl flex items-center gap-2 lg:gap-4 hover:bg-gray-200 text-gray-900 hover:text-cyan-700 backdrop-hue-rotate-0'
  return (
    <div className='hidden sm:flex flex-col items-center px-4 sm:px-6  w-44 md:w-56 lg:w-72 border-r md:overflow-hidden overflow-auto md:hover:overflow-auto my-5'>
        {p.map(pp => (
        <NavLink key={pp} to='posts' onClick={() => {}}  className={({ isActive}) => isActive ? activeLink : normalLink}>
                 <MdOutlineArticle/>
                <p className=''>Articles</p>
         </NavLink>

        ))}
          <NavLink to='comments' onClick={() => {}}  className={({ isActive}) => isActive ? activeLink : normalLink}>
          
          <FaRegComment />
        <p className=''>Comments</p>
      </NavLink>
      <NavLink to='tags' onClick={() => {}}  className={({ isActive}) => isActive ? activeLink : normalLink}>
          
          <MdOutlineArticle/>
        <p className=''>Tags</p>
      </NavLink>
    </div>
  )
}

export default AdminSideBar