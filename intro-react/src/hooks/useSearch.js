import { useEffect, useState } from "react";

export function useSearch(setData, originalData) {
    const [search, setSearch] = useState("");
    useEffect(() => {
        setData(originalData?.filter(d => d.title.includes(search)))
    }, [search])
    
    return { setSearch }
}