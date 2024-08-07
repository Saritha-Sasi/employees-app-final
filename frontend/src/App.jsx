import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import EmployeeList from './components/EmployeeList';
import EmployeeForm from './components/EmployeeForm';
import Login from './components/Login';
import Register from './components/Register';

const App = () => {
  return (
    
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Register />} />
          <Route path="/employees" element={<EmployeeList />} />
          <Route path="/employee/:id?" element={<EmployeeForm />} />
        </Routes>
      </Router>
  );
};

export default App;
