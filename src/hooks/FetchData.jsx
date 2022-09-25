import React, {useState, useEffect} from 'react'

const useFetch = (uri) => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);


    useEffect(() => { 
        if (!uri) return; 
        fetch(uri)
        .then(data => data.json())
        .then(setData, setLoading(false))
        .catch(setError);
    }, [uri]);

    return { loading, data,error };
 }
  


const FetchData = ({ url, 
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

export default FetchData;