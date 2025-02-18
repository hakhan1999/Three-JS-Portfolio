import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { Home, About, Projects } from "./pages";

const App = () => {
  return (
    <main className="bg=-slate-300/20">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </Router>
    </main>
  );
};

export default App;
