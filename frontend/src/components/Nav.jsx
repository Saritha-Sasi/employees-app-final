
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';


const Nav = () => {
  const auth = localStorage.getItem('user');
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    navigate('/register')
  }


  return (
    <nav>
      <ul className='nav-ul'>
        <img src='https://www.logodee.com/wp-content/uploads/2019/09/Creative-vector-logos-design-for-your-Association-TeamWork-Business.jpg'
        alt="logo" className='logo'></img>
        {
          auth ?
            <>
              <li><Link to="/employees">EmployeeList</Link></li>
              <li><Link to="/employee">Add Employee</Link></li>
              <li><Link to="/employee/:id">Update Employee</Link></li>
              <li><Link onClick={logout} to="/">Logout</Link></li>
              <li><Link>Welcome {JSON.parse (auth).data.name}</Link></li>
            </>
            :
            <>
              <li><Link to="/">Signup</Link> </li>
              <li><Link to='/login'>Login</Link></li>
            </>
        }


      </ul>
    </nav>
  );
}

export default Nav
