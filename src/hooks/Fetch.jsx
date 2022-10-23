import React, {useState, useEffect} from 'react'
import {ClipLoader} from 'react-spinners'
import { baseUrl } from '../components/baseUrl'



const useFetch = ( uri ) => {
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState(null)
    const [error, setError] = useState(null)

    useEffect(() => {
        setTimeout(() => {
            fetch(baseUrl + uri)
            .then((res) => {
                if(!res.ok){
                   throw Error("Could not fetch data")
                }
                return res.json()})
            .then(setData, setLoading(false))
            .catch((error) => {
                    setLoading(false)
                    setError(error.message)
            })
        }, 500)
       

    }, [uri])
    return { data, loading, error};
}


const Fetch = ({ url, 
    loadingFallback = <ClipLoader/>, 
    renderSuccess,
    renderError = error => {
        <pre>{JSON.stringify(error, null, 2)}</pre>
    }}) => {

        const {loading, data , error } = useFetch(url)
        if (loading) return loadingFallback;
        if (data) return renderSuccess({ data });
        if (error) return renderError;

}

export default Fetch;