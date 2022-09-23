import React, {useState, } from 'react'
import { PostData } from '../hooks/PostData'
import { LocalStorageService } from '../services/LocalStorageService'



function LoginPage() {
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [loading, setLoading] = useState(false)


  // const navigate = useNavigate()


  const handleLogin = (e) => {
      e.preventDefault()
      const login = {email, password}
      setLoading(true)
      // const {loading, result, error } = PostData("http://127.0.0.1:5000/api/v1/blog/login", login)
      fetch("http://127.0.0.1:5000/api/v1/blog/login", {
             method: 'POST',
             headers: {"Content-Type": "application/json"},
             body: JSON.stringify(login)
            }).then((result) => result.json()
            ).then((data) => {
              LocalStorageService.saveJSON("access_token", data.access_token)
              setLoading(false)
              // navigate(/)
              console.log("login successful")
            })
      setEmail("")
      setPassword("")
  }

  return (  
    <div className=''>
      <div>
      <h2 className='text-3xl'>LOGIN</h2>
        <h3 className='text-lg text-gray-500'>AND CONTINUE</h3>

          <form className='my-12' onSubmit={handleLogin}>
            <div className='flex flex-col space-y-2'>  
                <label className='' htmlFor="email">EMAIL:</label>
                <input className='p-2 border-2 rounded-md border-cyan-500' type="email" value={email} onChange ={(e) => setEmail(e.target.value)} />
            </div>
            <div className='flex flex-col space-y-2'>  
                <label className='' htmlFor="password">PASSWORD:</label>
                <input className='p-2 border-2 rounded-md border-cyan-500' type="password"  value={password} onChange = {(e) => setPassword(e.target.value)}/>
            </div>
            {!loading &&  <button className='py-2 px-4 sm:px-6 my-5 bg-cyan-500 text-white rounded-md' type='submit' >Login</button>}
            {loading && <button className='py-2 px-4 sm:px-6 my-5 bg-cyan-500 text-white rounded-md' type='submit' disabled >Login...</button>}
         
        </form>

      </div>
        
    </div>
  ) 
}

export default LoginPage;