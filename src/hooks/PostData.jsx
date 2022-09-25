import React, {useState, useEffect} from 'react'
import { LocalStorageService } from '../services/LocalStorageService'



 export const PostData = (url, data) => {
  const [result, setResult] = useState()
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState()

  const token = LocalStorageService.loadJSON('access-token')

  const usePost = async (url, data) => {
    let response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        'Authorization': `Bearer ${token}`,
        "Access-Control-Allow-Origin": ''
      },
      body: JSON.stringify(data)
    
    })
    let result =  await response.json()
    console.log(result)
    setResult(result)
    setLoading(false)
    console.log(result)

  }


  useEffect(() => {
    if (!url && data) return;
    usePost(url, data).catch(setError)
  }, [url])
  console.log(error)
  return {result, loading, error};
}


