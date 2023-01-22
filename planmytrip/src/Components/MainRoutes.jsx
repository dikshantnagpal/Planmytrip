import React from 'react'
import {Routes,Route} from "react-router-dom"
import Home from "./Home/Home"
import Login from './Page/Login'
import { SignUp } from './Page/SignUp'
import { UserAuthContextProvider } from './Context/UserAuthContext'
import Hotels from './Hotels/Hotels'
import { Delhi } from './Cities/Delhi'
const MainRoutes = () => {
  return (
    <div>
      <UserAuthContextProvider>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/hotels" element={<Hotels/>}/>
          <Route path="/delhi" element={<Delhi/>} />
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
        </Routes>
      </UserAuthContextProvider>
        
    </div>
  )
}

export default MainRoutes