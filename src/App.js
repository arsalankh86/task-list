import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Login from './components/Login';
import './App.css'; 
import TaskList from './components/TaskList';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const logOut = () => {
    setIsLoggedIn(false);
  };

  return (
    <Router>
      <div className="App">
        <h1>TaskApp </h1> {isLoggedIn ? ( <span onClick={logOut}>Logout</span>): (<span></span>)}
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<p>Welcome to the TaskApp</p>} />
          <Route path="/login" element={
            isLoggedIn ? (
              <TaskList />
            ) : (
              <Login onLogin={handleLogin} />
            )
          } />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
