import React from 'react'
import { Link } from 'react-router-dom'

const AdminPosts = () => {
  return (
    <div>
      <div className='flex items-center justify-between'>
        <div>
         <input className='py-1 text-gray-700 shadow-sm rounded-lg focus:border-cyan-500 focus:outline-none focus:ring-cyan-500' type="search" />
        </div>
        <div>
         <Link to='write'><button className='py-2 px-6 text-gray-700 bg-gray-100 rounded-lg shadow-lg hover:bg-gray-200 hover:text-cyan-700'>Write</button></Link> 
        </div>

      </div>

    </div>
  )
}

export default AdminPosts