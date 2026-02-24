import { useEffect, useState } from 'react';
import { useFetch } from './hooks/useFetch'
import { useSearch } from './hooks/useSearch';

export default function Todos() {
    const [url, setUrl] = useState("https://jsonplaceholder.typicode.com/todos")
    const { data } = useFetch(url);
    const [filteredData, setFilteredData] = useState([]);
    const { setSearch } = useSearch(setFilteredData, data);
    
    useEffect(() => {
        setFilteredData(data);
        console.log({data})
    }, [data])

    if (!data) return <>Loading...</>
    return (
        <div>
            <input type="text" placeholder='url' onChange={e=> setUrl(e.target.value)} />
            <input onChange={e => setSearch(e.target.value)} type="text" />
            {filteredData?.slice(0, 50).map(todo => <div>
                {todo.title}
            </div>)
            }
        </div>
    )
}
