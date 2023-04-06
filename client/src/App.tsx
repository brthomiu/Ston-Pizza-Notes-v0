import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Page Style
import "./App.css";
// Page/Component imports
import Navigation from "./components/Navigation";
import Login from "./pages/Login";
import About from "./pages/About";
import Register from "./pages/Register";

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
