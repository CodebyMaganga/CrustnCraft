import React from "react";
import { Route, Routes } from "react-router-dom";
import GetRestaurant from "./components/GetRestaurant";
import Home from "./Home";
import Menu from "./Menu";
import Admin from "./Admin";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/restaurants/:id" element={<GetRestaurant />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </>
  );
};

export default App;
