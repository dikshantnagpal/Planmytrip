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
import { Goa } from "./Cities/Goa";
import { Mumbai } from "./Cities/Mumbai";
import Payment from "../Pages/Payment";

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
          <Route path="/goa/:id" element={<SinglePage />}></Route>
          <Route path="/mumbai/:id" element={<SinglePage />}></Route>
          <Route path="/checkout" element={<Checkout />}></Route>
          <Route path="/payment" element={<Payment />}></Route>
        </Routes>
      </UserAuthContextProvider>
    </div>
  );
};

export default MainRoutes;
