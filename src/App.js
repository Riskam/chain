import React, { useEffect, useRef, useState } from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";
import Register from "./components/Register";
import Login from "./components/Login";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/reg" exact element={<Register />} />
        <Route path="/log" exact element={<Login />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
