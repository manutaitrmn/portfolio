import { HashRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import Home from "pages/Home";

import './App.scss';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  )
}

export default App;
