import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import EmployeeList from './components/EmployeeList';
import EmployeeForm from './components/EmployeeForm';
import Login from './components/Login';
import { AuthProvider } from './context/AuthContext';
import Register from './components/Register';


const App = () => {
  return (
   
    <AuthProvider>
      <Router>
        <Routes>
        <Route path="/" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/employees" element={<EmployeeList />} />
          <Route path="/employee/:id?" element={<EmployeeForm />} />
        </Routes>
      </Router>
      </AuthProvider>
  );
};

export default App;