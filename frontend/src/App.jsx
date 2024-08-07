import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import EmployeeList from './components/EmployeeList';
import EmployeeForm from './components/EmployeeForm';
import Login from './components/Login';
import Register from './components/Register';
import Nav from './components/Nav';
import Footer from './components/Footer';


const App = () => {
  return (



    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/employees" element={<EmployeeList />} />
        <Route path="/employee/:id?" element={<EmployeeForm />} />
      </Routes>
      <Footer/>
    </Router>
  );
};

export default App;