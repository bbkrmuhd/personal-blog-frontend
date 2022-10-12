import React from 'react'
import { Link } from 'react-router-dom'
import { DataTable } from '../../components'

const AdminPosts = () => {

  const onSubmit = (e) => {
    e.preventDefault()
}
  return (
    <div className='m-5 sm:mx-10'>
      <div className='flex items-center justify-between '>
    
        <form onSubmit={onSubmit} className="flex items-center rounded-lg shadow-md bg-gray-100 h-18">
        <input className='py-2 text-gray-700 shadow-sm rounded-lg focus:border-cyan-500 focus:outline-none focus:ring-cyan-500' type="search" />
          <button className="py-2 px-4 text-gray-700 hover:text-cyan-700 font-semibold border-none" type="submit" value="search">Search</button>
          </form>
        
       

        <div>
         <Link to='write'><button className='py-2 px-6 text-gray-700 bg-gray-100 rounded-lg shadow-md hover:bg-gray-200 hover:text-cyan-700'>Write</button></Link> 
        </div>

      </div>

      {/* DataTable */}

      <DataTable/>
     

    </div>
  )
}

export default AdminPosts