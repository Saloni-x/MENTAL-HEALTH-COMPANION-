import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// Pages import karenge
import Home from "./pages/Home";
import Chat from "./pages/Chat";
import MoodTracker from "./pages/MoodTracker";
import About from "./pages/About";

function App() {
  return (
    <Router>
      {/* Navbar */}
      <nav style={{ padding: "10px", background: "#6a0dad", color: "white" }}>
        <Link to="/" style={{ margin: "10px", color: "white", textDecoration: "none" }}>Home</Link>
        <Link to="/chat" style={{ margin: "10px", color: "white", textDecoration: "none" }}>Chat</Link>
        <Link to="/mood" style={{ margin: "10px", color: "white", textDecoration: "none" }}>Mood Tracker</Link>
        <Link to="/about" style={{ margin: "10px", color: "white", textDecoration: "none" }}>About</Link>
      </nav>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/mood" element={<MoodTracker />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;