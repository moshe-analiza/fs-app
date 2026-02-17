import React, { useContext, useState } from 'react';
import LoginC from "../comps/Login";
import { login } from '../api.js';
import { UserContext } from '../UserContext.js';
import { useNavigate } from 'react-router';

export default function Login() {
    const { setUser } = useContext(UserContext);
    const navigate = useNavigate();
    const [message, setMessage] = useState();

    async function loginUser(user) {
        const currUser = await login(user.username, user.pass);
        if(!currUser) return setMessage({type: "error", msg: "not found user"})
        setUser(currUser);
        setMessage({type: "success", msg: "Success"});
        setTimeout(() => {
            setMessage();
            navigate("/");
        }, 1000);
    }


    return (
        <div>
            <LoginC message={message} handleClick={loginUser} />
        </div>
    )
}
