import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes, Outlet } from 'react-router-dom';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import TaskList from './components/Dashboard/TaskList';
import AddTask from './components/Dashboard/AddTask';
import EditTask from './components/Dashboard/EditTask';

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
};

const Dashboard = () => {
  return (
    <div>
      <h2>Dashboard</h2>
      <Outlet />
    </div>
  );
};

export default App;
