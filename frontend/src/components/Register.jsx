import React, {useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';





const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('user');
  const { dispatch } = useContext(AuthContext);
  const navigate = useNavigate();


 
useEffect(()=>{
  const auth = localStorage.getItem('user');
  if(auth){
    navigate('/')
  }
},[]);


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('/api/auth/register', { name, email, password, role });
      dispatch({
        type: 'REGISTER_SUCCESS',
        payload: res.data,
      });
      localStorage.setItem("user", JSON.stringify(res));
      navigate('/employees');
    } catch (error) {
      console.error(error);
    }
  };

  return (

    <div className="container">
        <div className="row">
    <form onSubmit={handleSubmit}>
      <input
      className='input-box'
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
        required
      />
      <br/>
      <input
      className='input-box'
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        required
      />
      <br/>
      <input
      className='input-box'
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        required
      />
      <br/>
      <select className='input-box' value={role} onChange={(e) => setRole(e.target.value)}>
        <option value="user">User</option>
        {/* <option value="admin">Admin</option> */}
      </select>
      <button type="submit">Register</button>
    </form>
    </div>
    </div>
  );
};

export default Register;
