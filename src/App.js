import logo from "./logo.svg";
import "./App.css";

import { Route, Routes, Link } from "react-router-dom";

import ListView from "./Components/pages/ListView";
import Home from "./Components/pages/Home";

function App() {
  return (
    <div className="app-container">
      {/* Linke Navigation */}
      <nav className="navbar">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>

      {/* Rechter Bereich */}
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/listview" element={<ListView />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
