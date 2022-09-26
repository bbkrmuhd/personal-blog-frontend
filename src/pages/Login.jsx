import React, {useState, } from 'react'
import { PostData } from '../hooks/PostData'
import { LocalStorageService } from '../services/LocalStorageService'
import {useNavigate} from 'react-router-dom'



function LoginPage() {
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [loading, setLoading] = useState(false)


  const navigate = useNavigate()


  const handleLogin = (e) => {
      e.preventDefault()
      const login = {email, password}
      setLoading(true)
      fetch("http://127.0.0.1:5000/api/v1/login", {
             method: 'POST',
             headers: {"Content-Type": "application/json"},
             body: JSON.stringify(login)
            }).then((result) => result.json()
            ).then((data) => {
              LocalStorageService.saveJSON("access_token", data.access_token)
              setLoading(false)
              navigate('/')
              console.log("login successfully")
            })
      setEmail("")
      setPassword("")
  }

  return (  
    <div className='container mx-auto h-screen '>
      <div className='bg-red-500'>
      <div className='max-w-2xl flex border rounded-xl absolute w-full left-1/2 right-1/2 translate-y-1/3 -translate-x-1/2 '>
        <div className='hidden sm:block w-2/5 bg-login-image bg-cover'>
        </div>
        <div className='w-full sm:w-3/5 p-3 sm:p-8 '>
        <h2 className='text-2xl sm:text-3xl'>LOGIN</h2>
        <h3 className='text-base sm:text-lg text-gray-500'>AND CONTINUE</h3>

          <form className='my-8 sm:my-12' onSubmit={handleLogin}>
            <div className='flex flex-col space-y-2 my-2'>  
                <label className='text-sm sm:text-base' htmlFor="email">EMAIL:</label>
                <input className='p-1 sm:p-2 border-2 rounded-md border-gray-300 bg-gray-50 text-gray-900 focus:border-cyan-500 outline-none peer-focus:outline-none focus:ring-cyan-300' type="email" value={email} onChange ={(e) => setEmail(e.target.value)} />
            </div>
            <div className='flex flex-col space-y-2 my-2'>  
                <label className='text-sm sm:text-base' htmlFor="password">PASSWORD:</label>
                <input className='p-1 sm:p-2 border-2 rounded-md border-gray-300 bg-gray-50 text-gray-900 focus:border-cyan-500 outline-none peer-focus:outline-none focus:ring-cyan-300' type="password"  value={password} onChange = {(e) => setPassword(e.target.value)}/>
            </div>
            {!loading &&  <button className='py-2 px-4 sm:px-6 my-5 bg-cyan-500 text-white rounded-md text-sm sm:text-base' type='submit' >Login</button>}
            {loading && <button className='py-2 px-4 sm:px-6 my-5 bg-cyan-500 text-white rounded-md text-sm sm:text-base' type='submit' disabled >Login...</button>}
         
        </form>

        </div>
    

      </div>

      </div>
      
        
    </div>
  ) 
}

export default LoginPage;