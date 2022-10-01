import React, {useState, useEffect} from 'react'



const useFetch = ( uri ) => {
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState(null)
    const [error, setError] = useState(null)

    useEffect(() => {
        setTimeout(() => {
            fetch("http://127.0.0.1:5000/api/v1/" + uri,)
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
        }, 0)
       

    }, [uri])
    return { data, loading, error};
}


const Fetch = ({ url, 
    loadingFallback = <h1>Loading...</h1>, 
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