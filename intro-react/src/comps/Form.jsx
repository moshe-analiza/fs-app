import React, { useContext, useState } from 'react'
import { GlobalContext } from '../App';

export default function Form() {
    const [form, setForm] = useState({ username: "moshe" });
    const theme = useContext(GlobalContext);
    function changeForm(key, value) {
        let obj = { ...form };
        obj[key] = value;
        setForm(obj);
    }
    console.log(theme)
    function sendForm(e) {
        e.preventDefault();
        console.log(form.phone);
    }

    return (
        <div>
            <form className='p-5 border flex flex-col rounded-2xl h-[55vh] justify-around mt-5 items-center'>
                <input onChange={e => {
                    changeForm("username", e.target.value);
                }} className='p-2 border rounded w-[80%]' placeholder='username' type="text" />
                <input onChange={e => {
                    changeForm("phone", e.target.value);
                }} className='p-2 border rounded w-[80%]' placeholder='phone' type="text" />
                <input onChange={e => {
                    changeForm("address", e.target.value);
                }} className='p-2 border rounded w-[80%]' placeholder='address' type="text" />
                <input onChange={e => {

                }} className='p-2 border rounded w-[80%]' placeholder='password' type="password" />
                <button onClick={sendForm} className='border cursor-pointer rounded p-2 mt-3 bg-[#9b8484] hover:bg-[#7f7575]'>
                    Send
                </button>
            </form>
        </div>
    )
}
