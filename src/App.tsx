import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';

// Main App component that sets up the router and routes
// This is the entry point for the application
// It will render the Home component at the root path and Register component at /signup
// Future routes like About, Login, Signup will be added here
const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/login" element={<Login />} />
        {/* Future routes like About, Login, Signup will be added here */}
      </Routes>
    </Router>
  );
};

export default App;
