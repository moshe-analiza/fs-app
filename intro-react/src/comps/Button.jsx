import React, { useContext } from 'react'

export default function Button({ type, text, handleClick }) {

    return (
        <button onClick={e => handleClick("Moshe")} className={(type === "Freind" && "text-green") || (type === "Teacher" && "text-blue") || (type === "Student" && "text-purple") && " outline-amber-200"}>
            {text}
        </button>
    )
}
