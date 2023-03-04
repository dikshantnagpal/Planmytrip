import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home/Home";
import Login from "./Page/Login";
import { SignUp } from "./Page/SignUp";
import { UserAuthContextProvider } from "./Context/UserAuthContext";
import Hotels from "./Hotels/Hotels";
import { Delhi } from "./Cities/Delhi";
import SinglePage from "../Pages/SinglePage";
import { Goa } from "./Cities/Goa";
import { Mumbai } from "./Cities/Mumbai";
const MainRoutes = () => {
  return (
    <div>
      <UserAuthContextProvider>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/hotels" element={<Hotels />} />
          <Route path="/delhi" element={<Delhi />} />
          <Route path="/goa" element={<Goa />} />
          <Route path="/mumbai" element={<Mumbai />} />
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/delhi/:id" element={<SinglePage />}></Route>
        </Routes>
      </UserAuthContextProvider>
    </div>
  );
};

export default MainRoutes;
