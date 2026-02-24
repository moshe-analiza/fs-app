import { useState } from "react"


import { UserContext } from "./UserContext.js";
import Todos from "./Todos.jsx";
import Posts from "./Posts.jsx";
import { useDispatch, useSelector } from "react-redux";
import { dec, inc } from "./store/counterSlice.js";
import Momo from "./Momo.jsx";
import ClickDec from "./ClickDec.jsx";
import ClickInc from "./ClickInc.jsx";
import Nunu from "./Nunu.jsx";

export default function App() {
  const [user, setUser] = useState();

  const value = {
    user,
    setUser
  }

  return (
    <UserContext.Provider value={value}>
      <ClickInc />
      <Momo />
      <ClickDec />
      <Nunu />
    </UserContext.Provider>
  )

}
