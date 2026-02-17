import { useEffect, useState } from "react"
import { Route, Routes, useLocation, useNavigate } from "react-router";
import Home from "./pages/Home";
import About from "./pages/About";
import Header from "./comps/Header";
import Login from "./pages/Login";

import { UserContext } from "./UserContext.js";

export default function App() {
  const [user, setUser] = useState();

  useEffect(() => {
    if (user)
      console.log(user)
  }, [user])
  const value = {
    user,
    setUser
  }
  return (
    <UserContext.Provider value={value}>
      <Header />
      <Routes>
        <Route path="login" element={<Login />} />
        {
          user && <Route path="/" element={<Home />} />
        }
      </Routes>
    </UserContext.Provider>
  )

}
