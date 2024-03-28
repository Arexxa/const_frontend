import React from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";
import NotFound from "./pages/Error/NotFound";
import Home from "./pages/Home";
import Login from "./pages/Auth/Login";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/home" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;