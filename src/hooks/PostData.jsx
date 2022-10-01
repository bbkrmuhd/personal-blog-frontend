import React, {useState, useEffect} from 'react'
import { LocalStorageService } from '../services/LocalStorageService'



  export const usePost = async (url, formData) => {
    const [result, setResult] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    let token = LocalStorageService.loadJSON("access_token")
    console.log("token", token)

    useEffect(() => {
      if (!url && data) return;
      const response = async (url) =>{
        await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json;charset=utf-8',
            'Authorization': `Bearer ${token}`,
          },

          body: JSON.stringify(formData)
        
        })

        return await response.json()

      }
      

      setResult(response)
      setLoading(false)
      
      
    }, [url])
    console.log(error)
    return {result, loading, error};
  }


  


