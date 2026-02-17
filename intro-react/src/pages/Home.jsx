import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../UserContext'
import { getData } from '../api';

export default function Home() {
    const { user } = useContext(UserContext);
    const [data, setData] = useState([]);
    useEffect(() => {
        getDataLocal()
    }, [])

    async function getDataLocal() {
        const data = await getData(user.token);
        if(!data) return;
        setData(data);
    }

    return (
        <div>
            <h1>Home</h1>
            <main className='border h-[200px]'>
            {
                data.map(d=>(
                    <div>{d.title}</div>
                ))
            }
            </main>

            <footer>
                footer
            </footer>
        </div>
    )
}
