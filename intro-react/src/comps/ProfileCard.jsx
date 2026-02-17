import React, { useContext, useState } from 'react'
import Button from './Button'
import { GlobalContext } from '../App';

export default function ProfileCard({ }) {
    const { username, setUsername } = useContext(GlobalContext);

    return (
        <div className='shadow-2x rounded-2xl mt-5 border w-[90vw] sm:w-[60vw] h-[80vh] flex flex-col items-center gap-5 p-3'>
            <img className='rounded-full h-[15vh] w-[15vh]' src="./WhatsApp Image 2026-02-10 at 12.40.26.jpeg" alt="" srcset="" />
            <div className='text-gray-500 text-center'>
                I'm Full Stack Development Lecturer at Kodkod training
            </div>
            <input onChange={e => setUsername(e.target.value)} className='border' type="text" />
            <Button handleClick={setUsername} text={"click"} type={"Teacher"} />
            <div className='font-bold cursor-pointer'>{username}</div>
        </div>
    )
}
