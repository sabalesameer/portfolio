import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home.jsx";
// import Navbar from "./components/Navbar.jsx"

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black text-white overflow-x-hidden selection:text-blue-500 ">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
