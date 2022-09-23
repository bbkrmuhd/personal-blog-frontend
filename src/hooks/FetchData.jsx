import React, {useState, useEffect} from 'react'


function useFetch(url){
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState(null)
    const [error, setError] = useState(null)


    const unMount = new AbortController()


    useEffect(() => {
        if (!url) return;
        
        setTimeout(() => {
         fetch(url, {signal: unMount.signal})
            .then((data) => data.json)
            .then(setData(data), setLoading(false))
            .catch((error) => {
                if (error.name === "AbortError") {
                    console.log("fetch aborted");
                } else {
                    setLoading(false)
                    setError(error.message)
                }
          
            })
        }, 1000)
        return () => unMount.abort();

    }, [url, unMount])
    return {loading, data, error};
}
  


function FetchData({ uri, 
    loadingFallback = <h1>Loading...</h1>, 
    renderSuccess,
    renderError = error => {
        <pre>{JSON.stringify(error, null, 2)}</pre>
    }}) {

        const {loading, data, error } = useFetch(uri)
        if (loading) return loadingFallback;
        if (data) return renderSuccess({ data });
        if (error) return renderError;

}

export default FetchData;