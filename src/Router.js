import React from "react";
import { Routes, Route } from "react-router";

import Home from "./components/Home";
import About from "./components/About";
import Car from "./components/Car";

const Router = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        {/* <Route path="/car" element={<Car />}></Route> */}
        <Route path="/car/:id" element={<Car />}></Route>
      </Routes>
    </div>
  );
};

export default Router;
