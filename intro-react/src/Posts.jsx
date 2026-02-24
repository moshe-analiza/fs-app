import React, { useEffect, useState } from 'react'
import { useFetch } from './hooks/useAuth'
import { useSearch } from './hooks/useSearch';

export default function Posts() {
    const { data } = useFetch("https://jsonplaceholder.typicode.com/posts");
    const [filteredData, setFilteredData] = useState([]);
    const { setSearch } = useSearch(setFilteredData, data);
    useEffect(() => {
        setFilteredData(data);
    }, [data])

    if (!data) return <>Loading...</>
    return (
        <div>
            <input onChange={e => setSearch(e.target.value)} type="text" />
            {filteredData?.slice(0, 50).map(todo => <div>
                {todo.title}
            </div>)
            }
        </div>
    )
}
