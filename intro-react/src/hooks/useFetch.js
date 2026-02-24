import { useEffect, useState } from "react";

function useFetch(url, options = {}) {
    const [data, setData] = useState();
    useEffect(() => {
        fetch(url, options)
            .then(res => res.json())
            .then(json => setData(json))
            .catch(console.error)
    }, [url])
    return { data };
}

export {
    useFetch
}