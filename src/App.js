import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Components/Home'
import Navbar from './Components/Navbar';
const App = () => {
  return (
    <Router>
        <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

          <Route
            path="*"
            element={
              <h1 className="text-4xl text-center font-extrabold">404</h1>
            }
          />
      
      </Routes>
    </Router>
  )
}

export default App