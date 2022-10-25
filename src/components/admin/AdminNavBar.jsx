import React from 'react'
import { Link } from 'react-router-dom'

const AdminNavBar = () => {
  return (
    <div className='flex items-center justify-between py-4 sm:text-xl font-extrabold border-b px-4 sm:px-6 text-gray-700'>
      <Link to='/sirri'><div className=''>SC ADMIN</div></Link>
      <div className='flex items-center gap-2'>
        <div className='text-sm sm:text-md'>Welcome Ameer</div>
         <Link to='/'><button className='py-2 px-4 sm:px-6 bg-gray-100 rounded-lg shadow-md hover:bg-gray-200 hover:text-cyan-700'>Site</button></Link> 
        </div>
      

    </div>
  )
}

export default AdminNavBar