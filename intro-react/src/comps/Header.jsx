import { useContext } from "react"
import { Link } from "react-router"
import { UserContext } from "../UserContext"

export default function Header() {
    const { user, setUser } = useContext(UserContext);

    return (
        <div className='w-full flex font-bold justify-around items-center h-[10vh] bg-[#d8d1d1]'>
            <Link to="/home">Home</Link>
            <Link to="/about">About</Link>
            {
                user?.username && <>
                    <div>{user.username}</div>
                    <button onClick={e=> setUser()}>logout</button>
                </>
            }

        </div>
    )
}
