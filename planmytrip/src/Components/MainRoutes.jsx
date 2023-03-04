import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home/Home";
import Login from "./Page/Login";
import { SignUp } from "./Page/SignUp";
import { UserAuthContextProvider } from "./Context/UserAuthContext";
import Hotels from "./Hotels/Hotels";
import { Delhi } from "./Cities/Delhi";
import SinglePage from "../Pages/SinglePage";
import Checkout from "../Pages/Checkout";
const MainRoutes = () => {
  return (
    <div>
      <UserAuthContextProvider>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/hotels" element={<Hotels />} />
          <Route path="/delhi" element={<Delhi />} />
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/delhi/:id" element={<SinglePage />}></Route>
          <Route path="/checkout" element={<Checkout />}></Route>
        </Routes>
      </UserAuthContextProvider>
    </div>
  );
};

export default MainRoutes;
