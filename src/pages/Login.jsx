import React, {useState, useEffect, useRef } from 'react'
import { useStateContext } from '../contexts/ContextProvider'




function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)
 


  const inputFocus = useRef(null)
  const {login} = useStateContext()


  useEffect(() => {
    inputFocus.current.focus()
  }, [])


  const handleLogin = async (e) => {
      e.preventDefault()
      if (!email && !password) return;
      const loginInputs = {email, password}
      setLoading(true)
      try {
        await login(loginInputs)
        setLoading(false)
        

      } catch (error) {
        console.log(error)
      }
      setEmail("")
      setPassword("")
  }


  return (  
    <div className='container mx-auto h-screen '>
      <div className='px-4 sm:px-0 mt-[40%] sm:mt-0'>
      <div className='max-w-2xl flex flex-col sm:flex-row  border dark:border-gray-700 rounded-xl sm:absolute w-full sm:left-1/2 sm:right-1/2 sm:translate-y-1/3 sm:-translate-x-1/2 '>
        <div className='h-44 sm:h-auto sm:w-2/5 bg-login-image bg-cover'>
        </div>
        <div className='sm:w-3/5 p-3 sm:p-8 '>
        <h2 className='text-2xl sm:text-3xl dark:text-cyan-600'>LOGIN</h2>
        <h3 className='text-base sm:text-lg text-gray-500 dark:text-gray-300'>TO CONTINUE</h3>

          <form className='my-8 sm:my-12' onSubmit={handleLogin}>
            <div className='flex flex-col space-y-2 my-2'>  
                <label className='text-sm sm:text-base dark:text-gray-300' htmlFor="email">EMAIL:</label>
                <input ref={inputFocus} className='p-1 sm:p-2 border-2 rounded-md border-gray-300 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white focus:border-cyan-500 outline-none peer-focus:outline-none focus:ring-cyan-300' type="email" value={email} onChange ={(e) => setEmail(e.target.value)} />
            </div>
            <div className='flex flex-col space-y-2 my-2'>  
                <label className='text-sm sm:text-base dark:text-gray-300' htmlFor="password">PASSWORD:</label>
                <input className='p-1 sm:p-2 border-2 rounded-md border-gray-300 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white focus:border-cyan-500 outline-none peer-focus:outline-none focus:ring-cyan-300' type="password"  value={password} onChange = {(e) => setPassword(e.target.value)}/>
            </div>
            {/* {error &&   <pre>{JSON.stringify(error, null, 2)}</pre>} */}
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