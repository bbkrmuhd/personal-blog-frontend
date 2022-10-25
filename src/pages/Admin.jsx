import React from 'react'
import { Outlet } from 'react-router-dom'
import { AdminNavBar, AdminSideBar } from '../components'
import Write from '../components/admin/Write'
import { useStateContext} from '../contexts/ContextProvider'

const Admin = () => {
  const { currentUser } = useStateContext()

  return (
    <>
      <div className='h-screen'>
      <AdminNavBar/>
      <div className='flex h-full'>
      <AdminSideBar/>
      <div className='my-10 w-full px-4'>
      <Outlet/>
      </div>
      </div>
    </div>
    
    </>
  )
}

export default Admin