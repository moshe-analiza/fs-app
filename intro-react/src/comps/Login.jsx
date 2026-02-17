import React, { useEffect, useState } from 'react'

export default function Login({ handleClick, message }) {
    const [user, setUser] = useState({ username: "", pass: "" });
    const click = (e) => {
        e.preventDefault();
        setUser({ username: "", pass: "" })
        handleClick(user);
    }
    return (
        <div className='h-[30vh]'>
            <form className='border flex flex-col h-full justify-around items-center' action="">
                <input value={user.username} className='border-[.5px] rounded p-3' onChange={e => {
                    setUser({ ...user, username: e.target.value })
                }} type="text" />
                <input value={user.pass} className='border-[.5px] rounded p-3' onChange={e => {
                    setUser({ ...user, pass: e.target.value })
                }} type="password" />
                <div className={`${message?.type === "error" ? "text-red-700" : "text-green-500"}`}>{message?.msg}</div>
                <button onClick={click} className='border p-1 rounded cursor-pointer bg-amber-300'>Login</button>
            </form>
        </div>
    )
}
